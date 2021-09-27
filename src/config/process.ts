import dotenvExpand from "dotenv-expand";
import dotenvFlow from "dotenv-flow";
import path from "path";

const ARG_NODE_ENV = /^node-env=(test|development|production)$/;

const Ambients: System.AmbientType[] = ["development", "production", "test"];
class Process {
  private static _instance: Process;
  private _env: System.Env | null = null;

  private constructor() {
    const arg_node_env = process.argv.find(arg => arg.match(ARG_NODE_ENV));

    const NODE_ENV = arg_node_env?.replace(ARG_NODE_ENV, "$1") as System.AmbientType;

    if (!Ambients.includes(NODE_ENV)) {
      throw new Error("Informe a variável de ambiente válida `npm run dev node-env={development|production|test}`.");
    }

    const processEnv = this.LoadEnv(NODE_ENV);

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
    const result = dotenvFlow.config({ default_node_env: ambient, path: path.resolve(__dirname, "..", "..") });

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

const ProcessEnv = Process.instance;

export default ProcessEnv;
