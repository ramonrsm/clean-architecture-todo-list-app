import AddTaskUseCase from "@useCases/Task/AddTask/AddTaskUseCase";
import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";

describe("Add Task Use Case", () => {
  test("Should add task in memory", () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const addTaskUseCase = new AddTaskUseCase(taskRepository);

    addTaskUseCase.execute({ todo: "Study English" });

    const tasks = taskRepository.getAll();

    expect(tasks).resolves.toHaveLength(1);
  });
});
