/*
 * Geplante Kontingente je Tarif nach der Tabelle „Kontingente“ im Plattformkonzept (Abschnitt „KI-Schicht mit Claude“).
 * Desktop: Tabelle; unter 640 px: Kartenliste (.tabelle-karten).
 */

type Zeile = { tarif: string; ab?: string; anfragen: string; vorschlaege: string; erreicht: string };

const ZEILEN: Zeile[] = [
  {
    tarif: "Free",
    anfragen: "20",
    vorschlaege: "Keine",
    erreicht: "Der Assistent pausiert bis Monatsende",
  },
  {
    tarif: "Privat",
    anfragen: "75",
    vorschlaege: "Keine automatischen; je Mail einzeln auslösbar, zählt als Anfrage",
    erreicht: "Der Assistent pausiert bis Monatsende; Zusatzpaket buchbar",
  },
  {
    tarif: "Pro",
    anfragen: "150",
    vorschlaege: "Für bis zu 25 eingehende Mails je Tag",
    erreicht: "Der Assistent pausiert bis Monatsende; Zusatzpaket buchbar",
  },
  {
    tarif: "Team",
    ab: "ab Q4 2027",
    anfragen: "150 je Nutzer, im Workspace gebündelt",
    vorschlaege: "Für bis zu 25 Mails je Tag und Nutzer",
    erreicht: "Inhaberin oder Admin bucht nach",
  },
];

const TITEL = "Geplante Kontingente je Tarif, Stand 03.10.2026";
const SPALTEN = {
  anfragen: "Anfragen je Nutzer und Monat",
  vorschlaege: "Automatische Vorschläge aus E-Mails",
  erreicht: "Bei erreichtem Kontingent",
};

export function KontingentTabelle() {
  return (
    <>
      {/* Am Telefon ersetzt die Kartenliste die Tabelle samt caption; dieser Titel benennt sie dort sichtbar. */}
      <h3 className="ws-ki-karten-titel">{TITEL}</h3>
      <div className="tabelle ws-ki-tabelle" role="region" aria-labelledby="ki-kontingent-titel" tabIndex={0}>
        <table>
          <caption id="ki-kontingent-titel">{TITEL}</caption>
          <thead>
            <tr>
              <th scope="col">Tarif</th>
              <th scope="col">{SPALTEN.anfragen}</th>
              <th scope="col">{SPALTEN.vorschlaege}</th>
              <th scope="col">{SPALTEN.erreicht}</th>
            </tr>
          </thead>
          <tbody>
            {ZEILEN.map((z) => (
              <tr key={z.tarif}>
                <th scope="row">
                  <span className="ws-ki-tarif">
                    {z.tarif}
                    {z.ab ? <span className="tag">{z.ab}</span> : null}
                  </span>
                </th>
                <td>{z.anfragen}</td>
                <td>{z.vorschlaege}</td>
                <td>{z.erreicht}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="tabelle-karten ws-ki-karten" role="list" aria-label={TITEL}>
        {ZEILEN.map((z) => (
          <li key={z.tarif} className="tabelle-karte">
            <div className="tabelle-karte-kopf">
              <h4 className="tabelle-karte-titel">{z.tarif}</h4>
              {z.ab ? <span className="tag">{z.ab}</span> : null}
            </div>
            <dl className="tabelle-karte-daten">
              <dt>{SPALTEN.anfragen}</dt>
              <dd>{z.anfragen}</dd>
              <dt>{SPALTEN.vorschlaege}</dt>
              <dd>{z.vorschlaege}</dd>
              <dt>{SPALTEN.erreicht}</dt>
              <dd>{z.erreicht}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
