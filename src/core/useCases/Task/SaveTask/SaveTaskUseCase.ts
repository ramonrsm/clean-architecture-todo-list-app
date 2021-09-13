import ISaveTaskDTO from "@core/useCases/Task/SaveTask/ISaveTaskDTO";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskUseCase from "@core/useCases/Task/TaskUseCase";

export default class SaveTaskUseCase extends TaskUseCase {
  execute(data: ISaveTaskDTO): void {
    const task = TaskAdapter.create(data);

    this.taskRepository.save(task);
  }
}
