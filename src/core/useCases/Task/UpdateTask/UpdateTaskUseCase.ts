import IUpdateTaskDTO from "./IUpdateTaskDTO";
import NotFoundException from "@exceptions/NotFoundException";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskUseCase from "@core/useCases/Task/TaskUseCase";

export default class UpdateTaskUseCase extends TaskUseCase {
  async execute(id: string, data: IUpdateTaskDTO): Promise<void> {
    const oldTask = await this.taskRepository.findById(id);

    if (!oldTask) {
      throw new NotFoundException(`Task com o id: '${id}' não encontrada.`);
    }

    const updatedTask = TaskAdapter.createEntity(Object.assign(oldTask, data));

    await this.taskRepository.update(id, updatedTask);
  }
}
