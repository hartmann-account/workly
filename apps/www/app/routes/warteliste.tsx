import { data } from "react-router";
import { Seitenkopf } from "~/komponenten/Seitenkopf";
import { tarifAus } from "~/komponenten/warteliste/daten";
import { WartelisteFormular } from "~/komponenten/warteliste/Formular";
import { DeineAngaben, SoGehtEsWeiter } from "~/komponenten/warteliste/Hinweise";
import { ohneTrennung } from "~/komponenten/warteliste/Wort";
import { seitenMeta } from "~/lib/meta";
import stil from "~/stile/warteliste.css?url";
import type { Route } from "./+types/warteliste";
import { trageEin, turnstileSchluessel } from "./warteliste.server";

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: stil }];

export function meta(_: Route.MetaArgs) {
  return seitenMeta({
    titel: "Warteliste",
    beschreibung:
      "Trag dich in die Warteliste für workly ein. Die geschlossene Beta beginnt im Juni 2027, die Registrierung für alle im September 2027.",
    pfad: "/warteliste",
  });
}

/** Läuft im Worker (nicht vorgerendert): Tarif aus ?tarif= und Turnstile-Schlüssel. */
export function loader({ request }: Route.LoaderArgs) {
  return {
    tarif: tarifAus(new URL(request.url).searchParams.get("tarif")),
    turnstileSchluessel: turnstileSchluessel(),
  };
}

export async function action({ request }: Route.ActionArgs) {
  const { status, antwort } = await trageEin(await request.formData());
  return data(antwort, { status });
}

export default function Seite({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <>
      <Seitenkopf
        akzent="Warteliste"
        rest="für die Beta"
        lead={ohneTrennung(
          "Die geschlossene Beta beginnt im Juni 2027, die Registrierung für alle im September 2027. Trag dich ein; sobald es losgeht, bekommst du eine E-Mail.",
        )}
      />
      <div className="ws-rahmen ws-wl-raster">
        <div className="ws-wl-haupt">
          <WartelisteFormular
            tarif={loaderData.tarif}
            turnstileSchluessel={loaderData.turnstileSchluessel}
            antwort={actionData}
          />
        </div>
        <div className="ws-wl-neben">
          <SoGehtEsWeiter />
          <DeineAngaben turnstile={loaderData.turnstileSchluessel !== ""} />
        </div>
      </div>
    </>
  );
}
