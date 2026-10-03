# workly

E-Mail, Kalender, Aufgaben und Dokumente in einem Programm. Dieses Repository enthält bisher die Marketing-Website und das Designsystem; das Konzept steht in [`docs/plattformkonzept.md`](docs/plattformkonzept.md).

| Ordner | Inhalt |
| --- | --- |
| `apps/www` | Marketing-Website: React Router 8 auf Cloudflare Workers, statische Seiten vorgerendert |
| `packages/ui` | Designsystem workly: `tokens.json`, daraus erzeugte `tokens.css`, `bundle.css`, DM Sans, Logos, 66 Feather-Symbole |
| `docs` | Plattformkonzept und technische Umsetzung |

## Lokal starten

```sh
pnpm install
pnpm dev            # http://localhost:5173
pnpm build          # Tokens erzeugen, Website bauen und vorrendern
pnpm typecheck
```

Node 22.22 oder neuer, pnpm 10.

## Auslieferung über Cloudflare Workers Builds

Einstellungen des verbundenen Workers (Settings › Build):

| Feld | Wert |
| --- | --- |
| Branch | `main` |
| Root directory | `/` |
| Build command | `pnpm run build` |
| Deploy command | `pnpm run deploy` |

Der Worker heißt `workly` (siehe `apps/www/wrangler.jsonc`); der Name muss mit dem Worker im Dashboard übereinstimmen.

Die Warteliste speichert in D1 (Bindung `WARTELISTE`, Datenbank `workly-warteliste`). Für Speicherung in der EU die Datenbank vor dem ersten Deploy anlegen:

```sh
pnpm --filter @workly/www exec wrangler d1 create workly-warteliste --jurisdiction eu
```

Ohne diesen Schritt legt `wrangler deploy` die Datenbank beim ersten Deploy selbst an, dann ohne Jurisdiktion.

Suchmaschinen sind gesperrt (`noindex`, `robots.txt`), bis die Markenprüfung abgeschlossen ist. Freigabe über die Umgebungsvariablen `VITE_OEFFENTLICH=ja` und `VITE_BASIS_URL=https://…` beim Build.
