import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/startseite";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "startseite", beschreibung: "Platzhalter", pfad: "/startseite" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">startseite</h1>
    </section>
  );
}
