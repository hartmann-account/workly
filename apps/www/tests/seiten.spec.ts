import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const SEITEN = [
  "/",
  "/funktionen",
  "/assistent",
  "/sicherheit",
  "/tarife",
  "/fahrplan",
  "/warteliste",
  "/datenschutz",
  "/impressum",
];

async function ueberlauf(seite: Page) {
  return seite.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

for (const pfad of SEITEN) {
  test.describe(`Seite ${pfad}`, () => {
    test("lädt mit einem h1, deutschem Dokument und ohne waagrechten Überlauf", async ({ page }) => {
      const antwort = await page.goto(pfad);
      expect(antwort?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", "de");
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page).toHaveTitle(/workly/);
      expect(await ueberlauf(page)).toBeLessThanOrEqual(0);
    });

    for (const thema of ["light", "dark"] as const) {
      test(`hat keine axe-Verstöße (WCAG 2.2 AA, ${thema === "light" ? "Hell" : "Dunkel"})`, async ({ page }) => {
        await page.emulateMedia({ colorScheme: thema, reducedMotion: "reduce" });
        await page.goto(pfad);
        await page.evaluate(() => document.fonts.ready);
        const ergebnis = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        const kurz = ergebnis.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
        expect(kurz).toEqual([]);
      });
    }
  });
}

test("unbekannte Adresse liefert 404 mit Weg zur Startseite", async ({ page }) => {
  const antwort = await page.goto("/gibt-es-nicht");
  expect(antwort?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("gibt es nicht");
  await expect(page.getByRole("link", { name: "Zur Startseite", exact: true })).toBeVisible();
});

test("robots.txt sperrt Suchmaschinen bis zur Freigabe", async ({ request }) => {
  const antwort = await request.get("/robots.txt");
  expect(antwort.ok()).toBe(true);
  expect(await antwort.text()).toContain("Disallow: /");
});

test("Skip-Link ist der erste Tab-Stopp und führt zum Inhalt", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop", "Tastaturtest nur auf dem Desktop");
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Zum Inhalt springen" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#inhalt")).toBeFocused();
});

test("Darstellung Dunkel bleibt nach dem Neuladen erhalten", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  const knopf = page.getByRole("button", { name: "Dunkle Darstellung" });
  await expect(knopf).toHaveAttribute("aria-pressed", "false");
  await knopf.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dunkel");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dunkel");
  await expect(page.getByRole("button", { name: "Dunkle Darstellung" })).toHaveAttribute("aria-pressed", "true");
});

test.describe("mobile Navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "nur auf Telefonen");

  test("öffnet als Blatt, führt zur Seite und schließt mit Escape", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation", { name: "Hauptnavigation", exact: true })).toBeHidden();
    const menue = page.getByRole("button", { name: "Menü öffnen" });
    const groesse = await menue.boundingBox();
    expect(groesse?.width).toBeGreaterThanOrEqual(44);
    expect(groesse?.height).toBeGreaterThanOrEqual(44);

    await menue.click();
    const blatt = page.getByRole("dialog", { name: "Menü" });
    await expect(blatt).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(blatt).toBeHidden();
    await expect(menue).toBeFocused();

    await menue.click();
    await blatt.getByRole("link", { name: "Tarife" }).click();
    await expect(page).toHaveURL(/\/tarife$/);
    await expect(blatt).toBeHidden();
  });
});

test("Bedienelemente sind auf Telefonen mindestens 44 px hoch", async ({ page, isMobile }) => {
  test.skip(!isMobile, "nur auf Telefonen");
  for (const pfad of SEITEN) {
    await page.goto(pfad);
    const zuKlein = await page.evaluate(() => {
      const treffer: string[] = [];
      for (const el of document.querySelectorAll<HTMLElement>("main a.knopf, main button, main input:not([type=hidden]), main select, main summary")) {
        if (el.closest("[inert], [aria-hidden='true']")) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const typ = el.getAttribute("type");
        const kaestchen = typ === "checkbox" || typ === "radio";
        if (!kaestchen && r.height < 44) treffer.push(`${el.tagName.toLowerCase()} „${el.textContent?.trim().slice(0, 30)}“ ${Math.round(r.height)}px`);
      }
      return treffer;
    });
    expect(zuKlein, pfad).toEqual([]);
  }
});
