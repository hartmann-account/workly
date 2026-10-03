import { env } from "cloudflare:workers";
import {
  EINWILLIGUNG_FASSUNG,
  istArbeitssituation,
  tarifAus,
  type Antwort,
  type Fehler,
  type Werte,
} from "~/komponenten/warteliste/daten";

// Secret für Turnstile, gesetzt mit `wrangler secret put TURNSTILE_SECRET_KEY`; fehlt in wrangler.jsonc absichtlich.
declare global {
  namespace Cloudflare {
    interface Env {
      TURNSTILE_SECRET_KEY?: string;
    }
  }
}

/** Gleiches Schema wie migrations/0001_warteliste.sql. Keine IP-Adresse, kein User-Agent. */
const TABELLE_SQL = `CREATE TABLE IF NOT EXISTS warteliste (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  arbeitssituation TEXT NOT NULL,
  tarif TEXT,
  gespraech INTEGER NOT NULL DEFAULT 0,
  einwilligung_text TEXT NOT NULL,
  einwilligung_am TEXT NOT NULL,
  angelegt_am TEXT NOT NULL,
  bestaetigt_am TEXT
)`;

/** Neue Adresse anlegen; vorhandene Adresse mit den neuen Angaben und der neuen Einwilligung aktualisieren. */
const EINTRAG_SQL = `INSERT INTO warteliste
  (id, email, arbeitssituation, tarif, gespraech, einwilligung_text, einwilligung_am, angelegt_am)
  VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?7)
  ON CONFLICT(email) DO UPDATE SET
    arbeitssituation = excluded.arbeitssituation,
    tarif = excluded.tarif,
    gespraech = excluded.gespraech,
    einwilligung_text = excluded.einwilligung_text,
    einwilligung_am = excluded.einwilligung_am`;

const TURNSTILE_PRUEFUNG = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Grobe Prüfung: etwas vor dem @, danach Name und Endung. Ob die Adresse existiert, zeigt erst eine Mail. */
const EMAIL_MUSTER = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

const FEHLERTEXTE = {
  emailLeer: "Gib deine E-Mail-Adresse ein.",
  emailFalsch: "Gib eine E-Mail-Adresse wie lena@hartmann-studio.de ein.",
  arbeitssituation: "Wähle deine Arbeitssituation.",
  alter: "Bestätige, dass du mindestens 16 Jahre alt bist.",
  einwilligung: "Stimm zu, dass workly dir E-Mails zur Warteliste schicken darf.",
  pruefung: "Warte, bis die Sicherheitsprüfung abgeschlossen ist, und sende das Formular noch einmal.",
};

let tabelleAngelegt = false;

/** Öffentlicher Turnstile-Schlüssel aus wrangler.jsonc; leer heißt: keine Prüfung. */
export function turnstileSchluessel(): string {
  const wert: string | undefined = env.TURNSTILE_SITE_KEY;
  return (wert ?? "").trim();
}

function text(formDaten: FormData, name: string): string {
  const wert = formDaten.get(name);
  return typeof wert === "string" ? wert : "";
}

function lese(formDaten: FormData): Werte {
  return {
    email: text(formDaten, "email").trim().slice(0, 320),
    arbeitssituation: text(formDaten, "arbeitssituation"),
    tarif: tarifAus(text(formDaten, "tarif")),
    gespraech: text(formDaten, "gespraech") === "ja",
    alter: text(formDaten, "alter") === "ja",
    einwilligung: text(formDaten, "einwilligung") === "ja",
  };
}

function pruefe(werte: Werte): Fehler {
  const fehler: Fehler = {};
  if (werte.email === "") fehler.email = FEHLERTEXTE.emailLeer;
  else if (werte.email.length > 254 || !EMAIL_MUSTER.test(werte.email)) fehler.email = FEHLERTEXTE.emailFalsch;
  if (!istArbeitssituation(werte.arbeitssituation)) fehler.arbeitssituation = FEHLERTEXTE.arbeitssituation;
  if (!werte.alter) fehler.alter = FEHLERTEXTE.alter;
  if (!werte.einwilligung) fehler.einwilligung = FEHLERTEXTE.einwilligung;
  return fehler;
}

async function pruefeTurnstile(token: string, geheim: string): Promise<boolean> {
  if (token === "") return false;
  const koerper = new FormData();
  koerper.append("secret", geheim);
  koerper.append("response", token);
  try {
    const antwort = await fetch(TURNSTILE_PRUEFUNG, { method: "POST", body: koerper });
    const ergebnis = (await antwort.json()) as { success?: boolean };
    return ergebnis.success === true;
  } catch (fehler) {
    console.error("Warteliste: Turnstile nicht erreichbar", fehler instanceof Error ? fehler.message : fehler);
    return false;
  }
}

async function speichere(werte: Werte): Promise<void> {
  const db = env.WARTELISTE;
  if (!tabelleAngelegt) {
    await db.prepare(TABELLE_SQL).run();
    tabelleAngelegt = true;
  }
  const jetzt = new Date().toISOString();
  await db
    .prepare(EINTRAG_SQL)
    .bind(
      crypto.randomUUID(),
      werte.email.toLowerCase(),
      werte.arbeitssituation,
      werte.tarif === "offen" ? null : werte.tarif,
      werte.gespraech ? 1 : 0,
      EINWILLIGUNG_FASSUNG,
      jetzt,
    )
    .run();
}

function eingetragen(werte: Werte): { status: number; antwort: Antwort } {
  return { status: 200, antwort: { status: "eingetragen", email: werte.email.toLowerCase(), gespraech: werte.gespraech } };
}

/**
 * Prüft und speichert einen Eintrag. Reihenfolge: Felder, Honigtopf, Turnstile, Datenbank.
 * Die Antwort verrät nicht, ob eine Adresse schon eingetragen war.
 */
export async function trageEin(formDaten: FormData): Promise<{ status: number; antwort: Antwort }> {
  const werte = lese(formDaten);

  const fehler = pruefe(werte);
  if (Object.keys(fehler).length > 0) return { status: 400, antwort: { status: "fehler", fehler, werte } };

  // Honigtopf: Menschen sehen das Feld nicht. Ist es gefüllt, antworten wir wie bei Erfolg und speichern nichts.
  if (text(formDaten, "webseite") !== "") return eingetragen(werte);

  if (turnstileSchluessel() !== "") {
    const geheim = (env.TURNSTILE_SECRET_KEY ?? "").trim();
    if (geheim === "") {
      console.error("Warteliste: TURNSTILE_SITE_KEY ist gesetzt, TURNSTILE_SECRET_KEY fehlt");
      return { status: 503, antwort: { status: "nicht-erreichbar", werte } };
    }
    if (!(await pruefeTurnstile(text(formDaten, "cf-turnstile-response"), geheim))) {
      return { status: 400, antwort: { status: "fehler", fehler: { pruefung: FEHLERTEXTE.pruefung }, werte } };
    }
  }

  try {
    await speichere(werte);
  } catch (fehler) {
    // Keine Adresse ins Protokoll, nur die Meldung der Datenbank.
    console.error("Warteliste: Speichern fehlgeschlagen", fehler instanceof Error ? fehler.message : fehler);
    tabelleAngelegt = false;
    return { status: 503, antwort: { status: "nicht-erreichbar", werte } };
  }

  return eingetragen(werte);
}
