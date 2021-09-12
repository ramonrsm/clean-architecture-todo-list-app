import ITaskRepository from "@core/repositories/ITaskRepository";

export default abstract class TaskUseCase {
  protected taskRepository: ITaskRepository;

  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }
}
