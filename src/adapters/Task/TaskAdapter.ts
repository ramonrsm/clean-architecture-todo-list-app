import Task, { ITask } from "@core/entities/Task";
import { Prisma } from "@prisma/client";

export default class TaskAdapter {
  static createEntity(data: ITask): Task {
    return new Task(data);
  }

  static createEntityDatabase(data: Task): Prisma.TaskCreateInput {
    const task: Prisma.TaskCreateInput = {
      id: data.id,
      todo: data.todo,
      completedAt: data.completedAt,
      completionDate: data.completionDate,
      done: data.done,
    };

    return task;
  }
}
