import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/assistent";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "assistent", beschreibung: "Platzhalter", pfad: "/assistent" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">assistent</h1>
    </section>
  );
}
