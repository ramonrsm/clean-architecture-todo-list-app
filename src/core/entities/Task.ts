import { v4 as uuid } from 'uuid';

export default class Task {
  readonly id?: string;

  todo: string;

  done: boolean = false;

  completionDate: Date | undefined;

  completedAt: Date | undefined;

  constructor(todo: string, completionDate?: Date, id?: string) {
    this.id = id || uuid();
    this.todo = todo;
    this.completionDate = completionDate;
  }

  do() {
    this.done = true;
  }

  undo() {
    this.done = false;
  }
}
