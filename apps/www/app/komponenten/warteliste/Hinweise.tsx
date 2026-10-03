import { Link } from "react-router";
import { STAND, STAND_ISO } from "~/lib/seite";
import { ohneTrennung } from "./Wort";

const SCHRITTE = [
  {
    titel: "Eintragen",
    text: "Du gibst deine E-Mail-Adresse und deine Arbeitssituation an. Den Tarif kannst du offen lassen.",
  },
  {
    titel: "Gespräch, wenn du magst",
    text: "Bis Dezember 2026 sprechen wir mit 25 Selbstständigen über ihre Arbeitsweise. Hast du im Formular zugestimmt, fragen wir dich vielleicht an.",
  },
  {
    titel: "Einladung zur Beta",
    text: "Die geschlossene Beta ab Juni 2027 hat Platz für 200 bis 500 Personen. Wir laden ein, wenn Plätze frei werden, und richten uns nach der Reihenfolge der Einträge und nach der Arbeitssituation. Ein Eintrag ist noch keine Zusage.",
  },
];

/** Ablauf nach dem Eintrag, vorsichtig formuliert: Einladung nach freien Plätzen. */
export function SoGehtEsWeiter() {
  return (
    <section className="karte ws-wl-kasten" aria-labelledby="wl-schritte-titel">
      <h2 className="ws-wl-kasten-titel" id="wl-schritte-titel">
        So geht es weiter
      </h2>
      <ol className="ws-wl-schritte" role="list">
        {SCHRITTE.map((schritt, index) => (
          <li className="ws-wl-schritt" key={schritt.titel}>
            <span className="ws-wl-nummer" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="ws-wl-schritt-titel">{schritt.titel}</h3>
            <p className="ws-wl-schritt-text">{ohneTrennung(schritt.text)}</p>
          </li>
        ))}
      </ol>
      <p className="ws-fussnote">
        Stand <time dateTime={STAND_ISO}>{STAND}</time> · <Link to="/fahrplan">Zum Fahrplan</Link>
      </p>
    </section>
  );
}

/** Kurzfassung zum Datenschutz der Warteliste; Einzelheiten stehen in der Datenschutzerklärung. */
export function DeineAngaben({ turnstile }: { turnstile: boolean }) {
  return (
    <section className="karte ws-wl-kasten" aria-labelledby="wl-angaben-titel">
      <h2 className="ws-wl-kasten-titel" id="wl-angaben-titel">
        Was mit deinen Angaben passiert
      </h2>
      <dl className="datenliste ws-wl-daten">
        <dt>Zweck</dt>
        <dd>{ohneTrennung("Einladung zur Beta, E-Mails zur Warteliste und, wenn du zustimmst, eine Anfrage für ein Gespräch.")}</dd>
        <dt>Speicherort</dt>
        <dd>{ohneTrennung("Eine Datenbank bei Cloudflare (D1). IP-Adresse und Browserangaben speichern wir nicht.")}</dd>
        <dt>Widerruf</dt>
        <dd>Jederzeit und ohne Begründung. Danach löschen wir deinen Eintrag.</dd>
        <dt>Weitergabe</dt>
        <dd>Wir geben deine Angaben nicht weiter.</dd>
        {turnstile ? (
          <>
            <dt>Schutz vor Bots</dt>
            <dd>Cloudflare Turnstile prüft beim Absenden Merkmale deines Browsers, ohne Bilderrätsel.</dd>
          </>
        ) : null}
      </dl>
      <p className="ws-wl-kasten-link">
        <Link to="/datenschutz">Zur Datenschutzerklärung</Link>
      </p>
    </section>
  );
}
