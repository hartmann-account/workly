import type { SymbolName } from "@workly/ui/symbole";

/** Datum, auf das sich Preise, Fahrplan und Angaben der Website beziehen. */
export const STAND = "03.10.2026";
export const STAND_ISO = "2026-10-03";

/** Formulierung des Brandbooks zum Speicherort; nie verkürzen auf „deine Daten bleiben in Deutschland“. */
export const STANDORT_SATZ =
  "Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen.";

export const CLAIM = "because workly works.";

/** Öffentliche Basis-URL ohne Schrägstrich am Ende, etwa https://www.example.de. Leer: keine kanonischen Links. */
export const BASIS_URL = (import.meta.env.VITE_BASIS_URL ?? "").replace(/\/$/, "");

/**
 * Suchmaschinen erst zulassen, wenn die Markenprüfung für „workly“ abgeschlossen ist
 * (Plattformkonzept, Abschnitt Umsetzungsfahrplan). Bis dahin: noindex und Disallow.
 */
export const OEFFENTLICH = import.meta.env.VITE_OEFFENTLICH === "ja";

export type NavEintrag = { pfad: string; titel: string; symbol: SymbolName };

export const NAVIGATION: NavEintrag[] = [
  { pfad: "/funktionen", titel: "Funktionen", symbol: "aufgaben" },
  { pfad: "/assistent", titel: "Assistent", symbol: "assistent" },
  { pfad: "/sicherheit", titel: "Sicherheit", symbol: "schild" },
  { pfad: "/tarife", titel: "Tarife", symbol: "karte" },
  { pfad: "/fahrplan", titel: "Fahrplan", symbol: "kalender" },
];

/** Alle vorgerenderten Seiten, für die Sitemap. */
export const SEITEN = ["/", ...NAVIGATION.map((e) => e.pfad), "/warteliste", "/datenschutz", "/impressum"];
