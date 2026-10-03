import type { ReactNode } from "react";
import { Link } from "react-router";
import { seitenMeta } from "~/lib/meta";
import stil from "~/stile/rechtliches.css?url";
import type { Route } from "./+types/impressum";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Impressum",
    beschreibung: "Angaben zum Anbieter der Website von workly nach §\u00a05 DDG.",
    pfad: "/impressum",
  });
}

/** „E-Mail“ bricht nicht nach „E-“ um. */
const EMAIL = <span className="ws-re-ganz">E-Mail</span>;

/** Angabe, die vor der Veröffentlichung ergänzt wird; steht sichtbar in eckigen Klammern. */
function Platzhalter({ children }: { children: ReactNode }) {
  return <span className="ws-re-platzhalter">[{children}]</span>;
}

export default function Seite() {
  return (
    <>
      <section className="ws-rahmen ws-seitenkopf" aria-labelledby="seitentitel">
        <h1 className="ws-seitentitel" id="seitentitel">
          Impressum
        </h1>
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
          <section aria-labelledby="anbieter-titel">
            <h2 id="anbieter-titel">Angaben nach §&nbsp;5 DDG</h2>
            <dl className="datenliste ws-re-daten">
              <dt>Anbieter</dt>
              <dd>
                <Platzhalter>Name oder Firma</Platzhalter>
              </dd>
              <dt>Rechtsform und Vertretung</dt>
              <dd>
                <Platzhalter>Rechtsform und Vertretung</Platzhalter>
              </dd>
              <dt>Anschrift</dt>
              <dd>
                <Platzhalter>Anschrift</Platzhalter>
              </dd>
              <dt>E-Mail</dt>
              <dd>
                <Platzhalter>{EMAIL}-Adresse</Platzhalter>
              </dd>
              <dt>Telefon</dt>
              <dd>
                <Platzhalter>Telefon</Platzhalter>
              </dd>
              <dt>Registereintrag</dt>
              <dd>
                <Platzhalter>Registergericht und Registernummer</Platzhalter>
              </dd>
              <dt>Umsatzsteuer-ID</dt>
              <dd>
                <Platzhalter>Umsatzsteuer-Identifikationsnummer</Platzhalter>
              </dd>
            </dl>
          </section>

          <section aria-labelledby="inhalt-titel">
            <h2 id="inhalt-titel">Verantwortlich für den Inhalt</h2>
            <p>
              Verantwortlich für den Inhalt nach §&nbsp;18 Abs.&nbsp;2 MStV: <Platzhalter>Name, Anschrift</Platzhalter>
            </p>
          </section>

          <section aria-labelledby="streit-titel">
            <h2 id="streit-titel">Verbraucher&shy;streit&shy;beilegung</h2>
            <p>
              <Platzhalter>Angabe zur Teilnahme an Streitbeilegungsverfahren</Platzhalter>
            </p>
          </section>

          <section aria-labelledby="datenschutz-titel">
            <h2 id="datenschutz-titel">Datenschutz</h2>
            <p>
              Wie wir mit deinen Daten auf dieser Website umgehen, steht in den Hinweisen zum{" "}
              <Link to="/datenschutz">Datenschutz</Link>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
