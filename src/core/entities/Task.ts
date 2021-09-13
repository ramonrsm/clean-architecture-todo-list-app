import { v4 as uuid } from 'uuid';

export interface ITask {
  id?: string;
  
  todo: string;

  done?: boolean;

  completionDate?: Date | undefined;

  completedAt?: Date | undefined;
}

export default class Task {
  readonly id?: string;

  todo: string;

  done: boolean = false;

  completionDate: Date | undefined;

  completedAt: Date | undefined;

  constructor(props: ITask) {
    this.id = props.id || uuid();
    this.todo = props.todo;
    this.completionDate = props.completionDate;
  }
}
