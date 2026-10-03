import { Fragment, type ReactNode } from "react";

export type TabellenZeile = {
  /** Eindeutiger Schlüssel der Zeile. */
  schluessel: string;
  /** Benennt die Zeile: Zeilenkopf in der Tabelle, Titel der Karte unter 640 px. */
  kopf: ReactNode;
  /** Zellen in der Reihenfolge der Spalten nach der ersten. */
  zellen: ReactNode[];
};

type Props = {
  /** id der `caption`; die Kartenliste trägt denselben Namen über `aria-label`. */
  id: string;
  titel: string;
  /** Spaltenköpfe; der erste benennt die Zeilenköpfe. */
  spalten: string[];
  zeilen: TabellenZeile[];
  /** Ebene der Kartentitel unter 640 px: 3 unter einem h2, 4 unter einem h3. */
  kartenEbene?: 3 | 4;
  /** Bezeichnung über dem Wert statt daneben (für lange Bezeichnungen oder Werte). */
  gestapelt?: boolean;
  className?: string;
};

/**
 * Tabelle nach dem Baustein „Tabelle“: echte `table` mit `caption` und `scope`, unter 640 px
 * dieselben Datensätze als Kartenliste `.tabelle-karten`. Die `caption` ist nur für Bildschirmleser,
 * weil darüber immer eine sichtbare Überschrift steht.
 */
export function TabelleMitKarten({ id, titel, spalten, zeilen, kartenEbene = 3, gestapelt, className }: Props) {
  const [kopfSpalte, ...wertSpalten] = spalten;
  const KartenTitel = kartenEbene === 4 ? "h4" : "h3";
  return (
    <div className={["ws-si-tabelle", className ?? ""].filter(Boolean).join(" ")}>
      <div className="tabelle">
        <table>
          <caption id={id} className="sr-only">
            {titel}
          </caption>
          <thead>
            <tr>
              <th scope="col">{kopfSpalte}</th>
              {wertSpalten.map((spalte) => (
                <th scope="col" key={spalte}>
                  {spalte}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {zeilen.map((zeile) => (
              <tr key={zeile.schluessel}>
                <th scope="row">{zeile.kopf}</th>
                {zeile.zellen.map((zelle, i) => (
                  <td key={wertSpalten[i] ?? i}>{zelle}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul
        className={["tabelle-karten", gestapelt ? "ws-si-karten-gestapelt" : ""].filter(Boolean).join(" ")}
        role="list"
        aria-label={titel}
      >
        {zeilen.map((zeile) => (
          <li className="tabelle-karte" key={zeile.schluessel}>
            <div className="tabelle-karte-kopf">
              <KartenTitel className="tabelle-karte-titel">{zeile.kopf}</KartenTitel>
            </div>
            <dl className="tabelle-karte-daten">
              {wertSpalten.map((spalte, i) => (
                <Fragment key={spalte}>
                  <dt>{spalte}</dt>
                  <dd>{zeile.zellen[i]}</dd>
                </Fragment>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
