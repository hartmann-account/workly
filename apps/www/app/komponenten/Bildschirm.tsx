import type { ReactNode } from "react";

type Props = {
  /** Beschreibt in einem Satz, was die Ansicht zeigt; Bildschirmleser lesen nur diesen Text. */
  beschreibung: string;
  /** Sichtbare Bildunterschrift; ohne Angabe bleibt sie für Bildschirmleser. */
  sichtbar?: boolean;
  /** Breite des Inhalts in px, etwa 420 für eine Karte, 760 für ein Modul. */
  breite?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Rahmen für nachgebaute Portal-Ansichten aus Bausteinen des Designsystems.
 * Der Inhalt ist eine Abbildung: nicht fokussierbar (inert) und für Bildschirmleser verborgen.
 */
export function Bildschirm({ beschreibung, sichtbar, breite, className, children }: Props) {
  return (
    <figure className={["ws-bildschirm", className ?? ""].filter(Boolean).join(" ")}>
      <div
        className="ws-bildschirm-flaeche"
        aria-hidden="true"
        inert
        style={breite ? { maxWidth: `${breite}px` } : undefined}
      >
        {children}
      </div>
      <figcaption className={sichtbar ? "ws-bildschirm-text" : "sr-only"}>{beschreibung}</figcaption>
    </figure>
  );
}
