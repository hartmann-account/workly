import { expect, test } from "@playwright/test";

test.describe("Warteliste", () => {
  test("zeigt ohne Angaben den Fehlerkasten mit Fokus", async ({ page }) => {
    await page.goto("/warteliste");
    await page.getByRole("button", { name: "Warteliste beitreten" }).click();
    const fehler = page.locator(".fehlerkasten");
    await expect(fehler).toBeVisible();
    await expect(fehler).toBeFocused();
    await expect(page.getByLabel("E-Mail-Adresse")).toHaveAttribute("aria-invalid", "true");
  });

  test("trägt eine gültige Anmeldung ein und bestätigt sie", async ({ page }, info) => {
    await page.goto("/warteliste?tarif=pro");
    await page.getByLabel("E-Mail-Adresse").fill(`test-${info.project.name}-${Date.now()}@beispiel.de`);
    await page.getByLabel("Freelancer oder solo selbstständig").check();
    await page.getByLabel("Ich bin mindestens 16 Jahre alt.").check();
    await page.getByLabel(/E-Mails schicken/).check();
    await page.getByRole("button", { name: "Warteliste beitreten" }).click();
    await expect(page.getByText("Du stehst auf der Warteliste.")).toBeVisible();
  });
});
