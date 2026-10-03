/*
 * Die zehn Fälle des Assistenten nach der Tabelle im Plattformkonzept (Abschnitt „KI-Schicht mit Claude“),
 * ohne Modellnamen. Stufen nach Abschnitt „Produktmodule“, Auflösung 2: Fälle 1, 3 und 4 sind verbindlich,
 * 2, 5, 6 und 8 folgen bis Ende Phase 1 (Mai 2027), wenn ihre Evaluationen bestehen; 7, 9 und 10 ab Ausbau 1.
 * Desktop: Tabelle; unter 640 px: Kartenliste (.tabelle-karten).
 */

type Stufe = "fest" | "pruefung" | "ausbau";

export const STUFEN: Record<Stufe, { text: string; klasse: string; faelle: string }> = {
  fest: { text: "Fest eingeplant", klasse: "tag tag-blau", faelle: "Fälle 1, 3 und 4" },
  pruefung: {
    text: "Bis Mai 2027, nach Prüfung",
    klasse: "tag",
    faelle: "Fälle 2, 5, 6 und 8, wenn ihre Qualitätsprüfungen bis Ende Mai 2027 bestanden sind",
  },
  ausbau: { text: "ab Q4 2027", klasse: "tag", faelle: "Fälle 7, 9 und 10" },
};

type Fall = { nr: number; ausloeser: string; liefert: string; bestaetigst: string; stufe: Stufe };

const FAELLE: Fall[] = [
  {
    nr: 1,
    ausloeser: "Mail mit einer Bitte oder Frist",
    liefert: "Aufgabenvorschlag mit Titel, Fälligkeit und Projekt",
    bestaetigst: "Übernehmen, ändern oder verwerfen",
    stufe: "fest",
  },
  {
    nr: 2,
    ausloeser: "Mail mit Terminwunsch („Passt dir Dienstag, 14 Uhr?“)",
    liefert: "Prüfung auf Überschneidungen, Entwurf von Termin und Antwort",
    bestaetigst: "Termin anlegen; Einladung und Antwort gehen erst nach „Senden“ hinaus",
    stufe: "pruefung",
  },
  {
    nr: 3,
    ausloeser: "Verlauf mit mehr als 5 Nachrichten",
    liefert: "Stand, offene Fragen und Zusagen, mit Verweis je Punkt",
    bestaetigst: "Nichts zu bestätigen; Fehler kannst du melden",
    stufe: "fest",
  },
  {
    nr: 4,
    ausloeser: "Klick auf „Antwort entwerfen“",
    liefert: "Entwurf im gewählten Ton, mit Bezug auf verknüpfte Dokumente",
    bestaetigst: "Du bearbeitest den Entwurf und sendest selbst",
    stufe: "fest",
  },
  {
    nr: 5,
    ausloeser: "Erstes Öffnen von Heute",
    liefert: "Offene Aufgaben in freien Lücken, Hinweis auf Überbuchung",
    bestaetigst: "Tagesplan übernehmen; erst dann entstehen Zeitblöcke",
    stufe: "pruefung",
  },
  {
    nr: 6,
    ausloeser: "Deine Frage („Was habe ich mit Frau Kaya zum Angebot vereinbart?“)",
    liefert: "Antwort aus deinen Inhalten mit Quellenverweisen",
    bestaetigst: "Nichts zu bestätigen; die Quellen lassen sich öffnen",
    stufe: "pruefung",
  },
  {
    nr: 7,
    ausloeser: "Ende einer Besprechung mit Notizdokument",
    liefert: "Aufgaben und Entwurf einer Mail zur Nachbereitung",
    bestaetigst: "Aufgaben übernehmen; die Mail geht erst nach deinem Klick hinaus",
    stufe: "ausbau",
  },
  {
    nr: 8,
    ausloeser: "Hochgeladenes PDF, etwa ein Vertrag oder Angebot",
    liefert: "Fristen, Beträge und Kündigungstermine",
    bestaetigst: "Fristen als Aufgaben übernehmen",
    stufe: "pruefung",
  },
  {
    nr: 9,
    ausloeser: "Klick auf „Posteingang aufräumen“",
    liefert: "Gruppen nach Newsletter, Benachrichtigung und Handlungsbedarf, dazu Sammelaktionen",
    bestaetigst: "Jede Sammelaktion einzeln; Löschen nur nach Rückfrage im Dialog",
    stufe: "ausbau",
  },
  {
    nr: 10,
    ausloeser: "Freitag, 15:00 Uhr, nur wenn du den Rückblick eingeschaltet hast",
    liefert: "Privater Wochenrückblick aus Kalender- und Aufgabendaten",
    bestaetigst: "Vorschläge übernehmen; nichts wird geteilt",
    stufe: "ausbau",
  },
];

const TITEL = "Zehn Fälle des Assistenten, Stand 03.10.2026";

/** Legende der drei Stufen über der Tabelle. */
export function StufenLegende() {
  return (
    <ul className="ws-ki-legende" role="list" aria-label="Stufen">
      {(Object.keys(STUFEN) as Stufe[]).map((s) => (
        <li key={s}>
          <span className={STUFEN[s].klasse}>{STUFEN[s].text}</span>
          <span>{STUFEN[s].faelle}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaelleTabelle() {
  return (
    <>
      <div className="tabelle ws-ki-tabelle" role="region" aria-labelledby="ki-faelle-titel" tabIndex={0}>
        <table>
          <caption id="ki-faelle-titel">{TITEL}</caption>
          <thead>
            <tr>
              <th scope="col">Nr.</th>
              <th scope="col">Auslöser</th>
              <th scope="col">Claude liefert</th>
              <th scope="col">Du bestätigst</th>
              <th scope="col">Stufe</th>
            </tr>
          </thead>
          <tbody>
            {FAELLE.map((f) => (
              <tr key={f.nr}>
                <td className="ws-ki-nr">{f.nr}</td>
                <th scope="row">{f.ausloeser}</th>
                <td>{f.liefert}</td>
                <td>{f.bestaetigst}</td>
                <td className="ws-ki-stufe">
                  <span className={STUFEN[f.stufe].klasse}>{STUFEN[f.stufe].text}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="tabelle-karten ws-ki-karten" role="list" aria-label={TITEL}>
        {FAELLE.map((f) => (
          <li key={f.nr} className="tabelle-karte">
            <p className="ws-ki-karte-meta">
              <span>Fall {f.nr}</span>{" "}
              <span className={STUFEN[f.stufe].klasse}>{STUFEN[f.stufe].text}</span>
            </p>
            <h3 className="tabelle-karte-titel">{f.ausloeser}</h3>
            <dl className="tabelle-karte-daten">
              <dt>Claude liefert</dt>
              <dd>{f.liefert}</dd>
              <dt>Du bestätigst</dt>
              <dd>{f.bestaetigst}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
