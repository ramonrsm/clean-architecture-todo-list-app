import TaskUseCase from "@core/useCases/Task/TaskUseCase";
import Task from "@core/entities/Task";

export default class FindTaskUseCase extends TaskUseCase {
  async execute(): Promise<Task[] | []> {
    const tasks = await this.taskRepository.find();

    return tasks;
  }
}
