import { Link } from "react-router";
import { Abschnitt } from "~/komponenten/Abschnitt";
import { Bildschirm } from "~/komponenten/Bildschirm";
import {
  AufgabenAnsicht,
  BefehlszeileAnsicht,
  DokumentAnsicht,
  FokusAnsicht,
  HeuteAnsicht,
  KalenderAnsicht,
  PosteingangAnsicht,
  VerknuepfungAnsicht,
} from "~/komponenten/funktionen/Abbildungen";
import { Punkte, Tastenkuerzel, type Punkt } from "~/komponenten/funktionen/Teile";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { Kachel, SymbolGrafik } from "~/komponenten/SymbolGrafik";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { seitenMeta } from "~/lib/meta";
import { STAND } from "~/lib/seite";
import stil from "~/stile/funktionen.css?url";
import type { Route } from "./+types/funktionen";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Funktionen",
    beschreibung:
      "Posteingang unter eigener Domain, Kalender, Aufgaben und Dokumente, in beide Richtungen verknüpft, dazu Suche, Befehlszeile und Fokus-Werkzeuge, die nur du siehst.",
    pfad: "/funktionen",
  });
}

/* Ausbaustufen laut Plattformkonzept, Abschnitt „Produktmodule: MVP und Ausbaustufen“ */
const AUSBAU_1 = "ab Q4 2027";
const AUSBAU_2 = "2028";

const SPRUNGZIELE = [
  { anker: "heute", text: "Heute" },
  { anker: "posteingang", text: "Posteingang" },
  { anker: "kalender", text: "Kalender" },
  { anker: "aufgaben", text: "Aufgaben" },
  { anker: "dokumente", text: "Dokumente und Dateien" },
  { anker: "verknuepfungen", text: "Verknüpfungen" },
  { anker: "suche", text: "Suche und Befehlszeile" },
  { anker: "tastenkuerzel", text: "Tastenkürzel" },
  { anker: "fokus", text: "Fokus und Wohlbefinden" },
  { anker: "umzug", text: "Umzug, Geräte und Konto" },
  { anker: "grenzen", text: "Was workly nicht macht" },
];

const HEUTE: Punkt[] = [
  { text: "Zeitleiste deines Arbeitszeitfensters mit Terminen, Fokusblöcken und eingeplanten Aufgaben" },
  { text: "Fällige Aufgaben und markierte Mails des Tages" },
  { text: "Tagesabschluss am Ende des Arbeitszeitfensters mit Erledigtem und Offenem" },
];

const POSTEINGANG: Punkt[] = [
  { text: "Postfach unter eigener Domain mit DNS-Assistent, ab Privat" },
  { text: "Verbundenes Postfach per IMAP, auch in Free" },
  {
    text: (
      <>
        Aktionen per Taste: <kbd>E</kbd>&nbsp;Erledigt, <kbd>S</kbd>&nbsp;Später, <kbd>A</kbd>&nbsp;Als&nbsp;Aufgabe, <kbd>T</kbd>&nbsp;Als&nbsp;Termin
      </>
    ),
  },
  { text: "Zähler für Ungelesenes nur am Posteingang, abschaltbar" },
  { text: "Gruppenpostfächer", ab: AUSBAU_1 },
  { text: "Registrierung einer neuen Domain als Zusatzpaket", ab: AUSBAU_1 },
];

const KALENDER: Punkt[] = [
  { text: "Ansichten für Tag und Woche" },
  { text: "Einladungen nach dem Standard iCalendar" },
  { text: "Fokusblöcke, die nach außen als belegt gelten" },
  { text: "Abgleich per CalDAV mit den Kalender-Apps deiner Geräte" },
  { text: "Buchungsseite, über die andere Termine bei dir buchen", ab: AUSBAU_1 },
  { text: "Geteilte Kalender", ab: AUSBAU_1 },
];

const AUFGABEN: Punkt[] = [
  { text: "Ansichten als Liste und als Board" },
  { text: "Projekte, etwa eines je Kundin oder Auftrag" },
  { text: "Wiederholung für Aufgaben, die regelmäßig anfallen" },
  { text: "Zeitblock im Kalender aus jeder Aufgabe" },
  { text: "Zuweisung an Mitglieder eines Teams", ab: AUSBAU_1 },
];

const DOKUMENTE: Punkt[] = [
  { text: "Editor für Texte, Protokolle und Checklisten" },
  { text: "Ablage für Dateien mit Vorschau" },
  { text: "Versionen mit Datum und Uhrzeit" },
  { text: "Freigabelinks mit Ablaufdatum" },
  { text: "Gemeinsame Bearbeitung in Echtzeit", ab: AUSBAU_1 },
  { text: "Bearbeitung von Office-Dateien wird geprüft", ab: AUSBAU_2 },
];

const VERKNUEPFUNGEN: Punkt[] = [
  { text: "Aus einer Mail wird eine Aufgabe oder ein Termin" },
  { text: "Aus einer Aufgabe wird ein Termin" },
  { text: "Dokumente und Aufgaben verweisen aufeinander" },
  { text: "Jede Verknüpfung in beiden Richtungen sichtbar" },
  { text: "Verknüpfte Objekte bleiben erhalten, wenn die Quelle gelöscht wird, und tragen dann den Hinweis „Quelle gelöscht“" },
];

const SUCHE: Punkt[] = [
  { text: "Volltextsuche in Mails, Aufgaben und Dokumenten, einschließlich Text in PDFs" },
  { text: "Filter und Operatoren wie „von:“" },
  {
    text: (
      <>
        Befehlszeile mit <kbd>⌘K</kbd> bzw. <kbd>Strg+K</kbd> für Aktionen, Kontakte, Nachrichten und Dokumente
      </>
    ),
  },
  { text: "Termine per Befehlszeile, etwa „Termin morgen 10 Uhr mit Lena Berger“" },
  { text: "Fragen in natürlicher Sprache, übersetzt in sichtbare Filter", ab: AUSBAU_1 },
];

const FOKUS: Punkt[] = [
  { text: "Fokus-Sitzung mit 25, 50 oder 90 Minuten, in der Benachrichtigungen pausieren" },
  { text: "Fokusblöcke, die nach außen als belegt gelten" },
  { text: "Arbeitszeitfenster mit gebündelten Benachrichtigungen und dem Vorschlag, abends geschriebene Mails „morgen um 08:00 Uhr“ zu senden" },
  { text: "Hinweis zur Termindichte ab einer Schwelle, die du wählst (Vorgabe 80 %), nur wenn du ihn einschaltest" },
  { text: "Pausenvorschlag und privater Wochenrückblick, beide nur nach deiner Zustimmung", ab: AUSBAU_1 },
];

const GRUNDSAETZE = [
  {
    titel: "Nur für dich sichtbar",
    text: "Hinweise beruhen auf deinen Terminen, Fokusblöcken und deinem Arbeitszeitfenster, und nur du siehst sie. Den Status „Im Fokus bis 11:30 Uhr“ sieht dein Team nur, wenn du ihn für diese Sitzung einschaltest.",
  },
  {
    titel: "Keine Auswertung für Vorgesetzte",
    text: "Keine Ansicht, kein Export und keine Schnittstelle gibt Fokus- oder Arbeitszeiten einzelner Personen an Admins oder Vorgesetzte weiter.",
  },
  {
    titel: "Keine Aussage über deinen Zustand",
    text: "workly nennt Termindichte, Lücken und Fokuszeit und zeigt, wie es rechnet. Es vergibt keine Punktwerte und vergleicht dich mit niemandem.",
  },
];

const BEISPIELSAETZE: { satz: string; funktion: string; ab?: string }[] = [
  { satz: "„Dein Dienstag ist zu 85 % verplant.“", funktion: "Hinweis zur Termindichte" },
  {
    satz: "„Seit 13:00 Uhr hattest du keine Lücke über 15 Minuten. Pause einplanen?“",
    funktion: "Pausenvorschlag",
    ab: AUSBAU_1,
  },
  {
    satz: "„Diese Woche 6 Stunden Fokuszeit, in der Vorwoche 4 Stunden.“",
    funktion: "Privater Wochenrückblick",
    ab: AUSBAU_1,
  },
];

const UMZUG: { titel: string; symbol: "hochladen" | "aktualisieren" | "schloss"; punkte: Punkt[] }[] = [
  {
    titel: "Umzug",
    symbol: "hochladen",
    punkte: [
      { text: "Import per IMAP und aus .ics- und CSV-Dateien" },
      { text: "Fehlerliste je Objekt, wenn etwas nicht übernommen wird" },
      { text: "Bisheriges Postfach bleibt per IMAP verbunden, bis du umstellst" },
      { text: "Geführte Umzüge aus Google, Microsoft und Apple", ab: AUSBAU_1 },
    ],
  },
  {
    titel: "Geräte",
    symbol: "aktualisieren",
    punkte: [
      { text: "Web-App für Rechner und Telefon" },
      { text: "Mail, Kalender und Kontakte in den Apps deiner Geräte per IMAP, CalDAV und CardDAV" },
      { text: "Native Apps für Telefone", ab: AUSBAU_2 },
    ],
  },
  {
    titel: "Konto",
    symbol: "schloss",
    punkte: [
      { text: "Registrierung ohne Zahlungsdaten" },
      { text: "Anmeldung mit Passkey und zweitem Faktor" },
      { text: "Tarifwechsel wirkt sofort und anteilig" },
      { text: "Kündigung ohne Support" },
      { text: "Export ohne Support: Mails als EML, Termine als ICS, Kontakte als VCF, Dokumente als Markdown" },
    ],
  },
];

const GRENZEN = [
  {
    titel: "Kein Chat, keine Videokonferenz",
    text: "workly bleibt bei Mail, Kalender, Aufgaben und Dokumenten. Beides ist nicht geplant.",
  },
  {
    titel: "Keine Punkte, Serien oder Ranglisten",
    text: "Vergleichsdruck passt nicht zu geschützter Fokuszeit.",
  },
  {
    titel: "Keine Erkennung von Stress oder Stimmung",
    text: "Tastatur und Maus, Bildschirmzeit, Stimme und Kamerabild wertet workly nicht aus.",
  },
  {
    titel: "Kein Self-Hosting",
    text: "workly betreibt die Plattform selbst. Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland.",
  },
  {
    titel: "Töne ab Werk aus",
    text: "Du schaltest sie in den Einstellungen ein, wenn du sie hören willst.",
  },
];

export default function Seite() {
  return (
    <>
      <Seitenkopf
        akzent="Vier Bausteine,"
        rest="ein Programm."
        lead="Posteingang, Kalender, Aufgaben und Dokumente teilen sich eine Oberfläche, eine Suche und einen Tagesplan. Was du in einem Modul anlegst, siehst du in den anderen."
        kacheln={[{ name: "posteingang" }, { name: "kalender" }, { name: "aufgaben" }, { name: "dokumente" }]}
        aktionen={
          <>
            <Link to="/warteliste" className="knopf knopf-primaer knopf-gross" prefetch="intent">
              Warteliste beitreten
            </Link>
            <Link to="/tarife" className="knopf knopf-kontur knopf-gross" prefetch="intent">
              Tarife ansehen
            </Link>
          </>
        }
      />

      <nav className="ws-fu-sprung" aria-labelledby="fu-sprung-titel">
        <div className="ws-rahmen ws-fu-sprung-innen">
          <p className="gruppentitel ws-fu-sprung-titel" id="fu-sprung-titel">
            Auf dieser Seite
          </p>
          <ul className="ws-fu-sprung-liste" role="list">
            {SPRUNGZIELE.map((ziel) => (
              <li key={ziel.anker}>
                <a className="ws-fu-sprung-link" href={`#${ziel.anker}`}>
                  {ziel.text}
                </a>
              </li>
            ))}
          </ul>
          <p className="ws-fu-stand">
            Stand {STAND}. Die Registrierung für alle öffnet im September 2027. Funktionen mit einem Datum wie „{AUSBAU_1}“ folgen danach.
          </p>
        </div>
      </nav>

      <Abschnitt
        id="fu-heute"
        anker="heute"
        className="ws-fu-modul ws-fu-breit"
        kicker={<Kachel name="heute" />}
        titel="Heute"
        lead="Die Ansicht Heute zeigt, was dein Arbeitstag schon enthält und wo noch Zeit frei ist. Ziehst du eine Aufgabe in eine Lücke, legt workly dafür einen Zeitblock im Kalender an."
      >
        <Punkte punkte={HEUTE} />
        <Bildschirm
          className="ws-fu-bild ws-fu-unten"
          beschreibung="Ansicht Heute am Dienstag, 06.10.2026: Zeitleiste mit Abstimmung, Fokusblock, eingeplanter Aufgabe und Mittagspause, daneben fällige Aufgaben und markierte Mails."
        >
          <HeuteAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-posteingang"
        anker="posteingang"
        flaeche
        className="ws-fu-modul ws-fu-neben"
        kicker={<Kachel name="posteingang" />}
        titel="Posteingang"
        lead="Im Posteingang wird aus einer Mail mit einer Taste eine Aufgabe oder ein Termin. Mails empfängst du unter deiner eigenen Domain oder aus einem bisherigen Postfach, das du per IMAP verbindest."
      >
        <Punkte punkte={POSTEINGANG} />
        <Bildschirm
          className="ws-fu-bild ws-fu-rechts"
          beschreibung="Posteingang mit drei ungelesenen Mails; an der Mail von Aylin Kaya ist das Menü mit Antworten, Als Aufgabe, Als Termin, Später und Erledigt samt Tasten geöffnet."
        >
          <PosteingangAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-kalender"
        anker="kalender"
        className="ws-fu-modul ws-fu-breit"
        kicker={<Kachel name="kalender" />}
        titel="Kalender"
        lead="Der Kalender zeigt Termine, Fokusblöcke und eingeplante Aufgaben als Tag oder Woche. Planst du eine Aufgabe ein, verknüpft workly Aufgabe, Termin und die Mail, aus der sie stammt."
      >
        <Punkte punkte={KALENDER} />
        <Bildschirm
          className="ws-fu-bild ws-fu-unten"
          beschreibung="Wochenansicht vom 5. bis 11. Oktober 2026 mit Terminen, Fokusblöcken, eingeplanten Aufgaben und abgetönter Zeit außerhalb des Arbeitszeitfensters."
        >
          <KalenderAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-aufgaben"
        anker="aufgaben"
        flaeche
        className="ws-fu-modul ws-fu-breit"
        kicker={<Kachel name="aufgaben" />}
        titel="Aufgaben"
        lead="Aufgaben ordnest du in Projekten, als Liste oder als Board. Jede Aufgabe lässt sich als Zeitblock in den Kalender legen; die Mail, aus der sie stammt, bleibt verknüpft."
      >
        <Punkte punkte={AUFGABEN} />
        <Bildschirm
          className="ws-fu-bild ws-fu-unten"
          beschreibung="Board des Projekts „Angebot Kaya“ mit den Spalten Offen, In Arbeit, Wartet und Erledigt, darunter eine Aufgabe, die sich jeden Freitag wiederholt, und eine eingeplante Aufgabe."
        >
          <AufgabenAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-dokumente"
        anker="dokumente"
        className="ws-fu-modul ws-fu-breit"
        kicker={<Kachel name="dokumente" />}
        titel="Dokumente und Dateien"
        lead="Texte, Protokolle und Checklisten schreibst du direkt in workly. Dateien legst du in der Ablage ab, mit Vorschau, Versionen und Freigabelinks, die nach einer Frist ablaufen."
      >
        <Punkte punkte={DOKUMENTE} />
        <Bildschirm
          className="ws-fu-bild ws-fu-unten"
          beschreibung="Protokoll im Editor mit einer Checkliste, deren Punkte mit Aufgaben verknüpft sind, daneben ein Freigabelink mit Ablaufdatum und die Versionen."
        >
          <DokumentAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-verknuepfungen"
        anker="verknuepfungen"
        flaeche
        className="ws-fu-modul ws-fu-neben"
        kicker={<Kachel name="verknuepfen" />}
        titel="Verknüpfungen"
        lead="Aus einer Kundenanfrage wird eine Aufgabe, aus der Aufgabe ein Zeitblock, und das Angebot hängt als Dokument daran. Von jedem dieser Teile aus findest du die anderen."
      >
        <Punkte punkte={VERKNUEPFUNGEN} />
        <Bildschirm
          className="ws-fu-bild ws-fu-rechts"
          beschreibung="Die Mail von Aylin Kaya nennt die daraus entstandene Aufgabe und das Angebot, die Aufgabe nennt Mail, Zeitblock und Dokument, und eine weitere Aufgabe trägt den Hinweis „Quelle gelöscht“."
        >
          <VerknuepfungAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-suche"
        anker="suche"
        className="ws-fu-modul ws-fu-neben"
        kicker={<Kachel name="suche" />}
        titel="Suche und Befehlszeile"
        lead="Die Suche findet Text in Mails, Aufgaben und Dokumenten, auch in PDFs. Mit der Befehlszeile legst du Aufgaben und Termine an, ohne das Modul zu wechseln."
      >
        <Punkte punkte={SUCHE} />
        <Bildschirm
          className="ws-fu-bild ws-fu-rechts"
          beschreibung="Befehlszeile mit der Eingabe „Termin morgen 10 Uhr mit Lena Berger“; die erste Zeile zeigt den erkannten Termin am Mittwoch, 07.10.2026, um 10:00 Uhr."
        >
          <BefehlszeileAnsicht />
        </Bildschirm>
      </Abschnitt>

      <Abschnitt
        id="fu-kuerzel"
        anker="tastenkuerzel"
        flaeche
        className="ws-fu-modul ws-fu-neben"
        titel="Tastenkürzel"
        lead="Tastenkürzel gelten in allen Modulen gleich. Einzeltasten wie E oder S wirken nur, solange kein Eingabefeld aktiv ist, und lassen sich in den Einstellungen abschalten."
      >
        <Tastenkuerzel className="ws-fu-rechts" />
      </Abschnitt>

      <Abschnitt
        id="fu-fokus"
        anker="fokus"
        className="ws-fu-modul ws-fu-breit"
        kicker={<Kachel name="fokus" variante="kachel-violett" />}
        titel="Fokus und Wohlbefinden"
        lead="Fokus-Werkzeuge schützen Zeit für konzentrierte Arbeit. Sie rechnen nur mit Daten, die du selbst erzeugst, etwa Terminen und Fokusblöcken, und was sie zeigen, siehst nur du."
      >
        <Punkte punkte={FOKUS} />
        <Bildschirm
          className="ws-fu-bild ws-fu-unten"
          beschreibung="Start einer Fokus-Sitzung mit der Wahl zwischen 25, 50 und 90 Minuten und eine laufende Sitzung mit 18:42 Minuten Restzeit, in der Benachrichtigungen bis 11:30 Uhr pausieren."
        >
          <FokusAnsicht />
        </Bildschirm>
        <div className="ws-fu-unten ws-fu-fokus-unten">
          <div className="ws-fu-fokus-spalte">
            <h3 className="ws-fu-h3">Grundsätze</h3>
            <ul className="ws-fu-grundsaetze" role="list">
              {GRUNDSAETZE.map((g) => (
                <li key={g.titel}>
                  <p className="ws-fu-grundsatz-titel">{g.titel}</p>
                  <p className="ws-fu-grundsatz-text">{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="ws-fu-fokus-spalte">
            <h3 className="ws-fu-h3">So spricht workly</h3>
            <ul className="ws-fu-saetze" role="list">
              {BEISPIELSAETZE.map((b) => (
                <li key={b.funktion} className="karte ws-fu-satz">
                  <p className="ws-fu-satz-text">{b.satz}</p>
                  <p className="ws-fu-satz-quelle">
                    {b.funktion}
                    {b.ab ? (
                      <>
                        {" "}
                        <span className="tag">{b.ab}</span>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Abschnitt>

      <Abschnitt
        id="fu-umzug"
        anker="umzug"
        flaeche
        titel="Umzug, Geräte und Konto"
        lead="workly arbeitet mit Standardprotokollen. Dein bisheriges Postfach bleibt verbunden, bis du umstellst, und die Apps auf deinen Geräten greifen weiter auf Mail, Kalender und Kontakte zu."
      >
        <ul className="ws-fu-karten" role="list">
          {UMZUG.map((karte) => (
            <li key={karte.titel} className="karte ws-fu-karte">
              <h3 className="ws-fu-karte-titel">
                <SymbolGrafik name={karte.symbol} />
                {karte.titel}
              </h3>
              <Punkte punkte={karte.punkte} />
            </li>
          ))}
        </ul>
      </Abschnitt>

      <Abschnitt id="fu-grenzen" anker="grenzen" titel="Was workly nicht macht" lead="Einiges lässt workly mit Absicht weg.">
        <ul className="ws-fu-grenzen" role="list">
          {GRENZEN.map((g) => (
            <li key={g.titel}>
              <h3 className="ws-fu-grenze-titel">{g.titel}</h3>
              <p className="ws-fu-grenze-text">{g.text}</p>
            </li>
          ))}
        </ul>
      </Abschnitt>

      <WartelisteBand id="fu-warteliste" />
    </>
  );
}
