import Task from "@core/entities/Task";

export default class DatabaseInMemory {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }
}
