import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import path from "path";
export default class Process {
  private static _instance: Process;
  private _env: System.Env | null = null;

  private constructor() {
    if (!process.env.NODE_ENV) throw new Error("Defina a variável de ambiente NODE_ENV.");

    const processEnv = this.LoadEnv(process.env.NODE_ENV);

    this._env = this.BuildEnv(processEnv);
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

  private LoadEnv(ambient?: System.AmbientType): NodeJS.ProcessEnv {
    const envFile = ambient ? `.env.${ambient}` : ".env";

    const result = dotenv.config({ path: path.resolve(__dirname, "..", "..", envFile) });

    if (result.error) {
      throw result.error;
    }

    dotenvExpand(result);

    const environments = result.parsed as NodeJS.ProcessEnv;

    return environments;
  }

  private BuildEnv(processEnv: NodeJS.ProcessEnv): System.Env {
    const env = {
      NODE_ENV: processEnv.NODE_ENV,
      DATABASE: {
        PROVIDER: processEnv.PROVIDER,
        USER: processEnv.USER,
        PASSWORD: processEnv.PASSWORD,
        DATABASE: processEnv.DATABASE,
        HOST: processEnv.HOST,
        PORT: processEnv.PORT,
        DATABASE_URL: processEnv.DATABASE_URL,
      },
    };

    return env;
  }
}
