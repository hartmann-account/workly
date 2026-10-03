interface ImportMetaEnv {
  /** Öffentliche Basis-URL ohne Schrägstrich am Ende. */
  readonly VITE_BASIS_URL?: string;
  /** „ja“ erlaubt Suchmaschinen die Indexierung. */
  readonly VITE_OEFFENTLICH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
