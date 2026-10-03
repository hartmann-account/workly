import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/tarife";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "tarife", beschreibung: "Platzhalter", pfad: "/tarife" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">tarife</h1>
    </section>
  );
}
