declare namespace System {
  type ProviderType = "mysql" | "sqlite";

  type AmbientType = "development" | "production" | "test";

  interface Env {
    NODE_ENV: AmbientType;
    DATABASE: {
      PROVIDER: ProviderType;
      USER: string;
      PASSWORD: string;
      HOST: string;
      PORT: number;
      DATABASE: string;
      DATABASE_URL: string;
    };
  }
}
