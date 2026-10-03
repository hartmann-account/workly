import { isRouteErrorResponse, Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import schriftUrl from "@workly/ui/fonts/dm-sans-latin-wght-normal.woff2?url";
import bundleCss from "@workly/ui/bundle.css?url";
import tokensCss from "@workly/ui/tokens.css?url";
import type { Route } from "./+types/root";
import { Fuss } from "./komponenten/Fuss";
import { Kopf } from "./komponenten/Kopf";
import { THEMA_SKRIPT } from "./komponenten/ThemaUmschalter";
import seiteCss from "./stile/seite.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "preload", href: schriftUrl, as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: tokensCss },
  { rel: "stylesheet", href: bundleCss },
  { rel: "stylesheet", href: seiteCss },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#091122" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: THEMA_SKRIPT }} />
        <Meta />
        <Links />
      </head>
      <body>
        <a className="hu-skiplink" href="#inhalt">
          Zum Inhalt springen
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Kopf />
      <main id="inhalt" tabIndex={-1}>
        <Outlet />
      </main>
      <Fuss />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const nichtGefunden = isRouteErrorResponse(error) && error.status === 404;
  const titel = nichtGefunden ? "Diese Seite gibt es nicht" : "Die Seite konnte nicht geladen werden";
  const text = nichtGefunden
    ? "Prüf die Adresse oder geh zurück zur Startseite."
    : "Lade die Seite neu. Bleibt der Fehler, versuch es in einigen Minuten noch einmal.";

  return (
    <>
      <Kopf />
      <main id="inhalt" tabIndex={-1}>
        <section className="ws-rahmen ws-seitenkopf" aria-labelledby="fehler-titel">
          <title>{`${titel} – workly`}</title>
          <h1 className="ws-seitentitel" id="fehler-titel">
            {titel}
          </h1>
          <p className="ws-lead">{text}</p>
          <p className="ws-fehler-aktion">
            <Link className="knopf knopf-primaer" to="/">
              Zur Startseite
            </Link>
          </p>
          {import.meta.env.DEV && error instanceof Error && error.stack ? (
            <pre className="ws-fehler-stapel">
              <code>{error.stack}</code>
            </pre>
          ) : null}
        </section>
      </main>
      <Fuss />
    </>
  );
}
