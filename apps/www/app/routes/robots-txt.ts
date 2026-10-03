import { BASIS_URL, OEFFENTLICH } from "~/lib/seite";

export function loader() {
  const zeilen = OEFFENTLICH
    ? ["User-agent: *", "Allow: /", ...(BASIS_URL ? [`Sitemap: ${BASIS_URL}/sitemap.xml`] : [])]
    : ["# Bis zur Markenprüfung nicht indexieren.", "User-agent: *", "Disallow: /"];
  return new Response(`${zeilen.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
