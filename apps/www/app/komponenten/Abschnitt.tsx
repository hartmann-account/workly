import type { ReactNode } from "react";

type Props = {
  /** id der Überschrift; der Abschnitt verweist mit aria-labelledby darauf. */
  id: string;
  titel: ReactNode;
  /** Kurze Zeile über dem Titel in `text`. */
  kicker?: ReactNode;
  lead?: ReactNode;
  /** Graue Fläche über die volle Breite; Karten darin liegen auf `grund`. */
  flaeche?: boolean;
  /** Kopf zentriert (nur für kurze Einleitungen über Rastern). */
  mitte?: boolean;
  /** Anker für Sprunglinks, etwa „fokus“. */
  anker?: string;
  className?: string;
  children: ReactNode;
};

/** Abschnitt einer Marketingseite: Rahmen mit `inhalt-max`, Kopf mit h2, Inhalt. */
export function Abschnitt({ id, titel, kicker, lead, flaeche, mitte, anker, className, children }: Props) {
  const klassen = ["ws-abschnitt", flaeche ? "ws-abschnitt-flaeche" : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <section className={klassen} aria-labelledby={id} id={anker}>
      <div className="ws-rahmen">
        <header className={mitte ? "ws-abschnitt-kopf ws-abschnitt-kopf-mitte" : "ws-abschnitt-kopf"}>
          {kicker ? <p className="ws-kicker">{kicker}</p> : null}
          <h2 className="ws-abschnitt-titel" id={id}>
            {titel}
          </h2>
          {lead ? <p className="ws-lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
