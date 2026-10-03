import { useEffect, useState } from "react";
import { SymbolGrafik } from "./SymbolGrafik";

const SCHLUESSEL = "workly-thema";

type Thema = "hell" | "dunkel";

/**
 * Läuft vor dem ersten Zeichnen im <head>: gespeicherte Wahl, sonst Systemeinstellung.
 * Ohne Skript bleibt das Theme Hell.
 */
export const THEMA_SKRIPT = `(function(){try{var t=localStorage.getItem("${SCHLUESSEL}");if(t!=="hell"&&t!=="dunkel"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dunkel":"hell"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","hell")}})();`;

function aktuellesThema(): Thema {
  return document.documentElement.getAttribute("data-theme") === "dunkel" ? "dunkel" : "hell";
}

function setzeThema(thema: Thema, merken: boolean) {
  document.documentElement.setAttribute("data-theme", thema);
  if (!merken) return;
  try {
    localStorage.setItem(SCHLUESSEL, thema);
  } catch {
    // Speicher gesperrt: die Wahl gilt dann nur für diese Seite.
  }
}

/** Symbolknopf für die dunkle Darstellung; folgt der Systemeinstellung, bis die Person selbst wählt. */
export function ThemaUmschalter() {
  const [thema, setThema] = useState<Thema | null>(null);

  useEffect(() => {
    setThema(aktuellesThema());
    const abfrage = matchMedia("(prefers-color-scheme: dark)");
    const beiAenderung = (ereignis: MediaQueryListEvent) => {
      let gemerkt: string | null = null;
      try {
        gemerkt = localStorage.getItem(SCHLUESSEL);
      } catch {
        gemerkt = null;
      }
      if (gemerkt === "hell" || gemerkt === "dunkel") return;
      const neu: Thema = ereignis.matches ? "dunkel" : "hell";
      setzeThema(neu, false);
      setThema(neu);
    };
    abfrage.addEventListener("change", beiAenderung);
    return () => abfrage.removeEventListener("change", beiAenderung);
  }, []);

  const dunkel = thema === "dunkel";

  return (
    <button
      type="button"
      className="symbolknopf ws-thema"
      aria-label="Dunkle Darstellung"
      aria-pressed={thema === null ? undefined : dunkel}
      onClick={() => {
        const neu: Thema = aktuellesThema() === "dunkel" ? "hell" : "dunkel";
        setzeThema(neu, true);
        setThema(neu);
      }}
    >
      <SymbolGrafik name="mond" />
    </button>
  );
}
