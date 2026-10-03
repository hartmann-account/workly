import type { ReactNode } from "react";
import type { SymbolName } from "@workly/ui/symbole";
import { Kachel } from "./SymbolGrafik";

type Props = {
  /** Schlüsselwort am Anfang in `akzent-text`. */
  akzent: ReactNode;
  /** Rest der Überschrift nach dem Schlüsselwort. */
  rest?: ReactNode;
  lead: ReactNode;
  /** Modulkacheln rechts (Desktop) bzw. über dem Titel (mobil), höchstens vier. */
  kacheln?: { name: SymbolName; variante?: string }[];
  aktionen?: ReactNode;
};

/**
 * Einstieg einer Unterseite: kompakter als der Held, damit der Inhalt auf dem Telefon
 * ohne langes Scrollen beginnt. Enthält das einzige h1 der Seite.
 */
export function Seitenkopf({ akzent, rest, lead, kacheln, aktionen }: Props) {
  return (
    <section className="ws-unterkopf" aria-labelledby="seitentitel">
      <div className="ws-rahmen ws-unterkopf-innen">
        <div className="ws-unterkopf-text">
          <h1 className="ws-unterkopf-titel" id="seitentitel">
            <span className="akzent-wort">{akzent}</span>
            {rest ? <> {rest}</> : null}
          </h1>
          <p className="ws-lead ws-unterkopf-lead">{lead}</p>
          {aktionen ? <div className="ws-unterkopf-aktionen">{aktionen}</div> : null}
        </div>
        {kacheln && kacheln.length > 0 ? (
          <div className="ws-unterkopf-kacheln" aria-hidden="true">
            {kacheln.map((k) => (
              <Kachel key={k.name} name={k.name} variante={`kachel-gross ${k.variante ?? ""}`} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
