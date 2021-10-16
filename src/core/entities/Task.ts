import { v4 as uuid } from "uuid";

export interface ITask {
  id?: string;

  todo: string;

  done?: boolean;

  completionDate?: Date | null;

  completedAt?: Date | null;
}

export default class Task {
  readonly id: string;

  todo: string;

  done?: boolean = false;

  completionDate?: Date | null;

  completedAt: Date | null = null;

  constructor(props: ITask) {
    this.id = props.id || uuid();
    this.todo = props.todo;
    this.done = props.done;
    this.completionDate = props.completionDate;
  }
}
