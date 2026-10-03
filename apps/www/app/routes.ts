import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/startseite.tsx"),
  route("funktionen", "routes/funktionen.tsx"),
  route("assistent", "routes/assistent.tsx"),
  route("sicherheit", "routes/sicherheit.tsx"),
  route("tarife", "routes/tarife.tsx"),
  route("fahrplan", "routes/fahrplan.tsx"),
  route("warteliste", "routes/warteliste.tsx"),
  route("datenschutz", "routes/datenschutz.tsx"),
  route("impressum", "routes/impressum.tsx"),
  route("robots.txt", "routes/robots-txt.ts"),
  route("sitemap.xml", "routes/sitemap-xml.ts"),
  route("*", "routes/nicht-gefunden.tsx"),
] satisfies RouteConfig;
