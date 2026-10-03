import { BASIS_URL, SEITEN, STAND_ISO } from "~/lib/seite";

export function loader() {
  const eintraege = BASIS_URL
    ? SEITEN.map(
        (pfad) => `  <url><loc>${BASIS_URL}${pfad === "/" ? "/" : pfad}</loc><lastmod>${STAND_ISO}</lastmod></url>`,
      )
    : [];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...eintraege,
    "</urlset>",
    "",
  ].join("\n");
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
