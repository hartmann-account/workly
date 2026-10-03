import type { Config } from "@react-router/dev/config";

// Statische Seiten werden beim Build zu HTML vorgerendert und als Static Assets ausgeliefert.
// /warteliste bleibt serverseitig, weil das Formular eine Action im Worker braucht.
export default {
  ssr: true,
  prerender: [
    "/",
    "/funktionen",
    "/assistent",
    "/sicherheit",
    "/tarife",
    "/fahrplan",
    "/impressum",
    "/datenschutz",
    "/robots.txt",
    "/sitemap.xml",
  ],
} satisfies Config;
