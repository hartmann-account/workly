import type { CSSProperties } from "react";
import { SymbolGrafik } from "~/komponenten/SymbolGrafik";

/*
 * Nachgebaute Portal-Ansichten für die Startseite. Sie stehen immer im Rahmen `Bildschirm`
 * (inert, aria-hidden); Knöpfe und Links sind deshalb nur Bild und als <span> bzw. <a> ohne Ziel gesetzt.
 * Markup und Klassen stammen aus den Bausteinen Lesebereich, Vorschlagskarte, Heute, Termin und DokumentEditor.
 * Personen und Firmen sind die Beispielnamen des Designsystems.
 */

/** Lage eines Blocks in der Zeitleiste (Stunden als Dezimalzahl) als CSS-Variablen. */
function lage(werte: Record<string, string>): CSSProperties {
  return werte as CSSProperties;
}

/** Kopf einer Nachricht im Lesebereich: Betreff, Absenderin, Zeit. */
function MailKopf({ betreff }: { betreff: string }) {
  return (
    <div className="pe-lesen-kopf">
      <p className="pe-lesen-betreff">{betreff}</p>
      <div className="pe-lesen-absender">
        <span className="avatar avatar-gross">AK</span>
        <div className="pe-lesen-wer">
          <p className="pe-lesen-name">Aylin Kaya</p>
          <p className="pe-lesen-an">aylin.kaya@kaya.example</p>
        </div>
        <time className="pe-lesen-zeit" dateTime="2026-10-02T09:14">
          02.10.2026, 09:14 Uhr
        </time>
      </div>
    </div>
  );
}

/** Schritt 1: Mail von Aylin Kaya mit dem Aufgabenvorschlag (Vorschlagskarte, Fall 1). */
export function MailMitVorschlag() {
  return (
    <div className="pe-lesen">
      <MailKopf betreff="Angebot Website" />
      <div className="pe-lesen-text app-lesetext">
        <p>
          Guten Tag, können Sie mir bis Freitag, 09.10., ein Angebot für die neue Website schicken? Gern in zwei
          Varianten, mit und ohne laufende Pflege.
        </p>
      </div>
      <div className="vorschlag">
        <p className="vorschlag-kopf">
          <SymbolGrafik name="assistent" className="" />
          Vorschlag des Assistenten
        </p>
        <p className="vorschlag-titel">Aufgabe anlegen: Angebot an Frau Kaya senden</p>
        <p className="vorschlag-text">Fällig Fr., 09.10.2026 · Projekt „Angebot Kaya“</p>
        <p className="vorschlag-quelle">
          Aus der <a>Mail von Aylin Kaya, 02.10.2026</a>
        </p>
        <div className="vorschlag-aktionen">
          <span className="knopf knopf-primaer knopf-klein">Übernehmen</span>
          <span className="knopf knopf-kontur knopf-klein">Ändern</span>
          <span className="knopf knopf-leise knopf-klein">Verwerfen</span>
        </div>
      </div>
    </div>
  );
}

const STUNDEN = ["13", "14", "15", "16", "17"];

/** Schritt 2: Zeitleiste des Dienstags mit dem eingeplanten Aufgabenblock (`.termin-aufgabe`, gestrichelt). */
export function DienstagZeitleiste() {
  return (
    <div className="karte ws-st-tag">
      <div className="karte-kopf">
        <p className="karte-titel">Dienstag, 06.10.2026</p>
        <span className="ta-kopf-info">KW 41</span>
      </div>
      <div className="ta-zl" style={lage({ "--ta-von": "13", "--ta-bis": "17" })}>
        <ol className="ta-zl-stunden">
          {STUNDEN.map((h) => (
            <li key={h} style={lage({ "--h": h })}>
              <span>{h}:00</span>
            </li>
          ))}
        </ol>
        <ol className="ta-zl-bloecke">
          <li className="ta-zl-eintrag ta-zl-kurz" style={lage({ "--von": "13", "--bis": "13.75" })}>
            <span className="termin">
              <span className="termin-typ">
                <SymbolGrafik name="kalender" className="" />
              </span>
              <span className="termin-titel">Termin Studio Nord</span>
              <span className="termin-zeit">13:00</span>
            </span>
          </li>
          <li className="ta-zl-eintrag" style={lage({ "--von": "14", "--bis": "15.5" })}>
            <span className="termin termin-aufgabe">
              <span className="termin-titel">Angebot an Frau Kaya senden</span>
              <span className="termin-zeit">14:00 – 15:30 Uhr</span>
              <span className="termin-typ">
                <SymbolGrafik name="aufgaben" className="" />
                Aufgabe
              </span>
            </span>
          </li>
          <li className="ta-zl-eintrag" style={lage({ "--von": "16", "--bis": "17" })}>
            <span className="termin termin-fokus">
              <span className="termin-titel">Entwürfe Studio Nord</span>
              <span className="termin-zeit">
                16:00 – 17:00 Uhr ·{" "}
                <span className="termin-typ">
                  <SymbolGrafik name="fokus" className="" />
                  Fokus
                </span>
              </span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

/** Schritt 3: Angebotsdokument mit dem Bereich „Verknüpft“ und der Gegenrichtung in der Mail. */
export function AngebotVerknuepft() {
  return (
    <div className="ws-st-dokument">
      <div className="dok-kopf">
        <div className="dok-pfad">
          <ol>
            <li>
              <a>Angebot Kaya</a>
            </li>
            <li>
              <span aria-current="page">Angebot Website</span>
            </li>
          </ol>
        </div>
        <p className="dok-speicherstatus">
          <SymbolGrafik name="haken" />
          Gespeichert
        </p>
      </div>
      <div className="dok-leiste-abschnitt">
        <p className="gruppentitel">Verknüpft</p>
        <ul className="dok-verknuepft">
          <li>
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="email" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Mail</span>
                <span className="dok-verknuepft-titel">Mail von Aylin Kaya</span>
                <span className="dok-verknuepft-meta">„Angebot Website“, 02.10.2026</span>
              </span>
            </a>
          </li>
          <li>
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="aufgaben" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Aufgabe</span>
                <span className="dok-verknuepft-titel">Angebot an Frau Kaya senden</span>
                <span className="dok-verknuepft-meta">Fällig Fr., 09.10.2026</span>
              </span>
            </a>
          </li>
          <li>
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="kalender" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Termin</span>
                <span className="dok-verknuepft-titel">Angebot an Frau Kaya senden</span>
                <span className="dok-verknuepft-meta">Di., 06.10.2026, 14:00 – 15:30 Uhr</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="pe-lesen-abschnitt ws-st-gegenrichtung">
        <p className="gruppentitel">In der Mail von Aylin Kaya</p>
        <ul className="pe-chips">
          <li>
            <a className="pe-chip">
              <SymbolGrafik name="aufgaben" />
              <span className="pe-chip-typ">Aufgabe</span>
              Angebot an Frau Kaya senden
            </a>
          </li>
          <li>
            <a className="pe-chip">
              <SymbolGrafik name="kalender" />
              <span className="pe-chip-typ">Termin</span>
              Di., 14:00 Uhr
            </a>
          </li>
          <li>
            <a className="pe-chip">
              <SymbolGrafik name="dokumente" />
              <span className="pe-chip-typ">Dokument</span>
              Angebot Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/** Assistent: Zusammenfassung eines Verlaufs mit Verweis je Punkt (Vorschlagskarte, Fall 3). */
export function VerlaufZusammenfassung() {
  return (
    <div className="pe-lesen">
      <MailKopf betreff="Re: Angebot Website" />
      <div className="vorschlag">
        <p className="vorschlag-kopf">
          <SymbolGrafik name="assistent" className="" />
          Zusammenfassung des Assistenten
        </p>
        <p className="vorschlag-titel">Verlauf „Angebot Website“ · 7 Nachrichten</p>
        <dl className="datenliste pe-zf">
          <dt>Stand</dt>
          <dd>
            Frau Kaya möchte zwei Varianten, mit und ohne laufende Pflege.{"\u00a0"}<a className="as-verweis">[3]</a>
          </dd>
          <dt>Offen</dt>
          <dd>
            Wer liefert die Texte für „Über uns“?{"\u00a0"}<a className="as-verweis">[5]</a>
          </dd>
          <dt>Zusagen</dt>
          <dd>
            Du schickst das Angebot bis Fr., 09.10.2026.{"\u00a0"}<a className="as-verweis">[6]</a>
          </dd>
        </dl>
        <div className="vorschlag-aktionen">
          <span className="knopf knopf-leise knopf-klein">
            <SymbolGrafik name="warnung" />
            Fehler melden
          </span>
        </div>
      </div>
    </div>
  );
}
