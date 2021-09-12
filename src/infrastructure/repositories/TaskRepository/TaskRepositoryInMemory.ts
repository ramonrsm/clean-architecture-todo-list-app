import DatabaseInMemory from "src/infrastructure/database/DatabaseInMemory";
import ITaskRepository from "@core/repositories/ITaskRepository";
import NotFoundException from "src/exceptions/NotFoundException";
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

  async update(id: string, data: Task): Promise<void> {
    const task = this.databaseInMemory.tasks.find(task => task.id === id);

    if (!task) throw new NotFoundException(`Task com o id: '${id}' não encontrada.`);

    const updatedTask = Object.assign(task, data);

    this.databaseInMemory.tasks.splice(this.databaseInMemory.tasks.indexOf(task), 1);

    this.databaseInMemory.tasks.push(updatedTask);
  }

  async remove(id: string): Promise<void> {
    const task = this.databaseInMemory.tasks.find(task => task.id === id);

    if (!task) throw new NotFoundException(`Task com o id: '${id}' não encontrada.`);

    this.databaseInMemory.tasks.splice(this.databaseInMemory.tasks.indexOf(task), 1);
  }
}
