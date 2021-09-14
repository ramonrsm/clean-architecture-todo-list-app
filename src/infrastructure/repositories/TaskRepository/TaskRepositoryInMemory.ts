import DatabaseInMemory from "src/infrastructure/database/DatabaseInMemory";
import ITaskRepository from "@core/repositories/ITaskRepository";
import Task from "@core/entities/Task";

const DELETE_COUNT = 1;

export default class TaskRepositoryInMemory implements ITaskRepository {
  private databaseInMemory: DatabaseInMemory;

  constructor(databaseInMemory: DatabaseInMemory) {
    this.databaseInMemory = databaseInMemory;
  }

  async save(task: Task): Promise<void> {
    this.databaseInMemory.tasks.push(task);
  }

  async findById(id: string): Promise<Task | undefined> {
    const task = this.databaseInMemory.tasks.find(task => task.id === id);

    if (task) return Promise.resolve(task);
  }

  async find(): Promise<Task[]> {
    return Promise.resolve(this.databaseInMemory.tasks);
  }

  async update(id: string, data: Task): Promise<void> {
    const task = this.databaseInMemory.tasks.find(task => task.id === id);

    if (task) {
      const updatedTask = Object.assign(task, data);

      this.databaseInMemory.tasks.splice(this.databaseInMemory.tasks.indexOf(task), DELETE_COUNT);

      this.databaseInMemory.tasks.push(updatedTask);
    }
  }

  async delete(id: string): Promise<void> {
    const task = this.databaseInMemory.tasks.find(task => task.id === id);

    if (task) {
      this.databaseInMemory.tasks.splice(this.databaseInMemory.tasks.indexOf(task), DELETE_COUNT);
    }
  }
}
