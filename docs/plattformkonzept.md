# workly – Plattformkonzept und technische Umsetzung

Oct 2, 2026 · @Jonas Hartmann

workly wird als Arbeitsplattform neu aufgesetzt: E-Mail, Kalender, Aufgaben und Dokumente in einer Anwendung, Postfächer, Termine und Dateien in Rechenzentren in Deutschland auf Hetzner, Auslieferung und Sicherheit über Cloudflare, Assistenz durch Claude.

## Ausgangslage: Was vom Pitch 2021 bleibt und was korrigiert wird

Vom Pitch 2021 bleiben das Problem und der Lösungsansatz: Arbeit verteilt sich auf getrennte Programme für E-Mail, Kalender, Aufgaben und Dateien, und workly führt diese vier Bausteine in einem System zusammen. Korrigiert werden die Belege für das Problem, die Burnout-Erkennung, die Zielgruppe GenZ, die frei wählbaren Preise und der Finanzplan (Pitch-Deck workly, 2021, intern).

Das Deck aus dem November und Dezember 2021 verspricht „4 Produkte sind jetzt 1 System“, ordnet die Funktionen den Nutzenachsen Effizienz, Freude und Gesundheit zu und nennt als Mission eine Software, deren KI „dir Arbeit abnimmt und dich vor Burnout warnt“; Ansprache und Vertrieb zielen auf die Generation Z.

**Problembelege.** Die Kennzahlen des Decks übernimmt dieses Konzept nicht. Ihre Herkunft ist nicht nachgewiesen, und ein Wert ist erkennbar falsch zugeordnet: Die Aussage, jeder dritte Erwerbstätige leide an psychischer Erschöpfung, schreibt das Deck einem „Bundesministerium für Wirtschaft und Arbeit“ zu; sie stammt vermutlich aus dem finnischen Working Life Barometer 2019. Die Angabe, 62 % verwendeten täglich zwei bis vier Stunden für E-Mails, bezieht sich im Originalzitat auf Manager. Die eigene GenZ-Befragung und 18 Nutzerinterviews nennen weder Stichprobe noch Methode. Phase 0 ersetzt diese Zahlen durch 25 Interviews mit einem vorab festgelegten Kriterium (Abschnitt Fahrplan).

**Finanzplan.** Der Plan setzt für 2023, das erste volle Jahr nach dem geplanten Start im August 2022, 2,87 Mio. € Umsatz an und für Januar bis August 2024 weitere 4,33 Mio. €; von 2022 auf 2023 wächst der Umsatz um rund den Faktor 15. Das Startguthaben von 1,31 Mio. € hat keine erkennbare Finanzierung, Ertragsteuern fehlen in allen Jahren, und die Rohertragsmarge von 76 bis 78 % enthält keine KI-Kosten, obwohl die KI ein Kernversprechen ist. Rechnet man die Erlöszeilen mit den Deckpreisen in Plätze zurück (Privat mit angenommenen 10 € je Monat, Team-Konto 15 €, weiterer Nutzer 8 €), unterstellt der Plan im Mittel der Monate 18 bis 25 nach dem Start rund 54.500 zahlende Plätze und 541.000 € Monatsumsatz. Die größte Erlöszeile „Privat“ zielte auf die GenZ, deren Jahrgänge 2005 bis 2009 beim Start minderjährig und nach der eigenen Preisliste kostenlos gewesen wären.

Die Neuauflage rechnet von unten: Aktivierte Konten mal Konversion ergeben zahlende Nutzer, diese mal Nettopreis den Umsatz, davon gehen variable Kosten, Fixkosten und Ertragsteuern ab. Das Szenario des Produktkonzepts (Annahme) mit 1.000 Zahlenden nach 12 und 3.000 nach 24 Monaten bei 10 € je Zahlendem ergibt 30.000 € Monatsumsatz, rund 5,5 % des alten Plans im vergleichbaren Zeitraum; bei 5 % Konversion braucht es dafür rund 60.000 aktivierte Konten.

| Element 2021 | Entscheidung 2026 | Begründung |
| --- | --- | --- |
| Ein Programm für E-Mail, Kalender, Aufgaben und Dokumente | Bleibt Kern; der Unterschied liegt in Verknüpfungen und gemeinsamer Tagesansicht. | Vier unverbundene Module wären ein Nachbau der Suiten. |
| Burnout-KI („KI erkennt Burnout und beugt vor“) | Entfällt; Fokus-Funktionen mit erklärbaren Kalendersignalen, nur für die Person sichtbar. | Berührt Art. 9 DSGVO \[P2\], § 87 Abs. 1 Nr. 6 BetrVG \[P6\] und die Medizinprodukte-Verordnung \[P4\] (juristisch zu prüfen). |
| Vision „einfach und glücklich arbeiten“ | Bleibt intern. | Glück lässt sich weder messen noch zusichern. |
| Zielgruppe GenZ | Segmente nach Arbeitssituation; Primärsegment sind Freelancer und Solo-Selbstständige. | Zahlungsbereitschaft folgt der Arbeitssituation, nicht dem Jahrgang. |
| Privat 8–12 € nach Wahl, Business 15 € plus 8 € je weiterem Nutzer | Vier Tarife mit festen Preisen je Nutzer, Jahresrabatt und KI-Kontingenten. | Wählbare Preise verhindern Planung; KI kostet je Nutzung. |
| Postfach für 1 €, Domain gratis | Postfach unter eigener Domain ab Privat; Domain als bezahltes Add-on. | Gratis-Postfächer ziehen Spam-Versender an (Annahme). |
| Gamification, Sounddesign | Keine Punkte, Serien oder Ranglisten; Töne ab Werk aus. | Vergleichsdruck widerspricht dem Fokusversprechen. |
| „Daten in Deutschland“, eigener Server | Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen. Kein Self-Hosting. | Self-Hosting vervielfacht den Support. |
| Video-Verifikation, Lifestyle-Vision | Entfallen. | Kein Bezug zum Kernproblem. |
| Social Pledge mit Hilfe bei „biologisch bedingten Konzentrationsdefiziten“ | Gewinnzusage ruht bis zum ersten Jahresgewinn; Barrierefreiheit nach WCAG 2.2 AA ersetzt die Gesundheitsaussage \[P9\]. | Die Aussage wäre eine gesundheitsbezogene Zweckbestimmung (juristisch zu prüfen). |

**Widersprüche in den Vorlagen.** Das Deck widerspricht sich selbst: Es verspricht „keine Überwachung der Mitarbeitenden“ und zugleich eine KI, die Burnout „durch die Aktivitäten“ erkennt, also Verhaltensdaten laufend auswertet. Seine Roadmap mit Crowdfunding 2022 und Series A im März 2023 passt nicht zu einem Kontostand von 1,31 Mio. € im September 2021, und das Gründungsteam selbst führte Finanzplanung, Zielgruppe, Tech-Stack und Finanzierung als offen. Zwischen den neuen Berichten klafft die Mengenplanung auseinander: Das Produktkonzept plant 3.000 Zahlende nach 24 Monaten, der Marktbericht 21.000 nach drei Jahren; der Abschnitt Geschäftsmodell löst das auf.

Belege stehen in eckigen Klammern: \[P n\] verweist auf Quelle n des Produktkonzepts, \[M n\] auf den Marktbericht, \[T n\] auf den Technikbericht; das Verzeichnis am Ende listet nur zitierte Seiten.

## Positionierung: ein System mit Rechenzentren in Deutschland

workly ist für Freelancer, Selbstständige und kleine Teams im deutschsprachigen Raum das eine Arbeitsprogramm, in dem E-Mail unter eigener Domain, Kalender, Aufgaben und Dokumente verknüpft sind und Claude Routinearbeit vorbereitet. Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen. Den Unterschied zum Wettbewerb trägt nur die Kombination aus Integrationstiefe und Speicherort; jedes der beiden Merkmale allein bieten andere Anbieter bereits.

&#91;embedded content: Positionierungskarte · 19 Anbieter und der Zielwert von workly, Einschätzung des Marktberichts, Stand Oktober 2026\]

Rechts oben steht außer dem Zielwert von workly nur openDesk, dessen Enterprise-Angebot sich an Behörden richtet und dessen Seite weder Preise noch KI nennt \[M23, M24\].

Die Werte der Karte sind eine Einschätzung des Marktberichts auf Grundlage der geprüften Anbieterseiten, keine Messung; ein Punkt Abstand ist keine belastbare Größe. Zwei Muster prägen das Feld. Hohe Integration geht mit schwacher Standortzusage einher: Notion verknüpft Dokumente, Datenbanken und Aufgaben nativ, speichert in der EU aber nur im Enterprise-Tarif \[M27, M29\], ClickUp listet EU-Datenresidenz ohne geprüfte Tarifbindung \[M30\], Motion nennt keinen Standort \[M36\]. Hohe Souveränität geht mit Modulsammlungen oder reinen Maildiensten einher: Tuta und Posteo bieten Mail und Kalender ohne Dokumente oder Aufgaben \[M17, M25\], IONOS, mailbox.org und Infomaniak bündeln getrennte Module unter einer Rechnung \[M22, M19, M20\].

**Wo workly sich unterscheiden kann.** Erstens als ein System statt einer Modulsuite: Die Deck-Funktionen „E-Mail als Aufgabe planen“ und „Aufgabe im Kalender planen“ treffen die Lücke zwischen verknüpften Arbeitsbereichen ohne Mail-Hosting und souveränen Suiten ohne Verknüpfung. Zweitens über die Preislage: KI in allen Anwendungen kostet bei Google 13,60 € (Business Standard), bei Microsoft 20,36 € netto (Business Standard mit Copilot Business) und bei Proton 19,99 € (Workspace Premium mit Lumo) je Nutzer und Monat \[M6, M2, M3, M14\]. Drittens als ein Abonnement statt zwei: Ein Freelancer zahlt heute für Domain-Mail, etwa Google Business Starter zu 6,80 €, und zusätzlich für einen Planer wie Akiflow (19 USD) oder Morgen (15 USD) \[M6, M37, M38\]. Viertens über Fokus ohne Überwachung, allerdings mit Einschränkung: Microsoft Viva Insights zeigt persönliche Auswertungen schon heute nur der Person selbst \[M39\], während Reclaim Teamdaten zu Work-Life-Balance auswertet \[M42\]. Dass Clockwise seit dem 27.03.2026 eingestellt ist und Dropbox Reclaim gekauft hat \[M45, M43\], spricht dafür, Fokus als Funktion einer Arbeitsumgebung anzubieten, nicht als eigenes Produkt.

**Wo workly sich nicht unterscheiden kann.** Der Datenstandort allein trägt nicht: Tuta, mailbox.org, Posteo und IONOS speichern in Deutschland, Posteo ab 1 € je Postfach, mailbox.org ab 4 € netto \[M17, M19, M25, M22\]. KI allein trägt ebenso wenig: Gemini steckt in Google Business Standard, Zia in Zoho Workplace Standard zu 2,70 € \[M6, M8\], und Claude ist kein Alleinstellungsmerkmal, weil Shortwave bereits Claude-Modelle einsetzt \[M34\]. Bei Office-Dateien liegt workly zurück, denn die europäischen Suiten binden fremde Editoren ein (IONOS und Nextcloud Euro-Office, Infomaniak OnlyOffice) \[M22, M20\], workly erst in Ausbau 2. Einen Aufpreis für Souveränität trägt der Markt kaum: Nur 12 % der befragten Unternehmen würden für eine Cloud mit Verarbeitung ausschließlich in Deutschland 10 bis 20 % mehr zahlen, 43 % sehen keine gleichwertige europäische Alternative zu US-Hyperscalern \[M62\].

| Achse im Deck | Versprechen | Beleg im Produkt | Messgröße |
| --- | --- | --- | --- |
| Effizienz | Aus einer E-Mail wird mit einem Griff eine Aufgabe oder ein Termin. | Verknüpfungen, Heute, Suche, Befehlszeile, Vorschläge des Assistenten | Anteil der Aufgaben und Termine, die aus E-Mails entstehen |
| Freude | workly reagiert sofort und erklärt sich selbst. | Tastatursteuerung, Leerzustände mit nächstem Schritt, Onboarding ohne Anleitung | Erste Verknüpfung innerhalb von 10 Minuten nach der Registrierung (Annahme) |
| Gesundheit, im Produkt „Fokus und Wohlbefinden“ | Der Tag bleibt planbar, Fokuszeit ist geschützt. | Fokus-Sitzung, Fokusblöcke, Arbeitszeitfenster, Hinweis zur Termindichte | Anteil der Aktiven mit mindestens einem Fokusblock je Woche |

Die Leitwerte des Decks bleiben, präzisiert: Intuitiv heißt, dass workly ohne Anleitung funktioniert; einfach, dass vier Objektarten genügen; intelligent, dass Claude vorbereitet und der Mensch entscheidet. Der Claim bleibt „because workly works.“ Aus der Wettbewerbsliste des Decks fallen Slack, Microsoft Teams und Twist heraus, weil workly keinen Chat anbietet.

**Widersprüche in den Vorlagen.** Der Zielwert Y = 8 setzt laut Marktbericht KI-Verarbeitung in der EU voraus. Das MVP schickt KI-Anfragen nach Opt-in aber über die Anthropic-API, deren Inferenzort nur „global“ oder „us“ sein kann \[M47\]; EU-Verarbeitung gibt es erst mit dem EU-Profil von Amazon Bedrock, das ab Frankfurt global oder EU-weit routet \[M48\]. Der Wert 8 gilt im MVP also für gespeicherte Inhalte und für Konten ohne KI, für KI-Anfragen erst ab Ausbau 1 im Team-Tarif. KI-Verarbeitung nur in Deutschland bietet keiner der geprüften Wege. Zudem kündigte Microsoft Verarbeitung im Land für Copilot in Deutschland für 2026 an (Umsetzung ungeprüft) \[M5\]; tritt sie ein, schrumpft der Standortabstand zu Microsoft 365. Der Markt konsolidiert sich parallel: Grammarly kaufte Coda und Superhuman und firmiert seit Oktober 2025 als Superhuman \[M33\], Proton bündelt seit dem 31.03.2026 alle Dienste als Workspace \[M13\].

## Zielgruppen und Anwendungsfälle

Das MVP richtet sich an Freelancer und Solo-Selbstständige (Segment A), weil sie aus eigenem Budget zahlen, allein entscheiden und genau den Kern des Produkts brauchen: eine Adresse unter eigener Domain, Kalender, Aufgaben und Ablage. Gründende und kleine Teams (Segment C) folgen mit dem Team-Tarif in Ausbau 1; Studierende und Auszubildende (Segment B) erhalten den kostenlosen Tarif und tragen kein Umsatzziel.

Das Konzept schneidet die drei Segmente des Decks nach Arbeitssituation statt nach Generation zu. Alle Angaben zu Werkzeugen und Zahlungsbereitschaft sind Annahmen, die die Interviews in Phase 0 prüfen.

|  | A. Freelancer und Solo-Selbstständige | B. Studierende und Auszubildende | C. Gründende und kleine Teams |
| --- | --- | --- | --- |
| Wer | Wissensarbeit mit eigener Kundschaft (Beratung, Design, Entwicklung, Text), 1 bis 3 Personen | Studierende, Promovierende, Auszubildende, teils minderjährig | Gründungsteams, Agenturen und Studios mit 2 bis 25 Personen ohne IT-Abteilung |
| Auftrag an das Produkt | „Wenn eine Kundenanfrage eintrifft, will ich daraus ohne Umweg Aufgabe, Termin und Angebot machen.“ | „Wenn sich Abgaben häufen, will ich Fristen, Unterlagen und Termine an einem Ort sehen.“ | „Wenn jemand neu anfängt, will ich in Minuten Adresse, Kalender und Projektzugang bereitstellen.“ |
| Auslöser für den Wechsel | Gründung oder neue Domain, Vertragsende beim Hoster, verpasste Frist, Kunde verlangt EU-Verarbeitung | Semesterstart, Abschlussarbeit, Praktikum | Erste Einstellung, unübersichtliches Sammelpostfach, Preiserhöhung der Suite |
| Heutige Werkzeuge | Postfach beim Webhoster oder in einer Suite, Google- oder Apple-Kalender, Todoist oder Notion, Dropbox | Hochschulpostfach, private Google- oder Apple-Konten, Notion, Messenger | Google Workspace oder Microsoft 365, Slack, Notion oder Trello, Dropbox |
| Zahlungsbereitschaft (Annahme) | Mittel bis hoch; zahlt schon für Domain, Postfach und Apps, zahlt aus dem Geschäftskonto | Niedrig; Minderjährige zahlen nicht, Erwachsene allenfalls einen Studierendenpreis | Am höchsten je Konto, aber Vergleich je Nutzer mit den Suiten; erwartet Rollen, Export und einen Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO \[P2\] |

**Größe der Segmente.** In Deutschland gab es 2024 laut Mikrozensus 3,6 Mio. Selbstständige, davon 1,8 Mio. (50,6 %) ohne Beschäftigte \[M55\]; in den Freien Berufen waren zum 01.01.2025 rund 1.492.000 Personen selbstständig \[M56\]. Das Unternehmensregister zählt für 2024 rund 3,01 Mio. rechtliche Einheiten mit 0 bis 9 und 429.318 mit 10 bis 49 abhängig Beschäftigten \[M57\]; Solo-Selbstständige ohne Umsatzsteuer-Voranmeldung und ohne Beschäftigte fehlen darin, die Zahl ist also eine Untergrenze. Im Wintersemester 2025/26 waren 2.864.160 Personen an deutschen Hochschulen eingeschrieben \[M60\]. Für die Schweiz weist das Bundesamt für Statistik 561.952 marktwirtschaftliche Unternehmen mit 1 bis 9 Beschäftigten aus (2023) \[M63\], für Österreich nennt Eurostat 579.776 Unternehmen mit 0 bis 9 Personen (2024) \[M58\].

**Anwendungsfälle.** Für Segment A beginnt der typische Fall im Posteingang: Eine Kundin bittet um ein Angebot bis Freitag, workly schlägt eine Aufgabe mit Fälligkeit vor, die Freelancerin zieht sie in eine Lücke ihres Dienstags, und das Angebotsdokument hängt an derselben Aufgabe. Ebenso entstehen aus Terminwünschen Termin- und Antwortentwürfe und aus Verträgen als PDF Fristen. Segment B nutzt dieselben Bausteine für Abgaben und Unterlagen, meist mit verbundenem Hochschulpostfach. Segment C braucht zusätzlich Verwaltung: Adresse, Kalender und Projektzugang für neue Mitglieder in Minuten, Gruppenpostfächer und protokollierte Übergaben beim Austritt, ohne dass Admins fremde Postfächer lesen.

**Widersprüche in den Vorlagen.** Erstens passt die Zielgruppe des Decks nicht zu seiner Erlösplanung: Die GenZ umfasst heute 16- bis 31-Jährige, Studierende erhalten Office 365 A1 und Notion Education Plus mit Hochschuladresse kostenlos \[M53, M52\], und die Zahlungsbereitschaft ist entsprechend gering. Das Produktkonzept bietet Segment B deshalb Free und 50 % Rabatt auf Privat, der Marktbericht schlägt 3 € oder einen kostenlosen Einstieg vor; die Preisinterviews entscheiden. Zweitens setzt das Produktkonzept ein Mindestalter von 16 Jahren (Annahme) und stützt sich auf Art. 8 Abs. 1 DSGVO, der diese Grenze für Einwilligungen bei Diensten der Informationsgesellschaft zieht, die einem Kind direkt angeboten werden \[P2\]; ob die Norm auf einen Vertrag über ein Arbeitswerkzeug passt, ist juristisch zu prüfen. Drittens beruht der adressierbare Markt des Marktberichts auf einer Bitkom-Quote von 37 %, erhoben bei 603 Unternehmen ab 20 Beschäftigten \[M62\]; für Freelancer, das Primärsegment, ist sie nicht belegt. Viertens verlangt Segment C Rollen, Auftragsverarbeitungsvertrag und Unterlagen für den Betriebsrat, die erst Ausbau 1 liefert; der Umsatz je Konto bleibt bis zum Ausbau 1 daher auf Einzelnutzer-Niveau.

## Produktmodule: MVP und Ausbaustufen

Das MVP liefert bis Mai 2027 die vier Kernanwendungen mit ihren Verknüpfungen, dazu Suche, Assistent, Fokus-Werkzeuge, Konto und Import für einen persönlichen Workspace. Teams, Gäste, Buchungsseite und Visitenkarte folgen ab Q4 2027, Website, native Apps und gegebenenfalls die Bearbeitung von Office-Dateien 2028.

| Modul | MVP (Phase 1) | Ausbau 1 (ab Q4 2027) | Ausbau 2 (2028) |
| --- | --- | --- | --- |
| Heute | Zeitleiste des Arbeitszeitfensters mit Terminen, fälligen Aufgaben, markierten Mails und Fokusblöcken; Tagesabschluss | – | – |
| Posteingang | Postfach unter eigener Domain mit DNS-Assistent; verbundenes Postfach per IMAP; Aktionen per Taste (Erledigt, Später, Als Aufgabe, Als Termin) | Gruppenpostfächer; Domainregistrierung als Add-on | – |
| Kalender | Tag und Woche, Einladungen nach iCalendar, Fokusblöcke, Abgleich per CalDAV | Buchungsseite, geteilte Kalender | – |
| Aufgaben | Liste, Board, Projekte, Wiederholung, Zeitblock aus Aufgabe | Zuweisung an Mitglieder | – |
| Dokumente und Dateien | Editor für Texte, Protokolle und Checklisten; Ablage mit Vorschau, Versionen, ablaufenden Freigabelinks | Gemeinsame Bearbeitung in Echtzeit | Bearbeitung von Office-Dateien (Entscheidung offen) |
| Verknüpfungen | E-Mail → Aufgabe oder Termin, Aufgabe → Termin, Dokument ↔ Aufgabe; in beide Richtungen sichtbar | – | – |
| Suche | Volltext einschließlich PDF-Text, Filter, Operatoren wie „von:“; semantische Suche ab Phase 2 | Fragen in natürlicher Sprache, übersetzt in sichtbare Filter | – |
| Assistent (Claude) | Fälle 1 bis 6 und 8 (Abschnitt KI-Schicht) | Fälle 7, 9 und 10 | – |
| Fokus und Wohlbefinden | Fokus-Sitzung, Fokusblöcke, Arbeitszeitfenster, Hinweis zur Termindichte, gebündelte Benachrichtigungen | Pausenvorschlag, privater Wochenrückblick | Team-Kennzahlen ab 5 Personen nach Rechtsprüfung |
| Workspaces und Freigaben | Persönlicher Workspace | Team mit Rollen, geteilte Kalender, Listen und Ordner; Gastzugang mit Ablaufdatum | Single Sign-on, offene Schnittstelle |
| Digitale Visitenkarte | – | Profilseite unter eigener Domain, vCard, QR-Code | – |
| Website-Erweiterung | – | – | Bis zu 5 Seiten aus Vorlagen, Kontaktformular in den Posteingang |
| Konto und Abrechnung | Registrierung ohne Zahlungsdaten, Passkey, zweiter Faktor, Tarife Free, Privat, Pro, Rechnungen, Kündigung, Export | Team-Tarif | – |
| Import und Umzug | IMAP, .ics, CSV mit Fehlerliste je Objekt | Geführte Umzüge aus Google, Microsoft und Apple | – |
| Apps | Web-App für Desktop und Mobilgeräte; Mail, Kalender und Kontakte in den Geräte-Apps per IMAP, CalDAV, CardDAV | – | Native mobile Apps |

Dauerhaft ausgeschlossen sind die Erkennung von Burnout, Stress oder Stimmung, Punkte und Ranglisten, Self-Hosting, Video-Verifikation und Lifestyle-Angebote. Chat und Videokonferenz sind nicht geplant.

**Bedienung im Kern.** Wer in Heute eine Aufgabe in eine Lücke zieht, legt einen Zeitblock an; Termine entstehen auch über die Befehlszeile („Termin morgen 10 Uhr mit Lena Berger“). Wird die Quelle einer Verknüpfung gelöscht, bleibt das abhängige Objekt mit dem Hinweis „Quelle gelöscht“ erhalten. Tarifwechsel wirken sofort und anteilig, Kündigung und Export gehen ohne Support.

**Widersprüche in den Vorlagen und ihre Auflösung.** Produkt- und Technikbericht ordnen sieben Funktionen unterschiedlich ein; dieses Konzept entscheidet wie folgt.

1. Echtzeit-Bearbeitung steht im Produktkonzept in Ausbau 1, im Technikbericht im MVP. Die Architektur arbeitet ab dem MVP mit Yjs-Dokumenten, auch offline \[T40\], und synchronisiert so eigene Geräte; gemeinsames Bearbeiten durch mehrere Personen erscheint mit den Teams in Ausbau 1.
2. Die KI im MVP umfasst laut Technikbericht Zusammenfassen, Antwortentwurf und Aufgaben extrahieren, laut Produktkonzept die Fälle 1 bis 6 und 8. Verbindlich sind die Fälle 1, 3 und 4; 2, 5, 6 und 8 folgen bis Ende Phase 1, wenn ihre Evaluationen bestehen. Fall 6 stützt sich bis zur semantischen Suche in Phase 2 auf die Volltextsuche.
3. Der Import aus Google und Microsoft steht im Technikbericht in Phase 2, im Produktkonzept in Ausbau 1. Google verlangt für „restricted scopes“ eine Verifizierung mit CASA-Bewertung, mindestens alle 12 Monate erneuert \[P15\], und für den Kalenderzugriff eine App-Verifizierung \[T107\]; die Umzüge kommen daher in Ausbau 1, die Verifizierung beginnt in Phase 2.
4. Das Website-Add-on plant der Technikbericht als Beta in Phase 2, Produktkonzept und Bauanleitung des Designsystems in Ausbau 2. Es bleibt in Ausbau 2, weil es Entwicklungszeit vom Kern abzieht.
5. Native Apps stehen im Produktkonzept in Ausbau 1, in der Bauanleitung des Designsystems und im Technikbericht später; der verbindliche Fahrplan setzt sie in Ausbau 2. Das verschärft das Risiko, das das Produktkonzept selbst benennt: ohne App keine Tagesgewohnheit.
6. Videocalls über RealtimeKit plant der Technikbericht für die Ausbauphase \[T87, T88\], das Produktkonzept schließt Videokonferenz aus. Sie entfallen.
7. Das verbundene Postfach trägt im Produktkonzept den Tarif Free und den Umstieg, weil das alte Postfach bis zur Umstellung per IMAP verbunden bleibt. Der Technikbericht beschreibt dafür keinen Datenfluss, weder IMAP-Abholung noch IMAP-Import, nur den ICS-Import \[T106\]. Verschöbe man die Verbindung bei Zeitnot auf Ausbau 1, wie das Produktkonzept erlaubt, hätte Free im MVP keine Mail; sie ist deshalb MVP-kritisch, ihr Entwurf gehört in Phase 0.

## KI-Schicht mit Claude

Claude bereitet vor, der Mensch entscheidet: Die KI ist ab Werk aus, läuft erst nach Zustimmung von Workspace-Inhaberin und Person, sieht nur minimierte Ausschnitte und löst keine Wirkung nach außen ohne Klick aus. Im MVP läuft sie über die Anthropic-API mit globaler Verarbeitung und offenem Hinweis im Zustimmungsdialog; der Team-Tarif nutzt ab Ausbau 1 standardmäßig Claude in Amazon Bedrock mit EU-Profil.

Claude erscheint als Seitenleiste, als Vorschlagskarte und als Entwurf. Die Zuordnung der Modelle Sonnet 5.5, Haiku 4.5 und Opus 5.5 \[T43\] je Fall folgt dem Mix des Technikberichts (60 % Haiku, 38 % Sonnet, 2 % Opus) und ist eine Annahme für die Evaluationen in Phase 1.

| Nr. | Auslöser | Claude liefert | Die Person bestätigt | Modell (Annahme) | Stufe |
| --- | --- | --- | --- | --- | --- |
| 1 | Mail mit Bitte oder Frist | Aufgabenvorschlag mit Titel, Fälligkeit und Projekt | Übernehmen, ändern oder verwerfen | Haiku 4.5 | MVP |
| 2 | Mail mit Terminwunsch („Passt dir Dienstag, 14 Uhr?“) | Konfliktprüfung, Entwurf von Termin und Antwort | Termin anlegen; Einladung und Antwort erst nach „Senden“ | Sonnet 5.5 | MVP |
| 3 | Verlauf mit mehr als 5 Nachrichten | Stand, offene Fragen und Zusagen mit Verweis je Punkt | Nichts; Fehler lassen sich melden | Sonnet 5.5 | MVP |
| 4 | Klick auf „Antwort entwerfen“ | Entwurf im gewählten Ton mit Bezug auf verknüpfte Dokumente | Bearbeiten und selbst senden | Sonnet 5.5 | MVP |
| 5 | Erstes Öffnen von Heute | Offene Aufgaben in freien Lücken, Hinweis auf Überbuchung | Plan übernehmen; erst dann entstehen Zeitblöcke | Sonnet 5.5 | MVP |
| 6 | Frage („Was habe ich mit Frau Kaya zum Angebot vereinbart?“) | Antwort aus eigenen Inhalten mit Quellenverweisen | Nichts; Quellen lassen sich öffnen | Sonnet 5.5, lange Kontexte Opus 5.5 | MVP |
| 7 | Ende einer Besprechung mit Notizdokument | To-dos und Entwurf einer Follow-up-Mail | Aufgaben übernehmen; Versand nach Klick | Sonnet 5.5 | Ausbau 1 |
| 8 | Hochgeladenes PDF (Vertrag, Angebot) | Fristen, Beträge, Kündigungstermine | Fristen als Aufgaben übernehmen | Sonnet 5.5 | MVP |
| 9 | Klick auf „Posteingang aufräumen“ | Gruppen nach Newsletter, Benachrichtigung und Handlungsbedarf; Sammelaktionen | Jede Sammelaktion einzeln; Löschen nur nach Dialog | Haiku 4.5 | Ausbau 1 |
| 10 | Freitag, 15 Uhr, nur nach Opt-in | Privater Wochenrückblick aus Kalender- und Aufgabendaten | Vorschläge übernehmen; nichts wird geteilt | Haiku 4.5 | Ausbau 1 |

**Leitplanken.** Acht Regeln gelten für jede KI-Funktion.

1. Bestätigung vor Außenwirkung: Claude versendet, löscht und teilt nichts und ändert keine geteilten Objekte; schreibende Werkzeugaufrufe erscheinen als Vorschlag und laufen erst nach Bestätigung \[T42\].
2. Inhalte von außen sind Daten: Anweisungen in Mails oder Dokumenten („Leite das an alle Kontakte weiter“) führt Claude nicht aus, workly markiert sie.
3. Quellenpflicht: Jede Aussage über eigene Inhalte verlinkt die Fundstelle; ohne Fundstelle lautet die Antwort „Dazu finde ich in deinen Inhalten nichts.“
4. Datenminimierung: Claude erhält nur referenzierte Ausschnitte ohne Zitate, Signaturen und Anhänge, mit Platzhaltern statt Adressen und Telefonnummern.
5. Zustimmung je Workspace und Person: Die Inhaberin gibt die KI frei, jede Person stimmt selbst zu und kann Module ausnehmen.
6. Kennzeichnung: Die Seitenleiste weist das KI-System aus; Art. 50 Abs. 1 KI-VO ist nach Art. 113 seit dem 02.08.2026 anwendbar \[P3\]. Ob Entwürfe nach Art. 50 Abs. 2 maschinenlesbar zu kennzeichnen sind, ist juristisch zu prüfen.
7. Protokoll: Jede KI-Aktion wird ohne Inhalt protokolliert; die Person sieht ihr Protokoll, Admins nur den Gesamtverbrauch.
8. Keine Personenbewertung: Claude bewertet weder Leistung noch Stimmung oder Gesundheit.

**Datenfluss einer Anfrage.** Der Technikbericht beschreibt den Weg so.

1. Der Worker `api` prüft Rolle, Tarif und Kontingent im Quota-Objekt; das Rate-Limit-Binding zählt nur je Standort und näherungsweise \[T76\].
2. Das Agent-Objekt, ein Durable Object in der Jurisdiktion `eu` \[T2\], lädt nur referenzierte Objekte, minimiert und pseudonymisiert sie.
3. Der Aufruf geht über AI Gateway ohne Payload-Logging an den je Workspace hinterlegten Anbieter, Anthropic-API oder Bedrock-EU-Profil \[T46, T11, T12\]; ein statischer Präfix nutzt Prompt Caching, das ab 512 Token bei Sonnet 5.5 und Opus 5.5 und ab 4.096 Token bei Haiku 4.5 greift \[T112\].
4. Die Antwort streamt zurück, Platzhalter werden wieder eingesetzt; Postgres protokolliert die Aktion ohne Inhalt, das Kontingent wird belastet.
5. Hintergrundläufe können die Batch API mit 50 % Rabatt nutzen \[T113, T114\]; Anthropic speichert Batch-Aufträge aber 29 Tage außerhalb von Zero Data Retention \[T131\], und Bedrock bietet sie nicht an \[T48\].

**Datenstandort und Rechtsrahmen.** Die Anthropic-API kennt als Inferenzort nur „global“ und „us“, Haiku 4.5 unterstützt die Wahl gar nicht, und ruhende Daten liegen nur in „us“ \[T47\]. Jede KI-Anfrage im MVP verlässt damit die EU. workly legt fest: Im MVP läuft die KI über die Anthropic-API, nur nach ausdrücklichem Opt-in, und der Zustimmungsdialog sagt offen, dass Anfragen außerhalb der EU verarbeitet werden. Ab Ausbau 1 läuft der Team-Tarif standardmäßig über Claude in Amazon Bedrock mit EU-Profil ab `eu-central-1` (Frankfurt), mit 10 % Aufschlag \[T48\]; das deckt sich mit dem Technikbericht, der „EU-KI als Standard für Team“ in die Ausbauphase legt und Bedrock in Phase 0 prüft. Rechtlich offen sind die Übermittlung in Drittländer nach Art. 44 ff. DSGVO \[P2\] und die Auftragsverarbeitung (Abschnitt Sicherheit); pseudonymisierte Ausschnitte dürften personenbezogen bleiben (juristisch zu prüfen).

**Kontingente.** Eine Assistent-Anfrage ist eine Frage, ein Auftrag oder ein angeforderter Entwurf; automatische Vorschläge aus eingehenden Mails zählen getrennt, weil ihre Kosten mit dem Mailaufkommen wachsen. Die Werte sind Arbeitshypothesen; der Abschnitt Kosten prüft sie.

| Tarif | Assistent-Anfragen je Nutzer und Monat | Automatische Vorschläge aus E-Mails | Bei erreichtem Kontingent |
| --- | --- | --- | --- |
| Free | 20 | Aus | KI pausiert bis Monatsende, alles andere läuft weiter |
| Privat | 75 | Aus; je Mail einzeln auslösbar, zählt als Anfrage | Wie Free; Zusatzpaket buchbar |
| Pro | 150 | Aus bis zu 25 eingehenden Mails je Tag | Zusatzpaket buchbar |
| Team | 150 je Nutzer, im Workspace gebündelt | Aus bis zu 25 Mails je Tag und Nutzer | Inhaberin oder Admin bucht nach |

**Widersprüche in den Vorlagen.** AI Gateway verarbeitet Anfragen an Cloudflare-Standorten, die ohne Data Localization Suite nicht steuerbar sind \[T62\]; der EU-Weg des Team-Tarifs ist erst vollständig, wenn das Agent-Objekt Bedrock direkt aufruft oder der Verarbeitungsort von AI Gateway belegt ist. Auf Bedrock verliert der Team-Tarif zudem den Batch-Rabatt. Die Aufbewahrung bei Anthropic beschreiben zwei Anthropic-Seiten unterschiedlich (Abschnitt Sicherheit), und die Annahme des Technikberichts von 240 Anfragen je Nutzer passt zu keinem Kontingent (Abschnitt Kosten).

**Modellwechsel.** Für Claude Haiku 4.5 gilt die Zusage, das Modell nicht vor dem 15.10.2026 abzuschalten, also frühestens in zwölf Tagen; bei den beiden vorigen Haiku-Generationen lagen zwischen Abkündigung und Abschaltung rund zwei Monate \[T163\]. workly muss Modellwechsel ohne sichtbare Änderung vertragen: Routing über AI Gateway mit Rückfallmodell \[T44\], Evaluationen je Fall und Kontingente, die auch bei teurerem Ersatzmodell halten.

## Fokus und Wohlbefinden ohne Überwachung

workly behält das Ziel der Deck-Achse „Gesundheit“, einen Arbeitstag mit Raum für konzentrierte Arbeit und Pausen, und streicht die Burnout-Erkennung. Signale entstehen nur aus Daten, die die Person selbst erzeugt, sie sieht sie allein, und workly trifft keine Aussage über ihren Zustand.

**Gestaltungsprinzipien.** Sechs Regeln binden jede Funktion dieses Bereichs.

1. Die Daten gehören der Person: Signale werden nur für sie berechnet und angezeigt, jede Auswertung lässt sich abschalten, löschen und exportieren.
2. Keine individuellen Auswertungen für Arbeitgeber: Keine Ansicht, kein Export und keine Schnittstelle gibt Fokuszeiten, Arbeitszeiten, Aktivität oder KI-Nutzung einzelner Personen an Admins oder Vorgesetzte, auch nicht freiwillig, weil Freiwilligkeit im Arbeitsverhältnis schwer nachweisbar ist (juristisch zu prüfen).
3. Team-Kennzahlen nur ab Mindestgruppengröße: frühestens in Ausbau 2, für Gruppen ab 5 Personen, die jeweils zugestimmt haben (Schwelle als Annahme); darunter verschwindet die Kennzahl.
4. Opt-in: Auswertende Funktionen bleiben aus, bis die Person sie einschaltet.
5. Keine Diagnose-, Gesundheits- oder Emotionsaussagen: workly spricht nie von Stress, Erschöpfung, Burnout, Stimmung oder Risiko und vergibt keine Punktwerte.
6. Erklärbare Signale: Jeder Hinweis nennt seine Rechengrundlage. Zulässig sind Termindichte, selbst gesetzte Arbeitszeitfenster, Pausen als Lücken zwischen Terminen und geschützte Fokuszeit; nicht erhoben werden Tastatur- und Mausaktivität, Bildschirmzeit, Lesedauer, Online-Status, Stimme und Kamerabild.

| Zulässige Formulierung | Unzulässige Formulierung |
| --- | --- |
| „Dein Dienstag ist zu 85 % verplant.“ | „Dein Stresslevel ist hoch.“ |
| „Seit 13 Uhr hattest du keine Lücke über 15 Minuten. Pause einplanen?“ | „Achtung, Burnout-Gefahr.“ |
| „Diese Woche 6 Stunden Fokuszeit, in der Vorwoche 4 Stunden.“ | „Dein Wohlbefinden-Wert: 62 von 100.“ |
| „workly hilft dir, Fokuszeit zu planen.“ | „workly beugt Erschöpfung vor.“ |

**Funktionen.** Im MVP stehen die Fokus-Sitzung (25, 50 oder 90 Minuten, Benachrichtigungen pausiert), Fokusblöcke, die nach außen als belegt gelten, das Arbeitszeitfenster mit dem Vorschlag, abends geschriebene Mails „morgen um 8:00“ zu senden, und nach Opt-in der Hinweis zur Termindichte ab einer selbst gewählten Schwelle (Standard 80 %, Annahme). Den Status „Im Fokus bis 11:30“ sieht das Team nur, wenn die Person ihn für diese Sitzung einschaltet. Ausbau 1 ergänzt nach Opt-in den Pausenvorschlag und den privaten Wochenrückblick.

**Rechtlicher Rahmen.** Alle Einordnungen dieses Absatzes sind juristisch zu prüfen. Art. 9 Abs. 1 DSGVO untersagt grundsätzlich die Verarbeitung von Gesundheitsdaten, Art. 4 Nr. 15 erfasst Daten, aus denen Informationen über den Gesundheitszustand hervorgehen \[P2\]. Der EuGH zählt dazu auch Daten, aus denen sich durch Ableitung oder Abgleich indirekt sensible Informationen ergeben (Urteil vom 01.08.2022, C-184/20, Rn. 123) \[P5\]. Kalendersignale allein dürften danach keine Gesundheitsdaten sein, eine Burnout-Prognose wäre es voraussichtlich. Die Opt-in-Voreinstellung folgt Art. 25 Abs. 2 DSGVO \[P2\]. Nach § 87 Abs. 1 Nr. 6 BetrVG bestimmt der Betriebsrat bei technischen Einrichtungen mit, die das Verhalten oder die Leistung der Beschäftigten überwachen sollen \[P6\]; nach dem BAG genügt, dass sie dazu objektiv geeignet sind (Beschluss vom 13.12.2016, 1 ABR 7/15, Rn. 22) \[P7\]. Ein Mail- und Kalendersystem dürfte im Team-Einsatz schon wegen seiner Zeitstempel mitbestimmungspflichtig sein; Team-Kunden erhalten Unterlagen für eine Betriebsvereinbarung. Die KI-VO verbietet seit dem 02.02.2025, Emotionen am Arbeitsplatz und in Bildungseinrichtungen per KI abzuleiten (Art. 5 Abs. 1 lit. f), und bindet Emotionserkennung an biometrische Daten (Art. 3 Nr. 39) \[P3\]. Der Assistent leitet keine Emotionen ab und verarbeitet keine biometrischen Daten; auch später analysiert workly weder Stimme noch Kamerabild, Tipp- oder Mausverhalten. Software ist ein Medizinprodukt, wenn sie nach der Zweckbestimmung des Herstellers, die auch aus Werbematerial folgt, etwa der Diagnose oder Vorhersage von Krankheiten dienen soll (Art. 2 Nr. 1 und 12 MDR); Software für Lebensstil und Wohlbefinden fällt nach Erwägungsgrund 19 nicht darunter \[P4\]. Die WHO führt Burn-out in der ICD-11 als berufsbezogenes Phänomen, nicht als medizinischen Zustand \[P8\]. workly bleibt in der Kategorie Wohlbefinden, solange weder Produkt noch Werbung verspricht, Erkrankungen zu erkennen, zu verhüten oder zu lindern.

**Markt.** Fokus ohne Überwachung ist kein Alleinstellungsmerkmal. Microsoft Viva Insights zeigt persönliche Auswertungen nur der Person und bietet Führungskräften Analysen auf aggregierter Ebene \[M39\], Reclaim wertet Teamdaten zu Work-Life-Balance aus \[M42\]. workly unterscheidet sich durch den Verzicht auf jede Auswertung für Vorgesetzte, nicht durch die Fokus-Funktionen selbst.

**Widersprüche in den Vorlagen.** Das Deck versprach, Mitarbeitende entschieden selbst, welche Insights sie teilen; Prinzip 2 schließt individuelles Teilen aus. Der Technikbericht sieht ein Feld `share_insights` je Mitglied und Team-Auswertungen aus „freiwillig geteilten, aggregierten Werten“ vor; hier bedeutet das Feld nur die Zustimmung zur Aufnahme in Team-Kennzahlen ab 5 Personen, frühestens in Ausbau 2. Sein Datenmodell enthält zudem eine im Browser verschlüsselte „Wohlbefinden-Notiz“, die das Produktkonzept nicht kennt; Freitext kann Gesundheitsdaten nach Art. 9 DSGVO enthalten \[P2\], die Notiz entfällt deshalb. Das Produktkonzept speichert keinen Verlauf der Fokus-Sitzungen, der Technikbericht legt sie in Postgres ab, und der Wochenrückblick braucht Fokuszeiten: Ohne Opt-in existiert nur der laufende Timer, mit Opt-in für den Wochenrückblick speichert workly Sitzungen privat und löschbar. Schließlich schützt der Verzicht auf Auswertungen nicht vor der Mitbestimmung, weil schon die objektive Eignung genügt \[P7\]; „keine Überwachung“ ist ein Gestaltungsversprechen, keine rechtliche Freistellung.

## Portal: Informationsarchitektur und Designsystem

Das Portal ordnet fünf Module in der Hauptnavigation an, gibt jedem Modul eine zweite Spalte für die sekundäre Navigation und hält Suche, Befehlszeile und Assistent auf jeder Seite erreichbar. Gestaltung, Tokens und Bausteine legt das [Designsystem „workly“](https://claude.ai/artifact/HM2q3qU8uawJ7PK1SjiU6r) fest.

&#91;embedded content: Informationsarchitektur des Portals · fünf Module, acht globale Elemente, acht Ansichten außerhalb der Module\]

Konto-, Verwaltungs- und Fokusansichten liegen außerhalb der Module; sie öffnen sich vor der Anmeldung, über das Profil oder über „Fokus starten“.

**Marke.** Die Marke folgt strikt dem Deck, Aufbau und Bausteinlogik folgen dem Designsystem Mein-Hartmann; die Anmeldeseite von dashboard.mein-hartmann.de dient als Muster für Anmeldung und Registrierung \[P16, P17\]. Blau steht für Effizienz und alle Kernmodule, Pink für Freude (Tagesabschluss, Erledigt-Momente, Tarif Privat), Violett für Gesundheit (Fokus, Pausen, Wochenrückblick); Zustandsfarben erscheinen nur für Zustände. Karten liegen als hellgraue Flächen ohne Rand und Schatten auf Weiß, jede Ansicht hat höchstens einen Blickfang mit Farbverlauf. Symbole stammen aus dem Feather-Satz, den auch das Deck nutzt; Emoji und Fotos in Farbe kommen nicht vor. workly duzt, wie das Deck („Definiere deine Arbeit neu“), und schreibt Knöpfe mit Verb vorn („Termin anlegen“). Barrierefreiheit folgt WCAG 2.2, Stufe AA \[P9\]: Text mindestens 4,5:1, Bedienelemente und Fokusring mindestens 3:1, Zielgröße 44 px auf Mobilgeräten, Zustände nie nur über Farbe.

**Schrift.** Markenschrift ist Rig Sans; das Deck setzt Überschriften, Kartentexte und Fließtext darin. Rig Sans wird über Adobe Fonts bezogen, die Lizenz für den Einsatz in einer Web-App ist zu klären. Ersatzschrift ist DM Sans unter der SIL Open Font License. Die Angabe des Produktkonzepts, Avenir Next sei die Schrift für Fließtext, ist falsch: Avenir Next ist im Deck nur Vorgabe des Keynote-Themes; die Textstile der Folien sind in Rig Sans gesetzt. Sie entfällt, und die offene Lizenzfrage beschränkt sich auf Rig Sans.

**Bausteine.** Das Brandbook beschreibt die Ansichten mit 56 Bausteinen in den Gruppen Marke, Grundlagen, Formulare, Rückmeldung, Inhalt, Hülle und Navigation, Module, Assistent, Konto und Marketing. Die Tabelle zeigt die Bausteine der Produktansichten; Bausteine wie Knopf, Formular, Tabelle, Logo und Tarifkarten aus den übrigen Gruppen ergänzen sie.

| Bereich | Bausteine |
| --- | --- |
| Hülle und Navigation | Huelle, Mobil, Reiter, Werkzeugleiste, Benachrichtigungen, Befehlszeile |
| Module | Heute, PosteingangListe, Lesebereich, Verfassen, KalenderWoche, Termin, Aufgabenkarte, Aufgabenboard, DokumenteUebersicht, DokumentEditor, FokusTimer, Wochenrueckblick |
| Assistent | AssistentSeitenleiste, Vorschlagskarte |
| Konto | Anmeldung, Onboarding, EinstellungenKI, Abrechnung |

**Kernansichten.** Jede Ansicht hat genau eine primäre Aktion und einen Leerzustand, der den nächsten Schritt nennt; die Tabelle zeigt sechs von 24 Ansichten des Produktkonzepts.

| Ansicht | Zweck | Primäre Aktion | Leerzustand |
| --- | --- | --- | --- |
| Heute | Tag planen | „Tag planen“ | „Dein Tag ist frei. Zieh eine Aufgabe in den Kalender oder starte eine Fokus-Sitzung.“ |
| Posteingang | Mails in Arbeit umwandeln | „Erledigt“ | „Alles erledigt. Neue Nachrichten erscheinen hier.“ |
| Kalender, Woche | Woche planen | „Neuer Termin“ | „Keine Termine in dieser Woche. Leg einen Fokusblock an.“ |
| Aufgaben, Liste | Aufgaben erledigen | „Neue Aufgabe“ | „Keine offenen Aufgaben. Mit der Taste A wird jede E-Mail zur Aufgabe.“ |
| Assistent | Fragen zu eigenen Inhalten | „Fragen“ | „Frag mich etwas zu deinen Mails, Terminen oder Dokumenten.“ |
| Abrechnung | Tarif und Zahlungen verwalten | „Tarif ändern“ | „Du nutzt workly Free. Eigene Domain und Postfach gibt es ab Privat.“ |

Tastenkürzel gelten überall gleich: „/“ öffnet die Suche, Strg+K oder ⌘K die Befehlszeile, Strg+J oder ⌘J den Assistenten; im Posteingang stehen R für Antworten, A für Als Aufgabe, T für Als Termin, E für Erledigt, S für Später und J und K für die nächste und vorige Nachricht. Nur der Posteingang zeigt einen Zähler, und der lässt sich abschalten.

**Widersprüche in den Vorlagen.** Neben der Schriftangabe ist ein zweiter Punkt anzupassen: Die Bauanleitung legt die Tarife auf Variante A fest, damit Tarifkarten und Abrechnung einheitlich gestaltet werden; ändert der Preistest in Phase 0 das Modell, sind die Bausteine Tarifkarten und Abrechnung anzupassen. Der Baustein Wochenrueckblick steht in der Bausteinliste, die Funktion erscheint aber erst mit Ausbau 1; für die Ansicht „Team und Mitglieder“ fehlt bislang ein eigener Baustein, denn Teamkarte ist ein Marketingbaustein.

## Geschäftsmodell und Preise

workly verdient an Abonnements je Nutzer in vier Tarifen und an zwei Add-ons. Arbeitshypothese ist Preisvariante A mit Free 0 €, Privat 5 €, Pro 10 € und Team 13 € netto je Nutzer und Monat bei jährlicher Zahlung; die Preisinterviews der Phase 0 testen sie gegen die aus dem Wettbewerb abgeleitete Variante B.

**Variante A (Arbeitshypothese).** Die Preise stammen aus dem Produktkonzept und sind in der Bauanleitung des Designsystems verbindlich gesetzt. Verbrauchern zeigt workly Bruttopreise; die Umrechnung unterstellt den Regelsatz von 19 % Umsatzsteuer (Annahme).

| Tarif | Netto je Nutzer und Monat, jährlich / monatlich | Brutto für Verbraucher, jährlich / monatlich | Für wen | Umfang |
| --- | --- | --- | --- | --- |
| Free | 0 € | 0 € | Testende, Studierende | Verbundenes Postfach, alle Kernmodule, 2 GB, 20 Assistent-Anfragen |
| Privat | 5 € / 6 € | 5,95 € / 7,14 € | Privatpersonen; Studierende 50 % Rabatt | 1 eigene Domain, 5 Adressen, 50 GB, 75 Anfragen |
| Pro | 10 € / 12 € | 11,90 € / 14,28 € | Freelancer, Primärsegment | 3 Domains, 15 Adressen, 200 GB, 150 Anfragen, automatische Vorschläge aus bis zu 25 Mails je Tag; ab Ausbau 1 Gäste, Buchungsseite, Visitenkarte |
| Team, ab Ausbau 1 | 13 € / 15 €, ab 2 Nutzern | nur für Unternehmen | Kleine Teams | Wie Pro je Nutzer, dazu Rollen, geteilte Kalender und Ordner, Gruppenpostfächer, Vertrag zur Auftragsverarbeitung, Unterlagen für den Betriebsrat |
| Add-on Domain, ab Ausbau 1 | Registrierungspreis plus Jahrespauschale (offen) | – | Bezahlte Tarife | Registrierung und DNS-Verwaltung; eine vorhandene Domain zu verbinden bleibt kostenlos |
| Add-on Website, Ausbau 2 | 5 € je Website | – | Pro, Team | Bis zu 5 Seiten, Kontaktformular in den Posteingang |

Gegenüber Verbrauchern weist workly Endpreise einschließlich Umsatzsteuer aus, wie es die Preisangabenverordnung verlangt (Rechtspunkt, zu prüfen). Freelancer, die als Kleinunternehmer keine Vorsteuer abziehen, zahlen für Pro faktisch 11,90 €; für Kunden in der Schweiz hängen Steuer und Währung vom offenen Sitz des Rechtsträgers ab.

**Variante B (Marktbericht).** Der Marktbericht empfiehlt einen Basistarif zu 8 € netto bei jährlicher (10 € bei monatlicher) Zahlung mit Domain-Mail, Kalender, Aufgaben, Dokumenten und KI-Kontingent, einen Pro-Tarif zu 14 € mit größerem KI-Kontingent und für Studierende 3 € oder einen kostenlosen Einstieg. Basis läge damit auf Höhe von Tuta Advanced (8 €) \[M17\], Pro knapp über Google Business Standard (13,60 €) und unter Proton Workspace Premium (19,99 €) \[M6, M14\].

**Worin sich A und B unterscheiden.** A segmentiert nach Zielgruppe: Privat, Pro und Team unterscheiden sich in Domains, Adressen, Speicher und Teamfunktionen, das KI-Kontingent wächst mit. B segmentiert nach KI-Umfang: Ein Basistarif enthält alle Module, der Aufstieg kauft vor allem mehr KI. Die Preisinterviews der Phase 0 müssen fünf Fragen klären: ob das Primärsegment für denselben Kern 10 € (A-Pro) statt 8 € (B-Basis) akzeptiert; ob Freelancer wegen Domains, Adressen und Speicher aufsteigen (Logik A) oder wegen des KI-Volumens (Logik B); ob ein Privat-Tarif zu 5 € eine eigene zahlende Gruppe erschließt oder Pro kannibalisiert; ob Studierende 3 € zahlen oder nur Free nutzen; und welcher Anteil jährlich statt monatlich zahlt. Als Verfahren eignen sich eine Preisabfrage nach Van Westendorp und eine Wahl zwischen den beiden Paketstrukturen (Annahme zur Methode). Das Erfolgskriterium des Produktkonzepts gilt für beide Varianten: ein bestätigter Pro-Preis zwischen 10 € und 15 €.

**Preise im Wettbewerb.** A-Pro liegt mit 10 € netto über IONOS Nextcloud Workspace mit KI-Assistent und deutschem Rechenzentrum (6,72 €) und über Google Business Starter (6,80 €) \[M22, M6\]. Diesen Abstand muss die Integration rechtfertigen, nicht der Speicherort, denn einen Souveränitätsaufschlag trägt der Markt kaum \[M62\]. Der Team-Tarif zu 13 € liegt auf Höhe von Google Business Standard (13,60 € mit Gemini, Docs und Meet) und über Microsoft 365 Business Standard (12,13 € netto ohne Copilot) \[M6, M2\], ohne Office-Bearbeitung und Videokonferenz; er muss über Integration, deutschen Speicherort, Auftragsverarbeitungsvertrag und Unterlagen für den Betriebsrat überzeugen. Privat zu 5,95 € brutto steht neben Proton Mail Plus (3,99 €), Tuta Essential (6 €) und Posteo (1 €) \[M15, M17, M25\]; die Vergleichswerte mischen Netto-, Brutto- und Dollarpreise. Gegenüber 2021 liegt Pro mit 120 € im Jahr nahe am alten Jahresabo von 126 €; ein Team mit fünf Personen zahlt aber 65 € im Monat statt 47 € (15 € plus 4 × 8 €), dafür mit Postfächern, Speicher und KI.

**Marktgröße und Mengenplanung.** Der Marktbericht schätzt für Deutschland einen Gesamtmarkt von 13,45 Mio. Nutzern und 1,12 Mrd. € im Jahr und einen adressierbaren Markt von 4,20 Mio. Nutzern und 386 Mio. €. Nach drei Jahren hält er 10.500, 21.000 oder 42.000 zahlende Nutzer für erreichbar (0,25 %, 0,5 % oder 1 % des adressierbaren Markts), das sind 0,97, 1,93 oder 3,86 Mio. € im Jahr. Drei Annahmen tragen diese Zahlen: 96 € je Geschäftsnutzer und Jahr, also der Basispreis von Variante B, die Bitkom-Quote von 37 %, erhoben nur bei Unternehmen ab 20 Beschäftigten \[M62\], und Marktanteile ohne Vergleichsquelle. Das Produktkonzept plant 3.000 Zahlende nach 24 Monaten, zwischen beiden liegt der Faktor 7 in zwölf Monaten. Für Budget und Personal gilt das Bottom-up-Szenario; die Marktwerte zeigen nur, dass der Markt es nicht begrenzt.

**Kennzahlen.** Die Zielwerte sind Annahmen des Produktkonzepts.

| Kennzahl | Definition | Zielwert |
| --- | --- | --- |
| Aktivierung | Neue Konten, die binnen 7 Tagen Postfach oder Domain einrichten und 3 Verknüpfungen anlegen | ≥ 40 % |
| Bindung | Aktivierte Konten mit mindestens 3 aktiven Tagen in Woche 4; monatliche Kündigungen zahlender Konten | ≥ 35 %; ≤ 3 % |
| Konversion | Kostenlose Konten, die binnen 60 Tagen zahlen | ≥ 5 % |
| Kosten je Nutzer | Variable Kosten je zahlendem Nutzer und Monat | ≤ 25 % des Nettopreises |
| KI-Kosten je Nutzer | KI-Kosten je zahlendem Nutzer und Monat | ≤ 10 % des Nettopreises im Mittel |
| Übernahmequote KI | Übernommene an allen gezeigten Vorschlägen | ≥ 50 % |

**Widersprüche in den Vorlagen.** Das Produktkonzept setzt die KI-Kennzahl auf 10 % und beziffert zugleich die KI-Kosten eines voll genutzten Pro-Kontos auf 25 bis 30 % des Nettopreises; mit dem EZB-Kurs von 1,1225 USD \[T160\] statt 1,10 USD sind es 24,8 % (Monatspreis) bis 29,7 % (Jahrespreis). Die Kennzahl lässt zudem offen, ob die KI-Kosten kostenloser Konten den Zahlenden zugerechnet werden; der Abschnitt Kosten zeigt beide Lesarten.

## Technische Architektur

workly verteilt sich auf vier Zonen: Endgeräte, Cloudflare als Edge- und Rechenschicht, Hetzner als Speicherschicht in Falkenstein und Nürnberg und Claude als KI-Dienst. Mail-Protokolle laufen direkt zu Hetzner, weil Cloudflare nur HTTP-Verkehr proxyt und eigene TCP-Anwendungen über Spectrum den Enterprise-Plan verlangen \[T14, T15\].

&#91;embedded content: Systemarchitektur · vier Zonen, Mail-Protokolle direkt zu Hetzner\]

Postfächer, Termine und Dateien ruhen bei Hetzner; Cloudflare hält Sitzungszustand, Live-Dokumente und Caches, und Claude erhält je Anfrage nur einen minimierten Ausschnitt.

**Prinzipien.** Hetzner speichert, Cloudflare verarbeitet und schützt: Kundeninhalte liegen dauerhaft in Falkenstein (FSN1) und Nürnberg (NBG1), nicht an Hetzners Standorten in Finnland, den USA oder Singapur \[T1\]; Cloudflare hält Sitzungszustand, Caches, öffentliche Inhalte und verschlüsselte Sicherungskopien, wo möglich mit der Jurisdiktion `eu` \[T2, T3, T4\]. Standards gehen vor Eigenbau: Mail, Kalender und Kontakte laufen über SMTP, IMAP, JMAP und CalDAV \[T5, T6\], sodass Nutzer ihre Geräte-Apps behalten und workly ohne Datenverlust verlassen können. Die Mandantentrennung gilt in jeder Schicht; jede Zeile, jedes Objekt und jeder Name eines Durable Objects trägt die Workspace-ID, Postgres erzwingt sie per Row-Level Security, Stalwart per Tenant \[T7\].

Die Ränder bleiben austauschbar. Hono, Drizzle und Better Auth laufen auch außerhalb von Cloudflare Workers \[T8, T9, T10\], und Claude-Aufrufe gehen über AI Gateway, das Anbieter und Region wechseln kann \[T11, T12\]. Betrieb ist Code: Terraform und Wrangler bauen jede Umgebung aus dem Repository, Handarbeit in Konsolen gilt als Fehler. Kosten werden je Nutzer gemessen; KI-Token, Speicher und Versand schreiben Zähler in Analytics Engine \[T13\], und Kontingente greifen vor dem Aufruf. Dateien lädt der Browser über signierte URLs direkt in den Object Storage von Hetzner, sodass das Limit von 100 MB je Worker-Request nicht greift \[T55, T20\].

**Widersprüche in den Vorlagen.** Das Prinzip „Hetzner speichert, Cloudflare verarbeitet“ gilt nicht vollständig. Durable Objects halten den Live-Zustand von Dokumenten und Agenten in der EU-Jurisdiktion \[T2\], D1 und R2 halten Website-Inhalte und verschlüsselte Datenbanksicherungen in der EU \[T3, T4\], und KV speichert Konfiguration in der EU, cacht sie aber weltweit \[T59\]. Workers und AI Gateway verarbeiten Anfragen an dem Cloudflare-Standort, an dem sie ankommen; festlegen lässt sich das nur mit der Data Localization Suite, die Cloudflare als kostenpflichtiges Angebot für Enterprise-Kunden führt \[T62, T95, P14\]. Nach außen gilt daher die Formulierung des Brandbooks: „Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen.“ Live-Zustand in der EU und die Verarbeitung bei Anthropic nach Zustimmung gehören in die Datenschutzhinweise. Zudem stützt sich die Architektur auf Dienste im Beta-Status, darunter Workers VPC, Email Service und Secrets Store \[T25, T33, T86\]; jeder braucht einen Ausweichpfad, den der Abschnitt Dienste im Detail nennt.

## Dienste im Detail

Jede Aufgabe hat einen Hauptdienst und einen Ausweichpfad: Cloudflare-Dienste führen Code aus und halten flüchtigen Zustand, Hetzner-Dienste halten die Inhalte. Die Spalte „Ort“ nennt, wo Daten ruhen oder verarbeitet werden.

| Aufgabe | Dienst | Ort | Begründung | Ausweichpfad | Quelle |
| --- | --- | --- | --- | --- | --- |
| Web-App ausliefern | Workers mit Static Assets, React Router v8 | Cloudflare-Standort | Asset-Anfragen kostenlos und unbegrenzt; Serverrendering im Workers-Runtime | TanStack Start, SvelteKit | \[T17, T18, T19\] |
| API | Worker mit Hono | Cloudflare-Standort | Web-Standards, typisierter RPC-Client; 128 MB je Isolate | Service Bindings ohne Framework | \[T20, T8\] |
| Kerndaten | PostgreSQL 18 mit pgvector über Hyperdrive | Hetzner, Deutschland | Row-Level Security, Volltext, Vektoren; Hyperdrive im Paid-Plan ohne Abfragelimit | D1 je Workspace (höchstens 10 GB je Datenbank) | \[T21, T22, T23, T24\] |
| Private Anbindung | Workers VPC (Beta, derzeit kostenlos) | – | Keine offenen Datenbankports, keine Service-Tokens | Tunnel mit Access-Service-Token | \[T25, T26, T27\] |
| Mail, Kalender, Kontakte | Stalwart Enterprise | Hetzner, Deutschland | SMTP, IMAP, JMAP, CalDAV, CardDAV, Spamfilter, Cluster; Mandantenfähigkeit nur in der Enterprise-Ausgabe | mailcow; Postfix, Dovecot, Rspamd | \[T28, T29, T7, T30, T32\] |
| Systemmails (Einladung, Login-Link) | Email Service (Beta) | ungeprüft | Binding ohne API-Schlüssel, DKIM automatisch, 3.000 Mails je Monat inklusive | Versand über Stalwart | \[T33, T34, T35\] |
| Systempostfächer, DMARC- und TLS-Berichte | Email Routing mit Email Workers | ungeprüft | Routing unbegrenzt, Eingang bis 25 MiB | Stalwart-Postfach | \[T36, T37\] |
| Live-Dokumente, Live-Benachrichtigungen | Durable Objects: DocRoom mit y-partyserver, Tiptap und Yjs; UserHub | EU | Hibernation: keine Laufzeitkosten zwischen Nachrichten | Hocuspocus | \[T38, T39, T40, T41\] |
| KI-Assistent | Agents SDK mit Claude Sonnet 5.5, Haiku 4.5, Opus 5.5 | Zustand EU, Inferenz global | Zustand, Zeitplanung, Freigabe durch Menschen, MCP | Eigene Werkzeugschleife | \[T42, T43\] |
| KI-Proxy | AI Gateway | Cloudflare-Standort | Auswertung, Ratenbegrenzung, Wiederholung, Rückfallmodell; Payload-Logging abschaltbar | Direkter Aufruf | \[T44, T45, T46\] |
| KI in der EU (Team ab Ausbau 1) | Claude in Amazon Bedrock, EU-Profil ab `eu-central-1` | EU | Anthropic-API kennt nur „global“ und „us“ | Vertex AI, Multi-Region `eu` | \[T47, T48, T49\] |
| Hintergrundjobs | Queues | – | 5.000 Nachrichten je Sekunde und Queue, 100 Wiederholungen, bis 14 Tage Aufbewahrung | Workflows | \[T50\] |
| Import, Export, Löschung, Domainprüfung | Workflows | – | Bis 25.000 Schritte, Pausen bis 365 Tage, 1 GB Zustand | Queues mit Alarmen in Durable Objects | \[T51, T52\] |
| Dateien, Anhänge, Snapshots | Hetzner Object Storage FSN1, Kopie in NBG1 | Hetzner, Deutschland | S3-API, Object Lock, Versionierung | R2 mit Jurisdiktion `eu` | \[T54, T55\] |
| Öffentliche Assets, verschlüsselte DB-Sicherungen | R2 | EU | Kein Egress-Entgelt, Jurisdiktion, Verschlüsselung mit eigenem Schlüssel (SSE-C) | Hetzner Object Storage | \[T56, T4, T57\] |
| Feature-Flags, Konfiguration | KV | Speicher EU, Cache weltweit | Leselastig; Änderungen erst nach bis zu 60 s sichtbar | D1 | \[T58, T59\] |
| Website-Add-on (Ausbau 2) | D1 je Website, R2, Static Assets | EU | Bis 50.000 Datenbanken je Konto; Lesereplikate nur innerhalb der Jurisdiktion | Postgres | \[T24, T60, T3\] |
| Semantische Suche in privaten Inhalten | pgvector und bge-m3 auf Hetzner | Hetzner, Deutschland | Vectorize und Workers AI lassen sich nicht regionalisieren | Vectorize mit Workers AI | \[T62, T63, T64\] |
| Volltextsuche | Suchspeicher von Stalwart in Postgres, Postgres-Textsuche | Hetzner, Deutschland | Keine zusätzliche Suchmaschine | Meilisearch | \[T67, T68\] |
| Virenscan | Scanner auf Hetzner (ClamAV, ungeprüft) | Hetzner, Deutschland | Inhalte verlassen Deutschland nicht | Containers (Standort nicht steuerbar) | \[T70, T71\] |
| Bot-Schutz | Turnstile | Cloudflare-Standort | Ohne CAPTCHA, WCAG 2.2 AA | Ratenbegrenzung | \[T74\] |
| WAF, Ratenbegrenzung | WAF-Regeln (Pro-Plan), Rate-Limit-Binding, exakte Zähler in Durable Objects | Cloudflare-Standort | Binding zählt nur je Standort und näherungsweise | Business-Plan | \[T75, T76, T77\] |
| Admin-Zugang | Access und Tunnel | – | Kostenlos bis 50 Nutzer; nur ausgehende Verbindungen | VPN | \[T78, T27\] |
| DNS, Domains | Cloudflare DNS mit DNSSEC; Registrar nur für unterstützte Endungen | – | Registrar ohne .de, .eu, .ch | Externer Registrar für .de | \[T79, T80\] |
| Logs, Traces | Workers Logs, Traces, Logpush | – | 7 Tage Logs; Export nach OpenTelemetry | Loki auf Hetzner (ungeprüft) | \[T83, T84, T85\] |
| Office-Dateien (Ausbau 2, offen) | Collabora Online über WOPI auf Hetzner | Hetzner, Deutschland | MPL 2.0; Business-Lizenz 3 € je Nutzer und Monat bis 99 Nutzer | ONLYOFFICE Developer Edition ab 3.500 USD | \[T89, T91, T92, T93\] |
| Hochverfügbarkeit, Sicherungen der Datenbank | Patroni, pgBackRest | Hetzner, Deutschland | Automatisches Failover; Wiederherstellung auf Zeitpunkt, verschlüsselte S3-Repositories | Manuelles Failover | \[T96, T97\] |

Ein Strich in der Spalte „Ort“ heißt, dass der Technikbericht keinen Ort belegt.

**Widersprüche und ungeprüfte Punkte.** Die Videocalls über RealtimeKit aus dem Technikbericht entfallen, weil das Produktkonzept keine Videokonferenz vorsieht. Ob Email Service als Relay für Nutzerpost dienen darf, ist ungeprüft, und je Nachricht gilt eine Grenze von 5 MiB \[T37\]; als Ausweg für den Versand bleibt er unsicher. Weil Cloudflare Registrar weder .de noch .eu noch .ch führt \[T80\], braucht das Domain-Add-on einen zweiten Registrar mit Reseller-Schnittstelle (ungeprüft). Collabora CODE ist nicht für den Produktivbetrieb gedacht \[T90\], die Community-Ausgabe von ONLYOFFICE steht unter AGPL-3.0 und ist für bis zu 20 Nutzer empfohlen \[T166\]; die Office-Entscheidung ist damit auch eine Lizenzentscheidung.

## Datenmodell und Datenflüsse

Jede Entität trägt die Workspace-ID, und jede Schicht erzwingt die Trennung selbst: Postgres per Row-Level Security, Stalwart per Tenant, Durable Objects über ihren Namen, der Object Storage über Präfixe und kurzlebige signierte URLs \[T7, T2\]. Mails, Kalender und Kontakte verwaltet Stalwart über JMAP, Aufgaben, Dokumente und Verknüpfungen liegen in Postgres, Dateiinhalte im Object Storage.

| Entität | Wichtigste Felder | Speicherort |
| --- | --- | --- |
| Konto | id (UUIDv7), E-Mail, Name, Sprache, Zeitzone, Status, Löschdatum; Passkeys; TOTP-Geheimnis verschlüsselt | Postgres bei Hetzner |
| Workspace | id, Name, Slug, Tarif, KI-Richtlinie (Anbieter, Funktionen), Speicherkontingent, Stalwart-Tenant | Postgres; Routing-Kopie in KV |
| Mitglied | Workspace, Konto, Rolle, Status, Zustimmung zu Team-Kennzahlen (Standard: nein) | Postgres |
| Postfach | id, Workspace, Inhaber, Adresse, Aliase, Domain, Kontingent, Stalwart-Principal | Postgres (Metadaten), Stalwart |
| Nachricht und Thread | JMAP-Felder: id, threadId, Postfächer, Schlagwörter, Absender, Empfänger, Betreff, Eingang, blobId | Stalwart: Metadaten in Postgres, Inhalt im Object Storage \[T67\] |
| Kalender und Termin | Name, Farbe, Freigaben; uid, Beginn, Dauer, Zeitzone, Wiederholung, Teilnehmende, Erinnerungen | Stalwart (JMAP for Calendars, CalDAV) \[T99\] |
| Aufgabe | id, Workspace, Titel, Text, Status, Priorität, Fälligkeit, geplanter Beginn und geplantes Ende, Zuständige, erledigt am | Postgres |
| Dokument | id, Workspace, Titel, Ordner, Rechte, Version, Snapshot-Schlüssel | Postgres; Snapshots im Object Storage; Live-Zustand im Durable Object (EU) |
| Datei | id, Workspace, Name, Typ, Größe, SHA-256, Objektschlüssel, Scanstatus, Schlüsselkennung | Postgres, Object Storage |
| Verknüpfung | id, Workspace, Quelltyp und -id, Zieltyp und -id, Beziehung, angelegt von | Postgres |
| Fokus-Sitzung | id, Konto, Beginn, geplante Minuten, Ende, Modus, Sichtbarkeit privat | Laufender Timer im UserHub; gespeichert nur nach Opt-in für den Wochenrückblick |
| KI-Aktion | id, Workspace, Konto, Aktion, Modell, Anbieter, Region, Token, Kosten, Datenkategorien, Werkzeugaufrufe, Bestätigung, Ergebnis, Prompt-Hash | Postgres; Zähler in Analytics Engine |

**Mandantentrennung.** Jede Tabelle führt `workspace_id NOT NULL`, und die Policies vergleichen sie mit einer Sitzungsvariable, die der Worker je Transaktion setzt. Wie Hyperdrive Verbindungen bündelt und Abfragen zwischenspeichert, ist ungeprüft; bis dahin tragen alle Abfragen die Workspace-ID als Parameter und laufen ohne Hyperdrive-Cache. Durable Objects heißen nach dem Muster `ws:{workspace}:doc:{id}` und entstehen in der Jurisdiktion `eu` \[T2\]. Signierte URLs für den Object Storage gelten fünf Minuten, Logs enthalten Kennungen, keine Inhalte.

**E-Mail eingehend.** Der sendende Server findet den MX-Eintrag über Cloudflare DNS, dessen Mail-Einträge auf „DNS only“ stehen \[T14\], und liefert per SMTP an einen von zwei Stalwart-Knoten mit eigener IPv4-Adresse und passendem Reverse-DNS \[T100\]; die MTA-STS-Policy liefert ein Worker \[T101\]. Stalwart prüft SPF, DKIM und DMARC, bewertet die Nachricht mit seinem Spam-Klassifikator \[T28\] und legt Metadaten und Volltextindex in Postgres, den Inhalt als Blob in Falkenstein ab \[T67\]. Ein signierter Webhook meldet die Nachricht an den Worker `api` \[T16\]; offene Clients erhalten eine Live-Benachrichtigung, eine Queue startet die Indexierung und, nur nach Opt-in, die Auswertung durch den Assistenten.

**E-Mail ausgehend.** Die Web-App reicht Mails per JMAP an Stalwart, native Clients nutzen SMTP-Submission mit App-Passwort \[T102\]. Stalwart signiert mit DKIM und stellt über Port 25 zu. Hetzner sperrt Port 25 und 465 bei Cloud-Servern; einen Antrag auf Freischaltung nimmt Hetzner frühestens nach einem Monat und bezahlter erster Rechnung an und entscheidet im Einzelfall, für dedizierte Server ist die Regel ungeprüft \[T103\]. Google verlangt von allen Absendern SPF oder DKIM, gültiges Reverse-DNS, TLS und eine Spamrate unter 0,3 %, ab 5.000 Mails je Tag zusätzlich DMARC \[T104\]; die Vorgaben von Microsoft sind ungeprüft. Getrennte IP-Adressen für Free und bezahlte Tarife, Aufwärmplan und Versandgrenzen schützen die Reputation; Systemmails kommen über Email Service \[T35\].

**Kalender.** Die Web-App spricht JMAP for Calendars mit Stalwart \[T99\], native Clients nutzen CalDAV und CardDAV über Cloudflare-Proxy und Tunnel \[T6\]; ob die WAF WebDAV-Methoden wie PROPFIND durchlässt, ist ungeprüft. ICS-Dateien nach RFC 5545 \[T106\] liest der Worker und schreibt sie per JMAP, abonnierte Kalender aktualisiert ein Cron Trigger stündlich \[T53\]. „Aufgabe im Kalender planen“ setzt geplanten Beginn und geplantes Ende der Aufgabe und verknüpft Aufgabe, Termin und Ursprungsmail.

**Dateien.** Der Worker `api` prüft das Kontingent und signiert eine Upload-URL für Falkenstein; der Browser lädt direkt hoch, bis 5 GB in einem Stück, darüber in Teilen \[T55\]. Ob der Hetzner-Speicher die nötigen CORS-Regeln unterstützt, ist ungeprüft. Danach prüft ein Scanner auf Hetzner die Datei, ein Fund führt in die Quarantäne.

**Dokumente in Echtzeit.** Der WebSocket geht nach Rechteprüfung an das DocRoom-Objekt in der EU-Jurisdiktion \[T2\]; Clients tauschen Yjs-Änderungen, und zwischen Nachrichten fallen dank Hibernation keine Laufzeitkosten an \[T38, T110\]. Beim letzten Verbindungsende, spätestens alle zehn Minuten, entsteht ein Snapshot in Falkenstein \[T39\]; 24 Stunden nach der letzten Aktivität löscht ein Alarm den Zustand. Ob PartyServer, das Objekte über Namen adressiert, mit der Jurisdiktion zusammenspielt, ist ungeprüft \[T109\].

**Suche.** Neue Mails, Dokument-Snapshots und geänderte Aufgaben erzeugen Indexierungsaufträge; der Indexer auf Hetzner berechnet Vektoren mit bge-m3, das über 100 Sprachen abdeckt \[T64\]. Eine Abfrage durchsucht parallel Stalwart, die Postgres-Textsuche mit Snowball-Stemmer \[T68\] und die Vektorsuche; Reciprocal Rank Fusion mischt die Treffer, danach greift der Rechtefilter, und „Antwort mit Quellen“ sendet nur die besten Ausschnitte an Claude.

**Export und Löschung.** Der Export nach Art. 20 DSGVO \[P2\] liefert Mails als EML, Termine als ICS, Kontakte als VCF und Dokumente als Markdown. Ein Workflow löscht über Stalwart, Postgres, Object Storage, Durable Objects und R2 hinweg; Sicherungen laufen nach 35 Tagen aus (Annahme).

**Widersprüche in den Vorlagen.** Das Datenmodell des Technikberichts enthält eine Wohlbefinden-Notiz, die entfällt, und speichert Fokus-Sitzungen dauerhaft, was hier nur nach Opt-in geschieht (Abschnitt Fokus). Umgekehrt fehlt ein Datenfluss für das verbundene Postfach und den IMAP-Import, die das Produktkonzept ins MVP legt; der Entwurf in Phase 0 muss auch klären, wo Zugangsdaten fremder Postfächer verschlüsselt liegen. Die OAuth-Zugriffe auf Google- und Microsoft-Kalender, die der Technikbericht beschreibt \[T107, T108\], kommen erst in Ausbau 1.

## Sicherheit, Datenschutz und Compliance

workly schützt Daten durch Verschlüsselung auf dem Transportweg und im Ruhezustand, Passkeys, Mandantentrennung in jeder Schicht und ein manipulationssicheres Audit-Log. Rechtlich offen sind die Drittlandübermittlungen an Anthropic und Cloudflare nach Art. 44 ff. DSGVO, die Frage, ob Bedrock EU eine Übermittlung an AWS auslöst, die Verträge zur Auftragsverarbeitung, die Aufbewahrung bei Anthropic und die Mitbestimmung bei Team-Kunden.

**Verschlüsselung.** Verbindungen laufen per TLS bis zur Edge und über Tunnel oder Workers VPC zum Ursprung; Hyperdrive verlangt TLS zur Datenbank \[T26\], Mail nutzt STARTTLS, MTA-STS im Modus „enforce“ und TLS-Berichte \[T101, T105\]. Im Ruhezustand verschlüsselt Cloudflare D1, R2 und Durable Objects mit AES-256 und hält die Schlüssel selbst \[T116, T117, T118\]; R2 erhält zusätzlich eigene Schlüssel (SSE-C) \[T57\]. Bei Hetzner sind Server per LUKS und der Object Storage serverseitig verschlüsselt \[T54\], ebenso die pgBackRest-Repositories \[T97\]. Den Hauptschlüssel je Umgebung hält der Secrets Store mit Offline-Kopie \[T86\], Datenschlüssel je Workspace liegen verschlüsselt in Postgres und rotieren jährlich und nach Vorfällen.

**Anmeldung und Rollen.** Better Auth stellt Passkeys, TOTP als zweiten Faktor und Wiederherstellungscodes bereit \[T10, T119, T120\], Turnstile schützt Registrierung und Anmeldung \[T74\]. Native Clients nutzen App-Passwörter; die Kopplung von Stalwart an die workly-Identität über OIDC klärt Phase 0 \[T102\]. Von den vier Rollen Owner, Admin, Mitglied und Gast sieht keine fremde Postfächer oder Fokusdaten, und Infrastrukturzugriff läuft nur über Access.

**Audit-Log.** Eine nur anhängbare Tabelle mit Hash-Kette protokolliert Anmeldung, Faktorwechsel, Rollenänderung, Export, Löschung, Admin-Zugriff und KI-Aktion; eine tägliche Kopie landet in einem Bucket mit Object Lock \[T54\].

**Sicherungen und Wiederanlauf.** Die Sicherung folgt der 3-2-1-Regel: Produktion mit synchroner Replik in Falkenstein, ein pgBackRest-Repository mit WAL-Archiv und Objektreplikation nach Nürnberg, dazu verschlüsselte Datenbanksicherungen in R2 mit Jurisdiktion `eu` und Dateikopien in einer Storage Box mit Snapshots \[T121\]. Die Storage Box ist in Deutschland oder Finnland wählbar \[T121\]; workly wählt Deutschland. Ein Workflow stellt monatlich auf einem Wegwerf-Server wieder her und prüft Prüfsummen.

| Szenario | Datenverlust höchstens (RPO) | Wiederanlauf (RTO) |
| --- | --- | --- |
| Ausfall eines Datenbankknotens | 0, synchrone Replik | 5 Minuten über Patroni \[T96\] |
| Ausfall eines Stalwart-Knotens | 0 | 5 Minuten über Health Check am Load Balancer \[T98\] |
| Verlust des Standorts Falkenstein | 5 Minuten Datenbank, 15 Minuten Dateien | 4 Stunden |
| Logischer Fehler, Ransomware | Wiederherstellung auf Zeitpunkt, Versionierung, Object Lock | 8 Stunden |
| Störung bei Cloudflare | 0 | Web-App aus; IMAP und SMTP laufen weiter |
| Verlust des Hetzner-Kontos | 24 Stunden | 72 Stunden, Neuaufbau aus Infrastruktur als Code |

**Auftragsverarbeitung und Drittlandübermittlung.** Hetzner bietet den Vertrag zur Auftragsverarbeitung online ohne Unterschrift an \[T122\] und ist nach ISO/IEC 27001 zertifiziert \[T132\]. Cloudflares Datenverarbeitungsvertrag in Version 6.4 vom 03.04.2026 enthält Standardvertragsklauseln, eine Klausel zum Data Privacy Framework und 30 Tage Vorankündigung neuer Unterauftragsverarbeiter \[T123\]; Cloudflare ist nach dem Data Privacy Framework zertifiziert \[T125\]. Anthropics Zusatz vom 24.02.2025 gehört zu den Commercial Terms, enthält Standardvertragsklauseln und 15 Tage Widerspruchsfrist \[T124\]; Anthropics Datenschutzerklärung nennt Standardvertragsklauseln, kein Data Privacy Framework \[T126\]. Das EuG bestätigte das Data Privacy Framework am 03.09.2025, das Rechtsmittel C-703/25 P ist anhängig \[T127, T128\]; laut einer Sekundärquelle fehlt dem PCLOB seit dem 27.01.2025 das Quorum \[T129\]. Daraus folgen eine Transfer-Folgenabschätzung je US-Anbieter, Standardvertragsklauseln als Rückfall sowie Speicherung in Deutschland, Minimierung, Pseudonymisierung und Verschlüsselung. Der Vertrag mit AWS für Bedrock ist ungeprüft; alle Einordnungen dieses Absatzes sind juristisch zu prüfen.

**Aufbewahrung bei Anthropic.** Die Dokumentationsseite zur Datenaufbewahrung sagt, Prompts und Ausgaben würden standardmäßig nicht aufbewahrt, außer bei „Covered Models“, die 30 Tage verlangen; markierte Inhalte kann Anthropic unabhängig von jeder Vereinbarung bis zu zwei Jahre halten \[P11\]. Das Privacy Center, auf das der Technikbericht verweist, nennt Löschung binnen 30 Tagen \[T130\]. Zero Data Retention gibt es auf Antrag; Batch-Aufträge sind davon ausgenommen und werden 29 Tage gespeichert, und die Fable- und Mythos-Modelle verlangen 30 Tage Aufbewahrung und bleiben ausgeschlossen \[T131\]. Bis zur Klärung plant workly mit bis zu 30 Tagen.

**Datenstandorte.** Postfächer, Termine und Dateien sowie die Datenbank mit Aufgaben, Dokumenten und Verknüpfungen ruhen bei Hetzner in Deutschland \[T122, T54\]. Durable Objects, D1 und R2 halten Live-Zustand, Website-Inhalte und verschlüsselte Sicherungen in der EU \[T2, T3, T4\], KV speichert Konfiguration in der EU und cacht sie weltweit \[T59\], Workers und AI Gateway verarbeiten am jeweiligen Cloudflare-Standort \[T62\], und Vectorize und Workers AI erhalten nur öffentliche Inhalte, mit denen Cloudflare nicht trainiert \[T133\]. Für Queues, Analytics Engine, Email Service und Logs, die nur Kennungen, Zähler, Systemmails und Metadaten führen, ist der Ort ungeprüft. Die Claude-API verarbeitet „global“ oder „us“ \[T47\], Bedrock mit EU-Profil in EU-Regionen \[T48\]. Die Spalte „Ort“ im Abschnitt Dienste im Detail ordnet jeden Dienst zu.

**Weitere Pflichten.** Eine Datenschutz-Folgenabschätzung nach Art. 35 DSGVO deckt KI-Funktionen sowie Fokus und Wohlbefinden ab \[P2\]. Die Seitenleiste kennzeichnet das KI-System nach Art. 50 Abs. 1 KI-VO \[P3\]. Team-Kunden erhalten Unterlagen für die Mitbestimmung nach § 87 Abs. 1 Nr. 6 BetrVG \[P6, P7\]. Ob workly geschäftliche Mails nach handels- und steuerrechtlichen Pflichten archivieren muss, ist juristisch zu prüfen. Barrierefreiheit folgt WCAG 2.2, Stufe AA \[P9\].

**Widersprüche in den Vorlagen.** Das Versprechen „Daten in Deutschland“ des Decks hält nur für ruhende Inhalte bei Hetzner, wie der Absatz Datenstandorte zeigt. Das Produktkonzept zieht daraus die Formulierung „Deine Inhalte werden in Deutschland gespeichert“ und die Offenlegung aller Unterauftragsverarbeiter. Dieses Konzept übernimmt die Offenlegung und verwendet nach außen die genauere Formulierung des Brandbooks: „Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen.“ Die beiden Anthropic-Seiten zur Aufbewahrung widersprechen sich; die Klärung gehört vor den Start der geschlossenen Beta.

## Entwicklung und Betrieb

workly entsteht in einem TypeScript-Monorepo, das GitHub Actions über Wrangler zu Cloudflare und über Terraform und Ansible zu Hetzner ausrollt. Claude Code schreibt Pull Requests gegen Issues mit Akzeptanzkriterien, ein Mensch prüft jeden davon, und Repositories der Infrastruktur laufen im manuellen Modus.

| Ebene | Wahl | Begründung | Alternative |
| --- | --- | --- | --- |
| Sprache | TypeScript in Workers und Hetzner-Diensten | Ein Typsystem vom Schema bis zur Oberfläche | Rust nur für Stalwart-Erweiterungen |
| Frontend | React Router v8 mit Cloudflare-Vite-Plugin | Serverrendering im Workers-Runtime, Bindings in Loadern; Basis React 19 und Vite 7 \[T19, T134\] | TanStack Start, SvelteKit \[T135\] |
| API | Hono | Web-Standards, typisierter RPC-Client \[T8\] | Workers-RPC |
| Datenzugriff | Drizzle | Postgres über Hyperdrive, D1 und SQLite in Durable Objects; Migrationen mit Drizzle Kit \[T136, T9\] | Kysely (ungeprüft) |
| Anmeldung | Better Auth 1.7.7 (MIT) | Passkeys, zweiter Faktor, Organisationen \[T10\] | SimpleWebAuthn mit Eigenbau |
| Editor | Tiptap (MIT) mit Yjs und y-partyserver | Zusammenarbeit auf eigener Infrastruktur \[T137, T138\] | Hocuspocus; Tiptap Platform ab 49 USD im Monat |
| Tests | Vitest mit Workers-Integration; Ende-zu-Ende mit Playwright (ungeprüft) | Tests im Workers-Runtime mit Bindings \[T139\] | Miniflare direkt |
| Monorepo | pnpm-Workspaces | Protokoll `workspace:`, eine Lock-Datei \[T140\] | npm-Workspaces |

```text
workly/
├── apps/
│   ├── web/          React Router v8, Static Assets
│   ├── api/          Hono, Better Auth, JMAP-Proxy
│   ├── realtime/     DocRoom, UserHub (Durable Objects)
│   ├── agent/        Agents SDK, Werkzeuge, Kontingente
│   ├── jobs/         Queue-Consumer, Workflows, Cron
│   ├── mail-edge/    Email Workers für Systempostfächer
│   └── sites/        Website-Add-on (D1 je Website)
├── services/         Hetzner: indexer, scanner
├── packages/
│   ├── db/           Drizzle-Schemas, Migrationen
│   ├── domain/       Regeln, Rechte, Zod-Schemas
│   ├── jmap/         typisierter JMAP-Client
│   ├── ai/           Prompts, Werkzeugdefinitionen, Minimierung
│   ├── editor/       Tiptap-Erweiterungen
│   └── ui/           Designsystem workly
├── infra/
│   ├── terraform/    hcloud, cloudflare, Umgebungen
│   └── ansible/      dedizierte Server, Stalwart
├── .github/workflows/
├── CLAUDE.md
└── REVIEW.md
```

**Umgebungen und Infrastruktur.** Lokal laufen `wrangler dev` und Container für Postgres und Stalwart; jeder Pull Request erhält eine Vorschau-Umgebung gegen Staging-Backends mit synthetischen Daten \[T141\]; Staging hat eigenes Hetzner-Projekt und eigene Cloudflare-Zone; Produktion ist nur über CI und Access erreichbar. Terraform verwaltet mit dem Provider `hetznercloud/hcloud` 1.69.0 vom 11.09.2026 Server, Netze, Firewalls, Load Balancer und Reverse-DNS \[T142\] und mit `cloudflare/cloudflare` 5.26.0 vom 26.09.2026 DNS, WAF, Access, Tunnel, R2, D1, KV und Queues \[T143\]; Wrangler rollt Worker-Code und Bindings aus. Cloud-Firewalls und private Netze kosten bei Hetzner nichts, ein vSwitch verbindet das Cloud-Netz mit den dedizierten Servern \[T144, T145\]; diese bestellt das Team einmalig und konfiguriert sie per Ansible (ungeprüft).

**CI/CD.** Jeder Pull Request durchläuft Lint, Typprüfung, Vitest, Migrationsprüfung, `terraform plan` und ein Review durch Claude. Nach dem Merge rollt `cloudflare/wrangler-action@v4` nach Staging aus \[T146\]; in Produktion geht eine neue Worker-Version erst nach Freigabe durch eine zweite Person, zurückgerollt wird per Versionswechsel. Stalwart veröffentlicht etwa wöchentlich, zuletzt v0.16.24 am 27.09.2026 \[T147\]; Updates gehen erst nach Tests in Staging live.

**Monitoring.** Workers Logs bewahren 7 Tage auf \[T83\], Traces gehen per OpenTelemetry hinaus und kosten seit dem 01.10.2026 \[T84\]. Logpush schreibt in einen Bucket bei Hetzner, weil es nicht in R2-Buckets mit Jurisdiktion schreiben kann \[T4, T85\]; ob Hetzner als Ziel funktioniert, ist ungeprüft. Die Dienstgüteziele lauten API 99,9 % Verfügbarkeit bei p95 unter 300 ms und Annahme von Mails 99,95 %; Alarme lösen Spamrate, Rückstau in Queues und Replikationsverzug aus.

**Rolle von Claude Code.** Jede Aufgabe beginnt als Issue mit Akzeptanzkriterien. Claude Code arbeitet lokal oder über `@claude` in GitHub Actions auf einem Branch \[T148\] und liefert einen Pull Request mit Tests. `CLAUDE.md` hält die Architekturregeln fest: Workspace-ID überall, keine Inhalte in Logs, Durable Objects nur mit `eu`, keine Covered Models. Repositories der Infrastruktur laufen im manuellen Modus, Bash in der Sandbox \[T149\]; Produktionsdaten und Secrets gelangen nie in Prompts, ausgerollt wird nur über CI. Ein Mensch prüft jeden Pull Request, unterstützt von `/code-review` oder dem verwalteten Code Review, das für Team und Enterprise als Research Preview im Mittel 15 bis 25 USD je Review kostet und nicht mit Zero Data Retention läuft \[T150\]; `REVIEW.md` enthält Prüfregeln für Mandantenfilter, Autorisierung und Migrationen. Ein Premium-Sitz im Team-Tarif kostet 100 USD im Monat bei jährlicher Zahlung, Claude Code inklusive \[T151\]; die API-Nutzung liegt in Unternehmen im Mittel bei 150 bis 250 USD je Entwickler und Monat \[T152\]. Das Claude Agent SDK \[T153\] dient nur interner Automatisierung, MCP-Server \[T154\] binden Ticketsystem und Staging-Datenbank an.

**Widersprüche in den Vorlagen.** Das Produktkonzept stellt fest, dass der Effekt von Claude Code in der Entwicklung unbeziffert ist; der Technikbericht plant das MVP mit vier Entwicklerinnen und Entwicklern und Claude Code in fünf Monaten, ohne Kapazitätsrechnung. Der Zeitplan ist also eine Setzung, keine Ableitung; Phase 0 sollte ihn mit einer Schätzung je Funktion und einem gemessenen Durchsatz aus den Spikes prüfen. Zudem schließt das verwaltete Code Review Zero Data Retention aus \[T150\]. Beantragt workly Zero Data Retention für das Produkt, gehören Entwicklung und Produkt in getrennte Organisationen oder Workspaces bei Anthropic.

## Kosten für 1.000 und 10.000 Nutzer

Bei 1.000 aktiven Nutzern kostet der Betrieb laut Technikbericht 2.706,92 € im Monat (2,71 € je Nutzer), bei 10.000 Nutzern 20.790,17 € (2,08 € je Nutzer); Claude trägt davon 60 % bzw. 78 %. Rechnet man die KI-Kosten aber aus den Kontingenten je Tarif, verfehlt der Pro-Tarif die Zielmarke von 10 % des Nettopreises schon bei 40 % Auslastung, und kostenlose Konten belasten jedes zahlende Konto bei 5 % Konversion mit 1 bis 9 € im Monat.

**Laufkosten nach Technikbericht.** Der Bericht unterstellt aktive Nutzer mit mindestens einer Sitzung im Monat aus allen Tarifen, 240 KI-Anfragen je Nutzer und Monat, 5 GB Daten je Nutzer, doppelt gespeichert, Hetzner-Preise nach der Anpassung vom 15.06.2026 und den EZB-Kurs vom 02.10.2026, 1 EUR = 1,1225 USD \[T159, T155, T160\]; alle Beträge ohne Umsatzsteuer.

| Posten | 1.000 aktive Nutzer | 10.000 aktive Nutzer | Zusammensetzung |
| --- | --- | --- | --- |
| Cloudflare | 60,87 € | 465,04 € | Workers, Durable Objects, Queues, R2, Pro-Plan \[T18, T110, T56, T77, T69, T61\] |
| Hetzner | 545,98 € | 2.350,15 € | Dedizierte und Cloud-Server, Load Balancer, 10 bzw. 100 TB Object Storage, Storage Boxen \[T155, T156, T157, T158, T161\] |
| Claude über die Anthropic-API | 1.614,47 € | 16.144,68 € | 240 Anfragen je Nutzer zu 0,00755 USD \[T43, T114\] |
| Mail-Zustellung | 129,25 € | 1.117,61 € | Stalwart Enterprise je Postfach, Email Service je 1.000 Mails \[T162, T34\] |
| Sonstiges | 356,35 € | 712,69 € | Claude Code, 4 bzw. 8 Premium-Sitze zu 100 USD \[T151\] |
| **Summe je Monat** | **2.706,92 €** | **20.790,17 €** |  |
| **Je Nutzer und Monat** | **2,71 €** | **2,08 €** |  |
| Variante Claude über Bedrock EU (+10 % auf Claude) | 2.868,37 €, 2,87 € je Nutzer | 22.404,64 €, 2,24 € je Nutzer | Gleiche Basispreise wie bei Anthropic angenommen (ungeprüft) \[T48\] |

Hinzu kommen einmalige Einrichtungsgebühren für dedizierte Server von 98 € bzw. 501 € \[T159\]. Nicht enthalten sind Personal, Zahlungsabwicklung, Support-Werkzeuge, Penetrationstest und Rechtsberatung.

**Stückkosten der KI.** Die Nachrechnung mit Python bestätigt den Wert des Technikberichts. Mit den Listenpreisen je Mio. Token (Sonnet 5.5 2 und 10 USD, Haiku 4.5 1 und 5 USD, Opus 5.5 4 und 20 USD für Ein- und Ausgabe, Cache-Treffer 10 % bzw. 5 % des Eingabepreises) \[T114\] kostet eine Standardanfrage mit 3.000 Eingabe-Token, davon 1.500 Präfix, und 400 Ausgabe-Token auf Haiku 0,00500 USD und auf Sonnet mit 80 % Cache-Treffern 0,00799 USD, eine Opus-Anfrage mit 12.000 und 1.600 Token 0,07574 USD; der Mix ergibt 0,00755 USD. Das Produktkonzept rechnet eine Assistent-Anfrage mit 4.000 und 600 Token auf Sonnet zu 0,014 USD und einen automatischen Vorschlag mit 1.500 und 150 Token auf Haiku zu 0,00225 USD.

**KI-Kosten je Tarif.** Die Tabelle rechnet beide Stückkosten auf die Kontingente um: Free 20, Privat 75, Pro und Team je 150 Assistent-Anfragen und bis zu 550 automatische Vorschläge (25 Mails an 22 Arbeitstagen, Annahme des Produktkonzepts). Die Spalten „40 %“ unterstellen, dass Nutzer im Mittel 40 % ihres Kontingents ausschöpfen (Annahme). Bezugsgröße ist der Nettopreis bei jährlicher Zahlung; mit dem höheren Monatspreis sinken die Anteile um 13 bis 17 %.

| Tarif und Nettopreis | Stückkosten | KI-Kosten bei vollem Kontingent | Anteil am Nettopreis | KI-Kosten bei 40 % | Anteil am Nettopreis |
| --- | --- | --- | --- | --- | --- |
| Free, 0 € | Technikbericht | 0,13 € | – | 0,05 € | – |
| Free, 0 € | Produktkonzept | 0,25 € | – | 0,10 € | – |
| Privat, 5 € | Technikbericht | 0,50 € | 10,1 % | 0,20 € | 4,0 % |
| Privat, 5 € | Produktkonzept | 0,94 € | 18,7 % | 0,37 € | 7,5 % |
| Pro, 10 € | Technikbericht | 4,71 € | 47,1 % | 1,88 € | 18,8 % |
| Pro, 10 € | Produktkonzept | 2,97 € | 29,7 % | 1,19 € | 11,9 % |
| Team, 13 €, Anthropic-API | Technikbericht | 4,71 € | 36,2 % | 1,88 € | 14,5 % |
| Team, 13 €, Anthropic-API | Produktkonzept | 2,97 € | 22,9 % | 1,19 € | 9,1 % |
| Team, 13 €, Bedrock EU (+10 %) | Technikbericht | 5,18 € | 39,8 % | 2,07 € | 15,9 % |
| Team, 13 €, Bedrock EU (+10 %) | Produktkonzept | 3,27 € | 25,2 % | 1,31 € | 10,1 % |

**Prüfung gegen die Kennzahl.** Die Zielmarke „KI-Kosten höchstens 10 % des Nettopreises im Mittel“ halten bei 40 % Auslastung nur Privat und, mit den Stückkosten des Produktkonzepts, Team über die Anthropic-API. Pro verfehlt sie mit 11,9 % bzw. 18,8 %; er erreicht 10 % erst, wenn Nutzer höchstens 33,6 % (Produktkonzept) bzw. 21,2 % (Technikbericht) ihres Kontingents nutzen. Team auf Bedrock liegt mit 10,1 % knapp darüber. Die Stückkosten des Technikberichts bewerten automatische Vorschläge mit dem Mischpreis statt mit dem Haiku-Preis und überzeichnen Pro deshalb; für Assistent-Anfragen sind sie realistischer, weil sie Caching und Haiku-Anteile enthalten.

**Deckungsbeiträge.** Deckungsbeitrag je Nutzer und Monat = Nettopreis bei jährlicher Zahlung − KI-Kosten bei 40 % (Stückkosten des Produktkonzepts, Team über Bedrock EU) − anteilige Betriebskosten. Diese ergeben sich aus Cloudflare, Hetzner und Mail-Zustellung je aktivem Nutzer: 736,10 € ÷ 1.000 = 0,74 € und 3.932,80 € ÷ 10.000 = 0,39 €. Die Sitze für Claude Code sind Entwicklungsaufwand und bleiben als Fixkosten außen vor.

| Tarif | Nettopreis | KI-Kosten bei 40 % | Betrieb bei 1.000 Nutzern | Deckungsbeitrag bei 1.000 | Betrieb bei 10.000 Nutzern | Deckungsbeitrag bei 10.000 |
| --- | --- | --- | --- | --- | --- | --- |
| Free | 0,00 € | 0,10 € | 0,74 € | −0,84 € | 0,39 € | −0,49 € |
| Privat | 5,00 € | 0,37 € | 0,74 € | 3,89 € (77,8 %) | 0,39 € | 4,23 € (84,7 %) |
| Pro | 10,00 € | 1,19 € | 0,74 € | 8,07 € (80,7 %) | 0,39 € | 8,42 € (84,2 %) |
| Team | 13,00 € | 1,31 € | 0,74 € | 10,96 € (84,3 %) | 0,39 € | 11,30 € (86,9 %) |

Mit den Stückkosten des Technikberichts sinkt der Deckungsbeitrag von Pro bei 1.000 Nutzern auf 7,38 € (73,8 %). Die Umlage nach Köpfen vereinfacht: Hetzner-Server sind sprungfixe Kosten, und ein voll genutztes Pro-Konto mit 200 GB kostet doppelt gespeichert zu rund 6,35 € je TB und Monat \[T54\] allein 2,54 € Speicher, ein volles Privat-Konto 0,64 €. Zahlungsabwicklung und Support fehlen in allen Zeilen.

**Hebel.** Die Tabelle zeigt die Wirkung einzelner Maßnahmen auf die KI-Kosten von Pro bei 40 % Auslastung mit den Stückkosten des Produktkonzepts; die Größe jedes Hebels ist eine Annahme.

| Hebel | Annahme | KI-Kosten Pro | Anteil am Nettopreis |
| --- | --- | --- | --- |
| Ausgangslage | Assistent auf Sonnet 5.5, Vorschläge auf Haiku 4.5 | 1,19 € | 11,9 % |
| Vorfilter für Newsletter und Benachrichtigungen | halbiert die automatischen Vorschläge | 0,97 € | 9,7 % |
| Prompt Caching | 1.500 Token statischer Präfix, 80 % Cache-Treffer | 1,08 € | 10,8 % |
| Haiku-Routing | Hälfte der Assistent-Anfragen auf Haiku 4.5 | 1,00 € | 10,0 % |
| Kleineres Kontingent | Vorschläge aus höchstens 15 statt 25 Mails je Tag | 1,01 € | 10,1 % |
| Vorfilter, Caching und Routing zusammen | wie oben | 0,73 € | 7,3 % |

Die drei Hebel zusammen senken die KI-Kosten um 39 % und bringen Pro bei 40 % Auslastung unter die Zielmarke; bei vollem Kontingent bleiben 1,82 € oder 18,2 %. Batch-Verarbeitung halbiert nur die Kosten von Hintergrundläufen wie dem Wochenrückblick, die kaum zählen, speichert Aufträge aber 29 Tage \[T131\] und fehlt auf Bedrock \[T48\]. Caching wirkt nur auf Sonnet und Opus, weil Haiku 4.5 erst Präfixe ab 4.096 Token zwischenspeichert \[T112\]. Daraus folgen vier Festlegungen: Vorfilter vor jedem automatischen Vorschlag, Haiku als Standard für Klassifikation und kurze Entwürfe, harte Kontingente mit Zusatzpaketen und ein statischer Präfix für alle Sonnet-Aufrufe.

**Einfluss kostenloser Konten.** Bei einer Konversion von 5 % kommen auf jedes zahlende Konto 19 kostenlose. Die Tabelle rechnet ihre Kosten auf das zahlende Konto um und setzt sie ins Verhältnis zu einem mittleren Nettoerlös von 10 € je Zahlendem, wie ihn das Szenario des Produktkonzepts annimmt.

| Kostenbasis je Free-Konto | Kosten je Free-Konto und Monat | Last je zahlendem Konto | Anteil an 10 € Nettoerlös |
| --- | --- | --- | --- |
| Nur KI, Stückkosten Technikbericht, 40 % | 0,05 € | 1,02 € | 10,2 % |
| Nur KI, Stückkosten Produktkonzept, 40 % | 0,10 € | 1,90 € | 19,0 % |
| Nur KI, Stückkosten Produktkonzept, volles Kontingent | 0,25 € | 4,74 € | 47,4 % |
| KI (Produktkonzept, 40 %) plus Betrieb bei 10.000 Nutzern | 0,49 € | 9,37 € | 93,7 % |

Die letzte Zeile ist eine Obergrenze, weil ein Free-Konto weder eigenes Postfach noch mehr als 2 GB hat. Schon die KI-Kosten kostenloser Konten reißen die Zielmarke von 10 %, bevor ein zahlendes Konto eine eigene Anfrage stellt; damit kostenlose Konten höchstens 10 % des Erlöses binden, dürfte ein Free-Konto im Mittel nur 0,05 € im Monat kosten. Der Free-Tarif braucht deshalb eine eigene Entscheidung: KI nur auf Haiku mit kleinerem Kontingent oder erst ab Privat, wie der Technikbericht als Alternative nennt, Archivierung inaktiver Konten und Verbuchung der Restkosten als Akquisitionsaufwand.

**Modellrisiko.** Übernimmt Sonnet 5.5 nach einer Abschaltung von Haiku 4.5 \[T163\] dessen Anfragen, steigen die KI-Kosten im Mix des Technikberichts um 23,8 %; mit den Stückkosten des Produktkonzepts kostet ein voll genutztes Pro-Konto 4,08 € statt 2,97 € (+37 %), 40,8 % des Nettopreises.

**Widersprüche in den Vorlagen.** Der Technikbericht rechnet mit 240 Anfragen je Nutzer, dem Zwölffachen des Free- und dem 3,2-Fachen des Privat-Kontingents, aber nur gut einem Drittel der 700 Aufrufe, die ein Pro-Konto auslösen darf; seine 2,71 € je Nutzer sind für Free und Privat zu hoch und für intensiv genutzte Pro-Konten zu niedrig. Das Produktkonzept rechnet mit 1,10 USD je Euro, dieses Konzept mit dem EZB-Kurs. Die Speicherannahme von 5 GB je Nutzer passt nicht zu Kontingenten von 50 und 200 GB. Was ohne Kontingent droht, zeigt der Marktbericht: 50 Sonnet-Anfragen je Arbeitstag kosten mit regionalem Aufschlag rund 16,17 USD oder 14,41 € im Monat, mehr als jeder geplante Nettopreis bei jährlicher Zahlung.

## Umsetzungsfahrplan

workly öffnet die Registrierung im September 2027, nach drei Monaten Validierung und technischen Grundlagen, fünf Monaten Bau des MVP mit geschlossener Alpha und drei Monaten geschlossener Beta. Teams folgen ab Q4 2027, Website, mobile Apps und die Bearbeitung von Office-Dateien 2028.

&#91;embedded content: Fahrplan Oktober 2026 bis Dezember 2028 · vier Phasen, zwei Ausbaustufen, ein Risikodatum\]

Jede Phase endet mit einer Abnahme; erst wenn ihre Kriterien erfüllt sind, beginnt die nächste.

| Phase | Inhalt | Abnahme Technik | Erfolgskriterium Produkt | Team |
| --- | --- | --- | --- | --- |
| 0 Validierung und Grundlagen | 25 Interviews, Klick-Prototyp, Preisinterviews A gegen B, Warteliste, Markenprüfung; Hetzner-Konto mit Antrag auf Port 25, Terraform für Staging, Stalwart-Prototyp; Spikes zu PartyServer, CORS, Row-Level Security, Bedrock EU und verbundenem Postfach; Verträge zur Auftragsverarbeitung | Staging entsteht per `terraform apply` und `wrangler deploy` in unter 60 Minuten; Testmail an Gmail besteht SPF, DKIM und DMARC; Wiederherstellung aus pgBackRest gelingt; Spike-Ergebnisse dokumentiert | 15 von 25 Befragten zählen den Wechsel zwischen Mail, Kalender und Aufgaben zu ihren drei größten Ärgernissen; Pro-Preis zwischen 10 € und 15 € bestätigt; 300 Wartelisten-Einträge aus dem Primärsegment | Tech Lead, Full-Stack, Infrastruktur und Mail, Design (50 %), Datenschutz extern |
| 1 MVP und geschlossene Alpha | Module des MVP laut Abschnitt Produktmodule, KI-Fälle 1, 3 und 4 (Ziel: 1 bis 6 und 8) mit Kontingenten; Alpha mit 20 Personen über 4 Wochen | 20 Kernabläufe als Ende-zu-Ende-Tests grün; p95 der API unter 300 ms; Lasttest mit 1.000 simulierten Nutzern; Entwurf der Datenschutz-Folgenabschätzung | 12 von 20 Alpha-Nutzern an mindestens 4 Werktagen je Woche aktiv; kein Datenverlust; 95 % der Importe ohne Hilfe; Testmails erreichen bei großen Anbietern den Posteingang | 4 Entwickler, Design, Product Owner; Claude Code für alle |
| 2 Geschlossene Beta | 200 bis 500 Nutzer (Ziel 300) mit Beta-Preis, semantische Suche, Notfallübung, externer Penetrationstest, Beginn der Google-Verifizierung | Verfügbarkeit ≥ 99,5 % über 30 Tage; Spamrate unter 0,3 %; keine offenen kritischen Funde aus dem Pentest; RPO und RTO in der Übung erreicht; Lasttest mit 10.000 Nutzern und Wechsel nach Nürnberg in höchstens 4 Stunden geübt | Aktivierung ≥ 40 %, Bindung ≥ 35 %, 50 Zahlende, Übernahmequote KI ≥ 50 % | wie Phase 1, dazu Support |
| 3 Start | Öffentliche Registrierung, Tarife Free, Privat und Pro, Statusseite, Kostenbericht je Workspace | Dokumentation nach DSGVO vollständig | Nach drei Monaten Konversion ≥ 5 %, Kündigungsquote ≤ 3 %, Rohertragsmarge ≥ 75 % | dazu SRE mit Rufbereitschaft |
| Ausbau 1 | Team-Tarif mit Bedrock EU, Gäste, Buchungsseite, Wochenrückblick, Visitenkarte, Domain-Add-on, geführte Umzüge, KI-Fälle 7, 9, 10 | Abnahme je Funktion: Tests, Last, Nachtrag zur Folgenabschätzung | Nach sechs Monaten ≥ 20 % des Umsatzes aus dem Team-Tarif | dazu Mobile und Data Engineering |
| Ausbau 2 | Website-Add-on, native mobile Apps, Bearbeitung von Office-Dateien (Entscheidung offen), Team-Kennzahlen nach Rechtsprüfung, Schnittstelle, Single Sign-on | wie Ausbau 1 | Add-ons ≥ 10 % des Umsatzes | – |

**Kritischer Pfad.** Drei Punkte liegen in den ersten Wochen. Die Zusage, Haiku 4.5 nicht vor dem 15.10.2026 abzuschalten, läuft in zwölf Tagen aus; danach ist eine Abschaltung möglich, bei den Vorgängern lag sie rund zwei Monate nach der Abkündigung, und die KI-Planung braucht ein Ersatzmodell \[T163\]. Den Antrag auf Freischaltung von Port 25 nimmt Hetzner frühestens einen Monat nach der ersten bezahlten Rechnung an \[T103\]; das Konto muss deshalb im Oktober 2026 eröffnet werden, sonst rückt die erste Zustellprüfung an Gmail aus Phase 0 heraus. Und die Markenprüfung für „workly“ muss vor jeder öffentlichen Warteliste stehen, weil der Name marken- und domainrechtlich ungeprüft ist.

**Widersprüche in den Vorlagen.** Der verbindliche Fahrplan folgt der Bauanleitung des Designsystems; Produktkonzept und Technikbericht weichen in vier Punkten ab. Erstens legt das Produktkonzept die Alpha in Q1 und die Beta in Q2 2027; nach dem Fahrplan läuft die Alpha am Ende von Phase 1 bis Mai und die Beta von Juni bis August, beides rund zwei Monate später. Zweitens sieht der Technikbericht für den Start zwei Monate vor, der Fahrplan nur den September 2027. Lasttest mit 10.000 Nutzern und Wechselübung nach Nürnberg rücken deshalb in die Beta, wie die Tabelle zeigt; gelingen sie dort nicht, verschiebt sich der Start in den Oktober. Drittens nennt der Technikbericht für den Start „Tarife Free bis Team“ und das Domain-Add-on; beides kommt nach Produktkonzept und Fahrplan erst mit Ausbau 1. Viertens plant der Technikbericht nur sechs Wochen für Phase 0, der Fahrplan drei Monate; die zusätzliche Zeit nehmen die Interviews, der Preistest und der Entwurf des verbundenen Postfachs auf. Seine Ausbauphase von 6 bis 12 Monaten verteilt dieses Konzept auf Ausbau 1 und 2 und streicht die Videocalls.

## Risiken und offene Fragen

Die größten Risiken liegen in der Zustellbarkeit der Mails, in den KI-Kosten je Tarif, im Abstand zwischen dem pauschalen Versprechen „Daten in Deutschland“ aus dem Deck und den tatsächlichen Datenflüssen und in einem Team, dessen Finanzierung kein Bericht abdeckt; die Tabelle ordnet sie nach ihrer Wirkung auf den Start.

| Risiko | Wirkung | Gegenmaßnahme | Ausweichpfad |
| --- | --- | --- | --- |
| Port 25 bleibt gesperrt, oder neue IP-Adressen haben schlechte Reputation | Mails landen im Spam oder gar nicht; Missbrauch einzelner Konten trifft alle | Antrag früh stellen \[T103\], Aufwärmplan, getrennte IP-Pools für Free und bezahlte Tarife, Postmaster-Monitoring nach den Vorgaben von Google \[T104\]; kein Gratis-Postfach | Relay über Port 587 (außerhalb der vorgegebenen Mittel); Email Service als Relay (Bedingungen ungeprüft); Mailbetrieb über einen erfahrenen Anbieter, etwa das E-Mail-Hosting von Mein-Hartmann \[P16\] |
| KI-Kosten über Plan | Pro verfehlt die Zielmarke von 10 % schon bei 40 % Auslastung; kostenlose Konten binden 10 bis 94 % des Erlöses je Zahlendem | Vorfilter, Haiku-Routing, Caching, harte Kontingente, Zählung vor dem Aufruf | KI im Free-Tarif nur auf Haiku oder erst ab Privat |
| Abschaltung von Haiku 4.5 (frühestens 15.10.2026) | KI-Kosten +24 % im Mix des Technikberichts, +37 % für ein volles Pro-Konto | Evaluationen je Fall, Rückfallmodell im AI Gateway, Kontingente mit Puffer \[T163, T44\] | Modellwechsel über Bedrock \[T48\] |
| Versprechen „Daten in Deutschland“ | Gilt nur für ruhende Inhalte; Edge, Konfigurations-Cache und KI verarbeiten anderswo | Formulierung des Brandbooks („Postfächer, Termine und Dateien liegen in Rechenzentren in Deutschland; KI-Anfragen und die Auslieferung über Cloudflare sind davon ausgenommen“), Liste der Unterauftragsverarbeiter, KI nur nach Opt-in, Team ab Ausbau 1 über Bedrock EU | Data Localization Suite, nur Enterprise \[T95, P14\] |
| Data Privacy Framework fällt (C-703/25 P) | Übermittlungen an Cloudflare, Anthropic und AWS angreifbar | Standardvertragsklauseln und Transfer-Folgenabschätzung vorhalten, Minimierung, Verschlüsselung \[T127, T128\] | Bedrock-EU-Profil; KI je Workspace abschaltbar |
| Stalwart vor Version 1.0, Mandantenfähigkeit nur in der Enterprise-Ausgabe | Fehler, Lizenzabhängigkeit | Tests in Staging je Release \[T147\], Premium-Support ab 150 Postfächern \[T162\] | mailcow \[T30\]; Postfix, Dovecot, Rspamd |
| Dienste im Beta-Status (Email Service, Workers VPC, Secrets Store); PartyServer mit Jurisdiktion | Änderungen, Ausfälle, verzögerte Echtzeit-Dokumente | Je Dienst ein erprobter Ausweichpfad; Spikes in Phase 0 | Versand über Stalwart, Tunnel mit Access, Wrangler-Secrets, Hocuspocus \[T41\] |
| Preise und Verfügbarkeit bei Hetzner | Budget und Skalierung unsicher; CCX13 stieg am 15.06.2026 von 19,03 € auf 51,16 € brutto, Cost-Optimized-Typen waren am 02.10.2026 nicht verfügbar | Dedizierte Server, Kapazitätsreserve, Infrastruktur als Code \[T159, T164\] | Zweiter Anbieter für Rechenleistung |
| Mobile Nutzung ohne native App bis 2028 | Ohne App entsteht keine Tagesgewohnheit | Web-App für Mobilgeräte, IMAP, CalDAV und CardDAV in den Geräte-Apps | Apps vorziehen, wenn die Beta schwache Bindung auf Mobilgeräten zeigt |
| Wechselbarriere | Mail zieht niemand gern um; geführte Umzüge brauchen eine Verifizierung mit CASA-Bewertung \[P15\] | Verbundenes Postfach, IMAP-Import, Export jederzeit | Umzug per Standardprotokollen |
| Wettbewerb und Marke | Suiten bauen KI und Standortzusagen aus \[M5\]; „workly“ ist marken- und domainrechtlich ungeprüft | Primärsegment und Integration als Unterschied; Markenprüfung in Phase 0 | Namenswechsel vor dem Start |
| Umfang gegen Teamgröße | Vier Kernanwendungen für vier Entwickler; der Effekt von Claude Code ist unbeziffert | Tiefe begrenzen, Standards nutzen, Kapazität in Phase 0 messen | Umfang des MVP kürzen, nicht den Start verschieben |
| Finanzierung und Personal | Kein Bericht beziffert Personalkosten; der Fahrplan setzt ab Januar 2027 mindestens sechs Personen voraus | Finanzplan von unten mit Ertragsteuern vor Ende von Phase 0 | Kleineres Team mit längerem Phase-1-Zeitraum |
| Mitbestimmung bei Team-Kunden | Ohne Betriebsvereinbarung verzögert sich die Einführung bei Kunden mit Betriebsrat \[P6, P7\] | Unterlagen für die Betriebsvereinbarung, technisch begrenzte Admin-Rechte | Team-Kennzahlen ganz streichen |

**Offene Fragen.** Dreizehn Punkte sind vor oder in Phase 0 zu entscheiden.

1. Mailbetrieb: selbst mit Stalwart, wie der Technikbericht plant, über das E-Mail-Hosting von Mein-Hartmann oder über einen Dritten \[P16\].
2. Bezug von Claude im MVP: Anthropic-API mit globaler Inferenz und Opt-in, wie hier festgelegt, oder sofort Bedrock EU für alle; rechtlich offen sind Art. 44 ff. DSGVO und die Auftragsverarbeitung \[P2\].
3. Ob einfache Klassifikationen mit offenen Modellen auf eigener Infrastruktur laufen können, etwa über das Angebot „Intelligence“ von Mein-Hartmann, sofern dessen Betrieb in Deutschland belegt ist \[P16\].
4. Sitz des Rechtsträgers in Deutschland oder der Schweiz; davon hängen Umsatzsteuer, Förderung und Datenschutzrecht für Schweizer Kunden ab.
5. Zielregionen des Bedrock-EU-Profils und Verarbeitungsort von AI Gateway für den EU-Weg des Team-Tarifs; die Berichte haben beides nicht geprüft.
6. Aufbewahrung bei Anthropic: standardmäßig keine Aufbewahrung \[P11\] oder Löschung binnen 30 Tagen \[T130\]; Antrag auf Zero Data Retention.
7. Technischer Entwurf von verbundenem Postfach und IMAP-Import, einschließlich der Ablage fremder Zugangsdaten.
8. Preisvariante A oder B und Studierendenpreis nach den Preisinterviews; Bruttopreisangabe nach Preisangabenverordnung, Kleinunternehmer und Preise in Franken (Rechtspunkte, zu prüfen).
9. Mindestalter 16 Jahre und die Übertragbarkeit von Art. 8 DSGVO auf einen Vertrag über ein Arbeitswerkzeug \[P2\].
10. Archivierungspflichten für geschäftliche Mails nach Handels- und Steuerrecht (juristisch zu prüfen).
11. Lizenz für Rig Sans in einer Web-App über Adobe Fonts; ob das Duzen für Geschäftskunden trägt; ob Team-Kennzahlen gebraucht werden und wie der Social Pledge wieder auflebt.
12. Höhe der fehlenden Kosten: Zahlungsabwicklung, Support, Domainregistrierung und Personal.
13. Ungeprüfte Punkte des Technikberichts: Row-Level Security mit Hyperdrive, PROPFIND durch die WAF, CORS im Hetzner-Speicher, Logpush nach Hetzner, Regel zu Port 25 für dedizierte Server, Bedingungen von Email Service für Nutzerpost.

## Quellen

Alle Angaben sind vor Verwendung manuell zu prüfen: Die Berichte, aus denen dieses Konzept schöpft, haben die Seiten am 02.10.2026 geöffnet, und Preise, Grenzen und Rechtslagen können sich seitdem geändert haben. Die Kennungen verweisen auf die Quellenverzeichnisse der drei Berichte; aufgeführt sind nur Quellen, die dieses Konzept zitiert. Das Pitch-Deck workly, 2021 (intern) ist eine interne Unterlage ohne URL.

**Produktkonzept (P)**

- P2 Verordnung (EU) 2016/679 (DSGVO), Art. 4 Nr. 15, 8, 9, 25, 28, 35, 44: <https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679>, abgerufen am 02.10.2026
- P3 Verordnung (EU) 2024/1689 (KI-VO), Art. 3, 5, 50, 113, Erwägungsgründe 18 und 44, Amtsblatt-Text über den Cellar des EU-Amts für Veröffentlichungen (EUR-Lex war beim Abruf durch eine Bot-Prüfung gesperrt): <http://publications.europa.eu/resource/celex/32024R1689>, abgerufen am 02.10.2026
- P4 Verordnung (EU) 2017/745 (Medizinprodukte-Verordnung), Art. 2 Nr. 1 und 12, Erwägungsgrund 19: <http://publications.europa.eu/resource/celex/32017R0745>, abgerufen am 02.10.2026
- P5 EuGH, Urteil vom 1.8.2022, C-184/20, Rn. 120 bis 126 und Tenor: <http://publications.europa.eu/resource/celex/62020CJ0184>, abgerufen am 02.10.2026
- P6 Betriebsverfassungsgesetz, § 87: <https://www.gesetze-im-internet.de/betrvg/__87.html>, abgerufen am 02.10.2026
- P7 BAG, Beschluss vom 13.12.2016, 1 ABR 7/15, Rn. 22: <https://www.bundesarbeitsgericht.de/entscheidung/1-abr-7-15/>, abgerufen am 02.10.2026
- P8 WHO, Burn-out an „occupational phenomenon“: International Classification of Diseases, 28.05.2019: <https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases>, abgerufen am 02.10.2026
- P9 W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation vom 12.12.2024: <https://www.w3.org/TR/WCAG22/>, abgerufen am 02.10.2026
- P11 Anthropic, API and data retention: <https://platform.claude.com/docs/en/manage-claude/api-and-data-retention>, abgerufen am 02.10.2026
- P14 Cloudflare Docs, Data Localization Suite: <https://developers.cloudflare.com/data-localization/>, abgerufen am 02.10.2026
- P15 Google for Developers, Restricted scope verification: <https://developers.google.com/identity/protocols/oauth2/production-readiness/restricted-scope-verification>, abgerufen am 02.10.2026
- P16 Mein-Hartmann, Startseite: <https://mein-hartmann.de>, abgerufen am 02.10.2026
- P17 Mein-Hartmann, Kundenportal (Anmeldeseite): <https://dashboard.mein-hartmann.de>, abgerufen am 02.10.2026

**Marktbericht (M)**

- M2 Microsoft 365 Business Standard: <https://www.microsoft.com/de-de/microsoft-365/business/microsoft-365-business-standard>, abgerufen am 02.10.2026
- M3 Microsoft 365 Copilot Business: <https://www.microsoft.com/de-de/microsoft-365/copilot/business>, abgerufen am 02.10.2026
- M5 Microsoft 365 Blog, 04.11.2025: In-country data processing für Copilot: <https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/04/microsoft-offers-in-country-data-processing-to-15-countries-to-strengthen-sovereign-controls-for-microsoft-365-copilot/>, abgerufen am 02.10.2026
- M6 Google Workspace, Tarife: <https://workspace.google.com/intl/de/landing/partners/referral/gws2.html>, abgerufen am 02.10.2026
- M8 Zoho Workplace, Preise und Preisdaten der Seite: <https://www.zoho.com/de/workplace/pricing.html> und <https://www.zohowebstatic.com/sites/zweb/json/pricing/workplace-pricing-val.json>, abgerufen am 02.10.2026
- M13 Proton Blog, 31.03.2026: Proton Workspace: <https://proton.me/blog/proton-workspace>, abgerufen am 02.10.2026
- M14 Proton, Business-Tarife: <https://proton.me/business/plans>, abgerufen am 02.10.2026
- M15 Proton, Tarifübersicht: <https://proton.me/support/proton-plans>, abgerufen am 02.10.2026
- M17 Tuta, Preise: <https://tuta.com/de/pricing>, abgerufen am 02.10.2026
- M19 mailbox.org, Preise: <https://mailbox.org/de/preise>, abgerufen am 02.10.2026
- M20 Infomaniak kSuite Pro: <https://www.infomaniak.com/de/ksuite/ksuite-pro>, abgerufen am 02.10.2026
- M22 IONOS Nextcloud Workspace: <https://www.ionos.de/office-loesungen/nextcloud-workspace>, abgerufen am 02.10.2026
- M23 openDesk: <https://www.opendesk.eu/de>, abgerufen am 02.10.2026
- M24 openDesk, Betriebsmodelle: <https://www.opendesk.eu/de/betriebsmodelle>, abgerufen am 02.10.2026
- M25 Posteo: <https://posteo.de/de>, abgerufen am 02.10.2026
- M27 Notion, Preise: <https://www.notion.com/de/pricing>, abgerufen am 02.10.2026
- M29 Notion, Datenresidenz: <https://www.notion.com/help/data-residency>, abgerufen am 02.10.2026
- M30 ClickUp, Preise: <https://clickup.com/pricing>, abgerufen am 02.10.2026
- M33 SiliconANGLE, 29.10.2025: Grammarly wird Superhuman: <https://siliconangle.com/2025/10/29/grammarly-transforms-ai-enabled-productivity-suite-superhuman-rebrand/>, abgerufen am 02.10.2026
- M34 Shortwave, Preise: <https://www.shortwave.com/pricing/>, abgerufen am 02.10.2026
- M36 Motion, Preise: <https://www.usemotion.com/pricing>, abgerufen am 02.10.2026
- M37 Akiflow, Preise: <https://akiflow.com/pricing>, abgerufen am 02.10.2026
- M38 Morgen, Preise: <https://www.morgen.so/pricing>, abgerufen am 02.10.2026
- M39 Microsoft Viva Insights: <https://www.microsoft.com/de-de/microsoft-viva/insights>, abgerufen am 02.10.2026
- M42 Reclaim, Preise: <https://reclaim.ai/pricing>, abgerufen am 02.10.2026
- M43 TechCrunch, 22.08.2024: Dropbox übernimmt Reclaim: <https://techcrunch.com/2024/08/22/dropbox-acquires-index-ventures-backed-ai-scheduling-tool-reclaim-ai/>, abgerufen am 02.10.2026
- M45 Clockwise, Einstellungshinweis: <https://www.getclockwise.com/>, abgerufen am 02.10.2026
- M47 Anthropic, Datenresidenz: <https://platform.claude.com/docs/en/manage-claude/data-residency>, abgerufen am 02.10.2026
- M48 Anthropic, Claude in Amazon Bedrock: <https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock>, abgerufen am 02.10.2026
- M52 Notion for Education: <https://www.notion.com/product/notion-for-education>, abgerufen am 02.10.2026
- M53 Microsoft Office 365 Education: <https://www.microsoft.com/de-de/education/products/office>, abgerufen am 02.10.2026
- M55 IfM Bonn, Selbstständige: <https://www.ifm-bonn.org/statistiken/selbststaendigefreie-berufe/selbststaendige>, abgerufen am 02.10.2026
- M56 IfM Bonn, Freie Berufe: <https://www.ifm-bonn.org/statistiken/selbststaendigefreie-berufe/freie-berufe>, abgerufen am 02.10.2026
- M57 Destatis, Unternehmensregister 2024 nach Größenklassen: <https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/Unternehmensregister/Tabellen/unternehmen-beschaeftigtengroessenklassen-wz08.html>, abgerufen am 02.10.2026
- M58 Eurostat sbs\_sc\_ovw (DE, AT, B–S ohne O und S94): <https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sbs_sc_ovw?format=JSON&lang=EN&geo=DE&geo=AT&nace_r2=B-S_X_O_S94>, abgerufen am 02.10.2026
- M60 Destatis, Statistischer Bericht Studierende WS 2025/2026 (13.08.2026), Tabelle 21311-b01: <https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Hochschulen/Publikationen/Downloads-Hochschulen/statistischer-bericht-studierende-hochschulen-endg-2110410267005.xlsx?__blob=publicationFile&v=3>, abgerufen am 02.10.2026
- M62 Bitkom, 17.06.2026: Cloud Report 2026: <https://www.bitkom.org/Presse/Presseinformation/Deutsche-Cloud-4-von-10-Unternehmen-wuerden-Abstriche-in-Kauf-nehmen>, abgerufen am 02.10.2026
- M63 BFS, KMU (STATENT 2023): <https://www.bfs.admin.ch/bfs/de/home/statistiken/industrie-dienstleistungen/unternehmen-beschaeftigte/wirtschaftsstruktur-unternehmen/kmu.html>, abgerufen am 02.10.2026

**Technikbericht (T)**

- T1 Hetzner Cloud: <https://www.hetzner.com/cloud/>, abgerufen am 02.10.2026
- T2 Durable Objects: Data location: <https://developers.cloudflare.com/durable-objects/reference/data-location/>, abgerufen am 02.10.2026
- T3 D1: Data location: <https://developers.cloudflare.com/d1/configuration/data-location/>, abgerufen am 02.10.2026
- T4 R2: Data location: <https://developers.cloudflare.com/r2/reference/data-location/>, abgerufen am 02.10.2026
- T5 RFC 8621 JMAP for Mail: <https://datatracker.ietf.org/doc/html/rfc8621>, abgerufen am 02.10.2026
- T6 RFC 4791 CalDAV: <https://datatracker.ietf.org/doc/html/rfc4791>, abgerufen am 02.10.2026
- T7 Stalwart Docs: Tenants: <https://stalw.art/docs/auth/authorization/tenants/>, abgerufen am 02.10.2026
- T8 Hono: <https://hono.dev/docs/>, abgerufen am 02.10.2026
- T9 Drizzle ORM: <https://orm.drizzle.team/docs/get-started>, abgerufen am 02.10.2026
- T10 Better Auth: <https://www.better-auth.com/docs/introduction>, abgerufen am 02.10.2026
- T11 AI Gateway: Anthropic: <https://developers.cloudflare.com/ai-gateway/usage/providers/anthropic/>, abgerufen am 02.10.2026
- T12 AI Gateway: Amazon Bedrock: <https://developers.cloudflare.com/ai-gateway/usage/providers/bedrock/>, abgerufen am 02.10.2026
- T13 Workers Analytics Engine: <https://developers.cloudflare.com/analytics/analytics-engine/>, abgerufen am 02.10.2026
- T14 DNS: Proxy status: <https://developers.cloudflare.com/dns/proxy-status/>, abgerufen am 02.10.2026
- T15 Spectrum: <https://developers.cloudflare.com/spectrum/>, abgerufen am 02.10.2026
- T16 Stalwart Docs: Webhooks: <https://stalw.art/docs/telemetry/webhooks/>, abgerufen am 02.10.2026
- T17 Cloudflare Workers: Static Assets: <https://developers.cloudflare.com/workers/static-assets/>, abgerufen am 02.10.2026
- T18 Cloudflare Workers: Pricing: <https://developers.cloudflare.com/workers/platform/pricing/>, abgerufen am 02.10.2026
- T19 Workers: React Router guide: <https://developers.cloudflare.com/workers/framework-guides/web-apps/react-router/>, abgerufen am 02.10.2026
- T20 Cloudflare Workers: Limits: <https://developers.cloudflare.com/workers/platform/limits/>, abgerufen am 02.10.2026
- T21 PostgreSQL: Versioning: <https://www.postgresql.org/support/versioning/>, abgerufen am 02.10.2026
- T22 Hyperdrive: <https://developers.cloudflare.com/hyperdrive/>, abgerufen am 02.10.2026
- T23 Hyperdrive: Pricing: <https://developers.cloudflare.com/hyperdrive/platform/pricing/>, abgerufen am 02.10.2026
- T24 D1: Limits: <https://developers.cloudflare.com/d1/platform/limits/>, abgerufen am 02.10.2026
- T25 Workers VPC: <https://developers.cloudflare.com/workers-vpc/>, abgerufen am 02.10.2026
- T26 Hyperdrive: Private database: <https://developers.cloudflare.com/hyperdrive/configuration/connect-to-private-database/>, abgerufen am 02.10.2026
- T27 Cloudflare Tunnel: <https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/>, abgerufen am 02.10.2026
- T28 Stalwart: <https://stalw.art/>, abgerufen am 02.10.2026
- T29 Stalwart: Editionen: <https://stalw.art/compare>, abgerufen am 02.10.2026
- T30 mailcow: <https://mailcow.email/>, abgerufen am 02.10.2026
- T32 Rspamd: <https://rspamd.com/>, abgerufen am 02.10.2026
- T33 Email Service: <https://developers.cloudflare.com/email-service/>, abgerufen am 02.10.2026
- T34 Email Service: Pricing: <https://developers.cloudflare.com/email-service/platform/pricing/>, abgerufen am 02.10.2026
- T35 Email Service: Authentication: <https://developers.cloudflare.com/email-service/concepts/email-authentication/>, abgerufen am 02.10.2026
- T36 Email Workers: <https://developers.cloudflare.com/email-routing/email-workers/>, abgerufen am 02.10.2026
- T37 Email Service: Limits: <https://developers.cloudflare.com/email-service/platform/limits/>, abgerufen am 02.10.2026
- T38 Durable Objects: WebSockets: <https://developers.cloudflare.com/durable-objects/best-practices/websockets/>, abgerufen am 02.10.2026
- T39 y-partyserver README: <https://cdn.jsdelivr.net/npm/y-partyserver/README.md>, abgerufen am 02.10.2026
- T40 Yjs Docs: <https://docs.yjs.dev/>, abgerufen am 02.10.2026
- T41 Hocuspocus: <https://tiptap.dev/docs/hocuspocus/getting-started/overview>, abgerufen am 02.10.2026
- T42 Agents SDK: <https://developers.cloudflare.com/agents/>, abgerufen am 02.10.2026
- T43 Claude: Models overview: <https://platform.claude.com/docs/en/models/overview>, abgerufen am 02.10.2026
- T44 AI Gateway: <https://developers.cloudflare.com/ai-gateway/>, abgerufen am 02.10.2026
- T45 AI Gateway: Pricing: <https://developers.cloudflare.com/ai-gateway/reference/pricing/>, abgerufen am 02.10.2026
- T46 AI Gateway: Logging: <https://developers.cloudflare.com/ai-gateway/observability/logging/>, abgerufen am 02.10.2026
- T47 Claude: Data residency: <https://platform.claude.com/docs/en/manage-claude/data-residency>, abgerufen am 02.10.2026
- T48 Claude in Amazon Bedrock: <https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock>, abgerufen am 02.10.2026
- T49 Claude on Google Cloud: <https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai>, abgerufen am 02.10.2026
- T50 Queues: Limits: <https://developers.cloudflare.com/queues/platform/limits/>, abgerufen am 02.10.2026
- T51 Workflows: Limits: <https://developers.cloudflare.com/workflows/reference/limits/>, abgerufen am 02.10.2026
- T52 Workflows: Pricing: <https://developers.cloudflare.com/workflows/reference/pricing/>, abgerufen am 02.10.2026
- T53 Cron Triggers: <https://developers.cloudflare.com/workers/configuration/cron-triggers/>, abgerufen am 02.10.2026
- T54 Hetzner Object Storage: <https://www.hetzner.com/storage/object-storage/>, abgerufen am 02.10.2026
- T55 Hetzner Docs: Object Storage: <https://docs.hetzner.com/storage/object-storage/overview/>, abgerufen am 02.10.2026
- T56 R2: Pricing: <https://developers.cloudflare.com/r2/pricing/>, abgerufen am 02.10.2026
- T57 R2: SSE-C: <https://developers.cloudflare.com/r2/examples/ssec/>, abgerufen am 02.10.2026
- T58 KV: How KV works: <https://developers.cloudflare.com/kv/concepts/how-kv-works/>, abgerufen am 02.10.2026
- T59 KV: Data location: <https://developers.cloudflare.com/kv/reference/data-location/>, abgerufen am 02.10.2026
- T60 D1: Read replication: <https://developers.cloudflare.com/d1/best-practices/read-replication/>, abgerufen am 02.10.2026
- T61 Cloudflare for SaaS: Plans: <https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/plans/>, abgerufen am 02.10.2026
- T62 Data Localization Suite: Product compatibility: <https://developers.cloudflare.com/data-localization/compatibility/>, abgerufen am 02.10.2026
- T63 pgvector: <https://github.com/pgvector/pgvector>, abgerufen am 02.10.2026
- T64 BAAI/bge-m3: <https://huggingface.co/BAAI/bge-m3>, abgerufen am 02.10.2026
- T67 Stalwart Docs: Storage backends: <https://stalw.art/docs/storage/backends/>, abgerufen am 02.10.2026
- T68 PostgreSQL: Dictionaries: <https://www.postgresql.org/docs/current/textsearch-dictionaries.html>, abgerufen am 02.10.2026
- T69 Images: Pricing: <https://developers.cloudflare.com/images/pricing/>, abgerufen am 02.10.2026
- T70 Containers: <https://developers.cloudflare.com/containers/>, abgerufen am 02.10.2026
- T71 Containers: Limits: <https://developers.cloudflare.com/containers/platform-details/limits/>, abgerufen am 02.10.2026
- T74 Turnstile: <https://developers.cloudflare.com/turnstile/>, abgerufen am 02.10.2026
- T75 WAF: Rate limiting rules: <https://developers.cloudflare.com/waf/rate-limiting-rules/>, abgerufen am 02.10.2026
- T76 Workers: Rate Limiting binding: <https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/>, abgerufen am 02.10.2026
- T77 Cloudflare Plans: <https://www.cloudflare.com/plans/>, abgerufen am 02.10.2026
- T78 Cloudflare Access: <https://www.cloudflare.com/products/cloudflare-access/>, abgerufen am 02.10.2026
- T79 Cloudflare Registrar: <https://developers.cloudflare.com/registrar/>, abgerufen am 02.10.2026
- T80 Cloudflare: TLD policies: <https://www.cloudflare.com/tld-policies/>, abgerufen am 02.10.2026
- T83 Workers Logs: <https://developers.cloudflare.com/workers/observability/logs/workers-logs/>, abgerufen am 02.10.2026
- T84 Workers Traces: <https://developers.cloudflare.com/workers/observability/traces/>, abgerufen am 02.10.2026
- T85 Logpush: <https://developers.cloudflare.com/logs/logpush/>, abgerufen am 02.10.2026
- T86 Secrets Store: <https://developers.cloudflare.com/secrets-store/>, abgerufen am 02.10.2026
- T87 Realtime: <https://developers.cloudflare.com/realtime/>, abgerufen am 02.10.2026
- T88 RealtimeKit: Pricing: <https://developers.cloudflare.com/realtime/realtimekit/pricing/>, abgerufen am 02.10.2026
- T89 Collabora Online: Pricing: <https://www.collaboraonline.com/pricing/>, abgerufen am 02.10.2026
- T90 Collabora Online: CODE: <https://www.collaboraonline.com/code/>, abgerufen am 02.10.2026
- T91 Collabora Online SDK: <https://sdk.collaboraonline.com/docs/introduction.html>, abgerufen am 02.10.2026
- T92 Collabora Online: Lizenz: <https://raw.githubusercontent.com/CollaboraOnline/online/main/COPYING>, abgerufen am 02.10.2026
- T93 ONLYOFFICE Developer Edition: Preise: <https://www.onlyoffice.com/developer-edition-prices.aspx>, abgerufen am 02.10.2026
- T95 Data Localization Suite: <https://developers.cloudflare.com/data-localization/>, abgerufen am 02.10.2026
- T96 Patroni: <https://patroni.readthedocs.io/en/latest/>, abgerufen am 02.10.2026
- T97 pgBackRest: <https://pgbackrest.org/>, abgerufen am 02.10.2026
- T98 Hetzner Load Balancer: <https://www.hetzner.com/cloud/load-balancer/>, abgerufen am 02.10.2026
- T99 Stalwart Docs: Calendar: <https://stalw.art/docs/collaboration/calendar/>, abgerufen am 02.10.2026
- T100 Hetzner Docs: Cloud Server rDNS: <https://docs.hetzner.com/cloud/servers/cloud-server-rdns>, abgerufen am 02.10.2026
- T101 RFC 8461 MTA-STS: <https://datatracker.ietf.org/doc/html/rfc8461>, abgerufen am 02.10.2026
- T102 Stalwart Docs: Authentication: <https://stalw.art/docs/auth/>, abgerufen am 02.10.2026
- T103 Hetzner Docs: Cloud Server FAQ: <https://docs.hetzner.com/cloud/servers/faq/>, abgerufen am 02.10.2026
- T104 Google: Email sender guidelines: <https://support.google.com/a/answer/81126>, abgerufen am 02.10.2026
- T105 RFC 8460 TLS-RPT: <https://datatracker.ietf.org/doc/html/rfc8460>, abgerufen am 02.10.2026
- T106 RFC 5545 iCalendar: <https://datatracker.ietf.org/doc/html/rfc5545>, abgerufen am 02.10.2026
- T107 Google Calendar API: Auth: <https://developers.google.com/workspace/calendar/api/auth>, abgerufen am 02.10.2026
- T108 Microsoft Graph: calendar: <https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0>, abgerufen am 02.10.2026
- T109 partyserver README: <https://cdn.jsdelivr.net/npm/partyserver/README.md>, abgerufen am 02.10.2026
- T110 Durable Objects: Pricing: <https://developers.cloudflare.com/durable-objects/platform/pricing/>, abgerufen am 02.10.2026
- T112 Claude: Prompt caching: <https://platform.claude.com/docs/en/build-with-claude/prompt-caching>, abgerufen am 02.10.2026
- T113 Claude: Batch processing: <https://platform.claude.com/docs/en/build-with-claude/batch-processing>, abgerufen am 02.10.2026
- T114 Claude: Pricing: <https://platform.claude.com/docs/en/about-claude/pricing>, abgerufen am 02.10.2026
- T116 R2: Data security: <https://developers.cloudflare.com/r2/reference/data-security/>, abgerufen am 02.10.2026
- T117 D1: Data security: <https://developers.cloudflare.com/d1/reference/data-security/>, abgerufen am 02.10.2026
- T118 Durable Objects: Data security: <https://developers.cloudflare.com/durable-objects/reference/data-security/>, abgerufen am 02.10.2026
- T119 Better Auth: Passkey: <https://www.better-auth.com/docs/plugins/passkey>, abgerufen am 02.10.2026
- T120 Better Auth: Hono: <https://www.better-auth.com/docs/integrations/hono>, abgerufen am 02.10.2026
- T121 Hetzner Storage Box: <https://www.hetzner.com/storage/storage-box/>, abgerufen am 02.10.2026
- T122 Hetzner Docs: Datenschutz-FAQ: <https://docs.hetzner.com/general/general-terms-and-conditions/data-privacy-faq/>, abgerufen am 02.10.2026
- T123 Cloudflare Customer DPA: <https://www.cloudflare.com/cloudflare-customer-dpa/>, abgerufen am 02.10.2026
- T124 Anthropic: Data Processing Addendum: <https://www.anthropic.com/legal/data-processing-addendum>, abgerufen am 02.10.2026
- T125 Cloudflare Privacy Policy: <https://www.cloudflare.com/privacypolicy/>, abgerufen am 02.10.2026
- T126 Anthropic: Privacy Policy: <https://www.anthropic.com/legal/privacy>, abgerufen am 02.10.2026
- T127 WilmerHale zum DPF-Rechtsmittel: <https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20251201-european-court-of-justice-to-review-challenge-to-eu-us-data-privacy-framework>, abgerufen am 02.10.2026
- T128 ABl. C/2025/6610, Rechtssache C-703/25 P: <https://eur-lex.europa.eu/eli/C/2025/6610/oj/eng>, abgerufen am 02.10.2026
- T129 European MarTech: DPF-Status 2026 (Sekundärquelle): <https://europeanmartech.eu/blog/eu-us-data-privacy-framework-2026-status>, abgerufen am 02.10.2026
- T130 Anthropic Privacy Center: Speicherdauer: <https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data>, abgerufen am 02.10.2026
- T131 Claude: API and data retention: <https://platform.claude.com/docs/en/manage-claude/api-and-data-retention>, abgerufen am 02.10.2026
- T132 Hetzner: Zertifizierung: <https://www.hetzner.com/unternehmen/zertifizierung/>, abgerufen am 02.10.2026
- T133 Workers AI: Data usage: <https://developers.cloudflare.com/workers-ai/platform/data-usage/>, abgerufen am 02.10.2026
- T134 React Router: <https://reactrouter.com/>, abgerufen am 02.10.2026
- T135 Workers: Framework guides: <https://developers.cloudflare.com/workers/framework-guides/>, abgerufen am 02.10.2026
- T136 Hyperdrive: Drizzle ORM: <https://developers.cloudflare.com/hyperdrive/examples/connect-to-postgres/postgres-drivers-and-libraries/drizzle-orm/>, abgerufen am 02.10.2026
- T137 Tiptap: Pricing: <https://tiptap.dev/pricing>, abgerufen am 02.10.2026
- T138 Yjs: <https://github.com/yjs/yjs>, abgerufen am 02.10.2026
- T139 Workers: Vitest integration: <https://developers.cloudflare.com/workers/testing/vitest-integration/>, abgerufen am 02.10.2026
- T140 pnpm Workspaces: <https://pnpm.io/workspaces>, abgerufen am 02.10.2026
- T141 Workers Builds: <https://developers.cloudflare.com/workers/ci-cd/builds/>, abgerufen am 02.10.2026
- T142 Terraform Registry: hcloud: <https://registry.terraform.io/v1/providers/hetznercloud/hcloud>, abgerufen am 02.10.2026
- T143 Terraform Registry: cloudflare: <https://registry.terraform.io/v1/providers/cloudflare/cloudflare>, abgerufen am 02.10.2026
- T144 Hetzner Docs: Firewalls: <https://docs.hetzner.com/cloud/firewalls/overview/>, abgerufen am 02.10.2026
- T145 Hetzner Docs: Networks: <https://docs.hetzner.com/cloud/networks/overview/>, abgerufen am 02.10.2026
- T146 wrangler-action: <https://github.com/cloudflare/wrangler-action>, abgerufen am 02.10.2026
- T147 Stalwart Releases: <https://github.com/stalwartlabs/stalwart/releases>, abgerufen am 02.10.2026
- T148 Claude Code: GitHub Actions: <https://code.claude.com/docs/en/github-actions>, abgerufen am 02.10.2026
- T149 Claude Code: Security: <https://code.claude.com/docs/en/security>, abgerufen am 02.10.2026
- T150 Claude Code: Code Review: <https://code.claude.com/docs/en/code-review>, abgerufen am 02.10.2026
- T151 Claude: Plans: <https://claude.com/pricing>, abgerufen am 02.10.2026
- T152 Claude Code: Costs: <https://code.claude.com/docs/en/costs>, abgerufen am 02.10.2026
- T153 Claude Agent SDK: <https://code.claude.com/docs/en/agent-sdk/overview>, abgerufen am 02.10.2026
- T154 MCP Specification: <https://modelcontextprotocol.io/specification/latest>, abgerufen am 02.10.2026
- T155 Hetzner: Preisdaten der Website (Netto, je Produkt-ID; Einzelabfrage über https://website-price-api.hetzner.com/api/v1/products/): <https://www.hetzner.com/_resources/app/data/app/live_data_prices.json>, abgerufen am 02.10.2026
- T156 Hetzner: AX-Server: <https://www.hetzner.com/dedicated-rootserver/matrix-ax/>, abgerufen am 02.10.2026
- T157 Hetzner Cloud: Regular Performance: <https://www.hetzner.com/cloud/regular-performance/>, abgerufen am 02.10.2026
- T158 Hetzner Cloud: General Purpose: <https://www.hetzner.com/cloud/general-purpose/>, abgerufen am 02.10.2026
- T159 Hetzner Docs: Preisanpassung 15. Juni 2026: <https://docs.hetzner.com/de/general/infrastructure-and-availability/price-adjustment/>, abgerufen am 02.10.2026
- T160 EZB-Referenzkurse: <https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml>, abgerufen am 02.10.2026
- T161 Hetzner Docs: Primary IPs: <https://docs.hetzner.com/cloud/servers/primary-ips/overview/>, abgerufen am 02.10.2026
- T162 Stalwart: Pricing: <https://stalw.art/pricing/>, abgerufen am 02.10.2026
- T163 Claude: Model deprecations: <https://platform.claude.com/docs/en/about-claude/model-deprecations>, abgerufen am 02.10.2026
- T164 Hetzner Cloud: Cost-Optimized: <https://www.hetzner.com/cloud/cost-optimized/>, abgerufen am 02.10.2026
- T166 ONLYOFFICE DocumentServer: <https://github.com/ONLYOFFICE/DocumentServer>, abgerufen am 02.10.2026
