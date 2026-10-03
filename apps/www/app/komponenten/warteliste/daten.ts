/**
 * Gemeinsame Angaben der Warteliste für Formular (Browser) und Action (Worker).
 * Keine Server-Abhängigkeiten, damit die Datei in beiden Umgebungen geladen werden kann.
 */

const NBSP = " ";

/** Wortlaut der Einwilligung; bei jeder Änderung die Fassung neu datieren. */
export const EINWILLIGUNG_TEXT =
  "workly darf mir zur Warteliste und zum Start der Beta E-Mails schicken. Ich kann das jederzeit widerrufen.";

/** Fassung des Einwilligungstexts, wird mit jedem Eintrag gespeichert (Spalte einwilligung_text). */
export const EINWILLIGUNG_FASSUNG = "2026-10-03";

export const ARBEITSSITUATIONEN = [
  {
    wert: "freelancer",
    titel: "Freelancer oder solo selbstständig",
    beschreibung: "Etwa in Beratung, Design, Entwicklung oder Text.",
  },
  {
    wert: "team",
    titel: "Gründungsteam oder kleines Team",
    beschreibung: `Der Team-Tarif kommt ab${NBSP}Q4${NBSP}2027.`,
  },
  {
    wert: "studium",
    titel: "Studium oder Ausbildung",
    beschreibung: `Geplant sind Free und für Studierende 50${NBSP}% Rabatt auf Privat.`,
  },
  { wert: "anderes", titel: "Etwas anderes", beschreibung: "" },
] as const;

export type Arbeitssituation = (typeof ARBEITSSITUATIONEN)[number]["wert"];

export function istArbeitssituation(wert: string): wert is Arbeitssituation {
  return ARBEITSSITUATIONEN.some((s) => s.wert === wert);
}

export const TARIF_OPTIONEN = [
  { wert: "offen", titel: "Noch offen" },
  { wert: "free", titel: "Free" },
  { wert: "privat", titel: "Privat" },
  { wert: "pro", titel: "Pro" },
  { wert: "team", titel: "Team (ab Q4 2027)" },
] as const;

export type TarifWahl = (typeof TARIF_OPTIONEN)[number]["wert"];

/** Liest ?tarif= bzw. das Formularfeld; Unbekanntes wird zu „Noch offen“. */
export function tarifAus(wert: string | null | undefined): TarifWahl {
  const klein = (wert ?? "").trim().toLowerCase();
  return TARIF_OPTIONEN.find((t) => t.wert === klein)?.wert ?? "offen";
}

/** Felder, die einen Fehler tragen können, in der Reihenfolge des Formulars. */
export const FEHLER_FELDER = ["email", "arbeitssituation", "alter", "einwilligung", "pruefung"] as const;
export type FehlerFeld = (typeof FEHLER_FELDER)[number];
export type Fehler = Partial<Record<FehlerFeld, string>>;

/** Eingaben, wie sie gesendet wurden; kommen bei Fehlern zurück ins Formular. */
export type Werte = {
  email: string;
  arbeitssituation: string;
  tarif: TarifWahl;
  gespraech: boolean;
  alter: boolean;
  einwilligung: boolean;
};

/** Antwort der Action. Für neue und vorhandene Adressen gleich. */
export type Antwort =
  | { status: "eingetragen"; email: string; gespraech: boolean }
  | { status: "fehler"; fehler: Fehler; werte: Werte }
  | { status: "nicht-erreichbar"; werte: Werte };
