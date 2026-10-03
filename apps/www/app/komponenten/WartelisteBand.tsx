import { Link } from "react-router";

type Props = {
  /** id der Überschrift, eindeutig je Seite. */
  id?: string;
  titel?: string;
  text?: string;
  /** Zweiter Link neben dem Knopf; null blendet ihn aus (etwa auf der Seite Fahrplan selbst). */
  nebenlink?: { to: string; text: string } | null;
};

/** Abschluss einer Seite: eine Verlaufskarte mit dem Weg zur Warteliste. Einzige Verlaufsfläche ihres Abschnitts. */
export function WartelisteBand({
  id = "warteliste-band",
  titel = "Die geschlossene Beta beginnt im Juni 2027",
  text = "Trag dich in die Warteliste ein. Wir schreiben dir zum Start der Beta; die Registrierung für alle öffnet im September 2027.",
  nebenlink = { to: "/fahrplan", text: "Zum Fahrplan" },
}: Props) {
  return (
    <section className="ws-abschnitt ws-band" aria-labelledby={id}>
      <div className="ws-rahmen">
        <div className="karte karte-verlauf ws-band-karte">
          <div className="ws-band-text">
            <h2 className="ws-band-titel" id={id}>
              {titel}
            </h2>
            <p className="ws-band-lead">{text}</p>
          </div>
          <div className="ws-band-aktionen">
            <Link to="/warteliste" className="knopf knopf-weiss knopf-gross">
              Warteliste beitreten
            </Link>
            {nebenlink ? (
              <Link to={nebenlink.to} className="ws-band-link">
                {nebenlink.text}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
