type Stufe = "start" | "ausbau1" | "ausbau2";

type Modul = {
  name: string;
  /** Was in der Stufe hinzukommt; fehlt der Eintrag, ist für die Stufe nichts festgelegt. */
  start?: string;
  ausbau1?: string;
  ausbau2?: string;
};

const STUFEN: { schluessel: Stufe; name: string; datum: string }[] = [
  { schluessel: "start", name: "Zum Start", datum: "Sep. 2027" },
  { schluessel: "ausbau1", name: "Ausbau 1", datum: "ab Q4 2027" },
  { schluessel: "ausbau2", name: "Ausbau 2", datum: "2028" },
];

/**
 * Module und Stufen nach dem Plattformkonzept, Abschnitt „Produktmodule: MVP und Ausbaustufen“,
 * für Laien gekürzt; „MVP“ heißt hier „Zum Start“.
 */
const MODULE: Modul[] = [
  {
    name: "Heute",
    start: "Dein Tag auf einer Zeitleiste mit Terminen, fälligen Aufgaben, markierten Mails und Fokusblöcken; Tagesabschluss",
  },
  {
    name: "Posteingang",
    start: "Postfach unter eigener Domain mit Hilfe bei der Einrichtung; vorhandenes Postfach verbinden; Erledigt, Später, Als Aufgabe und Als Termin per Taste",
    ausbau1: "Gruppenpostfächer; Domain direkt in workly registrieren",
  },
  {
    name: "Kalender",
    start: "Tag und Woche, Einladungen, Fokusblöcke, Abgleich mit den Kalender-Apps deiner Geräte",
    ausbau1: "Buchungsseite, geteilte Kalender",
  },
  {
    name: "Aufgaben",
    start: "Liste, Board, Projekte, Wiederholung; aus einer Aufgabe wird ein Zeitblock im Kalender",
    ausbau1: "Aufgaben an Mitglieder zuweisen",
  },
  {
    name: "Dokumente und Dateien",
    start: "Editor für Texte, Protokolle und Checklisten; Ablage mit Vorschau, Versionen und Freigabelinks mit Ablaufdatum",
    ausbau1: "Gemeinsam in Echtzeit bearbeiten",
    ausbau2: "Office-Dateien bearbeiten, Entscheidung offen",
  },
  {
    name: "Verknüpfungen",
    start: "Aus einer Mail wird eine Aufgabe oder ein Termin, aus einer Aufgabe ein Termin; Dokumente hängen an Aufgaben, beide Seiten zeigen die Verknüpfung",
  },
  {
    name: "Suche",
    start: "Volltext auch in PDFs, Filter, Operatoren wie „von:“; ab der Beta auch Suche nach Bedeutung",
    ausbau1: "Fragen in Alltagssprache, übersetzt in sichtbare Filter",
  },
  {
    name: "Assistent (Claude)",
    start: "Ab Werk aus; nach deiner Zustimmung Aufgabenvorschläge aus Mails, Zusammenfassungen und Antwortentwürfe. Weitere Fälle folgen, wenn ihre Tests bestehen",
    ausbau1: "Aufgaben aus Besprechungsnotizen, Posteingang aufräumen, Wochenrückblick; im Team-Tarif über Claude in Amazon Bedrock mit EU-Profil",
  },
  {
    name: "Fokus und Wohlbefinden",
    start: "Fokus-Sitzung, Fokusblöcke, Arbeitszeitfenster, Hinweis zur Termindichte, gebündelte Benachrichtigungen",
    ausbau1: "Pausenvorschlag, privater Wochenrückblick",
  },
  {
    name: "Team und Freigaben",
    start: "Persönlicher Workspace",
    ausbau1: "Team mit Rollen; geteilte Kalender, Listen und Ordner; Gastzugang mit Ablaufdatum",
    ausbau2: "Single Sign-on, offene Schnittstelle",
  },
  {
    name: "Digitale Visitenkarte",
    ausbau1: "Profilseite unter eigener Domain, vCard, QR-Code",
  },
  {
    name: "Website-Erweiterung",
    ausbau2: "Bis zu 5 Seiten aus Vorlagen, Kontaktformular in den Posteingang",
  },
  {
    name: "Konto und Abrechnung",
    start: "Registrierung ohne Zahlungsdaten, Passkey, zweiter Faktor, Tarife Free, Privat und Pro; Kündigung und Export ohne Support",
    ausbau1: "Team-Tarif",
  },
  {
    name: "Import und Umzug",
    start: "Import von Mails per IMAP, Terminen als .ics und Tabellen als CSV, mit Fehlerliste je Eintrag",
    ausbau1: "Geführte Umzüge von bisherigen Anbietern",
  },
  {
    name: "Apps",
    start: "Web-App für Computer und Telefon; Mail, Kalender und Kontakte auch in den Apps deines Geräts",
    ausbau2: "Native mobile Apps",
  },
];

const TITEL = "Module und was in welcher Stufe hinzukommt";

function Stufenkopf({ name, datum }: { name: string; datum?: string }) {
  return (
    <span className="ws-fp-stufe">
      {name}
      {datum ? <> <span className="tag">{datum}</span></> : null}
    </span>
  );
}

/** Tabelle ab 901 px, darunter Kartenliste je Modul (`.tabelle-karten` direkt hinter `.tabelle`). */
export function Modulplan() {
  return (
    <>
      <div className="tabelle ws-fp-tabelle" role="region" aria-labelledby="fp-module-titel" tabIndex={0}>
        <table>
          <caption id="fp-module-titel" className="sr-only">
            {TITEL}
          </caption>
          <colgroup>
            <col className="ws-fp-spalte-modul" />
            <col className="ws-fp-spalte-start" />
            <col className="ws-fp-spalte-ausbau1" />
            <col className="ws-fp-spalte-ausbau2" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Modul</th>
              {STUFEN.map((stufe) => (
                <th scope="col" key={stufe.schluessel}>
                  <Stufenkopf name={stufe.name} datum={stufe.datum} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MODULE.map((modul) => (
              <tr key={modul.name}>
                <th scope="row">{modul.name}</th>
                {STUFEN.map((stufe) => {
                  const inhalt = modul[stufe.schluessel];
                  return (
                    <td key={stufe.schluessel}>
                      {inhalt ?? (
                        <>
                          <span aria-hidden="true">–</span>
                          <span className="sr-only">Nichts festgelegt</span>
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="tabelle-karten ws-fp-karten" role="list" aria-label={TITEL}>
        {MODULE.map((modul) => (
          <li className="tabelle-karte" key={modul.name}>
            <div className="tabelle-karte-kopf">
              <h3 className="tabelle-karte-titel">{modul.name}</h3>
            </div>
            <dl className="tabelle-karte-daten">
              {STUFEN.filter((stufe) => modul[stufe.schluessel]).map((stufe) => (
                <div className="ws-fp-karte-paar" key={stufe.schluessel}>
                  <dt>
                    {/* „Zum Start“ erklärt die Fußnote; das Datum tragen in den Karten nur die Ausbaustufen. */}
                    <Stufenkopf name={stufe.name} datum={stufe.schluessel === "start" ? undefined : stufe.datum} />
                  </dt>
                  <dd>{modul[stufe.schluessel]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
      <p className="ws-fussnote ws-fp-fussnote">
        „Zum Start“ meint die Version, mit der im September 2027 die Registrierung für alle öffnet.
        <span className="ws-fp-nur-tabelle"> Ein Strich in der Tabelle heißt, dass für diese Stufe nichts festgelegt ist.</span>
      </p>
    </>
  );
}
