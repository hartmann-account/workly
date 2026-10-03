import { Link } from "react-router";
import { CLAIM, NAVIGATION, STAND, STANDORT_SATZ } from "~/lib/seite";

/** Fußzeile: Marke mit Claim, Speicherort, Navigation, Stand der Angaben. */
export function Fuss() {
  return (
    <footer className="ws-fuss">
      <div className="ws-rahmen ws-fuss-innen">
        <div className="ws-fuss-marke">
          <Link to="/" className="ws-fuss-logo" aria-label="workly, zur Startseite">
            <span className="wortmarke" aria-hidden="true" />
          </Link>
          <p className="ws-fuss-claim" lang="en">
            {CLAIM}
          </p>
          <p className="ws-fuss-text">{STANDORT_SATZ}</p>
        </div>

        <nav className="ws-fuss-nav" aria-label="Fußnavigation">
          <div className="ws-fuss-spalte">
            <h2 className="ws-fuss-titel">Produkt</h2>
            <ul className="ws-fuss-liste" role="list">
              {NAVIGATION.map((eintrag) => (
                <li key={eintrag.pfad}>
                  <Link to={eintrag.pfad}>{eintrag.titel}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ws-fuss-spalte">
            <h2 className="ws-fuss-titel">Rechtliches</h2>
            <ul className="ws-fuss-liste" role="list">
              <li>
                <Link to="/datenschutz">Datenschutz</Link>
              </li>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
            </ul>
          </div>
          <div className="ws-fuss-spalte">
            <h2 className="ws-fuss-titel">Warteliste</h2>
            <p className="ws-fuss-text">Die Registrierung öffnet im September 2027.</p>
            <Link to="/warteliste" className="knopf knopf-kontur knopf-klein">
              Warteliste beitreten
            </Link>
          </div>
        </nav>
      </div>
      <div className="ws-rahmen ws-fuss-unten">
        <p>
          Stand der Angaben: <time dateTime="2026-10-03">{STAND}</time>. Preise und Termine sind geplant und
          können sich bis zum Start ändern.
        </p>
      </div>
    </footer>
  );
}
