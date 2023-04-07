/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ID_GOOGLE_ANALYTICS: string
  readonly VITE_ID_FACEBOOK: string
  readonly VITE_PORT_SERVE: string
  readonly VITE_PORT_API: string
  readonly VITE_URL_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
