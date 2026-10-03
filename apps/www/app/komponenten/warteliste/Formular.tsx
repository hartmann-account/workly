import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { Form, Link, useNavigation } from "react-router";
import {
  ARBEITSSITUATIONEN,
  EINWILLIGUNG_TEXT,
  FEHLER_FELDER,
  TARIF_OPTIONEN,
  type Antwort,
  type FehlerFeld,
  type TarifWahl,
  type Werte,
} from "./daten";
import { Turnstile } from "./Turnstile";
import { ohneTrennung } from "./Wort";

/** Beschriftung und Sprungziel je Feld für den Fehlerkasten. */
const FELDER: Record<FehlerFeld, { name: string; ziel: string }> = {
  email: { name: "E-Mail-Adresse", ziel: "wl-email" },
  arbeitssituation: { name: "Arbeitssituation", ziel: `wl-situation-${ARBEITSSITUATIONEN[0].wert}` },
  alter: { name: "Alter", ziel: "wl-alter" },
  einwilligung: { name: "Einwilligung", ziel: "wl-einwilligung" },
  pruefung: { name: "Sicherheitsprüfung", ziel: "wl-pruefung" },
};

/** Sprunglink: Feld fokussieren statt Hash-Navigation, damit die Fehler stehen bleiben. */
function springe(id: string) {
  return (ereignis: MouseEvent<HTMLAnchorElement>) => {
    const ziel = document.getElementById(id);
    if (!ziel) return;
    ereignis.preventDefault();
    ziel.focus();
  };
}

/** Verweise für aria-describedby: Fehler zuerst, dann Hilfe. */
function beschrieben(...ids: (string | false | undefined)[]) {
  const liste = ids.filter(Boolean).join(" ");
  return liste === "" ? undefined : liste;
}

type Props = {
  /** Vorbelegung aus ?tarif=. */
  tarif: TarifWahl;
  /** Öffentlicher Turnstile-Schlüssel; leer heißt ohne Prüfung. */
  turnstileSchluessel: string;
  antwort?: Antwort;
};

/** Formular der Warteliste: funktioniert ohne JavaScript, mit JavaScript ohne Neuladen. */
export function WartelisteFormular({ tarif, turnstileSchluessel, antwort }: Props) {
  if (antwort?.status === "eingetragen") return <Erfolg email={antwort.email} gespraech={antwort.gespraech} />;
  return <Eingabe tarif={tarif} turnstileSchluessel={turnstileSchluessel} antwort={antwort} />;
}

function Eingabe({ tarif, turnstileSchluessel, antwort }: Props) {
  const navigation = useNavigation();
  const sendet = navigation.state !== "idle" && navigation.formMethod !== undefined;
  const kasten = useRef<HTMLDivElement>(null);
  const [behoben, setBehoben] = useState<ReadonlySet<FehlerFeld>>(new Set());

  const fehler = antwort?.status === "fehler" ? antwort.fehler : {};
  const werte: Werte | undefined = antwort && antwort.status !== "eingetragen" ? antwort.werte : undefined;
  const fehlerListe = FEHLER_FELDER.filter((feld) => fehler[feld]);
  const offen = (feld: FehlerFeld) => (behoben.has(feld) ? undefined : fehler[feld]);

  // Nach jeder Antwort mit Fehler: Kasten fokussieren, damit Tastatur und Bildschirmleser dort weitermachen.
  useEffect(() => {
    setBehoben(new Set());
    if (antwort && antwort.status !== "eingetragen") kasten.current?.focus();
  }, [antwort]);

  // Gewählte Option bzw. gesetztes Kästchen nimmt die Fehlerzeile am Feld sofort weg.
  const beiAenderung = (ereignis: FormEvent<HTMLFormElement>) => {
    const feld = ereignis.target as HTMLInputElement;
    if (!feld.checked) return;
    const name = feld.name === "arbeitssituation" || feld.name === "alter" || feld.name === "einwilligung" ? feld.name : null;
    if (name && !behoben.has(name)) setBehoben(new Set([...behoben, name]));
  };

  const emailFehler = offen("email");
  const situationFehler = offen("arbeitssituation");
  const alterFehler = offen("alter");
  const einwilligungFehler = offen("einwilligung");
  const pruefungFehler = offen("pruefung");

  return (
    <Form
      method="post"
      noValidate
      preventScrollReset
      className="ws-wl-formular"
      aria-labelledby="seitentitel"
      onChange={beiAenderung}
    >
      {antwort?.status === "fehler" ? (
        <div className="meldung meldung-fehler fehlerkasten" role="alert" tabIndex={-1} ref={kasten}>
          <div className="meldung-inhalt">
            <h2 className="fehlerkasten-titel">Dein Eintrag wurde nicht gespeichert.</h2>
            <p>{fehlerListe.length === 1 ? "Prüfe 1 Angabe:" : `Prüfe ${fehlerListe.length} Angaben:`}</p>
            <ul>
              {fehlerListe.map((feld) => (
                <li key={feld}>
                  <a href={`#${FELDER[feld].ziel}`} onClick={springe(FELDER[feld].ziel)}>
                    {ohneTrennung(`${FELDER[feld].name}: ${fehler[feld]}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {antwort?.status === "nicht-erreichbar" ? (
        <div className="meldung meldung-fehler" role="alert" tabIndex={-1} ref={kasten}>
          <div className="meldung-inhalt">
            <p>
              <strong>Die Warteliste ist gerade nicht erreichbar.</strong> Versuch es in einigen Minuten noch einmal.
              Deine Angaben bleiben im Formular stehen.
            </p>
          </div>
        </div>
      ) : null}

      <div className="feld">
        <label htmlFor="wl-email">E-Mail-Adresse</label>
        <input
          className="eingabe"
          id="wl-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          maxLength={254}
          required
          defaultValue={werte?.email ?? ""}
          aria-invalid={emailFehler ? true : undefined}
          aria-describedby={beschrieben(emailFehler && "wl-email-fehler")}
        />
        {emailFehler ? (
          <p className="feld-fehler" id="wl-email-fehler">
            <span>{ohneTrennung(emailFehler)}</span>
          </p>
        ) : null}
      </div>

      <fieldset
        className={situationFehler ? "feldgruppe ws-wl-gruppe ist-fehler" : "feldgruppe ws-wl-gruppe"}
        aria-describedby={beschrieben(situationFehler && "wl-situation-fehler")}
      >
        <legend>Arbeitssituation</legend>
        {situationFehler ? (
          <p className="feld-fehler" id="wl-situation-fehler">
            {situationFehler}
          </p>
        ) : null}
        {ARBEITSSITUATIONEN.map((situation) => {
          const id = `wl-situation-${situation.wert}`;
          return (
            <label className="option" key={situation.wert}>
              <input
                type="radio"
                className="pruef"
                id={id}
                name="arbeitssituation"
                value={situation.wert}
                required
                defaultChecked={werte?.arbeitssituation === situation.wert}
                aria-labelledby={`${id}-titel`}
                aria-describedby={situation.beschreibung ? `${id}-text` : undefined}
              />
              <span className="option-text">
                <span className="option-titel" id={`${id}-titel`}>
                  {situation.titel}
                </span>
                {situation.beschreibung ? (
                  <span className="option-beschreibung" id={`${id}-text`}>
                    {situation.beschreibung}
                  </span>
                ) : null}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="feld">
        <label htmlFor="wl-tarif">
          Tarif, der dich interessiert <span className="feld-optional">(optional)</span>
        </label>
        <select
          className="eingabe"
          id="wl-tarif"
          name="tarif"
          defaultValue={werte?.tarif ?? tarif}
          aria-describedby="wl-tarif-hilfe"
        >
          {TARIF_OPTIONEN.map((option) => (
            <option key={option.wert} value={option.wert}>
              {option.titel}
            </option>
          ))}
        </select>
        <p className="feld-hilfe" id="wl-tarif-hilfe">
          {"Du legst dich damit nicht fest. Buchen kannst du ab September\u00a02027, Team ab\u00a0Q4\u00a02027."}
        </p>
      </div>

      <fieldset className="feldgruppe ws-wl-gruppe" aria-describedby="wl-gespraech-hilfe">
        <legend>
          Gespräch <span className="feld-optional">(optional)</span>
        </legend>
        <div className="ws-wl-kaestchen">
          <label className="option">
            <input
              type="checkbox"
              className="pruef"
              id="wl-gespraech"
              name="gespraech"
              value="ja"
              defaultChecked={werte?.gespraech ?? false}
            />
            <span className="option-titel">Ich würde an einem Gespräch über meine Arbeitsweise teilnehmen.</span>
          </label>
          <p className="feld-hilfe ws-wl-einzug" id="wl-gespraech-hilfe">
            {ohneTrennung("Bis Dezember 2026 fragen wir einige Personen per E-Mail an. Zusagen musst du dann nicht.")}
          </p>
        </div>
      </fieldset>

      <div className="ws-wl-zustimmung">
        <div className="feld ws-wl-kaestchen">
          <label className="option">
            <input
              type="checkbox"
              className="pruef"
              id="wl-alter"
              name="alter"
              value="ja"
              required
              defaultChecked={werte?.alter ?? false}
              aria-invalid={alterFehler ? true : undefined}
              aria-describedby={beschrieben(alterFehler && "wl-alter-fehler")}
            />
            <span className="option-titel">Ich bin mindestens 16 Jahre alt.</span>
          </label>
          {alterFehler ? (
            <p className="feld-fehler ws-wl-einzug" id="wl-alter-fehler">
              <span>{ohneTrennung(alterFehler)}</span>
            </p>
          ) : null}
        </div>

        <div className="feld ws-wl-kaestchen">
          <label className="option">
            <input
              type="checkbox"
              className="pruef"
              id="wl-einwilligung"
              name="einwilligung"
              value="ja"
              required
              defaultChecked={werte?.einwilligung ?? false}
              aria-invalid={einwilligungFehler ? true : undefined}
              aria-describedby={beschrieben(einwilligungFehler && "wl-einwilligung-fehler", "wl-einwilligung-hilfe")}
            />
            <span className="option-titel">{ohneTrennung(EINWILLIGUNG_TEXT)}</span>
          </label>
          {einwilligungFehler ? (
            <p className="feld-fehler ws-wl-einzug" id="wl-einwilligung-fehler">
              <span>{ohneTrennung(einwilligungFehler)}</span>
            </p>
          ) : null}
          <p className="feld-hilfe ws-wl-einzug" id="wl-einwilligung-hilfe">
            Wie wir deine Angaben verarbeiten und wie du widerrufst, steht in der{" "}
            <Link to="/datenschutz">Datenschutzerklärung</Link>.
          </p>
        </div>
      </div>

      {/* Honigtopf gegen Bots: für Menschen unsichtbar, nicht fokussierbar, für Bildschirmleser verborgen. */}
      <div className="ws-wl-honig" aria-hidden="true">
        <label htmlFor="wl-webseite">Webseite</label>
        <input id="wl-webseite" name="webseite" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      {turnstileSchluessel ? (
        <div className="feld" role="group" aria-labelledby="wl-pruefung-titel">
          <span className="feld-label" id="wl-pruefung-titel">
            Sicherheitsprüfung
          </span>
          <Turnstile schluessel={turnstileSchluessel} erneuern={antwort} />
          {pruefungFehler ? <p className="feld-fehler">{pruefungFehler}</p> : null}
          <p className="feld-hilfe">Cloudflare Turnstile prüft beim Absenden, ob ein Mensch das Formular schickt.</p>
        </div>
      ) : null}

      <div className="ws-wl-senden">
        <button
          type="submit"
          className="knopf knopf-primaer knopf-gross knopf-block-mobil"
          aria-disabled={sendet ? true : undefined}
          aria-busy={sendet ? true : undefined}
          onClick={(ereignis) => {
            if (sendet) ereignis.preventDefault();
          }}
        >
          {sendet ? (
            <>
              <span className="lader" aria-hidden="true" />
              Wird gesendet …
            </>
          ) : (
            "Warteliste beitreten"
          )}
        </button>
      </div>
    </Form>
  );
}

/** Ersetzt das Formular nach dem Eintrag; bekommt den Fokus. */
function Erfolg({ email, gespraech }: { email: string; gespraech: boolean }) {
  const meldung = useRef<HTMLDivElement>(null);

  useEffect(() => {
    meldung.current?.focus();
  }, []);

  return (
    <div className="ws-wl-erfolg">
      <div className="meldung meldung-ok ws-wl-meldung" role="status" tabIndex={-1} ref={meldung}>
        <div className="meldung-inhalt">
          <p>
            <strong>Du stehst auf der Warteliste.</strong> Zum Start der geschlossenen Beta schreiben wir dir an{" "}
            <span className="ws-wl-adresse">{email}</span>.
          </p>
          {gespraech ? (
            <p>{ohneTrennung("Für ein Gespräch fragen wir dich vielleicht bis Dezember 2026 per E-Mail an.")}</p>
          ) : null}
        </div>
      </div>
      <p className="ws-wl-erfolg-text">
        Bis dahin musst du nichts tun. Wann welche Phase beginnt, zeigt der Fahrplan.
      </p>
      <div className="ws-wl-erfolg-aktion">
        <Link to="/fahrplan" className="knopf knopf-kontur knopf-block-mobil">
          Fahrplan ansehen
        </Link>
      </div>
    </div>
  );
}
