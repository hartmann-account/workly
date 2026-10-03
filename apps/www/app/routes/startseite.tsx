import { Link } from "react-router";
import { Abschnitt } from "~/komponenten/Abschnitt";
import { Bildschirm } from "~/komponenten/Bildschirm";
import {
  AngebotVerknuepft,
  DienstagZeitleiste,
  MailMitVorschlag,
  VerlaufZusammenfassung,
} from "~/komponenten/startseite/Abbildungen";
import { Kachel, SymbolGrafik } from "~/komponenten/SymbolGrafik";
import { Tarifkarten } from "~/komponenten/Tarifkarten";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { CLAIM, STANDORT_SATZ } from "~/lib/seite";
import { seitenMeta } from "~/lib/meta";
import stil from "~/stile/startseite.css?url";
import type { Route } from "./+types/startseite";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    beschreibung:
      "workly verbindet E-Mail unter eigener Domain, Kalender, Aufgaben und Dokumente in einem Programm für Selbstständige. Registrierung ab September 2027.",
    pfad: "/",
  });
}

/** Drei Nutzenachsen der Funktionskarten; Reihenfolge und Farben fest (Blau, Pink, Violett). */
const ACHSEN = [
  {
    name: "Effizienz",
    farbe: "kategorie-blau",
    punkte: [
      "E-Mail per Tastendruck als Aufgabe oder Termin",
      "Tagesansicht Heute mit Terminen, fälligen Aufgaben und markierten Mails",
      "Vorschläge des Assistenten, übernommen erst nach deinem Klick",
    ],
  },
  {
    name: "Freude",
    farbe: "kategorie-pink",
    punkte: [
      "Tastenkürzel für Suche, Befehlszeile und Posteingang",
      "Leere Bereiche nennen den nächsten Schritt",
      "Tagesabschluss mit Erledigtem und Offenem",
    ],
  },
  {
    name: "Fokus und Wohlbefinden",
    farbe: "kategorie-violett",
    punkte: [
      "Fokus-Sitzung mit 25, 50 oder 90 Minuten",
      "Fokusblöcke gelten nach außen als belegt",
      "Abends geschriebene Mails sendet workly auf Wunsch erst um 08:00 Uhr",
    ],
  },
];

export default function Startseite() {
  return (
    <>
      {/* 1. Held */}
      <section className="he-held ws-st-held" aria-labelledby="he-titel">
        <div className="he-innen">
          <div className="he-text">
            <h1 className="he-titel marke-held" id="he-titel">
              <span className="akzent-wort">Aus Mails werden</span>
              <br /> Termine und Aufgaben.
            </h1>
            <ul className="he-werte" role="list" aria-label="Wofür workly steht">
              <li className="kategorie kategorie-versal kategorie-blau">Effizienz</li>
              <li className="kategorie kategorie-versal kategorie-pink">Freude</li>
              <li className="kategorie kategorie-versal kategorie-violett">Fokus</li>
            </ul>
            <p className="he-lead marke-text">
              workly verbindet Posteingang, Kalender, Aufgaben und Dokumente in einem Programm für Selbstständige.
              Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland.
            </p>
            <div className="he-aktionen">
              <Link className="knopf knopf-primaer knopf-gross" to="/warteliste" prefetch="intent">
                Warteliste beitreten
              </Link>
              <Link className="knopf knopf-zweit knopf-gross" to="/funktionen" prefetch="intent">
                Funktionen ansehen
              </Link>
            </div>
            <p className="ws-st-held-hinweis">Registrierung ab September 2027</p>
          </div>
          <div className="he-bild" aria-hidden="true">
            <span className="he-kreis" />
            <div className="he-kacheln">
              <Kachel name="email" variante="kachel-gross" />
              <Kachel name="kalender" variante="kachel-gross" />
              <Kachel name="aufgaben" variante="kachel-gross" />
              <Kachel name="dokumente" variante="kachel-gross" />
              <Kachel name="fokus" variante="kachel-gross kachel-violett" />
              <Kachel name="haken" variante="kachel-gross kachel-pink" />
            </div>
            <div className="karte karte-verlauf vl-original he-bildkarte">
              <span className="wortmarke sy-auf-verlauf" />
              <span className="he-bildkarte-text">Ein Programm.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dunkle Staffel: das Problem in drei Sätzen */}
      <div className="statement he-statement he-statement-dunkel ws-st-staffel" data-theme="dunkel">
        <p className="he-staffel">
          <span className="he-zeile he-zeile-erste">Die Anfrage kommt per Mail.</span>{" "}
          <span className="he-zeile">Die Frist steht im Kalender.</span>{" "}
          <span className="he-zeile">Die Aufgabe liegt in einer dritten App.</span>
        </p>
      </div>

      {/* 3. Funktionskarten */}
      <section className="ws-abschnitt" aria-labelledby="fk-titel">
        <div className="ws-rahmen">
          <div className="fk-raster">
            <div className="karte karte-verlauf vl-original fk-aufmacher">
              <h2 className="fk-aussage" id="fk-titel">
                <span className="fk-oberzeile">workly bringt E-Mail, Kalender, Aufgaben und Dokumente</span>{" "}
                <span className="fk-hauptzeile">in ein System.</span>
              </h2>
              <div className="fk-fuss">
                <div className="fk-symbole" aria-hidden="true">
                  <SymbolGrafik name="email" />
                  <SymbolGrafik name="kalender" />
                  <SymbolGrafik name="aufgaben" />
                  <SymbolGrafik name="dokumente" />
                </div>
                <p className="fk-claim" lang="en">
                  {CLAIM}
                </p>
              </div>
            </div>
            <ul className="fk-karten" role="list">
              {ACHSEN.map((achse) => (
                <li key={achse.name} className="karte funktionskarte">
                  <h3 className={`kategorie ${achse.farbe}`}>{achse.name}</h3>
                  <ul className="hakenliste" role="list">
                    {achse.punkte.map((punkt) => (
                      <li key={punkt}>{punkt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Anwendungsfall Segment A */}
      <Abschnitt
        id="fall-titel"
        titel="Von der Anfrage zum geplanten Dienstag"
        lead="Eine Kundin bittet per Mail um ein Angebot. In drei Schritten planst du die Arbeit daran, ohne das Programm zu wechseln."
        flaeche
        className="ws-st-fall"
      >
        <ol className="ws-st-schritte" role="list">
          <li className="ws-st-schritt">
            <div className="ws-st-schritt-text">
              <span className="ws-st-nummer" aria-hidden="true">
                1
              </span>
              <h3 className="ws-st-schritt-titel">Aus der Mail wird eine Aufgabe</h3>
              <p>
                Aylin Kaya bittet um ein Angebot bis Freitag, 09.10.2026. Der Assistent schlägt dazu eine Aufgabe mit
                Fälligkeit und Projekt vor, die du mit einem Klick übernimmst.
              </p>
            </div>
            <Bildschirm
              className="ws-st-abbildung"
              beschreibung="Mail von Aylin Kaya mit dem Vorschlag des Assistenten, die Aufgabe „Angebot an Frau Kaya senden“, fällig am Freitag, 09.10.2026, anzulegen."
            >
              <MailMitVorschlag />
            </Bildschirm>
          </li>
          <li className="ws-st-schritt">
            <div className="ws-st-schritt-text">
              <span className="ws-st-nummer" aria-hidden="true">
                2
              </span>
              <h3 className="ws-st-schritt-titel">Ein Zeitblock am Dienstag</h3>
              <p>
                Du ziehst die Aufgabe in eine Lücke am Dienstag, 06.10.2026. Im Kalender steht sie danach als
                Zeitblock, 11:30 – 12:30 Uhr.
              </p>
            </div>
            <Bildschirm
              className="ws-st-abbildung"
              beschreibung="Zeitleiste für Dienstag, 06.10.2026, mit der eingeplanten Aufgabe „Angebot an Frau Kaya senden“, 11:30 – 12:30 Uhr, nach einem Termin und einem Fokusblock."
            >
              <DienstagZeitleiste />
            </Bildschirm>
          </li>
          <li className="ws-st-schritt">
            <div className="ws-st-schritt-text">
              <span className="ws-st-nummer" aria-hidden="true">
                3
              </span>
              <h3 className="ws-st-schritt-titel">Das Angebot hängt an der Aufgabe</h3>
              <p>
                Du schreibst das Angebot als Dokument und verknüpfst es mit der Aufgabe. Jede Verknüpfung siehst du
                von beiden Seiten, in der Mail wie im Dokument.
              </p>
            </div>
            <Bildschirm
              className="ws-st-abbildung"
              beschreibung="Dokument „Angebot Website“ mit den verknüpften Objekten Mail, Aufgabe und Termin; die Mail von Aylin Kaya zeigt umgekehrt Aufgabe, Termin und Dokument."
            >
              <AngebotVerknuepft />
            </Bildschirm>
          </li>
        </ol>
        <p className="ws-fussnote ws-st-fall-fussnote">
          Der Assistent ist ab Werk aus. Nach deiner Zustimmung macht er in Pro Vorschläge zu bis zu 25 eingehenden
          Mails am Tag, in Privat nur zu Mails, die du auswählst. Ohne Assistent legst du mit der Taste A eine Aufgabe
          aus der Mail an und trägst Titel und Fälligkeit selbst ein.
        </p>
      </Abschnitt>

      {/* 5. Assistent */}
      <Abschnitt
        id="assistent-titel"
        kicker="Assistent"
        titel="Claude bereitet vor. Du entscheidest."
        className="ws-st-assistent-abschnitt"
        lead="Der Assistent ist Claude, ein KI-Modell von Anthropic. Er fasst lange Verläufe zusammen, schlägt Aufgaben aus Mails vor und entwirft Antworten."
      >
        <div className="ws-st-assistent">
          <div className="ws-st-assistent-text">
            <ul className="hakenliste ws-st-haken" role="list">
              <li>Ab Werk aus, läuft erst nach deiner Zustimmung</li>
              <li>Versendet, löscht und teilt nichts ohne deinen Klick</li>
              <li>Jede Aussage über deine Inhalte verlinkt die Fundstelle</li>
              <li>Bewertet weder Leistung noch Stimmung</li>
            </ul>
            <p className="ws-fussnote">
              Zum Start verarbeitet die Anthropic-API KI-Anfragen außerhalb der EU. Das sagt dir der Zustimmungsdialog,
              bevor du den Assistenten einschaltest.
            </p>
            <Link className="ws-st-link" to="/assistent" prefetch="intent">
              Wie der Assistent arbeitet
              <SymbolGrafik name="pfeil-rechts" />
            </Link>
          </div>
          <Bildschirm
            className="ws-st-abbildung"
            beschreibung="Zusammenfassung des Assistenten zum Verlauf „Angebot Website“ mit Stand, offener Frage und Zusage, jeder Punkt mit Verweis auf die Nachricht."
          >
            <VerlaufZusammenfassung />
          </Bildschirm>
        </div>
      </Abschnitt>

      {/* 6. Speicherort und Ausstieg */}
      <Abschnitt id="speicherort-titel" titel="Wo deine Inhalte liegen" flaeche className="ws-st-speicherort">
        <ul className="ws-st-orte" role="list">
          <li className="karte ws-st-ort">
            <SymbolGrafik name="ort" className="symbol sy-symbol-gross" />
            <h3 className="ws-st-ort-titel">Speicherort</h3>
            <p>{STANDORT_SATZ}</p>
            <p>Die Rechenzentren betreibt Hetzner in Falkenstein und Nürnberg.</p>
          </li>
          <li className="karte ws-st-ort">
            <SymbolGrafik name="verknuepfen" className="symbol sy-symbol-gross" />
            <h3 className="ws-st-ort-titel">Standards</h3>
            <p>Mail, Kalender und Kontakte laufen über IMAP, SMTP, CalDAV und CardDAV.</p>
            <p>Die Mail- und Kalender-Apps auf deinem Telefon und Rechner kannst du weiter nutzen.</p>
          </li>
          <li className="karte ws-st-ort">
            <SymbolGrafik name="herunterladen" className="symbol sy-symbol-gross" />
            <h3 className="ws-st-ort-titel">Ausstieg</h3>
            <p>
              Den Export startest du jederzeit selbst. Er liefert Mails als EML, Termine als ICS, Kontakte als VCF und
              Dokumente als Markdown.
            </p>
            <p>Auch die Kündigung geht ohne Support.</p>
          </li>
        </ul>
        <p className="ws-st-weiter">
          <Link className="ws-st-link" to="/sicherheit" prefetch="intent">
            Zu Sicherheit und Datenschutz
            <SymbolGrafik name="pfeil-rechts" />
          </Link>
        </p>
      </Abschnitt>

      {/* 7. Tarife */}
      <div className="ws-abschnitt ws-st-tarife">
        <Tarifkarten titel="Geplante Tarife" erweiterungen={false} />
        <p className="ws-rahmen ws-st-tarife-weiter">
          <Link className="ws-st-link" to="/tarife" prefetch="intent">
            Alle Tarife vergleichen
            <SymbolGrafik name="pfeil-rechts" />
          </Link>
        </p>
      </div>

      {/* 8. Warteliste */}
      <WartelisteBand />
    </>
  );
}
