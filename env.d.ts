/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APPNAME: string;
    readonly VITE_API_URL: string;
    readonly VITE_API_TIMEOUT: number;
    readonly VITE_FAWSOME_KIT_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}