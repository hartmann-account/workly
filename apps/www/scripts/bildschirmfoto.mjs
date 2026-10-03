// Bildschirmfotos einer laufenden Seite in mehreren Breiten und beiden Themes.
// Aufruf: node scripts/bildschirmfoto.mjs <url> <zielordner> [breiten] [themes]
//   breiten: kommagetrennt, Standard 360,390,640,900,1440
//   themes:  kommagetrennt, Standard hell,dunkel
// Meldet je Breite, ob die Seite waagrecht überläuft, und welche Elemente zu breit sind.
// Chromium: PW_CHROMIUM (Pfad) oder der von Playwright installierte Browser.

import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "@playwright/test";

const [url, ziel, breitenArg, themesArg] = process.argv.slice(2);
if (!url || !ziel) {
  console.error("Aufruf: node scripts/bildschirmfoto.mjs <url> <zielordner> [breiten] [themes]");
  process.exit(1);
}
const breiten = (breitenArg ?? "360,390,640,900,1440").split(",").map(Number);
const themes = (themesArg ?? "hell,dunkel").split(",");
mkdirSync(ziel, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM || undefined });
const name = new URL(url).pathname.replace(/\/$/, "").replaceAll("/", "_") || "_start";

for (const thema of themes) {
  for (const breite of breiten) {
    const kontext = await browser.newContext({
      viewport: { width: breite, height: 900 },
      deviceScaleFactor: 1,
      colorScheme: thema === "dunkel" ? "dark" : "light",
      reducedMotion: "reduce",
    });
    const seite = await kontext.newPage();
    await seite.goto(url, { waitUntil: "networkidle" });
    await seite.evaluate(() => document.fonts.ready);
    const ueberlauf = await seite.evaluate(() => {
      const doc = document.documentElement;
      const zuBreit = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && (r.right > doc.clientWidth + 1 || r.left < -1)) {
          const stil = getComputedStyle(el);
          if (stil.position === "fixed" || el.closest("dialog:not([open])")) continue;
          let vorfahrScrollt = false;
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            const s = getComputedStyle(p);
            if (["auto", "scroll", "hidden", "clip"].includes(s.overflowX)) { vorfahrScrollt = true; break; }
          }
          if (!vorfahrScrollt) zuBreit.push(`${el.tagName.toLowerCase()}.${[...el.classList].join(".")} (${Math.round(r.left)}–${Math.round(r.right)})`);
        }
      }
      return { scrollBreite: doc.scrollWidth, sichtBreite: doc.clientWidth, zuBreit: zuBreit.slice(0, 12) };
    });
    const datei = join(ziel, `${name}-${breite}-${thema}.png`);
    await seite.screenshot({ path: datei, fullPage: true });
    const status = ueberlauf.scrollBreite > ueberlauf.sichtBreite ? `ÜBERLAUF ${ueberlauf.scrollBreite}px` : "ok";
    console.log(`${datei}  ${status}${ueberlauf.zuBreit.length ? `\n   zu breit: ${ueberlauf.zuBreit.join("; ")}` : ""}`);
    await kontext.close();
  }
}

await browser.close();
