import { Link } from "react-router";
import { STAND } from "~/lib/seite";

const NBSP = " ";

type Tarif = {
  schluessel: "free" | "privat" | "pro" | "team";
  name: string;
  klasse: string;
  betrag: string;
  zeitraum: string;
  hinweis: string;
  leistungen: string[];
  marke?: { text: string; klasse: string };
  knopf: { text: string; klasse: string };
};

/** Geplante Preise, Variante A des Plattformkonzepts (Abschnitt „Geschäftsmodell und Preise“). */
export const TARIFE: Tarif[] = [
  {
    schluessel: "free",
    name: "Free",
    klasse: "karte tk-karte tk-free",
    betrag: `0${NBSP}€`,
    zeitraum: "je Monat",
    hinweis: "Ohne Zahlungsdaten",
    leistungen: ["Verbundenes Postfach", "Alle Kernmodule", "2 GB Speicher", "20 Assistent-Anfragen je Monat"],
    knopf: { text: "Free vormerken", klasse: "knopf knopf-kontur knopf-block" },
  },
  {
    schluessel: "privat",
    name: "Privat",
    klasse: "karte karte-verlauf-pink tk-karte",
    betrag: `5,95${NBSP}€`,
    zeitraum: "je Monat",
    hinweis: `inkl. MwSt., bei jährlicher Zahlung (71,40${NBSP}€ im Jahr); monatlich 7,14${NBSP}€`,
    leistungen: ["Postfach mit 1 eigenen Domain", "5 Adressen", "50 GB Speicher", "75 Assistent-Anfragen je Monat"],
    knopf: { text: "Privat vormerken", klasse: "knopf knopf-weiss knopf-block" },
  },
  {
    schluessel: "pro",
    name: "Pro",
    klasse: "karte karte-verlauf tk-karte",
    betrag: `10${NBSP}€`,
    zeitraum: "je Nutzer und Monat",
    hinweis: `zzgl. MwSt., bei jährlicher Zahlung; monatlich 12${NBSP}€`,
    leistungen: [
      "3 Domains und 15 Adressen",
      "200 GB Speicher",
      "150 Assistent-Anfragen je Monat",
      "Automatische Vorschläge aus bis zu 25 Mails je Tag",
    ],
    marke: { text: "Für Selbstständige", klasse: "tk-marke" },
    knopf: { text: "Pro vormerken", klasse: "knopf knopf-weiss knopf-block" },
  },
  {
    schluessel: "team",
    name: "Team",
    klasse: "karte tk-karte",
    betrag: `13${NBSP}€`,
    zeitraum: "je Nutzer und Monat",
    hinweis: `zzgl. MwSt., ab 2 Nutzern, bei jährlicher Zahlung; monatlich 15${NBSP}€`,
    leistungen: [
      "Alles aus Pro für jeden Nutzer",
      "Rollen und Gruppenpostfächer",
      "Geteilte Kalender und Ordner",
      "Vertrag zur Auftragsverarbeitung",
    ],
    marke: { text: "ab Q4 2027", klasse: "tag" },
    knopf: { text: "Team vormerken", klasse: "knopf knopf-kontur knopf-block" },
  },
];

type Props = {
  /** id der Überschrift, eindeutig je Seite. */
  id?: string;
  /** Überschriftenebene des Titels: h2 als Abschnitt, h1 als Kopf der Tarifseite. */
  ebene?: "h1" | "h2";
  titel?: string;
  /** Leiste der kostenpflichtigen Erweiterungen unter den Karten. */
  erweiterungen?: boolean;
};

/**
 * Tarifübersicht nach dem Baustein „Tarifkarten“. Weil workly noch nicht buchbar ist, führt jeder Knopf
 * zur Warteliste und merkt den Tarif vor.
 */
export function Tarifkarten({ id = "tarife-titel", ebene = "h2", titel = "Wähle deinen Tarif", erweiterungen = true }: Props) {
  const Titel = ebene;
  const Name = ebene === "h1" ? "h2" : "h3";
  return (
    <section className="tk-tarife ws-rahmen" aria-labelledby={id}>
      <div className="tk-kopf">
        <Titel className="tk-titel" id={id}>
          {titel}
        </Titel>
        <p className="tk-unterzeile">
          Alle Tarife enthalten Posteingang, Kalender, Aufgaben und Dokumente. Geplante Preise, Stand {STAND}; buchbar
          ab September 2027, Team ab Q4 2027.
        </p>
      </div>
      <ul className="tk-raster" role="list">
        {TARIFE.map((tarif) => (
          <li key={tarif.schluessel} className={tarif.klasse}>
            <div className="tk-kopfzeile">
              <Name className="tk-name">{tarif.name}</Name>
              {tarif.marke ? <span className={tarif.marke.klasse}>{tarif.marke.text}</span> : null}
            </div>
            <p className="tk-preis">
              <span className="tk-betrag">{tarif.betrag}</span>
              <span className="tk-zeitraum">{tarif.zeitraum}</span>
            </p>
            <p className="tk-hinweis">{tarif.hinweis}</p>
            <ul className="hakenliste" role="list">
              {tarif.leistungen.map((leistung) => (
                <li key={leistung}>{leistung}</li>
              ))}
            </ul>
            <Link
              className={tarif.knopf.klasse}
              to={`/warteliste?tarif=${tarif.schluessel}`}
              aria-label={`${tarif.knopf.text}: Warteliste mit Interesse am Tarif ${tarif.name}`}
            >
              {tarif.knopf.text}
            </Link>
          </li>
        ))}
      </ul>
      {erweiterungen ? (
        <div className="karte tk-erweiterungen">
          <h3 className="tk-erw-titel">Kostenpflichtige Erweiterungen</h3>
          <ul className="tk-erw-liste" role="list">
            <li>
              <strong>Domain</strong>Registrierung und DNS-Verwaltung ab Q4 2027; Preis je Endung und Jahr. Eine
              vorhandene Domain zu verbinden kostet nichts.
            </li>
            <li>
              <strong>Website</strong>Bis zu 5 Seiten aus Vorlagen mit Kontaktformular in den Posteingang; in Pro
              und Team, 5{NBSP}€ zzgl. MwSt. je Monat, ab 2028.
            </li>
            <li>
              <strong>Zusätzliche Assistent-Anfragen</strong>Als Paket zubuchbar, ab Privat.
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
}
