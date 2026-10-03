import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { NAVIGATION } from "~/lib/seite";
import { Kachel, SymbolGrafik } from "./SymbolGrafik";
import { ThemaUmschalter } from "./ThemaUmschalter";

/**
 * Kopfleiste der Marketingseiten: Wortmarke, Hauptnavigation, Darstellung, Warteliste.
 * Bis 900 px öffnet ein Symbolknopf die Navigation als Blatt von unten (natives <dialog>).
 */
export function Kopf() {
  const blatt = useRef<HTMLDialogElement>(null);
  const ausloeser = useRef<HTMLButtonElement>(null);
  const [offen, setOffen] = useState(false);
  const ort = useLocation();
  // Auf der Warteliste selbst kein zweiter Primärknopf in der Kopfleiste.
  const aufWarteliste = ort.pathname === "/warteliste";

  const schliessen = () => blatt.current?.close();

  // Nach einem Seitenwechsel ist das Blatt zu.
  useEffect(() => {
    schliessen();
  }, [ort.pathname]);

  return (
    <header className="ws-kopf mo-glas">
      <div className="ws-rahmen ws-kopf-innen">
        <Link to="/" className="ws-kopf-marke" aria-label="workly, zur Startseite">
          <span className="wortmarke" aria-hidden="true" />
        </Link>

        <nav className="ws-nav" aria-label="Hauptnavigation">
          <ul className="ws-nav-liste" role="list">
            {NAVIGATION.map((eintrag) => (
              <li key={eintrag.pfad}>
                <NavLink to={eintrag.pfad} className="ws-nav-link" prefetch="intent">
                  {eintrag.titel}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ws-kopf-aktionen">
          <ThemaUmschalter />
          {aufWarteliste ? null : (
            <Link to="/warteliste" className="knopf knopf-primaer knopf-klein ws-kopf-warteliste" prefetch="intent">
              Warteliste beitreten
            </Link>
          )}
          <button
            ref={ausloeser}
            type="button"
            className="symbolknopf ws-menue-knopf"
            aria-label="Menü öffnen"
            aria-haspopup="dialog"
            aria-expanded={offen}
            aria-controls="ws-menue"
            onClick={() => {
              blatt.current?.showModal();
              setOffen(true);
            }}
          >
            <SymbolGrafik name="menue" />
          </button>
        </div>
      </div>

      <dialog
        ref={blatt}
        id="ws-menue"
        className="mo-blatt ws-menue"
        aria-labelledby="ws-menue-titel"
        onClose={() => {
          setOffen(false);
          ausloeser.current?.focus();
        }}
        onClick={(ereignis) => {
          // Tipp auf die Abdunklung schließt.
          if (ereignis.target === ereignis.currentTarget) schliessen();
        }}
      >
        <span className="mo-blatt-griff" aria-hidden="true" />
        <div className="mo-blatt-kopf">
          <h2 className="mo-blatt-titel" id="ws-menue-titel">
            Menü
          </h2>
          <button type="button" className="symbolknopf" aria-label="Menü schließen" onClick={schliessen}>
            <SymbolGrafik name="schliessen" />
          </button>
        </div>
        <nav aria-label="Hauptnavigation, mobil">
          <ul className="mo-blatt-liste" role="list">
            <li>
              <NavLink to="/" end className="mo-blatt-eintrag" onClick={schliessen}>
                <Kachel name="heute" variante="kachel-klein kachel-grau" />
                <span className="mo-blatt-text">Startseite</span>
              </NavLink>
            </li>
            {NAVIGATION.map((eintrag) => (
              <li key={eintrag.pfad}>
                <NavLink to={eintrag.pfad} className="mo-blatt-eintrag" onClick={schliessen}>
                  <Kachel name={eintrag.symbol} variante="kachel-klein kachel-grau" />
                  <span className="mo-blatt-text">{eintrag.titel}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {aufWarteliste ? null : (
          <>
            <hr className="mo-blatt-trenner" />
            <Link to="/warteliste" className="knopf knopf-primaer knopf-block" onClick={schliessen}>
              Warteliste beitreten
            </Link>
          </>
        )}
      </dialog>
    </header>
  );
}
