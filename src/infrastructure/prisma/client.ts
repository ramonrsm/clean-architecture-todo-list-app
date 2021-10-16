import { PrismaClient } from "@prisma/client";
import Process from "@config/process";
export default class Client {
  static instance(ambient?: System.AmbientType): Promise<PrismaClient> {
    return Promise.resolve(
      new Promise((resolve, reject) => {
        try {
          const env = Process.instance(ambient).env;
          console.log(env);

          const client = new PrismaClient({
            datasources: {
              db: {
                url: env.DATABASE.DATABASE_URL,
              },
            },
          });

          return resolve(client);
        } catch (error) {
          reject(error);
        }
      })
    );
  }
}
