import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import path from "path";
export default class Process {
  private static _instance: Process;
  private _env: System.Env;

  private constructor(ambient?: System.AmbientType) {
    let environments: NodeJS.ProcessEnv;

    if (!ambient) {
      environments = this.load();
    } else {
      environments = this.load(ambient);
    }

    this._env = {
      NODE_ENV: environments.NODE_ENV,
      DATABASE: {
        PROVIDER: environments.PROVIDER,
        USER: environments.USER,
        PASSWORD: environments.PASSWORD,
        DATABASE: environments.DATABASE,
        HOST: environments.HOST,
        PORT: environments.PORT,
        DATABASE_URL: environments.DATABASE_URL,
      },
    };
  }

  private load(ambient?: System.AmbientType): NodeJS.ProcessEnv {
    const envFile = ambient ? `.env.${ambient}` : ".env";

    const result = dotenv.config({ path: path.resolve(__dirname, "..", "..", envFile) });

    if (result.error) {
      throw result.error;
    }

    dotenvExpand(result);

    const environments = result.parsed as NodeJS.ProcessEnv;

    return environments;
  }

  static instance(ambient?: System.AmbientType): Process {
    if (!Process._instance) {
      Process._instance = new Process(ambient);
    }

    return Process._instance;
  }

  get env(): System.Env {
    return this._env;
  }
}
