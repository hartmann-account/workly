import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/warteliste";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "warteliste", beschreibung: "Platzhalter", pfad: "/warteliste" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">warteliste</h1>
    </section>
  );
}
