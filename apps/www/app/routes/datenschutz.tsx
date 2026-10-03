import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/datenschutz";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "datenschutz", beschreibung: "Platzhalter", pfad: "/datenschutz" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">datenschutz</h1>
    </section>
  );
}
