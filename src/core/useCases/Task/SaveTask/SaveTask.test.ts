import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import SaveTaskUseCase from "@core/useCases/Task/SaveTask/SaveTaskUseCase";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";

describe("Add task use case in memory", () => {
  test("Should add task", async () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const saveTaskUseCase = new SaveTaskUseCase(taskRepository);

    saveTaskUseCase.execute({ todo: "Study English" });

    const tasks = await taskRepository.find();

    expect(tasks).toHaveLength(1);
  });
});
