import { SymbolGrafik } from "~/komponenten/SymbolGrafik";

/*
 * Nachgebaute Portal-Ansichten für die Seite Assistent. Sie stehen immer im Rahmen `Bildschirm`
 * (inert, aria-hidden); Knöpfe, Felder und Links sind deshalb nur Bild und als <span> bzw. <a> ohne Ziel gesetzt.
 * Markup und Klassen stammen aus den Bausteinen AssistentSeitenleiste und Vorschlagskarte.
 * Personen und Daten sind die Beispielnamen des Designsystems.
 */

/** Seitenleiste des Assistenten: Kennzeichnung, Frage, Antwort mit Quellen, Vorschlag, Eingabe, Kontingent. */
export function LeisteAbbildung() {
  return (
    <div className="as-leiste ws-ki-leiste">
      <div className="as-kopf">
        <div className="as-kopf-text">
          <p className="as-titel">Assistent</p>
          <p className="as-kennzeichnung">KI-System · Antworten können Fehler enthalten</p>
        </div>
        <span className="symbolknopf">
          <SymbolGrafik name="schliessen" />
        </span>
      </div>

      <div className="as-verlauf">
        <p className="gruppentitel">Heute, 09:41 Uhr</p>
        <p className="as-frage">Was habe ich mit Frau Kaya zum Angebot vereinbart?</p>
        <div className="as-antwort">
          <p>Ich finde zwei Stellen dazu:</p>
          <ul>
            <li>
              Du schickst Frau Kaya das Angebot bis Freitag, 09.10.2026. <a className="as-verweis">[2]</a>
            </li>
            <li>
              Sie möchte zwei Varianten, mit und ohne laufende Pflege der Website. <a className="as-verweis">[1]</a>
            </li>
          </ul>
          <ol className="as-quellen">
            <li>
              <a>
                <SymbolGrafik name="email" />
                <span className="as-quelle-nr">[1]</span>
                <span>Mail von Aylin Kaya, 29.09.2026</span>
              </a>
            </li>
            <li>
              <a>
                <SymbolGrafik name="datei" />
                <span className="as-quelle-nr">[2]</span>
                <span>Protokoll „Termin Kaya“, 01.10.2026</span>
              </a>
            </li>
          </ol>
        </div>

        <div className="vorschlag">
          <p className="vorschlag-kopf">
            <SymbolGrafik name="assistent" className="" />
            Vorschlag des Assistenten
          </p>
          <p className="vorschlag-titel">Aufgabe anlegen: Angebot an Frau Kaya senden</p>
          <p className="vorschlag-text">
            Fällig Fr., 09.10.2026 · Quelle <a className="as-verweis">[2]</a>
          </p>
          <div className="vorschlag-aktionen">
            <span className="knopf knopf-primaer knopf-klein">Übernehmen</span>
            <span className="knopf knopf-kontur knopf-klein">Ändern</span>
            <span className="knopf knopf-leise knopf-klein">Verwerfen</span>
          </div>
        </div>
      </div>

      <div className="as-fuss">
        <div className="as-eingabe">
          <span className="eingabe ws-ki-feld">
            <span className="ws-ki-platzhalter">Frag mich etwas zu deinen Inhalten</span>
          </span>
          <span className="as-senden">
            <SymbolGrafik name="senden" />
          </span>
        </div>
        <div className="as-kontingent">
          <p className="as-kontingent-text">112 von 150 Anfragen übrig, bis 31.10.2026</p>
          <div className="fortschritt">
            <span style={{ width: "74.67%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Antwortentwurf mit der Marke „Entwurf des Assistenten“; senden kann nur die Person. */
export function EntwurfAbbildung() {
  return (
    <div className="as-entwurf ws-ki-entwurf">
      <div className="as-entwurf-kopf">
        <span className="ki-marke">
          <SymbolGrafik name="assistent" className="" />
          Entwurf des Assistenten
        </span>
        <p className="as-entwurf-an">An Aylin Kaya · Ton: sachlich</p>
      </div>
      <div className="eingabe ws-ki-feld ws-ki-entwurf-text">
        <p>Guten Tag Frau Kaya,</p>
        <p>
          vielen Dank für Ihre Nachricht. Das Angebot mit beiden Varianten, mit und ohne laufende Pflege, schicke ich
          Ihnen bis Freitag, 09.10.2026.
        </p>
        <p>
          Viele Grüße
          <br />
          Lena Berger
        </p>
      </div>
      <div className="reihe">
        <span className="knopf knopf-primaer knopf-klein">
          <SymbolGrafik name="senden" />
          Senden
        </span>
        <span className="knopf knopf-leise knopf-klein">Entwurf verwerfen</span>
      </div>
    </div>
  );
}
