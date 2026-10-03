import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/impressum";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "impressum", beschreibung: "Platzhalter", pfad: "/impressum" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">impressum</h1>
    </section>
  );
}
