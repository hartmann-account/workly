import { Fragment, type ReactNode } from "react";

const MUSTER = /(E-Mail(?:-Adresse|s)?|IP-Adresse)/;

/**
 * Hält „E-Mail“, „E-Mails“, „E-Mail-Adresse“ und „IP-Adresse“ zusammen, damit am Telefon kein „E-“
 * allein am Zeilenende steht. Der Text bleibt für Bildschirmleser unverändert.
 */
export function ohneTrennung(text: string): ReactNode {
  const teile = text.split(MUSTER);
  if (teile.length === 1) return text;
  return teile.map((teil, index) =>
    index % 2 === 1 ? (
      <span className="ws-wl-wort" key={index}>
        {teil}
      </span>
    ) : (
      <Fragment key={index}>{teil}</Fragment>
    ),
  );
}
