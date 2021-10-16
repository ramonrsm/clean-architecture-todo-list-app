import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import DeleteTaskUseCase from "./DeleteTaskUseCase";
import NotFoundException from "@exceptions/NotFoundException";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";

describe("Delete task use case in memory", () => {
  test("Should not found task", () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

    const result = deleteTaskUseCase.execute("7a4110ae-4204-4e36-9713-10c371a2c342");

    expect(result).rejects.toThrow(NotFoundException);
  });

  test("Should delete task", async () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const taskId = "7a4110ae-4204-4e36-9713-10c371a2c342";

    const newTask = TaskAdapter.createEntity({ id: taskId, todo: "Study TypeScript" });

    await taskRepository.save(newTask);

    const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

    await deleteTaskUseCase.execute(taskId);

    const task = await taskRepository.findById(taskId);

    expect(task).toBeUndefined();
  });
});
