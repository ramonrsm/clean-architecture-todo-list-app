import { PrismaClient } from ".prisma/client";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import Task from "@core/entities/Task";
import ITaskRepository from "@core/repositories/ITaskRepository";

export default class TaskRepositorySQL implements ITaskRepository {
  private prismaClient: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async save(task: Task): Promise<void> {
    const dataTask = TaskAdapter.createEntityDatabase(task);

    await this.prismaClient.task.create({
      data: dataTask,
    });
  }

  async find(): Promise<Task[] | []> {
    const tasks = await this.prismaClient.task.findMany();

    return tasks;
  }

  async findById(id: string): Promise<Task | undefined> {
    throw new Error("Method not implemented.");
  }

  async update(id: string, data: Task): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
