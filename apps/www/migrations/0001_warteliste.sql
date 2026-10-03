-- Warteliste der Website (Route /warteliste, Bindung WARTELISTE).
-- app/routes/warteliste.server.ts legt dieselbe Tabelle vor dem ersten Eintrag mit
-- CREATE TABLE IF NOT EXISTS an; deshalb auch hier IF NOT EXISTS.
-- Gespeichert werden keine IP-Adressen und keine Browserangaben.
--   email              klein geschrieben und getrimmt, eindeutig
--   arbeitssituation   freelancer | team | studium | anderes
--   tarif              free | privat | pro | team, NULL für „Noch offen“
--   gespraech          1, wenn die Person an einem Gespräch teilnehmen würde
--   einwilligung_text  Fassung des Einwilligungstexts, etwa 2026-10-03
--   einwilligung_am    Zeitpunkt der (letzten) Einwilligung, ISO 8601 in UTC
--   angelegt_am        Zeitpunkt des ersten Eintrags, ISO 8601 in UTC
--   bestaetigt_am      Zeitpunkt der Bestätigung per Double-Opt-in (noch nicht umgesetzt)
CREATE TABLE IF NOT EXISTS warteliste (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  arbeitssituation TEXT NOT NULL,
  tarif TEXT,
  gespraech INTEGER NOT NULL DEFAULT 0,
  einwilligung_text TEXT NOT NULL,
  einwilligung_am TEXT NOT NULL,
  angelegt_am TEXT NOT NULL,
  bestaetigt_am TEXT
);
