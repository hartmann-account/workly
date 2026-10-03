import { STAND, STAND_ISO } from "~/lib/seite";

type Phase = {
  name: string;
  zeitraum: string;
  text: string;
  art: "meilenstein" | "markierung";
  aktuell?: boolean;
};

/** Verbindlicher Fahrplan aus dem Plattformkonzept, Abschnitt „Umsetzungsfahrplan“. */
export const PHASEN: Phase[] = [
  { name: "Phase 0", zeitraum: "Okt. – Dez. 2026", text: "Interviews, Klick-Prototyp, technische Grundlagen", art: "meilenstein", aktuell: true },
  { name: "Phase 1", zeitraum: "Jan. – Mai 2027", text: "Erste Version und geschlossene Alpha mit 20 Personen", art: "meilenstein" },
  { name: "Phase 2", zeitraum: "Juni – Aug. 2027", text: "Geschlossene Beta mit 200 bis 500 Personen", art: "meilenstein" },
  { name: "Phase 3", zeitraum: "Sep. 2027", text: "Start mit öffentlicher Registrierung", art: "meilenstein" },
  { name: "Ausbau 1", zeitraum: "ab Q4 2027", text: "Teams, Gäste, Buchungsseite, Wochenrückblick", art: "markierung" },
  { name: "Ausbau 2", zeitraum: "2028", text: "Website-Erweiterung, mobile Apps, Office-Dateien (offen)", art: "markierung" },
];

type Props = {
  id?: string;
  /** h2 als Abschnitt; die Seite Fahrplan setzt ihr h1 im Seitenkopf. */
  titel?: string;
};

/** Fahrplan nach dem Baustein „Zeitstrahl“: waagrecht ab 901 px, darunter senkrecht. */
export function Zeitstrahl({ id = "zeitstrahl-titel", titel = "Fahrplan" }: Props) {
  return (
    <section className="zs-zeitstrahl" aria-labelledby={id}>
      <div className="zs-kopfzeile">
        <div>
          <h2 className="zs-titel marke-abschnitt ws-zs-titel" id={id}>
            {titel}
          </h2>
          <p className="zs-stand">
            Stand <time dateTime={STAND_ISO}>{STAND}</time>
          </p>
        </div>
        <ul className="zs-legende" role="list" aria-label="Legende">
          <li>
            <span className="zs-farbe zs-farbe-aktuell" aria-hidden="true" />
            Aktuelle Phase
          </li>
          <li>
            <span className="zs-farbe zs-farbe-meilenstein" aria-hidden="true" />
            Meilenstein mit Zeitraum
          </li>
          <li>
            <span className="zs-farbe zs-farbe-markierung" aria-hidden="true" />
            Ausbau ohne festen Termin
          </li>
        </ul>
      </div>
      <ol className="zs-achse" role="list">
        {PHASEN.map((phase) => (
          <li
            key={phase.name}
            className={phase.aktuell ? "zs-phase zs-aktuell" : "zs-phase"}
            aria-current={phase.aktuell ? "step" : undefined}
          >
            <div className="zs-kopf">
              {phase.aktuell ? <span className="zs-jetzt">Aktuelle Phase</span> : null}
              <h3 className="zs-name">{phase.name}</h3>
            </div>
            <p className="zs-punkt">
              <span className={phase.art === "meilenstein" ? "kategorie kategorie-pink" : "kategorie zs-markierung"}>
                {phase.zeitraum}
              </span>
            </p>
            <p className="zs-text">{phase.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
