import ISaveTaskDTO from "@core/useCases/Task/SaveTask/ISaveTaskDTO";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskUseCase from "@core/useCases/Task/TaskUseCase";

export default class SaveTaskUseCase extends TaskUseCase {
  async execute(data: ISaveTaskDTO): Promise<void> {
    const task = TaskAdapter.createEntity(data);

    await this.taskRepository.save(task);
  }
}
