import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/fahrplan";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "fahrplan", beschreibung: "Platzhalter", pfad: "/fahrplan" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">fahrplan</h1>
    </section>
  );
}
