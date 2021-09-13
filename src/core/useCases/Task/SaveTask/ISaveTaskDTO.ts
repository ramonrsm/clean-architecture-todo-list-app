import { ITask } from "@core/entities/Task";

export default interface ISaveTaskDTO extends ITask {
  todo: string;
  completionDate?: Date;
}
