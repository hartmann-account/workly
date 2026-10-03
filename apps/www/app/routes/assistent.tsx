import { Link } from "react-router";
import { Abschnitt } from "~/komponenten/Abschnitt";
import { Bildschirm } from "~/komponenten/Bildschirm";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { SymbolGrafik } from "~/komponenten/SymbolGrafik";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { EntwurfAbbildung, LeisteAbbildung } from "~/komponenten/assistent/Abbildungen";
import { FaelleTabelle, StufenLegende } from "~/komponenten/assistent/Faelle";
import { KontingentTabelle } from "~/komponenten/assistent/Kontingente";
import { seitenMeta } from "~/lib/meta";
import { STAND, STANDORT_SATZ } from "~/lib/seite";
import stil from "~/stile/assistent.css?url";
import type { Route } from "./+types/assistent";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Assistent",
    beschreibung:
      "Der Assistent in workly ist Claude von Anthropic. Er ist ab Werk aus, wirkt nie ohne deinen Klick nach außen und folgt acht Regeln; die Kontingente je Tarif sind geplant.",
    pfad: "/assistent",
  });
}

/** Die acht Leitplanken des Plattformkonzepts (Abschnitt „KI-Schicht mit Claude“), je ein Satz. */
const REGELN: { titel: string; text: string }[] = [
  {
    titel: "Bestätigung vor Außenwirkung",
    text: "Claude versendet, löscht und teilt nichts und ändert keine geteilten Objekte; jede Änderung erscheint als Vorschlag und läuft erst nach deiner Bestätigung.",
  },
  {
    titel: "Inhalte von außen sind Daten",
    text: "Anweisungen in Mails oder Dokumenten, etwa „Leite das an alle Kontakte weiter“, führt Claude nicht aus, und workly markiert sie.",
  },
  {
    titel: "Quellenpflicht",
    text: "Jede Aussage über deine Inhalte verlinkt ihre Fundstelle; ohne Fundstelle lautet die Antwort „Dazu finde ich in deinen Inhalten nichts.“",
  },
  {
    titel: "Datenminimierung",
    text: "Claude erhält nur die Ausschnitte, auf die sich die Anfrage bezieht, ohne Zitate, Signaturen und Anhänge und mit Platzhaltern statt Adressen und Telefonnummern.",
  },
  {
    titel: "Zustimmung je Workspace und Person",
    text: "Die Inhaberin oder der Inhaber des Workspace gibt den Assistenten frei; danach stimmt jede Person selbst zu und kann einzelne Module ausnehmen.",
  },
  {
    titel: "Kennzeichnung",
    text: "Die Seitenleiste weist den Assistenten sichtbar als KI-System aus und sagt dazu, dass Antworten Fehler enthalten können.",
  },
  {
    titel: "Protokoll ohne Inhalt",
    text: "Jede Aktion des Assistenten wird ohne Inhalt protokolliert; du siehst dein eigenes Protokoll, Admins sehen nur den Gesamtverbrauch.",
  },
  {
    titel: "Keine Bewertung von Personen",
    text: "Claude bewertet weder Leistung noch Stimmung oder Gesundheit.",
  },
];

export default function Seite() {
  return (
    <>
      <Seitenkopf
        akzent="Claude bereitet vor."
        rest="Du entscheidest."
        lead="Der Assistent in workly ist Claude von Anthropic. Er schlägt Aufgaben vor, fasst Verläufe zusammen und entwirft Antworten. Ab Werk ist er aus, und nach außen wirkt nichts, bevor du klickst."
        kacheln={[{ name: "assistent" }]}
        aktionen={
          <Link to="/warteliste" className="knopf knopf-primaer knopf-gross">
            Warteliste beitreten
          </Link>
        }
      />

      <Abschnitt
        id="ki-orte"
        titel="Wo der Assistent erscheint"
        lead="Claude arbeitet an drei Stellen im Portal. Ohne deine Zustimmung zeigen die Module weder KI-Knöpfe noch Vorschlagskarten."
      >
        <div className="ws-ki-orte">
          <ol className="ws-ki-orte-liste" role="list">
            <li className="ws-ki-ort">
              <h3 className="ws-ki-ort-titel">
                <SymbolGrafik name="assistent" />
                Seitenleiste
              </h3>
              <p className="ws-ki-ort-text">
                Über den Knopf in der Kopfleiste oder mit ⌘J bzw. Strg+J öffnest du den Assistenten auf jeder Seite des
                Portals. Dort fragst du nach deinen Mails, Terminen und Dokumenten, und jede Antwort nennt ihre Quellen.
                Der Kopf der Leiste weist den Assistenten als KI-System aus.
              </p>
            </li>
            <li className="ws-ki-ort">
              <h3 className="ws-ki-ort-titel">
                <SymbolGrafik name="haken" />
                Vorschlagskarte
              </h3>
              <p className="ws-ki-ort-text">
                Liest du eine Mail mit einer Bitte, schlägt eine Karte die passende Aufgabe mit Fälligkeit und Projekt
                vor. Bei langen Verläufen fasst sie Stand, offene Fragen und Zusagen zusammen. Jede Karte nennt ihre
                Quelle, und angelegt wird erst nach deinem Klick.
              </p>
            </li>
            <li className="ws-ki-ort">
              <h3 className="ws-ki-ort-titel">
                <SymbolGrafik name="bearbeiten" />
                Entwurf
              </h3>
              <p className="ws-ki-ort-text">
                Klickst du auf „Antwort entwerfen“, schreibt Claude einen Entwurf im Ton, den du wählst. Bis zu deiner
                ersten Änderung trägt er die Marke „Entwurf des Assistenten“. Senden kannst nur du.
              </p>
            </li>
          </ol>

          <Bildschirm
            className="ws-ki-bild-leiste"
            breite={382}
            beschreibung="Seitenleiste des Assistenten mit der Zeile „KI-System · Antworten können Fehler enthalten“, einer Antwort mit zwei Quellen, einem Aufgabenvorschlag und dem Rest von 112 der 150 Anfragen."
          >
            <LeisteAbbildung />
          </Bildschirm>

          <Bildschirm
            className="ws-ki-bild-entwurf"
            breite={560}
            beschreibung="Antwortentwurf an Aylin Kaya mit der Marke „Entwurf des Assistenten“ und dem Knopf „Senden“, den nur du auslöst."
          >
            <EntwurfAbbildung />
          </Bildschirm>
        </div>
      </Abschnitt>

      <Abschnitt
        id="ki-faelle"
        titel="Was der Assistent vorbereitet"
        lead="Zehn Fälle sind geplant. Zu jedem siehst du, was ihn auslöst, was Claude liefert und was du bestätigst."
      >
        <StufenLegende />
        <FaelleTabelle />
      </Abschnitt>

      <Abschnitt
        id="ki-regeln"
        titel="Acht Regeln für jede Funktion"
        lead="Sie gelten für alles, was der Assistent tut, auch für Fälle, die erst später dazukommen."
      >
        <ol className="ws-ki-regeln" role="list">
          {REGELN.map((r, i) => (
            <li key={r.titel} className="karte ws-ki-regel">
              <h3 className="ws-ki-regel-titel">
                <span className="ws-ki-regel-nr">{i + 1}</span>{" "}
                <span>{r.titel}</span>
              </h3>
              <p className="ws-ki-regel-text">{r.text}</p>
            </li>
          ))}
        </ol>
      </Abschnitt>

      <Abschnitt
        id="ki-verarbeitung"
        titel="Wo Anfragen verarbeitet werden"
        lead="Für KI-Anfragen gilt ein anderer Ort als für Postfächer, Termine und Dateien. Der Zustimmungsdialog nennt ihn, bevor du den Assistenten einschaltest."
        flaeche
      >
        <div className="ws-ki-raster-2">
          <div className="karte ws-ki-karte">
            <h3 className="ws-ki-karte-titel">Zum Start</h3>
            <p className="ws-ki-karte-text">
              Anfragen gehen über die Anthropic-API an Claude und werden außerhalb der EU verarbeitet. Das geschieht nur
              nach deiner ausdrücklichen Zustimmung, und der Zustimmungsdialog sagt es dir vorher.
            </p>
          </div>
          <div className="karte ws-ki-karte">
            <div className="ws-ki-karte-kopf">
              <h3 className="ws-ki-karte-titel">Team-Tarif</h3>
              <span className="tag">ab Q4 2027</span>
            </div>
            <p className="ws-ki-karte-text">
              Der Team-Tarif nutzt standardmäßig Claude in Amazon Bedrock mit EU-Profil ab Frankfurt. Auch hier läuft
              der Assistent erst nach Zustimmung.
            </p>
          </div>
          <div className="karte ws-ki-karte">
            <h3 className="ws-ki-karte-titel">Aufbewahrung beim Anbieter</h3>
            <p className="ws-ki-karte-text">
              Wie lange der Anbieter Anfragen aufbewahrt, nennt workly vor Beginn der geschlossenen Beta im
              Zustimmungsdialog.
            </p>
          </div>
          <div className="karte ws-ki-karte">
            <h3 className="ws-ki-karte-titel">Speicherort zum Vergleich</h3>
            <p className="ws-ki-karte-text">{STANDORT_SATZ}</p>
            <p className="ws-ki-karte-link">
              <Link to="/sicherheit">
                Zur Seite Sicherheit
                <SymbolGrafik name="pfeil-rechts" className="symbol symbol-klein" />
              </Link>
            </p>
          </div>
        </div>
      </Abschnitt>

      <Abschnitt
        id="ki-kontingente"
        titel="Kontingente je Tarif"
        lead={`Jeder Tarif enthält eine feste Zahl an Anfragen je Monat. Die Werte sind geplant, Stand ${STAND}.`}
      >
        <ul className="ws-ki-hinweise" role="list">
          <li className="ws-ki-hinweis">
            <h3 className="ws-ki-karte-titel">Was als Anfrage zählt</h3>
            <p className="ws-ki-karte-text">
              Als Anfrage zählt eine Frage, ein Auftrag oder ein Entwurf, den du anforderst. Automatische Vorschläge aus
              eingehenden Mails zählen getrennt.
            </p>
          </li>
          <li className="ws-ki-hinweis">
            <h3 className="ws-ki-karte-titel">Wo du den Rest siehst</h3>
            <p className="ws-ki-karte-text">
              Unter dem Eingabefeld der Seitenleiste steht immer, wie viele Anfragen dir bis zum Monatsende bleiben.
            </p>
          </li>
          <li className="ws-ki-hinweis">
            <h3 className="ws-ki-karte-titel">Wenn das Kontingent erreicht ist</h3>
            <p className="ws-ki-karte-text">
              Dann pausiert nur der Assistent bis zum Monatsende. Posteingang, Kalender, Aufgaben und Dokumente laufen
              weiter.
            </p>
          </li>
        </ul>

        <div className="ws-ki-kontingent-tabelle">
          <KontingentTabelle />
        </div>
        <p className="ws-fussnote">
          Geplante Werte, Stand {STAND}. Die Kontingente werden bis zum Start geprüft und können sich noch ändern.
        </p>
        <p className="ws-ki-weiter">
          <Link to="/tarife" className="knopf knopf-kontur">
            Tarife ansehen
          </Link>
        </p>
      </Abschnitt>

      <WartelisteBand id="ki-warteliste" />
    </>
  );
}
