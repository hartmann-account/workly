import type { ReactNode } from "react";
import { Link } from "react-router";
import { SymbolGrafik } from "~/komponenten/SymbolGrafik";

/*
 * Häufige Fragen als native details/summary: per Tastatur mit Tab, Enter und Leertaste bedienbar,
 * ohne Skript. Jede Frage ist mindestens 44 px hoch (siehe stile/tarife.css).
 * Fakten: Plattformkonzept, Abschnitte „Geschäftsmodell und Preise“, „Produktmodule: MVP und Ausbaustufen“,
 * „Datenmodell und Datenflüsse“ (Export), „Portal“ (Abrechnung) und „Umsetzungsfahrplan“.
 */

const NBSP = " ";

type Frage = { id: string; frage: string; antwort: ReactNode };

const FRAGEN: Frage[] = [
  {
    id: "brutto-netto",
    frage: "Sind die Preise brutto oder netto?",
    antwort: (
      <>
        <p>
          Privat ist ein Tarif für Privatpersonen. Sein Preis enthält die Umsatzsteuer und beträgt 5,95{NBSP}€ je
          Monat bei jährlicher Zahlung, 7,14{NBSP}€ bei monatlicher.
        </p>
        <p>
          Pro und Team sind Tarife für Selbstständige und Unternehmen. Ihre Preise stehen netto, die Umsatzsteuer kommt
          hinzu. Ziehst du als Kleinunternehmer keine Vorsteuer ab, zahlst du für Pro also 11,90{NBSP}€ je Monat bei
          jährlicher Zahlung.
        </p>
      </>
    ),
  },
  {
    id: "verbundenes-postfach",
    frage: "Was heißt „verbundenes Postfach“?",
    antwort: (
      <>
        <p>
          In Free verbindest du ein vorhandenes Postfach per IMAP mit workly, etwa das deines Webhosters oder deiner
          Hochschule. Die Adresse bleibt bei ihrem bisherigen Anbieter.
        </p>
        <p>
          Ein Postfach unter eigener Domain mit eigenen Adressen gibt es ab Privat. Wechselst du zu Privat oder Pro,
          bleibt das alte Postfach verbunden, bis deine Domain umgestellt ist.
        </p>
      </>
    ),
  },
  {
    id: "studierende",
    frage: "Was zahlen Studierende?",
    antwort: (
      <p>
        Free kostet nichts und ist auch für Studierende gedacht. Wer als Studentin oder Student eine eigene Domain
        möchte, bekommt nach heutiger Planung 50{NBSP}% Rabatt auf Privat.
      </p>
    ),
  },
  {
    id: "wechseln",
    frage: "Kann ich den Tarif wechseln?",
    antwort: (
      <p>
        Ja. In der Abrechnung wählst du „Tarif ändern“. Der Wechsel wirkt sofort; wir rechnen anteilig ab.
      </p>
    ),
  },
  {
    id: "kuendigen",
    frage: "Wie kündige ich, und wie nehme ich meine Daten mit?",
    antwort: (
      <p>
        Kündigung und Export erledigst du selbst, ohne den Support zu fragen. Der Export liefert Mails als EML, Termine
        als ICS, Kontakte als VCF und Dokumente als Markdown. Diese Formate lesen auch andere Programme.
      </p>
    ),
  },
  {
    id: "zahlungsdaten",
    frage: "Brauche ich für die Registrierung Zahlungsdaten?",
    antwort: (
      <p>
        Nein. Du registrierst dich ohne Zahlungsdaten und startest in Free. Zahlungsdaten gibst du erst an, wenn du zu
        einem bezahlten Tarif wechselst.
      </p>
    ),
  },
  {
    id: "schweiz",
    frage: "Was gilt für Kundinnen und Kunden in der Schweiz?",
    antwort: (
      <p>
        Steuer und Währung für die Schweiz stehen noch nicht fest. Beides hängt vom Sitz des Unternehmens ab, über den
        wir noch entscheiden.
      </p>
    ),
  },
  {
    id: "noch-nicht-buchbar",
    frage: "Warum kann ich noch keinen Tarif buchen?",
    antwort: (
      <>
        <p>
          workly ist noch nicht gestartet. Bis Dezember 2026 prüfen wir Bedarf und Preise in Interviews, bis Mai 2027
          testen 20 Personen eine geschlossene Alpha. Von Juni bis August 2027 läuft die geschlossene Beta mit 200 bis
          500 Personen; im September 2027 öffnet die Registrierung für alle. Den Team-Tarif gibt es ab Q4 2027.
        </p>
        <p>
          Bis dahin trägst du dich auf der <Link to="/warteliste">Warteliste</Link> ein und gibst dort an, welcher Tarif
          dich interessiert. Die Stufen bis 2028 zeigt der <Link to="/fahrplan">Fahrplan</Link>.
        </p>
      </>
    ),
  },
];

export function Fragen() {
  return (
    <div className="ws-ta-fragen">
      {FRAGEN.map((f) => (
        <details key={f.id} className="ws-ta-frage" id={`frage-${f.id}`}>
          <summary className="ws-ta-frage-kopf">
            <span className="ws-ta-frage-text">{f.frage}</span>
            <SymbolGrafik name="aufklappen" className="symbol ws-ta-frage-symbol" />
          </summary>
          <div className="ws-ta-antwort">{f.antwort}</div>
        </details>
      ))}
    </div>
  );
}
