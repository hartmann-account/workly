// Übersetzt tokens.json in tokens.css, so wie die Designsystem-Seite es tut:
//   :root, [data-theme="<erstes Theme>"] { Farben und Schatten }
//   [data-theme="<weiteres Theme>"]      { Abweichungen und Aliase erneut }
//   :root                                { übrige Familien, --font-<schlüssel> }
//   .<stil>                              { je Schriftstil }
//   @font-face                           { je Schriftdatei }
// Aufruf: node scripts/tokens-css.mjs [--check]

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const wurzel = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(wurzel, "tokens.json"), "utf8"));

const ALIAS = /^\{([A-Za-z0-9][A-Za-z0-9_.-]*)\}$/;
const themes = tokens.color.themes.map((t) => t.id);
const [erstesTheme] = themes;

const cssName = (name) => `--${name.replaceAll(".", "\\.")}`;
const wertFuer = (token, theme) =>
  typeof token.value === "string" ? token.value : (token.value[theme] ?? token.value[erstesTheme]);
const alsCss = (wert) => {
  const treffer = ALIAS.exec(wert);
  return treffer ? `var(${cssName(treffer[1])})` : wert;
};
const istAlias = (token) => themes.some((theme) => ALIAS.test(wertFuer(token, theme)));

const farben = tokens.color.tokens;
const schatten = tokens.shadow?.tokens ?? [];
const themeFamilien = [...farben, ...schatten];
const uebrigeFamilien = Object.entries(tokens).filter(
  ([schluessel, wert]) =>
    !["color", "shadow", "type"].includes(schluessel) &&
    wert && typeof wert === "object" && Array.isArray(wert.tokens),
);

const zeilen = [];
const block = (selektor, eintraege) => {
  if (eintraege.length === 0) return;
  zeilen.push(`${selektor} {`);
  for (const [name, wert] of eintraege) zeilen.push(`  ${cssName(name)}: ${wert};`);
  zeilen.push("}", "");
};

zeilen.push(
  "/* workly – tokens.css",
  "   Erzeugt aus tokens.json mit scripts/tokens-css.mjs. Nicht von Hand ändern. */",
  "",
);

for (const schrift of tokens.type.fonts ?? []) {
  const datei = schrift.file.includes("/") ? schrift.file : `fonts/${schrift.file}`;
  zeilen.push(
    "@font-face {",
    `  font-family: "${schrift.family}";`,
    `  src: url("./${datei}") format("woff2");`,
    `  font-weight: ${schrift.weight ?? "400"};`,
    `  font-style: ${schrift.style ?? "normal"};`,
    "  font-display: swap;",
    "}",
    "",
  );
}

block(
  `:root, [data-theme="${erstesTheme}"]`,
  themeFamilien.map((t) => [t.name, alsCss(wertFuer(t, erstesTheme))]),
);

for (const theme of themes.slice(1)) {
  block(
    `[data-theme="${theme}"]`,
    themeFamilien
      .filter((t) => istAlias(t) || wertFuer(t, theme) !== wertFuer(t, erstesTheme))
      .map((t) => [t.name, alsCss(wertFuer(t, theme))]),
  );
}

block(":root", [
  ...uebrigeFamilien.flatMap(([, familie]) => familie.tokens.map((t) => [t.name, String(t.value)])),
  ...Object.entries(tokens.type.families).map(([schluessel, stapel]) => [`font-${schluessel}`, stapel]),
]);

for (const gruppe of tokens.type.groups) {
  for (const stil of gruppe.styles) {
    const familie = stil.family ?? gruppe.family;
    zeilen.push(`.${stil.name} {`);
    zeilen.push(`  font-family: var(--font-${familie});`);
    zeilen.push(`  font-size: ${stil.fontSize};`);
    if (stil.lineHeight !== undefined) zeilen.push(`  line-height: ${stil.lineHeight};`);
    if (stil.fontWeight !== undefined) zeilen.push(`  font-weight: ${stil.fontWeight};`);
    if (stil.letterSpacing !== undefined) zeilen.push(`  letter-spacing: ${stil.letterSpacing};`);
    if (stil.fontStyle !== undefined) zeilen.push(`  font-style: ${stil.fontStyle};`);
    zeilen.push("}", "");
  }
}

const css = zeilen.join("\n");
const ziel = join(wurzel, "tokens.css");

if (process.argv.includes("--check")) {
  const vorhanden = readFileSync(ziel, "utf8");
  if (vorhanden !== css) {
    console.error("tokens.css ist veraltet. Führe `pnpm --filter @workly/ui build` aus.");
    process.exit(1);
  }
  console.log("tokens.css ist aktuell.");
} else {
  writeFileSync(ziel, css);
  console.log(`tokens.css geschrieben (${css.length} Zeichen).`);
}
