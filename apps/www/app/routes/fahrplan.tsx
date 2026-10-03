import { Link } from "react-router";
import { Abschnitt } from "~/komponenten/Abschnitt";
import { Modulplan } from "~/komponenten/fahrplan/Modulplan";
import { Phasenkarten } from "~/komponenten/fahrplan/Phasenkarten";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { Zeitstrahl } from "~/komponenten/Zeitstrahl";
import { STANDORT_SATZ } from "~/lib/seite";
import { seitenMeta } from "~/lib/meta";
import stil from "~/stile/fahrplan.css?url";
import type { Route } from "./+types/fahrplan";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Fahrplan",
    beschreibung:
      "workly entsteht in vier Phasen und zwei Ausbaustufen. Die Registrierung öffnet im September 2027, Teams folgen ab Q4 2027, mobile Apps 2028.",
    pfad: "/fahrplan",
  });
}

/** Was workly dauerhaft ausschließt oder nicht plant (Plattformkonzept, Abschnitt „Produktmodule“). */
const NICHT_GEPLANT = [
  {
    id: "fp-ohne-erkennung",
    titel: "Erkennung von Burnout, Stress oder Stimmung",
    stand: "Dauerhaft ausgeschlossen",
    text: "workly trifft keine Aussage über deinen Zustand. Hinweise beruhen nur auf Daten, die du selbst erzeugst, etwa auf der Termindichte deines Kalenders. Nur du siehst sie.",
  },
  {
    id: "fp-ohne-punkte",
    titel: "Punkte, Serien und Ranglisten",
    stand: "Dauerhaft ausgeschlossen",
    text: "workly vergibt keine Punkte und vergleicht niemanden mit anderen. Töne sind ab Werk aus.",
  },
  {
    id: "fp-ohne-selbstbetrieb",
    titel: "Self-Hosting",
    stand: "Dauerhaft ausgeschlossen",
    text: `workly gibt es nur als Dienst, nicht zum Betrieb auf eigenen Servern. ${STANDORT_SATZ}`,
  },
  {
    id: "fp-ohne-chat",
    titel: "Chat und Videokonferenz",
    stand: "Nicht geplant",
    text: "workly beschränkt sich auf E-Mail, Kalender, Aufgaben und Dokumente.",
  },
];

export default function Fahrplan() {
  return (
    <>
      <Seitenkopf
        akzent="Registrierung"
        rest="ab September 2027"
        lead="workly entsteht in vier Phasen und zwei Ausbaustufen. Jede Phase endet mit einer Abnahme; erst dann beginnt die nächste."
        kacheln={[{ name: "kalender" }, { name: "haken", variante: "kachel-pink ws-fp-kachel-pink" }]}
        aktionen={
          <>
            <Link to="/warteliste" className="knopf knopf-primaer knopf-gross">
              Warteliste beitreten
            </Link>
            <Link to="/funktionen" className="knopf knopf-kontur knopf-gross">
              Funktionen ansehen
            </Link>
          </>
        }
      />

      <Zeitstrahl id="fp-zeitstrahl-titel" titel="Phasen und Stand" />

      <Abschnitt
        id="fp-phasen-titel"
        titel="Was in jeder Phase geschieht"
        lead="Die Karten zeigen je Phase, woran workly arbeitet und was du davon merkst."
        className="ws-fp-nach-zeitstrahl"
      >
        <Phasenkarten />
      </Abschnitt>

      <Abschnitt
        id="fp-module-ueberschrift"
        titel="Was wann kommt"
        lead="Zum Start enthält workly E-Mail, Kalender, Aufgaben und Dokumente mit ihren Verknüpfungen, dazu Suche, Assistent und Fokus-Werkzeuge. Teams folgen ab Q4 2027, Website und mobile Apps 2028."
        flaeche
        anker="module"
        className="ws-fp-module"
      >
        <Modulplan />
      </Abschnitt>

      <Abschnitt
        id="fp-ohne-titel"
        titel="Was nicht kommt"
        lead="Einiges schließt workly dauerhaft aus, anderes ist nicht geplant."
        className="ws-fp-nach-flaeche"
      >
        <ul className="raster-2 ws-fp-ohne" role="list">
          {NICHT_GEPLANT.map((eintrag) => (
            <li key={eintrag.id}>
              <section className="karte ws-fp-ohne-karte" aria-labelledby={eintrag.id}>
                <h3 className="ws-fp-ohne-titel" id={eintrag.id}>
                  {eintrag.titel}
                </h3>
                <p>
                  <span className="tag">{eintrag.stand}</span>
                </p>
                <p className="ws-fp-text">{eintrag.text}</p>
              </section>
            </li>
          ))}
        </ul>
      </Abschnitt>

      <WartelisteBand
        id="fp-warteliste-titel"
        titel="Warteliste für die Beta ab Juni 2027"
        text="Trag dich ein. Wir schreiben dir, sobald Plätze in der Beta frei werden; ein Eintrag ist noch keine Zusage."
        nebenlink={{ to: "/funktionen", text: "Zu den Funktionen" }}
      />
    </>
  );
}
