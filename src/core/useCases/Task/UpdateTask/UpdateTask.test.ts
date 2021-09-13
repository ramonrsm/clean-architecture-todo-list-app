import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import NotFoundException from "@exceptions/NotFoundException";
import TaskAdapter from "@adapters/Task/TaskAdapter";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";
import UpdateTaskUseCase from "./UpdateTaskUseCase";

describe("Update task use case in memory", () => {
  test("Should not found task", () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const updateTask = new UpdateTaskUseCase(taskRepository);

    const result = updateTask.execute("7a4110ae-4204-4e36-9713-10c371a2c342", { done: true });

    expect(result).rejects.toThrow(NotFoundException);
  });

  test("Should update task", async () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const taskId = "7a4110ae-4204-4e36-9713-10c371a2c342";

    const newTask = TaskAdapter.create({ id: taskId, todo: "Study SOLID" });

    await taskRepository.save(newTask);

    const updateTask = new UpdateTaskUseCase(taskRepository);

    await updateTask.execute(taskId, { done: true });

    const task = await taskRepository.findById(taskId);

    expect(task?.done).toBe(true);
  });
});
