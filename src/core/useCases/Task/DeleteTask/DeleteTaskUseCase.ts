import NotFoundException from "@exceptions/NotFoundException";
import TaskUseCase from "@core/useCases/Task/TaskUseCase";

export default class DeleteTaskUseCase extends TaskUseCase {
  async execute(id: string): Promise<void> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException(`Task com o id: '${id}' não encontrada.`);
    }

    await this.taskRepository.delete(id);
  }
}
