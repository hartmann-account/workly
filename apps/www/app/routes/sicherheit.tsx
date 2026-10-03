import { seitenMeta } from "~/lib/meta";
import type { Route } from "./+types/sicherheit";

export function meta(_: Route.MetaArgs) {
  return seitenMeta({ titel: "sicherheit", beschreibung: "Platzhalter", pfad: "/sicherheit" });
}

export default function Seite() {
  return (
    <section className="ws-rahmen ws-seitenkopf">
      <h1 className="ws-seitentitel">sicherheit</h1>
    </section>
  );
}
