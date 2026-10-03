import type { CSSProperties, ReactNode } from "react";
import type { SymbolName } from "@workly/ui/symbole";
import { Kachel, SymbolGrafik } from "~/komponenten/SymbolGrafik";

/*
 * Nachgebaute Portal-Ansichten für die Seite Funktionen. Sie stehen immer im Rahmen `Bildschirm`
 * (inert, aria-hidden): Überschriften sind deshalb <p>, Knöpfe <span>, Links <a> ohne Ziel.
 * Markup und Klassen stammen aus den Bausteinen Heute, PosteingangListe, KalenderWoche, Aufgabenboard,
 * DokumentEditor, Lesebereich, Befehlszeile und FokusTimer. Teamfunktionen (Zuständige, Anwesenheit
 * anderer) fehlen bewusst, weil sie erst ab Q4 2027 kommen.
 * Klassen mit „ws-fu-weg-…“ blenden Teile auf schmalen Breiten aus: Die Abbildung wird gekürzt, nicht skaliert.
 */

/** Eigene Eigenschaften wie `--h` oder `--kal-beginn` als Inline-Stil. */
function v(werte: Record<string, string | number>): CSSProperties {
  return werte as CSSProperties;
}

/** Symbol in `.termin-typ`: 12 px über die Regel des Bausteins, daher ohne Klasse `symbol`. */
function Typ({ name, children }: { name: SymbolName; children?: ReactNode }) {
  return (
    <span className="termin-typ">
      <SymbolGrafik name={name} className="" />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ Heute */

const HEUTE_STUNDEN = [9, 10, 11, 12, 13, 14, 15];

/** Ansicht Heute: Zeitleiste, fällige Aufgaben, markierte Nachrichten (ohne Tagesvorschlag, KI aus). */
export function HeuteAnsicht() {
  return (
    <div className="ta-heute">
      <div className="seitenkopf">
        <div>
          <p className="seitenkopf-titel">Heute</p>
          <p className="seitenkopf-unterzeile">
            <time dateTime="2026-10-06">Dienstag, 06.10.2026</time> · KW 41
          </p>
        </div>
        <div className="seitenkopf-aktionen ws-fu-weg-ta">
          <span className="knopf knopf-primaer">
            <SymbolGrafik name="kalender" />
            Tag planen
          </span>
        </div>
      </div>

      <div className="ta-raster">
        <div className="karte ta-bereich-zeit">
          <div className="karte-kopf">
            <p className="karte-titel">Zeitleiste</p>
            <span className="ta-kopf-info">Arbeitszeit 09:00 – 18:00 Uhr</span>
          </div>
          <div className="ta-zl ws-fu-zl">
            <ol className="ta-zl-stunden">
              {HEUTE_STUNDEN.map((h) => (
                <li key={h} style={v({ "--h": h })} className={h > 12 ? "ws-fu-weg-ta" : undefined}>
                  <span>{String(h).padStart(2, "0")}:00</span>
                </li>
              ))}
            </ol>
            <ol className="ta-zl-bloecke">
              <li className="ta-zl-eintrag ta-zl-kurz" style={v({ "--von": 9, "--bis": 9.5 })}>
                <span className="termin">
                  <Typ name="kalender" />
                  <span className="termin-titel">Abstimmung Studio Nord</span>
                  <span className="termin-zeit">09:00</span>
                </span>
              </li>
              <li className="ta-zl-eintrag" style={v({ "--von": 10, "--bis": 11.5 })}>
                <span className="termin termin-fokus">
                  <span className="termin-titel">Angebot Kaya überarbeiten</span>
                  <span className="termin-zeit">10:00 – 11:30 Uhr</span>
                  <Typ name="fokus">Fokus</Typ>
                </span>
              </li>
              <li className="ta-zl-eintrag" style={v({ "--von": 11.5, "--bis": 12.5 })}>
                <span className="termin termin-aufgabe">
                  <span className="termin-titel">Angebot an Frau Kaya senden</span>
                  <span className="termin-zeit">11:30 – 12:30 Uhr</span>
                  <Typ name="aufgaben">Aufgabe</Typ>
                </span>
              </li>
              <li className="ta-zl-eintrag ta-zl-kurz ws-fu-weg-ta" style={v({ "--von": 12.5, "--bis": 13.25 })}>
                <span className="termin termin-privat">
                  <Typ name="person" />
                  <span className="termin-titel">Mittag</span>
                  <span className="termin-zeit">12:30</span>
                </span>
              </li>
              <li className="ta-zl-eintrag ws-fu-weg-ta" style={v({ "--von": 14, "--bis": 15 })}>
                <span className="termin">
                  <span className="termin-titel">Telefonat Tom Weber</span>
                  <span className="termin-zeit">14:00 – 15:00 Uhr</span>
                  <Typ name="kalender">Termin</Typ>
                </span>
              </li>
            </ol>
            <div className="ta-jetzt" style={v({ "--zeit": 9.6833 })}>
              <span className="ta-jetzt-zeit">09:41</span>
            </div>
          </div>
        </div>

        <div className="karte ta-bereich-aufgaben">
          <div className="karte-kopf">
            <p className="karte-titel">Fällige Aufgaben</p>
            <a className="ta-kopf-link">Alle Aufgaben</a>
          </div>
          <ul className="ta-liste" role="list">
            <li className="ta-aufgabe">
              <span className="ta-haken">
                <span className="pruef pruef-rund" />
              </span>
              <div>
                <a className="ta-titel">Angebot an Frau Kaya senden</a>
                <p className="ta-meta">
                  <span className="tag tag-warn">Heute fällig</span>
                  <span>
                    <SymbolGrafik name="uhr" className="symbol symbol-klein" />
                    11:30 Uhr eingeplant
                  </span>
                </p>
              </div>
            </li>
            <li className="ta-aufgabe">
              <span className="ta-haken">
                <span className="pruef pruef-rund" />
              </span>
              <div>
                <a className="ta-titel">Website-Texte von Lena gegenlesen</a>
                <p className="ta-meta">
                  <span>
                    <SymbolGrafik name="kalender" className="symbol symbol-klein" />
                    Heute
                  </span>
                  <span>
                    <SymbolGrafik name="ordner" className="symbol symbol-klein" />
                    Hartmann Studio
                  </span>
                </p>
              </div>
            </li>
            <li className="ta-aufgabe ws-fu-weg-ta">
              <span className="ta-haken">
                <span className="pruef pruef-rund" />
              </span>
              <div>
                <a className="ta-titel">Rechnung 2026-041 an Studio Nord prüfen</a>
                <p className="ta-meta">
                  <span>
                    <SymbolGrafik name="kalender" className="symbol symbol-klein" />
                    Heute
                  </span>
                  <span>
                    <SymbolGrafik name="ordner" className="symbol symbol-klein" />
                    Studio Nord
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="karte ta-bereich-nachrichten ws-fu-weg-ta">
          <div className="karte-kopf">
            <p className="karte-titel">Markierte Nachrichten</p>
            <a className="ta-kopf-link">Posteingang</a>
          </div>
          <ul className="ta-liste" role="list">
            <li className="ta-nachricht">
              <span className="avatar">AK</span>
              <a className="ta-nachricht-link">
                <span className="ta-absender">Aylin Kaya</span>
                <span className="ta-betreff">Angebot Website</span>
              </a>
              <time className="ta-zeit" dateTime="2026-10-06T08:12">
                08:12
              </time>
            </li>
            <li className="ta-nachricht">
              <span className="avatar avatar-pink">LB</span>
              <a className="ta-nachricht-link">
                <span className="ta-absender">Lena Berger</span>
                <span className="ta-betreff">Referenzprojekte für Frau Kaya</span>
              </a>
              <time className="ta-zeit" dateTime="2026-10-06T07:58">
                07:58
              </time>
            </li>
            <li className="ta-nachricht">
              <span className="avatar avatar-violett">TW</span>
              <a className="ta-nachricht-link">
                <span className="ta-absender">Tom Weber · Studio Nord</span>
                <span className="ta-betreff">Vertragsentwurf Studio Nord</span>
              </a>
              <time className="ta-zeit" dateTime="2026-10-05T16:40">
                Gestern
              </time>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Posteingang */

type Mail = {
  initialen: string;
  avatar?: string;
  absender: string;
  betreff: string;
  vorschau: string;
  zeit: string;
  iso: string;
  ungelesen?: boolean;
  markiert?: boolean;
  anhang?: boolean;
  system?: boolean;
  menue?: boolean;
};

const MAILS_HEUTE: Mail[] = [
  {
    initialen: "AK",
    absender: "Aylin Kaya",
    betreff: "Angebot Website",
    vorschau: "Guten Tag, könnten Sie mir bis Freitag ein Angebot für die neue Website schicken?",
    zeit: "08:12",
    iso: "2026-10-06T08:12",
    ungelesen: true,
    markiert: true,
    menue: true,
  },
  {
    initialen: "LB",
    avatar: "avatar-pink",
    absender: "Lena Berger",
    betreff: "Referenzprojekte für Frau Kaya",
    vorschau: "Kannst du bis Donnerstag drei Referenzprojekte für die Präsentation auswählen?",
    zeit: "07:58",
    iso: "2026-10-06T07:58",
    ungelesen: true,
  },
  {
    initialen: "TW",
    avatar: "avatar-violett",
    absender: "Tom Weber",
    betreff: "Neue Rechnungsadresse ab Oktober",
    vorschau: "Bitte stellen Sie die Rechnung für September schon auf unsere neue Adresse aus.",
    zeit: "07:31",
    iso: "2026-10-06T07:31",
    ungelesen: true,
  },
  {
    initialen: "",
    absender: "workly",
    betreff: "Domain hartmann-studio.de geprüft",
    vorschau: "MX, SPF und DKIM sind gesetzt. Neue Mails kommen ab jetzt in diesem Postfach an.",
    zeit: "06:02",
    iso: "2026-10-06T06:02",
    system: true,
  },
];

const MAILS_GESTERN: Mail[] = [
  {
    initialen: "TW",
    avatar: "avatar-violett",
    absender: "Tom Weber",
    betreff: "Vertragsentwurf Studio Nord",
    vorschau: "Anbei der Entwurf für die Zusammenarbeit ab November. Die Fristen stehen auf Seite 2.",
    zeit: "16:40",
    iso: "2026-10-05T16:40",
    anhang: true,
  },
];

const MAIL_AKTIONEN: { symbol: SymbolName; text: string; taste: string }[] = [
  { symbol: "antworten", text: "Antworten", taste: "R" },
  { symbol: "aufgaben", text: "Als Aufgabe", taste: "A" },
  { symbol: "kalender", text: "Als Termin", taste: "T" },
  { symbol: "spaeter", text: "Später", taste: "S" },
  { symbol: "haken", text: "Erledigt", taste: "E" },
];

function MailZeile({ mail }: { mail: Mail }) {
  return (
    <li className={mail.ungelesen ? "pe-zeile ist-ungelesen" : "pe-zeile"}>
      <span className="pe-auswahl">
        <span className="pruef" />
      </span>
      <a className="pe-zeile-link">
        <span className="pe-punkt" />
        {mail.system ? (
          <span className="avatar pe-avatar-system">
            <SymbolGrafik name="glocke" />
          </span>
        ) : (
          <span className={["avatar", mail.avatar ?? ""].join(" ").trim()}>{mail.initialen}</span>
        )}
        <span className="pe-absender">{mail.absender}</span>
        <span className="pe-text">
          <span className="pe-betreff">{mail.betreff}</span>
          <span className="pe-vorschau"> – {mail.vorschau}</span>
        </span>
        <span className="pe-symbole">
          {mail.anhang ? <SymbolGrafik name="anhang" className="symbol symbol-klein" /> : null}
          {mail.markiert ? <SymbolGrafik name="stern" className="symbol symbol-klein pe-markiert" /> : null}
        </span>
        <time className="pe-zeit" dateTime={mail.iso}>
          {mail.zeit}
        </time>
      </a>
      <div className={mail.menue ? "pe-aktionen ws-fu-sichtbar" : "pe-aktionen"}>
        <span className="symbolknopf symbolknopf-klein">
          <SymbolGrafik name="haken" />
        </span>
        <span className="symbolknopf symbolknopf-klein">
          <SymbolGrafik name="spaeter" />
        </span>
        <div className="menue-anker">
          <span className={mail.menue ? "symbolknopf symbolknopf-klein pe-mehr ist-aktiv" : "symbolknopf symbolknopf-klein pe-mehr"}>
            <SymbolGrafik name="mehr" />
          </span>
          {mail.menue ? (
            <div className="menue ws-fu-menue">
              {MAIL_AKTIONEN.map((aktion) => (
                <span key={aktion.taste} className="menue-eintrag">
                  <SymbolGrafik name={aktion.symbol} />
                  {aktion.text}
                  <kbd>{aktion.taste}</kbd>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

/** Posteingang: Ordner als Reiter, Gruppen nach Tag, geöffnetes Aktionsmenü mit Tasten. */
export function PosteingangAnsicht() {
  return (
    <div className="pe-posteingang">
      <div className="seitenkopf">
        <div>
          <p className="seitenkopf-titel">Posteingang</p>
          <p className="seitenkopf-unterzeile">3 ungelesen</p>
        </div>
        <div className="seitenkopf-aktionen ws-fu-weg-mobil">
          <span className="knopf knopf-primaer knopf-klein">
            <SymbolGrafik name="bearbeiten" />
            Neue Nachricht
          </span>
        </div>
      </div>
      <div className="reiter rl-reiter pe-reiter">
        <a aria-current="page">
          Eingang <span className="zaehler">3</span>
        </a>
        <a>
          Später <span className="zaehler zaehler-leise">2</span>
        </a>
        <a>Entwürfe</a>
        <a>Gesendet</a>
        <a>Archiv</a>
      </div>
      <div className="pe-liste">
        <div className="pe-gruppe">
          <p className="gruppentitel">Heute</p>
          <ul className="pe-zeilen" role="list">
            {MAILS_HEUTE.map((mail) => (
              <MailZeile key={mail.iso} mail={mail} />
            ))}
          </ul>
        </div>
        <div className="pe-gruppe ws-fu-weg-pe">
          <p className="gruppentitel">Gestern</p>
          <ul className="pe-zeilen" role="list">
            {MAILS_GESTERN.map((mail) => (
              <MailZeile key={mail.iso} mail={mail} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Kalender */

type Eintrag = {
  titel: string;
  /** Stunden ab 08:00 */
  beginn: number;
  dauer: number;
  zeit: string;
  art?: "fokus" | "aufgabe" | "privat";
};

type Tag = { kurz: string; datum: string; heute?: boolean; frei?: boolean; ausschnitt?: boolean; eintraege: Eintrag[] };

const WOCHE: Tag[] = [
  {
    kurz: "Mo",
    datum: "05.",
    eintraege: [
      { titel: "Wochenstart mit Lena Berger", beginn: 1, dauer: 1, zeit: "09:00 – 10:00" },
      { titel: "Konzept Website Studio Nord", beginn: 2.5, dauer: 2, zeit: "10:30 – 12:30", art: "fokus" },
      { titel: "Website-Texte sammeln", beginn: 5, dauer: 1, zeit: "13:00 – 14:00", art: "aufgabe" },
    ],
  },
  {
    kurz: "Di",
    datum: "06.",
    heute: true,
    ausschnitt: true,
    eintraege: [
      { titel: "Abstimmung Studio Nord", beginn: 1, dauer: 0.5, zeit: "09:00 – 09:30" },
      { titel: "Angebot Kaya überarbeiten", beginn: 2, dauer: 1.5, zeit: "10:00 – 11:30", art: "fokus" },
      { titel: "Angebot an Frau Kaya senden", beginn: 3.5, dauer: 1, zeit: "11:30 – 12:30", art: "aufgabe" },
      { titel: "Mittag", beginn: 4.5, dauer: 0.75, zeit: "12:30 – 13:15", art: "privat" },
    ],
  },
  {
    kurz: "Mi",
    datum: "07.",
    ausschnitt: true,
    eintraege: [
      { titel: "Konzept Studio Nord", beginn: 1, dauer: 1, zeit: "09:00 – 10:00", art: "fokus" },
      { titel: "Workshop Studio Nord", beginn: 2, dauer: 2, zeit: "10:00 – 12:00" },
      { titel: "Kalkulation Angebot Kaya", beginn: 4.5, dauer: 1.5, zeit: "12:30 – 14:00", art: "aufgabe" },
    ],
  },
  {
    kurz: "Do",
    datum: "08.",
    ausschnitt: true,
    eintraege: [
      { titel: "Fokusblock", beginn: 1, dauer: 2, zeit: "09:00 – 11:00", art: "fokus" },
      { titel: "Telefonat Tom Weber", beginn: 3.5, dauer: 0.75, zeit: "11:30 – 12:15" },
      { titel: "Abstimmung mit Studio Nord", beginn: 5, dauer: 1, zeit: "13:00 – 14:00" },
    ],
  },
  {
    kurz: "Fr",
    datum: "09.",
    eintraege: [
      { titel: "Rückruf Aylin Kaya", beginn: 2, dauer: 0.75, zeit: "10:00 – 10:45" },
      { titel: "Zeitplan Website Kaya", beginn: 3, dauer: 2, zeit: "11:00 – 13:00", art: "fokus" },
    ],
  },
  {
    kurz: "Sa",
    datum: "10.",
    frei: true,
    eintraege: [{ titel: "Wochenmarkt", beginn: 2, dauer: 1.5, zeit: "10:00 – 11:30", art: "privat" }],
  },
  { kurz: "So", datum: "11.", frei: true, eintraege: [] },
];

const ART: Record<NonNullable<Eintrag["art"]> | "termin", { klasse: string; symbol: SymbolName; wort: string }> = {
  termin: { klasse: "termin", symbol: "kalender", wort: "Termin" },
  fokus: { klasse: "termin termin-fokus", symbol: "fokus", wort: "Fokusblock" },
  aufgabe: { klasse: "termin termin-aufgabe", symbol: "aufgaben", wort: "Aufgabenblock" },
  privat: { klasse: "termin termin-privat", symbol: "person", wort: "Privat" },
};

const KAL_STUNDEN = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];

/** Kalender, Woche: Ausschnitt 08:00 – 14:00 Uhr; unter 640 px zeigt der Baustein die Tagesliste. */
export function KalenderAnsicht() {
  const heute = WOCHE.find((t) => t.heute);
  return (
    <div className="kal-woche ws-fu-kal">
      <div className="seitenkopf kal-kopf">
        <div className="kal-kopf-links">
          <div className="kal-blaettern ws-fu-weg-mobil">
            <span className="symbolknopf">
              <SymbolGrafik name="zurueck" />
            </span>
            <span className="knopf knopf-kontur knopf-klein">Heute</span>
            <span className="symbolknopf">
              <SymbolGrafik name="weiter" />
            </span>
          </div>
          <div className="kal-titel">
            <p className="seitenkopf-titel">5. – 11. Oktober 2026</p>
            <span className="tag">KW 41</span>
          </div>
        </div>
        <div className="seitenkopf-aktionen">
          <div className="segment">
            <button type="button" tabIndex={-1} aria-pressed="false">
              Tag
            </button>
            <button type="button" tabIndex={-1} aria-pressed="true">
              Woche
            </button>
          </div>
          <span className="knopf knopf-primaer ws-fu-weg-mobil">
            <SymbolGrafik name="plus" />
            Neuer Termin
          </span>
        </div>
      </div>

      <div className="kal-raster">
        <div className="kal-achse">
          <span className="kal-achse-ecke" />
          <span className="kal-achse-ganztag">ganztägig</span>
          <div className="kal-achse-zeiten">
            {KAL_STUNDEN.map((s) => (
              <span key={s}>{s}</span>
            ))}
            <span className="kal-achse-jetzt" style={v({ "--kal-beginn": 1.6833 })}>
              09:41
            </span>
          </div>
        </div>
        {WOCHE.map((tag) => (
          <div
            key={tag.kurz}
            className={["kal-tag", tag.ausschnitt ? "ist-im-ausschnitt" : "", tag.frei ? "kal-tag-frei" : ""].filter(Boolean).join(" ")}
          >
            <p className="kal-tag-kopf" aria-current={tag.heute ? "date" : undefined}>
              <span className="kal-tag-name">{tag.kurz}</span>
              {tag.heute ? (
                <span className="kategorie kategorie-blau kal-heute-pille">{tag.datum}</span>
              ) : (
                <span className="kal-tag-datum">{tag.datum}</span>
              )}
            </p>
            <div className="kal-ganztag" />
            <div className="kal-zeit">
              <ol className="kal-termine" role="list">
                {tag.eintraege.map((e) => {
                  const art = ART[e.art ?? "termin"];
                  const lage = v({ "--kal-beginn": e.beginn, "--kal-dauer": e.dauer });
                  if (e.dauer < 0.75) {
                    return (
                      <li key={e.titel} style={lage}>
                        <span className={`${art.klasse} kal-kurz`}>
                          <Typ name={art.symbol} />
                          <span className="termin-zeit">{e.zeit.split(" – ")[0]}</span>
                          <span className="termin-titel">{e.titel}</span>
                        </span>
                      </li>
                    );
                  }
                  return (
                    <li key={e.titel} style={lage}>
                      <span className={`${art.klasse}${e.dauer >= 1.25 ? " kal-lang" : ""}`}>
                        <span className="kal-zeile">
                          <Typ name={art.symbol} />
                          <span className="termin-titel">{e.titel}</span>
                        </span>
                        <span className="termin-zeit">{e.zeit}</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
              {tag.heute ? <div className="kal-jetzt" style={v({ "--kal-beginn": 1.6833 })} /> : null}
            </div>
          </div>
        ))}
      </div>

      <ul className="kal-legende" role="list">
        {(["termin", "fokus", "aufgabe", "privat"] as const).map((schluessel) => (
          <li key={schluessel}>
            <span className={ART[schluessel].klasse}>
              <Typ name={ART[schluessel].symbol}>{ART[schluessel].wort}</Typ>
            </span>
          </li>
        ))}
        <li>
          <span className="kal-muster" />
          Außerhalb deines Arbeitszeitfensters (09:00 – 18:00 Uhr)
        </li>
      </ul>

      <div className="kal-tagesliste">
        <div className="kal-wochenleiste">
          {WOCHE.map((tag) => (
            <button key={tag.kurz} type="button" tabIndex={-1} className="kal-tagwahl" aria-pressed={tag.heute ? "true" : "false"}>
              <span className="kal-tagwahl-name">{tag.kurz}</span>
              <span className={tag.heute ? "kal-tagwahl-datum kategorie kategorie-blau" : "kal-tagwahl-datum"}>
                {tag.datum.replace(".", "")}
              </span>
            </button>
          ))}
        </div>
        <p className="kal-liste-titel">
          Dienstag, 06.10.2026 <span className="tag tag-blau">Heute</span>
        </p>
        <ol className="kal-liste" role="list">
          {(heute?.eintraege ?? []).flatMap((e, i) => {
            const art = ART[e.art ?? "termin"];
            const [von, bis] = e.zeit.split(" – ");
            const zeile = (
              <li key={e.titel} className={i > 2 ? "kal-liste-eintrag ws-fu-weg-schmal" : "kal-liste-eintrag"}>
                <span className="kal-liste-zeit">
                  <span>{von}</span>
                  <span>{bis}</span>
                </span>
                <span className={art.klasse}>
                  <Typ name={art.symbol}>{art.wort}</Typ>
                  <span className="termin-titel">{e.titel}</span>
                </span>
              </li>
            );
            if (i !== 1) return [zeile];
            return [
              <li key="jetzt" className="kal-liste-jetzt">
                <span className="kal-liste-jetzt-zeit">09:41</span>
                <span className="kal-liste-jetzt-linie" />
              </li>,
              zeile,
            ];
          })}
        </ol>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- Aufgaben */

type Karte = { titel: string; fuss: ReactNode; erledigt?: boolean };

const SPALTEN: { name: string; klasse: string; aktiv?: boolean; karten: Karte[] }[] = [
  {
    name: "Offen",
    klasse: "auf-status-offen",
    karten: [
      {
        titel: "Referenzprojekte auswählen",
        fuss: (
          <>
            <span className="auf-wert">
              <SymbolGrafik name="kalender" className="symbol symbol-klein" />
              Do., 08.10.
            </span>
            <span className="auf-wert">
              <SymbolGrafik name="email" className="symbol symbol-klein" />
              aus Mail
            </span>
          </>
        ),
      },
      {
        titel: "Zeitplan für die neue Website skizzieren",
        fuss: (
          <span className="auf-wert">
            <SymbolGrafik name="kalender" className="symbol symbol-klein" />
            Fr., 09.10.
          </span>
        ),
      },
      {
        titel: "Stand an Frau Kaya schicken",
        fuss: (
          <span className="auf-wert">
            <SymbolGrafik name="aktualisieren" className="symbol symbol-klein" />
            jeden Freitag
          </span>
        ),
      },
    ],
  },
  {
    name: "In Arbeit",
    klasse: "auf-status-arbeit",
    aktiv: true,
    karten: [
      {
        titel: "Angebot an Frau Kaya senden",
        fuss: (
          <>
            <span className="auf-wert">
              <SymbolGrafik name="uhr" className="symbol symbol-klein" />
              Heute, 11:30 Uhr eingeplant
            </span>
            <span className="tag tag-warn">Hoch</span>
          </>
        ),
      },
      {
        titel: "Entwürfe für Frau Kaya fertigstellen",
        fuss: (
          <>
            <span className="auf-wert">
              <SymbolGrafik name="kalender" className="symbol symbol-klein" />
              Do., 08.10.
            </span>
            <span className="auf-wert">
              <SymbolGrafik name="liste" className="symbol symbol-klein" />1 von 3
            </span>
          </>
        ),
      },
    ],
  },
  {
    name: "Wartet",
    klasse: "auf-status-wartet",
    karten: [
      {
        titel: "Texte für „Über uns“ freigeben lassen",
        fuss: (
          <span className="auf-wert">
            <SymbolGrafik name="uhr" className="symbol symbol-klein" />
            Wartet auf Aylin Kaya seit 01.10.
          </span>
        ),
      },
    ],
  },
  {
    name: "Erledigt",
    klasse: "auf-status-erledigt",
    karten: [
      {
        titel: "Erstgespräch vorbereiten",
        erledigt: true,
        fuss: (
          <span className="auf-wert auf-erledigt-marke">
            <SymbolGrafik name="haken" className="symbol symbol-klein" />
            Erledigt am 30.09.
          </span>
        ),
      },
    ],
  },
];

/** Aufgaben, Board eines Projekts. Unter 640 px Breite zeigt der Baustein eine Spalte („In Arbeit“). */
export function AufgabenAnsicht() {
  return (
    <div className="auf-board-ansicht">
      <div className="seitenkopf">
        <div>
          <p className="seitenkopf-titel">Angebot Kaya</p>
          <p className="seitenkopf-unterzeile">Projekt · 7 Aufgaben</p>
        </div>
        <div className="seitenkopf-aktionen">
          <div className="segment">
            <button type="button" tabIndex={-1} aria-pressed="false">
              <SymbolGrafik name="liste" />
              Liste
            </button>
            <button type="button" tabIndex={-1} aria-pressed="true">
              <SymbolGrafik name="board" />
              Board
            </button>
          </div>
          <span className="knopf knopf-primaer ws-fu-weg-mobil">
            <SymbolGrafik name="plus" />
            Neue Aufgabe
          </span>
        </div>
      </div>
      <div className="segment rl-segment-voll auf-spaltenwahl">
        {SPALTEN.map((spalte) => (
          <button key={spalte.name} type="button" tabIndex={-1} aria-pressed={spalte.aktiv ? "true" : "false"}>
            {spalte.name} <span className="auf-anzahl">{spalte.karten.length}</span>
          </button>
        ))}
      </div>
      <div className="auf-board">
        {SPALTEN.map((spalte) => (
          <div key={spalte.name} className={`auf-spalte ${spalte.klasse}${spalte.aktiv ? " ist-aktiv" : ""}`}>
            <p className="auf-spalte-kopf">
              <span className="auf-spalte-punkt" />
              {spalte.name}
              <span className="zaehler zaehler-leise">{spalte.karten.length}</span>
            </p>
            <ul className="auf-spalte-liste" role="list">
              {spalte.karten.map((karte) => (
                <li key={karte.titel}>
                  <div className={`auf-karte auf-karte-kompakt${karte.erledigt ? " ist-erledigt" : ""}`}>
                    <div className="auf-inhalt">
                      <a className="auf-titel">{karte.titel}</a>
                    </div>
                    <div className="menue-anker auf-mehr">
                      <span className="symbolknopf symbolknopf-klein">
                        <SymbolGrafik name="mehr" />
                      </span>
                    </div>
                    <div className="auf-fuss">{karte.fuss}</div>
                  </div>
                </li>
              ))}
            </ul>
            <span className="auf-hinzufuegen">
              <SymbolGrafik name="plus" />
              Karte hinzufügen
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- Dokumente */

/** Dokument-Editor ohne Anwesenheit anderer (gemeinsames Bearbeiten erst ab Q4 2027). */
export function DokumentAnsicht() {
  return (
    <div className="dok-editor">
      <div className="dok-kopf">
        <div className="dok-pfad">
          <ol role="list">
            <li>
              <a>Angebot Kaya</a>
            </li>
            <li>
              <span aria-current="page">Protokoll Termin Kaya</span>
            </li>
          </ol>
        </div>
        <div className="dok-kopf-aktionen">
          <p className="dok-speicherstatus">
            <SymbolGrafik name="haken" />
            Gespeichert
          </p>
          <span className="knopf knopf-primaer knopf-klein">
            <SymbolGrafik name="link" />
            Teilen
          </span>
          <span className="symbolknopf ws-fu-weg-mobil">
            <SymbolGrafik name="mehr" />
          </span>
        </div>
      </div>
      <div className="dok-arbeitsflaeche">
        <div className="dok-blatt">
          <div className="dok-inhalt">
            <p className="app-titel-xl">Protokoll Termin Kaya</p>
            <p className="dok-meta">
              <time dateTime="2026-10-01T14:00">01.10.2026, 14:00 – 15:00 Uhr</time> · Aylin Kaya
            </p>
            <p className="app-abschnitt ws-fu-weg-mobil">Besprochen</p>
            <p className="app-lesetext ws-fu-weg-mobil">
              Frau Kaya möchte ihre Website neu aufsetzen. Das Angebot zeigt zwei Varianten, mit und ohne laufende Pflege. Start ist im
              November.
            </p>
            <p className="app-abschnitt">Aufgaben</p>
            <ul className="dok-checkliste" role="list">
              <li className="dok-check">
                <span className="pruef pruef-rund" />
                <label>Angebot Kaya überarbeiten</label>
                <a className="tag tag-blau">
                  <SymbolGrafik name="aufgaben" />
                  Aufgabe · fällig heute
                </a>
              </li>
              <li className="dok-check ist-erledigt">
                <span className="pruef pruef-rund ws-fu-haken-an">
                  <SymbolGrafik name="haken" className="symbol symbol-klein" />
                </span>
                <label>Referenzen an Frau Kaya senden</label>
                <a className="tag tag-ok">
                  <SymbolGrafik name="aufgaben" />
                  Aufgabe · erledigt
                </a>
              </li>
              <li className="dok-check ws-fu-weg-mobil">
                <span className="pruef pruef-rund" />
                <label>Projektfotos bei Frau Kaya anfragen</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="dok-seitenleiste ws-fu-weg-mobil">
          <div className="dok-leiste-abschnitt">
            <p className="gruppentitel">Freigabe</p>
            <ul className="dok-verknuepft" role="list">
              <li>
                <span className="dok-verknuepft-eintrag">
                  <SymbolGrafik name="link" />
                  <span className="dok-verknuepft-text">
                    <span className="dok-verknuepft-typ">Freigabelink</span>
                    <span className="dok-verknuepft-titel">Lesen mit Link</span>
                    <span className="dok-verknuepft-meta">läuft ab am 16.10.2026</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="dok-leiste-abschnitt">
            <p className="gruppentitel">Versionen</p>
            <ol className="dok-versionen" role="list">
              <li className="dok-version">
                <span className="dok-version-zeit">Heute, 09:12 Uhr</span>
                <span className="tag tag-blau">Aktuell</span>
              </li>
              <li className="dok-version">
                <a className="dok-version-zeit">Gestern, 17:05 Uhr</a>
              </li>
              <li className="dok-version">
                <a className="dok-version-zeit">01.10.2026, 15:12 Uhr</a>
                <span>erstellt</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- Verknüpfungen */

/** Dieselbe Verknüpfung von beiden Seiten und ein Objekt, dessen Quelle gelöscht wurde. */
export function VerknuepfungAnsicht() {
  return (
    <div className="ws-fu-verknuepft">
      <div className="karte pe-lesen ws-fu-mail">
        <div className="pe-lesen-kopf">
          <p className="pe-lesen-betreff">Angebot Website</p>
          <div className="pe-lesen-absender">
            <span className="avatar">AK</span>
            <div className="pe-lesen-wer">
              <p className="pe-lesen-name">Aylin Kaya</p>
            </div>
            <time className="pe-lesen-zeit" dateTime="2026-10-02T09:14">
              02.10.2026, 09:14 Uhr
            </time>
          </div>
        </div>
        <div className="pe-lesen-abschnitt">
          <p className="gruppentitel">Verknüpft</p>
          <ul className="pe-chips" role="list">
            <li>
              <a className="pe-chip">
                <SymbolGrafik name="aufgaben" />
                <span className="pe-chip-typ">Aufgabe</span>
                Angebot an Frau Kaya senden
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

      <div className="karte ws-fu-aufgabe">
        <div className="ws-fu-aufgabe-kopf">
          <span className="pruef pruef-rund" />
          <div>
            <p className="karte-titel">Angebot an Frau Kaya senden</p>
            <p className="ws-fu-aufgabe-meta">Fällig Fr., 09.10.2026 · Projekt Angebot Kaya</p>
          </div>
        </div>
        <p className="gruppentitel">Verknüpft</p>
        <ul className="dok-verknuepft" role="list">
          <li>
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="email" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Mail</span>
                <span className="dok-verknuepft-titel">Angebot Website</span>
                <span className="dok-verknuepft-meta">Aylin Kaya, 02.10.2026</span>
              </span>
            </a>
          </li>
          <li className="ws-fu-weg-mobil">
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="kalender" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Zeitblock</span>
                <span className="dok-verknuepft-titel">Angebot an Frau Kaya senden</span>
                <span className="dok-verknuepft-meta">Di., 06.10.2026, 11:30 – 12:30 Uhr</span>
              </span>
            </a>
          </li>
          <li className="ws-fu-weg-mobil">
            <a className="dok-verknuepft-eintrag">
              <SymbolGrafik name="dokumente" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Dokument</span>
                <span className="dok-verknuepft-titel">Angebot Website</span>
                <span className="dok-verknuepft-meta">Projekt Angebot Kaya</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="karte ws-fu-aufgabe">
        <div className="ws-fu-aufgabe-kopf">
          <span className="pruef pruef-rund" />
          <div>
            <p className="karte-titel">Rechnung 2026-041 prüfen</p>
            <p className="ws-fu-aufgabe-meta">Fällig Mo., 12.10.2026 · Projekt Studio Nord</p>
          </div>
        </div>
        <ul className="dok-verknuepft" role="list">
          <li>
            <span className="dok-verknuepft-eintrag ws-fu-geloescht">
              <SymbolGrafik name="email" />
              <span className="dok-verknuepft-text">
                <span className="dok-verknuepft-typ">Mail</span>
                <span className="dok-verknuepft-titel">Quelle gelöscht</span>
                <span className="dok-verknuepft-meta">Die Aufgabe bleibt erhalten.</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Befehlszeile */

/** Befehlszeile (⌘K) über abgedunkeltem Grund mit erkanntem Termin als erster Zeile. */
export function BefehlszeileAnsicht() {
  return (
    <div className="ws-fu-buehne">
      <dialog open className="bz-palette ws-fu-bz">
        <div className="bz-kopf ist-fokus">
          <SymbolGrafik name="suche" />
          <span className="bz-eingabe ws-fu-bz-eingabe">Termin morgen 10 Uhr mit Lena Berger</span>
          <kbd>esc</kbd>
          <span className="symbolknopf bz-schliessen">
            <SymbolGrafik name="schliessen" />
          </span>
        </div>
        <div className="bz-liste">
          <div className="bz-zeile bz-erkannt ws-fu-gewaehlt">
            <Kachel name="kalender" variante="kachel-klein" />
            <span className="bz-text">
              <span className="bz-titel">Neuer Termin</span>
              <span className="bz-meta ws-fu-trenner">·</span>
              <span>Mi., 07.10.2026, 10:00 Uhr</span>
              <span className="bz-meta ws-fu-trenner">·</span>
              <span>mit Lena Berger</span>
            </span>
            <kbd>↵</kbd>
          </div>
          <div className="bz-gruppe ws-fu-weg-mobil">
            <p className="gruppentitel">Aktionen</p>
            <div className="bz-zeile">
              <SymbolGrafik name="email" />
              <span className="bz-text">
                <span>
                  Mail an <mark>Lena Berger</mark> schreiben
                </span>
              </span>
            </div>
          </div>
          <div className="bz-gruppe">
            <p className="gruppentitel">Kontakte</p>
            <div className="bz-zeile">
              <span className="avatar avatar-pink">LB</span>
              <span className="bz-text">
                <span>
                  <mark>Lena Berger</mark>
                </span>
                <span className="bz-meta">lena@hartmann-studio.de</span>
              </span>
            </div>
          </div>
          <div className="bz-gruppe ws-fu-weg-mobil">
            <p className="gruppentitel">Nachrichten</p>
            <div className="bz-zeile">
              <SymbolGrafik name="email" />
              <span className="bz-text">
                <span>Referenzprojekte für Frau Kaya</span>
                <span className="bz-meta">
                  <mark>Lena Berger</mark> · 06.10.2026
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="bz-fuss">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> auswählen
          </span>
          <span>
            <kbd>↵</kbd> ausführen
          </span>
          <span>
            <kbd>esc</kbd> schließen
          </span>
        </div>
      </dialog>
    </div>
  );
}

/* ------------------------------------------------------------------- Fokus */

/** Fokus-Sitzung: Start mit Dauerwahl und Teamstatus (aus) sowie laufende Sitzung mit Ring. */
export function FokusAnsicht() {
  return (
    <div className="ws-fu-fokus-bild">
      <div className="karte fok-start ws-fu-weg-mobil">
        <div className="fok-kopf">
          <Kachel name="fokus" variante="kachel-violett" />
          <div className="fok-kopf-text">
            <p className="karte-titel">Woran arbeitest du?</p>
            <p className="karte-text">Wähle eine Aufgabe oder starte ohne.</p>
          </div>
        </div>
        <div className="feldgruppe">
          <span className="option">
            <span className="pruef ws-fu-radio ws-fu-radio-an" />
            <span className="option-text">
              <span className="option-titel">Angebot Kaya überarbeiten</span>
              <span className="option-beschreibung">fällig 07.10.2026</span>
            </span>
          </span>
          <span className="option">
            <span className="pruef ws-fu-radio" />
            <span className="option-text">
              <span className="option-titel">Ohne Aufgabe</span>
            </span>
          </span>
        </div>
        <div className="feld">
          <span className="feld-label">Dauer</span>
          <div className="segment fok-dauer">
            <button type="button" tabIndex={-1} aria-pressed="false">
              25 min
            </button>
            <button type="button" tabIndex={-1} aria-pressed="true">
              50 min
            </button>
            <button type="button" tabIndex={-1} aria-pressed="false">
              90 min
            </button>
          </div>
        </div>
        <span className="option">
          <span className="schalter" />
          <span className="option-text">
            <span className="option-titel">Status „Im Fokus“ für das Team zeigen</span>
            <span className="option-beschreibung">Nur für diese Sitzung</span>
          </span>
        </span>
        <span className="knopf knopf-violett knopf-block">
          <SymbolGrafik name="start" />
          Fokus starten
        </span>
      </div>

      <div className="karte fok-sitzung">
        <div className="fok-ring">
          <svg className="fok-ring-grafik" viewBox="0 0 120 120" focusable="false">
            <circle className="fok-ring-spur" cx="60" cy="60" r="54" />
            <circle
              className="fok-ring-wert"
              cx="60"
              cy="60"
              r="54"
              pathLength={100}
              strokeDasharray="62.6 100"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="fok-ring-mitte">
            <p className="app-timer fok-zeit">
              <time dateTime="PT18M42S">18:42</time>
            </p>
            <p className="fok-zeit-zusatz">von 50:00</p>
          </div>
        </div>
        <div className="fok-info">
          <div className="fok-zeile">
            <span className="tag tag-violett">
              <SymbolGrafik name="fokus" />
              Fokus
            </span>
            <span className="fok-zaehler">Sitzung 2 von 4</span>
          </div>
          <div className="fok-aufgabe">
            <span className="gruppentitel">Aufgabe</span>
            <p className="app-seitentitel fok-aufgabe-titel">Angebot Kaya überarbeiten</p>
          </div>
          <p className="fok-hinweis">
            <SymbolGrafik name="glocke-aus" />
            Benachrichtigungen pausiert bis 11:30 Uhr
          </p>
          <div className="fok-aktionen">
            <span className="knopf knopf-violett">
              <SymbolGrafik name="pausieren" />
              Pausieren
            </span>
            <span className="knopf knopf-kontur">Sitzung beenden</span>
          </div>
        </div>
      </div>
    </div>
  );
}
