import type { ReactNode } from "react";
import { Link } from "react-router";
import { STAND, STAND_ISO } from "~/lib/seite";

type Phase = {
  /** id der Überschrift, eindeutig auf der Seite. */
  id: string;
  nummer: string;
  name: string;
  /** Zeitraum aus dem Umsetzungsfahrplan; Ausbaustufen tragen ihr Datum („ab Q4 2027“, „2028“). */
  zeitraum: string;
  aktuell?: boolean;
  geschieht: ReactNode[];
  merkst: ReactNode;
  hinweis?: ReactNode;
};

/** Phasen und Ausbaustufen nach dem Plattformkonzept, Abschnitte „Umsetzungsfahrplan“ und „Produktmodule“. */
const PHASEN: Phase[] = [
  {
    id: "fp-phase-0",
    nummer: "Phase 0",
    name: "Bedarf prüfen und Grundlagen legen",
    zeitraum: "Okt. – Dez. 2026",
    aktuell: true,
    geschieht: [
      "Gespräche mit 25 Selbstständigen über ihren Arbeitsalltag",
      "Ein Klick-Prototyp zum Ausprobieren",
      "Preisgespräche zu zwei möglichen Tarifmodellen",
      "Die Warteliste für Interessierte",
      "Technische Grundlagen wie Testumgebung, erster Mailserver und Wiederherstellung aus Sicherungen",
    ],
    merkst: <p className="ws-fp-text">Du kannst dich in die Warteliste eintragen. Ein Konto anlegen kannst du noch nicht.</p>,
  },
  {
    id: "fp-phase-1",
    nummer: "Phase 1",
    name: "Erste Version und geschlossene Alpha",
    zeitraum: "Jan. – Mai 2027",
    geschieht: [
      "Bau der ersten Version mit den Modulen für den Start",
      "Der Assistent beginnt mit Aufgabenvorschlägen aus Mails, Zusammenfassungen langer Verläufe und Antwortentwürfen",
      "Geschlossene Alpha mit 20 Personen über vier Wochen",
    ],
    merkst: (
      <p className="ws-fp-text">
        20 Personen nutzen die erste Version vier Wochen lang. Wer nicht dabei ist, bleibt auf der Warteliste.
      </p>
    ),
  },
  {
    id: "fp-phase-2",
    nummer: "Phase 2",
    name: "Geschlossene Beta",
    zeitraum: "Juni – Aug. 2027",
    geschieht: [
      "Geschlossene Beta mit 200 bis 500 Personen zu einem Beta-Preis",
      "Externer Sicherheitstest (Penetrationstest)",
      "Notfallübung, die den Wiederanlauf nach einem Ausfall probt",
      "Lasttest, der 10.000 Nutzer nachbildet",
      "Übung, den Betrieb in höchstens 4 Stunden ins Rechenzentrum Nürnberg zu verlegen",
    ],
    merkst: (
      <p className="ws-fp-text">
        Über die Warteliste erfährst du, wann Plätze in der Beta frei werden. Für die Beta gilt ein eigener Preis; seine
        Höhe steht noch nicht fest.
      </p>
    ),
  },
  {
    id: "fp-phase-3",
    nummer: "Phase 3",
    name: "Start mit Registrierung für alle",
    zeitraum: "Sep. 2027",
    geschieht: ["Öffentliche Registrierung", "Tarife Free, Privat und Pro", "Eine Statusseite, die den Zustand der Dienste zeigt"],
    merkst: (
      <>
        <p className="ws-fp-text">
          Du registrierst dich ohne Zahlungsdaten und wählst zwischen Free, Privat und Pro. Die Preise sind geplant, Stand{" "}
          <time dateTime={STAND_ISO}>{STAND}</time>.
        </p>
        <p className="ws-fp-text">
          <Link to="/tarife" className="ws-fp-link">
            Tarife ansehen
          </Link>
        </p>
      </>
    ),
    hinweis: "Gelingen Lasttest und Wechselübung in der Beta nicht, verschiebt sich der Start in den Oktober 2027.",
  },
  {
    id: "fp-ausbau-1",
    nummer: "Ausbau 1",
    name: "Teams, Gäste und Buchungsseite",
    zeitraum: "ab Q4 2027",
    geschieht: [
      "Team-Tarif ab 2 Personen; sein Assistent läuft über Claude in Amazon Bedrock mit EU-Profil ab Frankfurt",
      "Gäste, Buchungsseite und digitale Visitenkarte",
      "Privater Wochenrückblick",
      "Domain-Erweiterung, um eine Domain direkt in workly zu registrieren",
      "Geführte Umzüge von bisherigen Anbietern",
      "Weitere Fälle für den Assistenten, etwa „Posteingang aufräumen“",
    ],
    merkst: (
      <p className="ws-fp-text">
        Im Tarif Pro kommen Gäste, Buchungsseite und Visitenkarte hinzu. Teams bekommen einen eigenen Tarif mit Rollen,
        geteilten Kalendern und Gruppenpostfächern.
      </p>
    ),
  },
  {
    id: "fp-ausbau-2",
    nummer: "Ausbau 2",
    name: "Website, mobile Apps und Schnittstelle",
    zeitraum: "2028",
    geschieht: [
      "Website-Erweiterung mit bis zu 5 Seiten aus Vorlagen",
      "Native mobile Apps",
      "Bearbeitung von Office-Dateien; ob sie kommt, ist noch offen",
      "Single Sign-on",
      "Offene Schnittstelle",
    ],
    merkst: (
      <p className="ws-fp-text">
        Bis dahin nutzt du workly auf dem Telefon als Web-App. Mail, Kalender und Kontakte laufen auch in den Apps deines
        Geräts.
      </p>
    ),
  },
];

/** Je Phase eine Karte: Zeitraum, was geschieht, was du davon merkst. */
export function Phasenkarten() {
  return (
    <ol className="ws-fp-phasen" role="list">
      {PHASEN.map((phase) => (
        <li key={phase.id}>
          <section className="karte ws-fp-phase" aria-labelledby={phase.id}>
            <div className="ws-fp-phase-kopf">
              <h3 className="ws-fp-phase-titel" id={phase.id}>
                <span className="ws-fp-phase-nr">{phase.nummer}</span> {phase.name}
              </h3>
              <p className="ws-fp-phase-tags">
                <span className="tag">{phase.zeitraum}</span>
                {phase.aktuell ? <span className="tag tag-blau mit-punkt">Aktuelle Phase</span> : null}
              </p>
            </div>
            <div className="ws-fp-teil">
              <h4 className="gruppentitel">Was geschieht</h4>
              <ul className="ws-fp-liste" role="list">
                {phase.geschieht.map((punkt, i) => (
                  <li key={i}>{punkt}</li>
                ))}
              </ul>
            </div>
            <div className="ws-fp-teil">
              <h4 className="gruppentitel">Was du davon merkst</h4>
              {phase.merkst}
              {phase.hinweis ? <p className="meldung meldung-info ws-fp-hinweis">{phase.hinweis}</p> : null}
            </div>
          </section>
        </li>
      ))}
    </ol>
  );
}
