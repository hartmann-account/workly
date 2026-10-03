import { Abschnitt } from "~/komponenten/Abschnitt";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { Tarifkarten } from "~/komponenten/Tarifkarten";
import { Fragen } from "~/komponenten/tarife/Fragen";
import { Vergleich } from "~/komponenten/tarife/Vergleich";
import { WartelisteBand } from "~/komponenten/WartelisteBand";
import { seitenMeta } from "~/lib/meta";
import { STAND } from "~/lib/seite";
import stil from "~/stile/tarife.css?url";
import type { Route } from "./+types/tarife";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Tarife",
    beschreibung: `Geplante Tarife von workly: Free, Privat, Pro und Team mit festen Preisen je Nutzer. Buchbar ab September 2027, Team ab Q4 2027. Stand ${STAND}.`,
    pfad: "/tarife",
  });
}

export default function Seite() {
  return (
    <>
      <Seitenkopf
        akzent="Ein Abonnement"
        rest="für Mail, Kalender, Aufgaben und Dokumente"
        lead="workly plant vier Tarife mit festen Preisen je Nutzer. Buchbar sind sie ab September 2027, Team ab Q4 2027. Auf der Warteliste merkst du einen Tarif vor."
      />

      <div className="ws-abschnitt ws-ta-tarife">
        <Tarifkarten id="ta-tarife-titel" ebene="h2" titel="Tarife im Überblick" erweiterungen />
      </div>

      <Abschnitt
        id="ta-vergleich-titel"
        anker="vergleich"
        titel="Leistungen im Vergleich"
        lead="Die Tarife unterscheiden sich in Domains, Adressen, Speicher und Teamfunktionen; das Kontingent des Assistenten wächst mit."
        flaeche
        className="ws-ta-nach-wechsel"
      >
        <Vergleich />
      </Abschnitt>

      <Abschnitt id="ta-fragen-titel" anker="fragen" titel="Häufige Fragen zu Tarifen" className="ws-ta-nach-wechsel">
        <Fragen />
      </Abschnitt>

      <WartelisteBand id="ta-warteliste" />
    </>
  );
}
