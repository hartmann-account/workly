import { Fragment, type ReactNode } from "react";

export type Punkt = {
  text: ReactNode;
  /** Ausbaustufe für Funktionen nach dem Start, etwa „ab Q4 2027“ oder „2028“. */
  ab?: string;
};

/** Häkchenliste mit den Funktionen eines Moduls; spätere Stufen tragen ein neutrales Abzeichen mit Datum. */
export function Punkte({ punkte, className }: { punkte: Punkt[]; className?: string }) {
  return (
    <ul className={["hakenliste ws-fu-liste", className ?? ""].filter(Boolean).join(" ")} role="list">
      {punkte.map((punkt, i) => (
        <li key={i}>
          {punkt.text}
          {punkt.ab ? (
            <>
              {" "}
              <span className="tag ws-fu-ab">{punkt.ab}</span>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

type Kuerzel = { tasten: ReactNode; wirkung: string };

const KUERZEL: { gruppe: string; eintraege: Kuerzel[] }[] = [
  {
    gruppe: "Überall",
    eintraege: [
      { tasten: <kbd>/</kbd>, wirkung: "Suche öffnen" },
      {
        tasten: (
          <>
            <kbd>⌘K</kbd> bzw. <kbd>Strg+K</kbd>
          </>
        ),
        wirkung: "Befehlszeile öffnen",
      },
      {
        tasten: (
          <>
            <kbd>⌘J</kbd> bzw. <kbd>Strg+J</kbd>
          </>
        ),
        wirkung: "Assistent öffnen und schließen",
      },
    ],
  },
  {
    gruppe: "Im Posteingang",
    eintraege: [
      { tasten: <kbd>R</kbd>, wirkung: "Antworten" },
      { tasten: <kbd>A</kbd>, wirkung: "Als Aufgabe" },
      { tasten: <kbd>T</kbd>, wirkung: "Als Termin" },
      { tasten: <kbd>E</kbd>, wirkung: "Erledigt" },
      { tasten: <kbd>S</kbd>, wirkung: "Später" },
      {
        tasten: (
          <>
            <kbd>J</kbd> und <kbd>K</kbd>
          </>
        ),
        wirkung: "Nächste und vorige Nachricht",
      },
    ],
  },
];

/**
 * Tastenkürzel als Tabelle; unter 640 px blendet bundle.css die Tabelle aus und zeigt die
 * Kartenliste direkt dahinter (Baustein Tabelle), hier als zweispaltige Liste aus Taste und Wirkung.
 */
export function Tastenkuerzel({ className }: { className?: string }) {
  return (
    <div className={["ws-fu-kuerzel", className ?? ""].filter(Boolean).join(" ")}>
      <div className="tabelle">
        <table>
          <caption className="sr-only">Tastenkürzel in workly</caption>
          <thead>
            <tr>
              <th scope="col">Taste</th>
              <th scope="col">Wirkung</th>
            </tr>
          </thead>
          {KUERZEL.map((gruppe) => (
            <tbody key={gruppe.gruppe}>
              <tr className="ws-fu-kuerzel-gruppe">
                <th scope="rowgroup" colSpan={2}>
                  {gruppe.gruppe}
                </th>
              </tr>
              {gruppe.eintraege.map((eintrag) => (
                <tr key={eintrag.wirkung}>
                  <th scope="row">{eintrag.tasten}</th>
                  <td>{eintrag.wirkung}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
      <ul className="tabelle-karten ws-fu-kuerzel-karten" role="list" aria-label="Tastenkürzel in workly">
        {KUERZEL.map((gruppe) => (
          <li key={gruppe.gruppe} className="tabelle-karte">
            <h3 className="tabelle-karte-titel">{gruppe.gruppe}</h3>
            <dl className="tabelle-karte-daten ws-fu-kuerzel-daten">
              {gruppe.eintraege.map((eintrag) => (
                <Fragment key={eintrag.wirkung}>
                  <dt>{eintrag.tasten}</dt>
                  <dd>{eintrag.wirkung}</dd>
                </Fragment>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
