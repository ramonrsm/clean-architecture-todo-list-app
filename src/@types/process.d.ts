declare namespace NodeJS {
  interface ProcessEnv extends Dict<string> {
    NODE_ENV: System.AmbientType;
    PROVIDER: System.ProviderType;
    USER: string;
    PASSWORD: string;
    HOST: string;
    PORT: number;
    DATABASE: string;
    DATABASE_URL: string;
  }
}
