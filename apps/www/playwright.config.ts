import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;
const chromium = process.env.PW_CHROMIUM || undefined;

/**
 * Ende-zu-Ende-Tests gegen den Produktions-Build (vite preview mit workerd).
 * Drei Geräteklassen: Desktop 1440 px, Telefon 412 px, kleines Telefon 360 px.
 */
export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    launchOptions: { executablePath: chromium },
    reducedMotion: "reduce",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "telefon", use: { ...devices["Pixel 7"] } },
    {
      name: "klein",
      use: { browserName: "chromium", viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
    },
  ],
  webServer: {
    command: `pnpm run build && pnpm exec vite preview --port ${PORT} --strictPort --host 127.0.0.1`,
    url: `http://127.0.0.1:${PORT}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
  },
});
