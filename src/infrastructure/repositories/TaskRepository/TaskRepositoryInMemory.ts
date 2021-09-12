import DatabaseInMemory from "src/infrastructure/database/DatabaseInMemory";
import ITaskRepository from "@core/repositories/ITaskRepository";
import Task from "@core/entities/Task";

export default class TaskRepositoryInMemory implements ITaskRepository {
  private databaseInMemory: DatabaseInMemory;

  constructor(databaseInMemory: DatabaseInMemory) {
    this.databaseInMemory = databaseInMemory;
  }

  async add(task: Task): Promise<void> {
    this.databaseInMemory.tasks.push(task);
  }

  async getAll(): Promise<Task[]> {
    return Promise.resolve(this.databaseInMemory.tasks);
  }

  async rename(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async remove(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
