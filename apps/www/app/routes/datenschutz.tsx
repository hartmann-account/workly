import type { ReactNode } from "react";
import { Link } from "react-router";
import { seitenMeta } from "~/lib/meta";
import { STAND, STAND_ISO } from "~/lib/seite";
import stil from "~/stile/rechtliches.css?url";
import type { Route } from "./+types/datenschutz";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Datenschutz",
    beschreibung:
      "Wie die Website von workly mit deinen Daten umgeht: Auslieferung über Cloudflare, helle und dunkle Darstellung, Warteliste und deine Rechte.",
    pfad: "/datenschutz",
  });
}

/** „E-Mail“ bricht nicht nach „E-“ um. */
const EMAIL = <span className="ws-re-ganz">E-Mail</span>;

/** Angabe, die vor der Veröffentlichung ergänzt wird; steht sichtbar in eckigen Klammern. */
function Platzhalter({ children }: { children: ReactNode }) {
  return <span className="ws-re-platzhalter">[{children}]</span>;
}

/** Abschnitt mit h2; die id dient zugleich als Sprungziel. */
function Teil({ id, titel, children }: { id: string; titel: ReactNode; children: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-titel`} id={id}>
      <h2 id={`${id}-titel`}>{titel}</h2>
      {children}
    </section>
  );
}

export default function Seite() {
  return (
    <>
      <section className="ws-rahmen ws-seitenkopf" aria-labelledby="seitentitel">
        <h1 className="ws-seitentitel" id="seitentitel">
          Datenschutz
        </h1>
        <p className="ws-lead">
          Diese Hinweise gelten für die Website von workly und für die Warteliste. Für workly selbst
          veröffentlichen wir später eigene Datenschutzhinweise.
        </p>
      </section>

      <div className="ws-rahmen">
        <div className="meldung meldung-warn ws-re-entwurf" role="status">
          <div className="meldung-inhalt">
            <p>
              <strong>Entwurf.</strong> Die Angaben zum Anbieter fehlen noch und werden vor der Veröffentlichung
              ergänzt; der Text wird juristisch geprüft.
            </p>
          </div>
        </div>

        <div className="ws-text ws-re-text">
          <Teil id="verantwortlicher" titel="Verantwortlicher">
            <p>Verantwortlich für die Verarbeitung deiner Daten auf dieser Website ist:</p>
            <p>
              <Platzhalter>Name oder Firma</Platzhalter>
              <br />
              <Platzhalter>Anschrift</Platzhalter>
              <br />
              {EMAIL}: <Platzhalter>{EMAIL}-Adresse</Platzhalter>
            </p>
            <p>
              Alle Angaben zum Anbieter stehen im <Link to="/impressum">Impressum</Link>.
            </p>
          </Teil>

          <Teil id="ueberblick" titel="Überblick">
            <p>
              Wir setzen keine Cookies, legen keine Nutzungsprofile an und binden keine Analyse-Werkzeuge ein. Die
              Schrift liefert diese Website selbst aus; dein Browser verbindet sich dafür nicht mit Google Fonts oder
              einem anderen Schriftdienst. Wir speichern nur die Angaben, die du in die Warteliste einträgst.
              Cloudflare hält technische Protokolle bis zu 7&nbsp;Tage, und deine Wahl zwischen heller und dunkler
              Darstellung bleibt in deinem Browser.
            </p>
          </Teil>

          <Teil id="cloudflare" titel="Auslieferung über Cloudflare">
            <p>
              Die Website läuft auf Cloudflare Workers. Rufst du eine Seite auf, verarbeitet Cloudflare dafür technisch
              nötige Daten: deine IP-Adresse, den Zeitpunkt, die aufgerufene Seite und Angaben zu deinem Browser.
              Cloudflare bearbeitet jede Anfrage in dem Rechenzentrum, das sie zuerst erreicht; das kann auch außerhalb
              der EU liegen. Die Protokolle dazu bewahrt Cloudflare für uns bis zu 7&nbsp;Tage auf.
            </p>
            <p>
              Rechtsgrundlage ist unser berechtigtes Interesse, die Website sicher und zuverlässig auszuliefern (Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;f Datenschutz-Grundverordnung, DSGVO).
            </p>
            <p>
              Cloudflare, Inc. sitzt in den USA und kann Daten deshalb in die USA übermitteln. Grundlage
              dafür ist der Angemessenheitsbeschluss der EU-Kommission zum <span lang="en">EU-U.S. Data Privacy Framework</span>,
              an dem Cloudflare teilnimmt (Art.&nbsp;45 DSGVO). Ergänzend gelten die Standardvertragsklauseln der
              EU-Kommission aus unserem Vertrag zur Auftragsverarbeitung mit Cloudflare (Art.&nbsp;46 Abs.&nbsp;2 lit.&nbsp;c DSGVO).
            </p>
          </Teil>

          <Teil id="darstellung" titel="Helle und dunkle Darstellung">
            <p>
              Ohne eigene Wahl folgt die Website der Einstellung deines Systems und speichert nichts. Wählst du mit dem
              Knopf „Dunkle Darstellung“ selbst, legt dein Browser deine Wahl in seinem lokalen Speicher ab
              (<code lang="en">localStorage</code>, Eintrag „workly-thema“). Die Angabe bleibt auf deinem Gerät; dein Browser
              schickt sie nicht an uns.
            </p>
            <p>
              Nach unserer Einschätzung ist diese Speicherung unbedingt erforderlich, damit die Website die Darstellung
              zeigt, die du ausdrücklich gewählt hast (§&nbsp;25 Abs.&nbsp;2 Nr.&nbsp;2 Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz,
              TDDDG). Deshalb fragen wir dafür keine Einwilligung ab. Du entfernst den Eintrag, indem du die
              Websitedaten in deinem Browser löschst.
            </p>
          </Teil>

          <Teil id="warteliste" titel="Warteliste">
            <p>
              Wenn du dich in die <Link to="/warteliste">Warteliste</Link> einträgst, speichern wir diese Angaben:
            </p>
            <ul role="list">
              <li>deine {EMAIL}-Adresse (Pflicht)</li>
              <li>deine Arbeitssituation (Pflicht)</li>
              <li>den Tarif, der dich interessiert (freiwillig)</li>
              <li>ob du zu einem Gespräch über deine Arbeitsweise bereit bist (freiwillig)</li>
              <li>den Zeitpunkt deines Eintrags sowie Zeitpunkt und Fassung deiner Einwilligung</li>
            </ul>
            <p>Mit dem Eintrag speichern wir weder deine IP-Adresse noch Angaben zu deinem Browser.</p>
            <p>
              Wir nutzen die Angaben, um dir zur Warteliste und zum Start der Beta zu schreiben und die Einladungen zur
              Beta zu planen. Hast du ein Gespräch angeboten, fragen wir dich per {EMAIL} nach einem Termin.
              Rechtsgrundlage ist deine Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Eintragen kannst du dich ab 16&nbsp;Jahren.
            </p>
            <p>
              Die Angaben liegen in einer Datenbank bei Cloudflare (D1), Speicherort <Platzhalter>Speicherort der Datenbank</Platzhalter>. Cloudflare verarbeitet
              sie in unserem Auftrag; an andere geben wir sie nicht weiter.
            </p>
            <p>
              Wir speichern die Angaben, bis du deine Einwilligung widerrufst, längstens bis <Platzhalter>Frist</Platzhalter>.
              Widerrufen kannst du jederzeit mit einer {EMAIL} an <Platzhalter>{EMAIL}-Adresse</Platzhalter>; danach löschen
              wir deinen Eintrag. Was wir bis zum Widerruf verarbeitet haben, bleibt davon unberührt.
            </p>
          </Teil>

          <Teil id="bots" titel="Schutz vor Bots">
            <p>
              Wir können das Formular der Warteliste mit Cloudflare Turnstile vor automatisierten Eintragungen schützen.
              Ist Turnstile eingeschaltet, lädt die Seite der Warteliste dafür ein Skript von Cloudflare. Turnstile prüft
              dann Merkmale deines Browsers und zeigt dir kein Bilderrätsel. Cloudflare verarbeitet dabei auch deine
              IP-Adresse.
            </p>
            <p>
              Rechtsgrundlage ist unser berechtigtes Interesse, die Warteliste vor Eintragungen durch Programme zu
              schützen (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Für die Übermittlung in die USA gilt dasselbe wie im Abschnitt{" "}
              <a href="#cloudflare">Auslieferung über Cloudflare</a>.
            </p>
          </Teil>

          <Teil id="rechte" titel="Deine Rechte">
            <p>Du hast uns gegenüber diese Rechte:</p>
            <ul role="list">
              <li>Auskunft über die Daten, die wir über dich verarbeiten (Art.&nbsp;15 DSGVO)</li>
              <li>Berichtigung falscher Daten (Art.&nbsp;16 DSGVO)</li>
              <li>Löschung deiner Daten (Art.&nbsp;17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
              <li>
                Datenübertragbarkeit, also das Recht, deine Daten in einem gängigen, maschinenlesbaren Format zu erhalten
                (Art.&nbsp;20 DSGVO)
              </li>
              <li>
                Widerspruch gegen Verarbeitungen auf Grundlage unseres berechtigten Interesses, aus Gründen deiner
                besonderen Situation (Art.&nbsp;21 DSGVO)
              </li>
              <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art.&nbsp;7 Abs.&nbsp;3 DSGVO)</li>
              <li>
                Beschwerde bei einer Datenschutz-Aufsichtsbehörde, insbesondere in dem Mitgliedstaat, in dem du wohnst
                oder arbeitest (Art.&nbsp;77 DSGVO)
              </li>
            </ul>
            <p>
              Schreib uns dafür an <Platzhalter>{EMAIL}-Adresse</Platzhalter>.
            </p>
          </Teil>

          <p className="ws-fussnote ws-re-stand">
            Stand: <time dateTime={STAND_ISO}>{STAND}</time>
          </p>
        </div>
      </div>
    </>
  );
}
