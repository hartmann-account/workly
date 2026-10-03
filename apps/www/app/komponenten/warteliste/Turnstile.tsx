import { useEffect, useRef } from "react";

type TurnstileApi = {
  render: (ziel: HTMLElement, optionen: Record<string, unknown>) => string | undefined;
  reset: (widget?: string) => void;
  remove: (widget?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SKRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const SKRIPT_ID = "ws-wl-turnstile-skript";

/** Lädt das Turnstile-Skript einmal je Seite. */
function ladeSkript(): Promise<TurnstileApi> {
  return new Promise((erfuellt, abgelehnt) => {
    if (window.turnstile) {
      erfuellt(window.turnstile);
      return;
    }
    let skript = document.getElementById(SKRIPT_ID) as HTMLScriptElement | null;
    if (!skript) {
      skript = document.createElement("script");
      skript.id = SKRIPT_ID;
      skript.src = SKRIPT_URL;
      skript.async = true;
      document.head.appendChild(skript);
    }
    skript.addEventListener("load", () => (window.turnstile ? erfuellt(window.turnstile) : abgelehnt(new Error("turnstile"))));
    skript.addEventListener("error", () => abgelehnt(new Error("turnstile")));
  });
}

type Props = {
  schluessel: string;
  /** Wechselt mit jeder Antwort der Action; dann holt das Widget ein neues Token. */
  erneuern: unknown;
};

/**
 * Cloudflare Turnstile, nur wenn TURNSTILE_SITE_KEY gesetzt ist. Das Widget legt im Formular
 * das versteckte Feld „cf-turnstile-response“ an; die Action prüft es mit dem Secret.
 */
export function Turnstile({ schluessel, erneuern }: Props) {
  const ziel = useRef<HTMLDivElement>(null);
  const widget = useRef<string | undefined>(undefined);

  useEffect(() => {
    let aktiv = true;
    ladeSkript()
      .then((api) => {
        if (!aktiv || !ziel.current) return;
        widget.current = api.render(ziel.current, {
          sitekey: schluessel,
          language: "de",
          theme: document.documentElement.getAttribute("data-theme") === "dunkel" ? "dark" : "light",
          size: "flexible",
          "response-field-name": "cf-turnstile-response",
        });
      })
      .catch(() => {
        // Ohne Skript sendet das Formular kein Token; die Action meldet dann die Sicherheitsprüfung.
      });
    return () => {
      aktiv = false;
      if (widget.current && window.turnstile) window.turnstile.remove(widget.current);
      widget.current = undefined;
    };
  }, [schluessel]);

  // Ein Token gilt nur einmal: nach jeder Antwort der Action ein neues anfordern.
  useEffect(() => {
    if (erneuern && widget.current && window.turnstile) window.turnstile.reset(widget.current);
  }, [erneuern]);

  return <div ref={ziel} id="wl-pruefung" className="ws-wl-pruefung" tabIndex={-1} />;
}
