export default class Process {
  private static _instance: Process;
  private _env: System.Env | null = null;

  private constructor() {
    this._env = {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE: {
        PROVIDER: process.env.PROVIDER,
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        DATABASE: process.env.DATABASE,
        HOST: process.env.HOST,
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
      },
    };
  }

  static get instance(): Process {
    if (!Process._instance) {
      Process._instance = new Process();
    }

    return Process._instance;
  }

  get env(): System.Env {
    if (!this._env) {
      const env = Process.instance.env;
      this._env = env;
    }

    return this._env;
  }
}
