import { BASIS_URL, OEFFENTLICH } from "./seite";

type MetaEintrag = Record<string, string>;

const MARKENTITEL = "workly – E-Mail, Kalender, Aufgaben und Dokumente in einem Programm";

/** Titel, Beschreibung, Open Graph, kanonischer Link und Indexierung für eine Seite. */
export function seitenMeta({
  titel,
  beschreibung,
  pfad,
}: {
  titel?: string;
  beschreibung: string;
  pfad: string;
}): MetaEintrag[] {
  const vollerTitel = titel ? `${titel} – workly` : MARKENTITEL;
  const eintraege: MetaEintrag[] = [
    { title: vollerTitel },
    { name: "description", content: beschreibung },
    { property: "og:title", content: vollerTitel },
    { property: "og:description", content: beschreibung },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "de_DE" },
    { property: "og:site_name", content: "workly" },
  ];
  if (BASIS_URL) {
    eintraege.push(
      { tagName: "link", rel: "canonical", href: `${BASIS_URL}${pfad}` },
      { property: "og:url", content: `${BASIS_URL}${pfad}` },
    );
  }
  if (!OEFFENTLICH) eintraege.push({ name: "robots", content: "noindex, nofollow" });
  return eintraege;
}
