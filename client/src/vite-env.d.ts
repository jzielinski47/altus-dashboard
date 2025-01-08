/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CORS_SERVER: string;
  readonly VITE_CORS_PORT: string;
  readonly VITE_LOCAL_ENABLED: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
