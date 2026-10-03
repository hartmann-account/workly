import type { ReactNode } from "react";
import { SymbolGrafik } from "~/komponenten/SymbolGrafik";
import { STAND } from "~/lib/seite";

/*
 * Vergleichstabelle der vier Tarife nach dem Baustein „Tabelle“. Ab 901 px eine echte Tabelle mit caption und
 * scope, bis 900 px je Tarif eine Karte mit dl (zwei Spalten bis 641 px, darunter eine). Beide Darstellungen
 * entstehen aus denselben Daten; sichtbar ist immer nur eine, damit Bildschirmleser nichts doppelt hören.
 * Werte: Plattformkonzept, Abschnitte „Geschäftsmodell und Preise“ (Variante A) und „KI-Schicht mit Claude“
 * (Kontingente), Stufen nach „Produktmodule: MVP und Ausbaustufen“.
 */

const NBSP = " ";
const SHY = "­";
const AB_Q4 = "ab Q4 2027";

type Schluessel = "free" | "privat" | "pro" | "team";

type Wert =
  | { art: "fehlt" }
  | { art: "enthalten"; ab?: string }
  | { art: "text"; text: string }
  | { art: "preis"; betrag: string; zusatz?: string };

type Spalte = { schluessel: Schluessel; name: string; ab?: string };

const SPALTEN: Spalte[] = [
  { schluessel: "free", name: "Free" },
  { schluessel: "privat", name: "Privat" },
  { schluessel: "pro", name: "Pro" },
  { schluessel: "team", name: "Team", ab: AB_Q4 },
];

type Zeile = { titel: string; werte: Record<Schluessel, Wert> };

const FEHLT: Wert = { art: "fehlt" };
const ENTHALTEN: Wert = { art: "enthalten" };
const ENTHALTEN_AB_Q4: Wert = { art: "enthalten", ab: AB_Q4 };
const text = (t: string): Wert => ({ art: "text", text: t });
const preis = (betrag: string, zusatz?: string): Wert => ({ art: "preis", betrag, zusatz });

const NETTO_NUTZER = "zzgl. MwSt. je Nutzer und Monat";

const ZEILEN: Zeile[] = [
  {
    titel: "Preis bei jährlicher Zahlung",
    werte: {
      free: preis(`0${NBSP}€`),
      privat: preis(`5,95${NBSP}€`, "inkl. MwSt. je Monat"),
      pro: preis(`10${NBSP}€`, NETTO_NUTZER),
      team: preis(`13${NBSP}€`, `${NETTO_NUTZER}, ab 2${NBSP}Nutzern`),
    },
  },
  {
    titel: "Preis bei monatlicher Zahlung",
    werte: {
      free: preis(`0${NBSP}€`),
      privat: preis(`7,14${NBSP}€`, "inkl. MwSt. je Monat"),
      pro: preis(`12${NBSP}€`, NETTO_NUTZER),
      team: preis(`15${NBSP}€`, NETTO_NUTZER),
    },
  },
  {
    titel: "Eigene Domains",
    werte: { free: FEHLT, privat: text("1"), pro: text("3"), team: text("3 je Nutzer") },
  },
  {
    titel: "Adressen",
    werte: {
      free: text("Verbundenes Postfach per IMAP"),
      privat: text("5"),
      pro: text("15"),
      team: text("15 je Nutzer"),
    },
  },
  {
    titel: "Speicher",
    werte: {
      free: text(`2${NBSP}GB`),
      privat: text(`50${NBSP}GB`),
      pro: text(`200${NBSP}GB`),
      team: text(`200${NBSP}GB je Nutzer`),
    },
  },
  {
    titel: "Assistent-Anfragen je Monat",
    werte: {
      free: text("20"),
      privat: text("75"),
      pro: text("150"),
      team: text("150 je Nutzer, im Workspace gebündelt"),
    },
  },
  {
    titel: "Automatische Vorschläge aus Mails",
    werte: {
      free: FEHLT,
      privat: text("Je Mail einzeln, zählt als Anfrage"),
      pro: text(`Bis zu 25${NBSP}Mails je Tag`),
      team: text(`Bis zu 25${NBSP}Mails je Tag und Nutzer`),
    },
  },
  { titel: "Gäste", werte: { free: FEHLT, privat: FEHLT, pro: ENTHALTEN_AB_Q4, team: ENTHALTEN } },
  { titel: `Buchungs${SHY}seite`, werte: { free: FEHLT, privat: FEHLT, pro: ENTHALTEN_AB_Q4, team: ENTHALTEN } },
  { titel: `Digitale Visiten${SHY}karte`, werte: { free: FEHLT, privat: FEHLT, pro: ENTHALTEN_AB_Q4, team: ENTHALTEN } },
  {
    titel: "Rollen, geteilte Kalender und Ordner",
    werte: { free: FEHLT, privat: FEHLT, pro: FEHLT, team: ENTHALTEN },
  },
  { titel: `Gruppen${SHY}postfächer`, werte: { free: FEHLT, privat: FEHLT, pro: FEHLT, team: ENTHALTEN } },
  {
    titel: `Vertrag zur Auftrags${SHY}verarbeitung`,
    werte: { free: FEHLT, privat: FEHLT, pro: FEHLT, team: ENTHALTEN },
  },
];

function Inhalt({ wert }: { wert: Wert }): ReactNode {
  switch (wert.art) {
    case "fehlt":
      return (
        <>
          <span className="ws-ta-fehlt" aria-hidden="true">
            –
          </span>
          <span className="sr-only">nicht enthalten</span>
        </>
      );
    case "enthalten":
      return (
        <span className="ws-ta-enthalten">
          <span className="ws-ta-enthalten-wort">
            <SymbolGrafik name="haken" className="symbol symbol-klein" />
            Enthalten
          </span>
          {wert.ab ? <span className="tag">{wert.ab}</span> : null}
        </span>
      );
    case "preis":
      return (
        <>
          <span className="ws-ta-betrag">{wert.betrag}</span>
          {wert.zusatz ? <span className="ws-ta-zusatz">{wert.zusatz}</span> : null}
        </>
      );
    case "text":
      return wert.text;
  }
}

const CAPTION_ID = "ta-vergleich-caption";
const CAPTION = `Leistungen und geplante Preise der Tarife Free, Privat, Pro und Team, Stand ${STAND}`;

export function Vergleich() {
  return (
    <div className="ws-ta-vergleich">
      <div className="tabelle ws-ta-tabelle" role="region" aria-labelledby={CAPTION_ID} tabIndex={0}>
        <table>
          <caption id={CAPTION_ID} className="sr-only">
            {CAPTION}
          </caption>
          <colgroup>
            <col className="ws-ta-spalte-leistung" />
            {SPALTEN.map((s) => (
              <col key={s.schluessel} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Leistung</th>
              {SPALTEN.map((s) => (
                <th scope="col" key={s.schluessel} className="ws-ta-tarif">
                  <span className="ws-ta-tarif-name">{s.name}</span>
                  {s.ab ? <span className="tag">{s.ab}</span> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ZEILEN.map((zeile) => (
              <tr key={zeile.titel}>
                <th scope="row">{zeile.titel}</th>
                {SPALTEN.map((s) => (
                  <td key={s.schluessel}>
                    <Inhalt wert={zeile.werte[s.schluessel]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="ws-ta-karten" role="list" aria-label={CAPTION}>
        {SPALTEN.map((s) => (
          <li key={s.schluessel} className="tabelle-karte ws-ta-karte">
            <div className="tabelle-karte-kopf">
              <h3 className="tabelle-karte-titel ws-ta-karte-titel">{s.name}</h3>
              {s.ab ? <span className="tag">{s.ab}</span> : null}
            </div>
            <dl className="ws-ta-daten">
              {ZEILEN.map((zeile) => (
                <div key={zeile.titel} className="ws-ta-daten-zeile">
                  <dt>{zeile.titel}</dt>
                  <dd>
                    <Inhalt wert={zeile.werte[s.schluessel]} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <div className="ws-ta-hinweise">
        <p>
          <strong>Assistent-Anfragen.</strong> Eine Anfrage ist eine Frage, ein Auftrag oder ein angeforderter Entwurf.
          Ist das Kontingent erreicht, pausiert der Assistent bis zum Monatsende; alles andere läuft weiter. Ab Privat
          kannst du ein Paket mit zusätzlichen Anfragen buchen.
        </p>
        <p>
          <strong>Automatische Vorschläge.</strong> Aus eingehenden Mails schlägt der Assistent zum Beispiel eine
          Aufgabe mit Fälligkeit vor. Diese Vorschläge zählen getrennt vom Kontingent; in Privat löst du sie je Mail
          selbst aus, dann zählen sie als Anfrage.
        </p>
        <p>
          <strong>Verarbeitung.</strong> Der Assistent ist ab Werk aus und läuft erst nach deiner Zustimmung. Zum Start
          gehen KI-Anfragen über die Anthropic-API, und Anthropic verarbeitet sie außerhalb der EU; das sagt dir der
          Zustimmungsdialog vorher. Der Team-Tarif nutzt ab Q4 2027 Claude in Amazon Bedrock mit EU-Profil ab
          Frankfurt.
        </p>
      </div>
    </div>
  );
}
