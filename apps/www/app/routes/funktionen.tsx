import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/funktionen";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "funktionen", beschreibung: "Platzhalter", pfad: "/funktionen" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">funktionen</h1>
    </section>
  );
}
