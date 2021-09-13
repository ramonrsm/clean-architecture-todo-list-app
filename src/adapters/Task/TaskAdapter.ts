import Task, { ITask } from "@core/entities/Task";

export default class TaskAdapter {
  static create(data: ITask): Task {
    return new Task(data);
  }
}
