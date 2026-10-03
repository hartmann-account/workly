import { symbole, type SymbolName } from "@workly/ui/symbole";

type Props = {
  name: SymbolName;
  /** Standard 20 px (`symbol`); `symbol symbol-klein` für 16 px, `symbol sy-symbol-gross` für 24 px. */
  className?: string;
};

/** Feather-Symbol inline, damit es `currentColor` erbt. Immer schmückend: Bedeutung trägt der Text daneben. */
export function SymbolGrafik({ name, className = "symbol" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: symbole[name] }}
    />
  );
}

type KachelProps = {
  name: SymbolName;
  /** Zusatzklassen wie `kachel-gross`, `kachel-klein`, `kachel-violett`, `kachel-pink`, `kachel-grau`. */
  variante?: string;
};

/** Modulkachel: Symbol weiß auf Verlauf (Blau Kernmodule, Violett Fokus, Pink Tagesabschluss). */
export function Kachel({ name, variante = "" }: KachelProps) {
  return (
    <span className={`kachel ${variante}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false" dangerouslySetInnerHTML={{ __html: symbole[name] }} />
    </span>
  );
}
