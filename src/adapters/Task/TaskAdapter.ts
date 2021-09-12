import IAddTaskDTO from "@core/useCases/Task/AddTask/IAddTaskDTO";
import Task from "@core/entities/Task";

export default class TaskAdapter {
  static create(data: IAddTaskDTO): Task {
    return new Task(data.todo, data.completionDate);
  }
}
