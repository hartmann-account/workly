import type { ReactNode } from "react";
import { Link } from "react-router";
import type { SymbolName } from "@workly/ui/symbole";
import { Abschnitt } from "~/komponenten/Abschnitt";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { SymbolGrafik } from "~/komponenten/SymbolGrafik";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { TabelleMitKarten, type TabellenZeile } from "~/komponenten/sicherheit/TabelleMitKarten";
import { seitenMeta } from "~/lib/meta";
import { STAND, STAND_ISO, STANDORT_SATZ } from "~/lib/seite";
import stil from "~/stile/sicherheit.css?url";
import type { Route } from "./+types/sicherheit";

/*
 * Seite Sicherheit und Datenschutz. Quelle aller Angaben: docs/plattformkonzept.md, Abschnitte
 * „Technische Architektur“, „Dienste im Detail“, „Datenmodell und Datenflüsse“ und
 * „Sicherheit, Datenschutz und Compliance“. Was erst mit Ausbau 1 kommt, trägt das Abzeichen „ab Q4 2027“.
 */

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Sicherheit und Datenschutz",
    beschreibung:
      "Wo workly Postfächer, Termine und Dateien speichert, welche Dienstleister beteiligt sind und wie Verschlüsselung, Sicherungen, Export und Löschung geregelt sind.",
    pfad: "/sicherheit",
  });
}

/** Abzeichen für alles, was erst mit Ausbau 1 kommt. */
function AbQ4() {
  return <span className="tag">ab Q4&nbsp;2027</span>;
}

/** Zweite Zeile in einer Zelle, etwa der Weg im Team-Tarif. */
function Zusatz({ children }: { children: ReactNode }) {
  return <span className="ws-si-zusatz">{children}</span>;
}

const SPEICHERORTE: TabellenZeile[] = [
  {
    schluessel: "post",
    kopf: "Postfächer, Termine, Kontakte",
    zellen: ["Deutschland, Rechenzentren in Falkenstein und Nürnberg", "Hetzner"],
  },
  {
    schluessel: "datenbank",
    kopf: "Aufgaben, Dokumente, Verknüpfungen",
    zellen: ["Deutschland, Datenbank in Falkenstein, Sicherungen in Nürnberg", "Hetzner"],
  },
  {
    schluessel: "dateien",
    kopf: "Dateien und Anhänge",
    zellen: ["Deutschland, Speicher in Falkenstein, Kopie in Nürnberg", "Hetzner"],
  },
  {
    schluessel: "live",
    kopf: "Live-Zustand geöffneter Dokumente",
    zellen: ["EU", "Cloudflare"],
  },
  {
    schluessel: "sicherungen",
    kopf: "Verschlüsselte Sicherungskopien der Datenbank",
    zellen: ["EU", "Cloudflare"],
  },
  {
    schluessel: "auslieferung",
    kopf: "Auslieferung der Web-App und Schutz vor Angriffen",
    zellen: ["Der Cloudflare-Standort, an dem die Anfrage ankommt, auch außerhalb der EU", "Cloudflare"],
  },
  {
    schluessel: "assistent",
    kopf: "Anfragen an den Assistenten, nur nach Zustimmung",
    zellen: [
      <>
        Zum Start außerhalb der EU
        <Zusatz>
          Im Team-Tarif in EU-Regionen, ab Frankfurt <AbQ4 />
        </Zusatz>
      </>,
      <>
        Anthropic
        <Zusatz>
          Im Team-Tarif Amazon Web Services <AbQ4 />
        </Zusatz>
      </>,
    ],
  },
];

const ZIELE: TabellenZeile[] = [
  { schluessel: "db", kopf: "Ausfall eines Datenbankservers", zellen: ["Keiner", "5\u00a0Minuten"] },
  { schluessel: "mail", kopf: "Ausfall eines Mailservers", zellen: ["Keiner", "5\u00a0Minuten"] },
  {
    schluessel: "fsn",
    kopf: "Verlust des Standorts Falkenstein",
    zellen: ["5\u00a0Minuten bei der Datenbank, 15\u00a0Minuten bei Dateien", "4\u00a0Stunden"],
  },
  {
    schluessel: "logisch",
    kopf: "Logischer Fehler, etwa versehentlich gelöschte Daten, oder Erpressungssoftware",
    zellen: ["Rückkehr zu einem Zeitpunkt vor dem Fehler, aus Versionen und schreibgeschützten Kopien", "8\u00a0Stunden"],
  },
  {
    schluessel: "cloudflare",
    kopf: "Störung bei Cloudflare",
    zellen: ["Keiner", "Web-App aus; IMAP und SMTP laufen weiter"],
  },
];

type KarteProps = {
  symbol: SymbolName;
  titel: string;
  tag?: ReactNode;
  children: ReactNode;
};

/** Graue Karte mit Symbol, Titel (h3) und Text; steht immer in einer Liste. */
function Karte({ symbol, titel, tag, children }: KarteProps) {
  return (
    <li className="karte ws-si-karte">
      <div className="ws-si-karte-kopf">
        <SymbolGrafik name={symbol} className="symbol sy-symbol-gross" />
        <div className="ws-si-karte-titelzeile">
          <h3 className="ws-si-karte-titel">{titel}</h3>
          {tag}
        </div>
      </div>
      {children}
    </li>
  );
}

export default function Seite() {
  return (
    <>
      <Seitenkopf
        akzent="Speicherort Deutschland,"
        rest="mit benannten Ausnahmen"
        lead={`${STANDORT_SATZ} Diese Seite nennt für jeden beteiligten Dienst Ort und Aufgabe.`}
        kacheln={[{ name: "schild" }, { name: "schloss" }]}
      />

      {/* 2 · Speicherorte */}
      <Abschnitt
        id="si-orte"
        titel="Wo deine Inhalte liegen"
        lead={
          <>
            Die Tabelle nennt Ort und Anbieter für jede Art von Daten, Stand <time dateTime={STAND_ISO}>{STAND}</time>.
          </>
        }
      >
        <TabelleMitKarten
          id="si-orte-tabelle"
          titel="Speicherorte nach Art der Daten"
          spalten={["Was", "Wo", "Anbieter"]}
          zeilen={SPEICHERORTE}
          className="ws-si-orte"
        />
        <ul className="raster-2 ws-si-hinweise" role="list">
          <li className="ws-si-hinweis">
            <h3 className="ws-si-hinweis-titel">Mail-Apps</h3>
            <p className="ws-si-text">
              Mail-Apps auf deinen Geräten rufen Mails über IMAP ab und senden über SMTP. Diese Verbindungen gehen direkt
              zu Hetzner, nicht über Cloudflare.
            </p>
          </li>
          <li className="ws-si-hinweis">
            <h3 className="ws-si-hinweis-titel">Live-Zustand</h3>
            <p className="ws-si-text">
              Der Live-Zustand hält Änderungen, solange ein Dokument offen ist, und gleicht sie zwischen deinen Geräten
              ab. workly speichert das Dokument beim Schließen in Falkenstein, bei längerer Arbeit spätestens alle
              10&nbsp;Minuten. 24&nbsp;Stunden nach der letzten Aktivität im Dokument löscht workly den Live-Zustand.
            </p>
          </li>
          <li className="ws-si-hinweis">
            <h3 className="ws-si-hinweis-titel">Assistent</h3>
            <p className="ws-si-text">
              Der Assistent ist ab Werk aus. Nach deiner Zustimmung erhält Claude je Anfrage nur die nötigen Ausschnitte,
              mit Platzhaltern statt Adressen und Telefonnummern. Der Zustimmungsdialog sagt dir vorher, dass Anthropic
              die Anfragen zum Start außerhalb der EU verarbeitet.
            </p>
            <p className="ws-si-text">
              <Link to="/assistent">Zur Seite Assistent</Link>
            </p>
          </li>
          <li className="ws-si-hinweis">
            <h3 className="ws-si-hinweis-titel">Weitere Dienste bei Cloudflare</h3>
            <p className="ws-si-text">
              Einstellungen, mit denen die Web-App Workspaces zuordnet und Funktionen ein- und ausschaltet, speichert
              Cloudflare in der EU und hält Kopien davon weltweit vor. Auch Systemmails wie Einladungen laufen über
              Cloudflare, ebenso Betriebsdaten ohne Inhalte wie Zähler und Kennungen. Wo Cloudflare sie verarbeitet,
              prüft workly noch.
            </p>
          </li>
        </ul>
      </Abschnitt>

      {/* 3 · Verschlüsselung und Anmeldung */}
      <Abschnitt
        id="si-verschluesselung"
        titel="Verschlüsselung und Anmeldung"
        lead="workly verschlüsselt Daten auf dem Weg und im Speicher. Zur Anmeldung kannst du einen Passkey nutzen."
        flaeche
      >
        <ul className="raster-2" role="list">
          <Karte symbol="schloss" titel="Verbindungen">
            <p className="ws-si-text">
              Zwischen deinem Gerät und workly läuft jede Verbindung verschlüsselt über TLS. Auch auf dem Weg von
              Cloudflare zu den Servern bei Hetzner und zur Datenbank bleiben die Daten verschlüsselt.
            </p>
          </Karte>
          <Karte symbol="email" titel="E-Mail zwischen Servern">
            <p className="ws-si-text">
              Zwischen Mailservern verschlüsselt STARTTLS den Weg einer Nachricht. Über MTA-STS verlangt workly von anderen
              Mailservern, verschlüsselt zuzustellen. TLS-Berichte zeigen, wenn das scheitert.
            </p>
          </Karte>
          <Karte symbol="archiv" titel="Gespeicherte Daten">
            <p className="ws-si-text">
              Bei Hetzner sind die Festplatten der Server verschlüsselt, ebenso der Dateispeicher und die Sicherungen der
              Datenbank. Cloudflare verschlüsselt den Live-Zustand und die Sicherungskopien mit{" "}
              <span className="ws-si-ohne-umbruch">AES-256</span>; die
              Sicherungskopien tragen zusätzlich einen eigenen Schlüssel von workly.
            </p>
            <p className="ws-si-text">
              Jeder Workspace hat eigene Datenschlüssel. workly wechselt sie jährlich und nach Vorfällen.
            </p>
          </Karte>
          <Karte symbol="person" titel="Anmeldung">
            <p className="ws-si-text">
              Mit einem Passkey meldest du dich über Fingerabdruck, Gesicht oder die PIN deines Geräts an. Dazu kommen
              ein zweiter Faktor mit Einmalcodes aus einer Authentifizierungs-App und Wiederherstellungscodes für den
              Fall, dass ein Gerät verloren geht. Mail-Apps melden sich mit eigenen App-Passwörtern an.
            </p>
            <p className="ws-si-text">
              Registrierung und Anmeldung schützt ein Dienst von Cloudflare vor automatisierten Zugriffen, ohne
              Bilderrätsel.
            </p>
          </Karte>
        </ul>
      </Abschnitt>

      {/* 4 · Trennung, Rollen, Protokoll */}
      <Abschnitt
        id="si-trennung"
        titel="Workspaces getrennt, Zugriffe protokolliert"
        lead="Jeder Workspace steht für sich. Ein Protokoll hält Anmeldungen, Exporte und Zugriffe von Admins fest."
      >
        <ul className="raster-2" role="list">
          <Karte symbol="ordner" titel="Getrennte Workspaces">
            <p className="ws-si-text">
              Die Trennung gilt in der Datenbank, im Mailserver, im Dateispeicher und im Live-Zustand der Dokumente.
              Jeder Datensatz trägt die Kennung seines Workspace, und jede Schicht prüft sie selbst. Links zum Hoch- und
              Herunterladen von Dateien gelten 5&nbsp;Minuten.
            </p>
          </Karte>
          <Karte symbol="team" titel="Rollen" tag={<AbQ4 />}>
            <p className="ws-si-text">
              Teams arbeiten mit vier Rollen: Inhaber, Admin, Mitglied und Gast. Gäste erhalten einen Zugang mit
              Ablaufdatum. Keine Rolle sieht fremde Postfächer oder Fokusdaten, auch Inhaber und Admins nicht. Vom
              Assistenten sehen Admins nur den Gesamtverbrauch des Workspace.
            </p>
          </Karte>
          <Karte symbol="liste" titel="Manipulationssicheres Protokoll">
            <p className="ws-si-text">
              Das Protokoll hält Anmeldungen, Wechsel des zweiten Faktors, Rollenänderungen, Exporte, Löschungen, Zugriffe
              von Admins und Aktionen des Assistenten fest. Bei Aktionen des Assistenten speichert es keine Inhalte.
            </p>
            <p className="ws-si-text">
              Einträge lassen sich nur anhängen, jeder ist mit dem vorigen verkettet. Eine tägliche Kopie liegt in einem
              Speicher mit Löschsperre.
            </p>
          </Karte>
          <Karte symbol="schild" titel="Zugang zur Infrastruktur">
            <p className="ws-si-text">
              Das Team von workly erreicht die Server nur über den Zugangsdienst Cloudflare Access. Die
              Datenbank hat keinen offenen Zugang zum Internet, und Protokolle der Server enthalten Kennungen, keine
              Inhalte. Neue Versionen der Web-App gehen erst nach Freigabe durch eine zweite Person in Betrieb.
            </p>
          </Karte>
        </ul>
      </Abschnitt>

      {/* 5 · Sicherungen und Wiederanlauf */}
      <Abschnitt
        id="si-sicherungen"
        titel="Sicherungen und Wiederanlauf"
        lead="workly sichert Datenbank und Dateien mehrfach, an Standorten in Deutschland und bei Cloudflare in der EU."
        flaeche
      >
        <div className="ws-si-sicherung">
          <div className="ws-si-spalte">
            <h3 className="ws-si-untertitel">So sichert workly</h3>
            <p className="ws-si-text">
              Die Sicherung folgt der 3-2-1-Regel. Sie verlangt drei Kopien auf zwei Arten von Speicher, eine davon an
              einem anderen Ort.
            </p>
            <ul className="hakenliste ws-si-liste" role="list">
              <li>Die Datenbank läuft in Falkenstein auf zwei Servern; jede Änderung steht sofort auf beiden.</li>
              <li>Sicherungen der Datenbank und Kopien der Dateien gehen nach Nürnberg.</li>
              <li>Verschlüsselte Sicherungen der Datenbank liegen zusätzlich bei Cloudflare in der EU.</li>
              <li>Dateien liegen ein weiteres Mal in einem Sicherungsspeicher von Hetzner in Deutschland, mit älteren Ständen.</li>
              <li>
                Jeden Monat stellt ein automatischer Ablauf eine Sicherung auf einem eigens gestarteten Server wieder her und
                vergleicht Prüfsummen.
              </li>
            </ul>
          </div>
          <div className="ws-si-spalte">
            <h3 className="ws-si-untertitel">Ziele für den Ernstfall</h3>
            <TabelleMitKarten
              id="si-ziele-tabelle"
              titel="Ziele für Datenverlust und Wiederanlauf"
              spalten={["Fall", "Datenverlust höchstens", "Wiederanlauf"]}
              zeilen={ZIELE}
              kartenEbene={4}
              gestapelt
              className="ws-si-ziele"
            />
            <p className="ws-si-text ws-si-nach-tabelle">
              Die Werte sind Ziele. Eine Notfallübung in der geschlossenen Beta prüft, ob sie halten. Fällt Cloudflare aus,
              ist die Web-App nicht erreichbar; Mail-Apps auf deinen Geräten senden und empfangen über IMAP und SMTP weiter.
            </p>
          </div>
        </div>
      </Abschnitt>

      {/* 6 · Standards und Ausstieg */}
      <Abschnitt
        id="si-standards"
        titel="Offene Standards, Export und Löschung"
        lead="Mail, Kalender und Kontakte laufen über offene Standards. Deine Daten nimmst du in gängigen Formaten mit."
      >
        <ul className="raster-3 ws-si-drei" role="list">
          <Karte symbol="verknuepfen" titel="Offene Standards">
            <p className="ws-si-text">Mit ihnen nutzt du weiter die Mail-, Kalender- und Kontakte-Apps deiner Geräte.</p>
            <dl className="datenliste ws-si-daten">
              <dt>IMAP und SMTP</dt>
              <dd>Mails abrufen und senden</dd>
              <dt>JMAP</dt>
              <dd>Mail und Kalender in der Web-App</dd>
              <dt>CalDAV</dt>
              <dd>Kalender abgleichen</dd>
              <dt>CardDAV</dt>
              <dd>Kontakte abgleichen</dd>
            </dl>
          </Karte>
          <Karte symbol="herunterladen" titel="Export">
            <p className="ws-si-text">Export und Kündigung erledigst du selbst, ohne Anfrage beim Support.</p>
            <dl className="datenliste ws-si-daten">
              <dt>Mails</dt>
              <dd>EML</dd>
              <dt>Termine</dt>
              <dd>ICS</dd>
              <dt>Kontakte</dt>
              <dd>VCF</dd>
              <dt>Dokumente</dt>
              <dd>Markdown</dd>
            </dl>
          </Karte>
          <Karte symbol="papierkorb" titel="Löschung">
            <p className="ws-si-text">
              Löschst du dein Konto, entfernt ein automatischer Ablauf deine Daten aus Mailserver, Datenbank und
              Dateispeicher bei Hetzner und aus den Speichern bei Cloudflare.
            </p>
            <p className="ws-si-text">
              Sicherungen, die deine Daten noch enthalten, laufen nach 35&nbsp;Tagen aus. <span className="tag">geplant</span>
            </p>
          </Karte>
        </ul>
      </Abschnitt>

      {/* 7 · Dienstleister */}
      <Abschnitt
        id="si-dienstleister"
        titel="Dienstleister und ihre Aufgaben"
        lead="workly veröffentlicht vor dem Start die vollständige Liste der Unterauftragsverarbeiter, also aller Firmen, die im Auftrag von workly Daten verarbeiten."
        flaeche
      >
        <ul className="raster-2" role="list">
          <Karte symbol="ort" titel="Hetzner">
            <dl className="datenliste ws-si-daten">
              <dt>Aufgabe</dt>
              <dd>Server und Speicher für Postfächer, Termine, Kontakte, Datenbank und Dateien</dd>
              <dt>Ort</dt>
              <dd>Rechenzentren in Falkenstein und Nürnberg</dd>
            </dl>
            <p className="ws-si-text">
              Hetzner ist nach ISO/IEC&nbsp;27001 zertifiziert, einer Norm für Informationssicherheit. Hetzners Standorte in
              Finnland, den USA und Singapur nutzt workly nicht.
            </p>
          </Karte>
          <Karte symbol="schild" titel="Cloudflare">
            <dl className="datenliste ws-si-daten">
              <dt>Aufgabe</dt>
              <dd>
                Auslieferung der Web-App, Schutz vor Angriffen, Live-Zustand geöffneter Dokumente, verschlüsselte
                Sicherungskopien
              </dd>
              <dt>Ort</dt>
              <dd>
                Auslieferung und Schutz am Standort der Anfrage, auch außerhalb der EU; Live-Zustand und Sicherungskopien in
                der EU
              </dd>
            </dl>
          </Karte>
          <Karte symbol="assistent" titel="Anthropic">
            <dl className="datenliste ws-si-daten">
              <dt>Aufgabe</dt>
              <dd>Anfragen an den Assistenten Claude, nur nach deiner Zustimmung</dd>
              <dt>Ort</dt>
              <dd>Zum Start außerhalb der EU</dd>
            </dl>
            <p className="ws-si-text">
              Wie lange Anthropic Anfragen aufbewahrt, klärt workly vor der geschlossenen Beta.
            </p>
          </Karte>
          <Karte symbol="assistent" titel="Amazon Web Services" tag={<AbQ4 />}>
            <dl className="datenliste ws-si-daten">
              <dt>Aufgabe</dt>
              <dd>Assistent im Team-Tarif über Claude in Amazon Bedrock</dd>
              <dt>Ort</dt>
              <dd>EU-Regionen, mit EU-Profil ab Frankfurt</dd>
            </dl>
          </Karte>
        </ul>
      </Abschnitt>

      {/* 8 · Für Teams */}
      <Abschnitt
        id="si-teams"
        titel={"Für Teams ab Q4\u00a02027"}
        lead="Mit dem Team-Tarif erhält dein Unternehmen den Vertrag zur Auftragsverarbeitung und Unterlagen für den Betriebsrat."
      >
        <ul className="raster-2" role="list">
          <Karte symbol="datei" titel="Vertrag zur Auftragsverarbeitung">
            <p className="ws-si-text">
              Der Vertrag nach Art.&nbsp;28 DSGVO regelt, wie workly Daten im Auftrag deines Unternehmens verarbeitet.
            </p>
          </Karte>
          <Karte symbol="dokumente" titel="Unterlagen für die Betriebsvereinbarung">
            <p className="ws-si-text">
              Hat dein Unternehmen einen Betriebsrat, erhältst du Unterlagen, mit denen sich eine Betriebsvereinbarung zu
              workly vorbereiten lässt.
            </p>
          </Karte>
          <Karte symbol="fokus" titel="Keine individuellen Auswertungen für Arbeitgeber">
            <p className="ws-si-text">
              Keine Ansicht, kein Export und keine Schnittstelle gibt Fokuszeiten, Arbeitszeiten, Aktivität oder die
              Nutzung des Assistenten einzelner Personen an Admins oder Vorgesetzte weiter.
            </p>
            <p className="ws-si-text">
              <Link to="/funktionen#fokus">Zu Fokus und Wohlbefinden</Link>
            </p>
          </Karte>
          <Karte symbol="assistent" titel="Assistent mit EU-Profil">
            <p className="ws-si-text">
              Im Team-Tarif läuft der Assistent über Claude in Amazon Bedrock mit EU-Profil ab Frankfurt. Er bleibt aus, bis
              die Inhaberin oder der Inhaber ihn für den Workspace freigibt und jede Person selbst zustimmt.
            </p>
          </Karte>
        </ul>
      </Abschnitt>

      {/* 9 · Barrierefreiheit */}
      <Abschnitt
        id="si-barrierefreiheit"
        titel="Barrierefreiheit"
        lead={"Ziel ist WCAG\u00a02.2, Stufe AA, für Website und Portal, in heller und dunkler Darstellung."}
        flaeche
      >
        <ul className="hakenliste ws-si-liste ws-si-ziele-liste" role="list">
          <li>Text mit mindestens 4,5:1 Kontrast zum Hintergrund</li>
          <li>Bedienelemente und Fokusrahmen mit mindestens 3:1 Kontrast</li>
          <li>Bedienelemente auf dem Telefon mindestens 44&nbsp;×&nbsp;44&nbsp;px groß</li>
          <li>Zustände nie nur über Farbe, immer auch als Wort oder Symbol</li>
        </ul>
      </Abschnitt>

      <WartelisteBand id="si-warteliste" />
    </>
  );
}
