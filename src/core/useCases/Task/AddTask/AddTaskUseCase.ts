import IAddTaskDTO from "@core/useCases/Task/AddTask/IAddTaskDTO";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskUseCase from "@core/useCases/Task/TaskUseCase";

export default class AddTaskUseCase extends TaskUseCase {
  execute(data: IAddTaskDTO): void {
    const task = TaskAdapter.create(data);

    this.taskRepository.add(task);
  }
}
