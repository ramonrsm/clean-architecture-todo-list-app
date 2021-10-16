import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import SaveTaskUseCase from "@core/useCases/Task/SaveTask/SaveTaskUseCase";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";
import TaskRepositorySQL from "@infrastructure/repositories/TaskRepository/TaskRepositorySQL";
import Client from "@infrastructure/prisma/client";

const ONE_TASK = 1;

describe("Add task use case in memory", () => {
  test("Should add task", async () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const saveTaskUseCase = new SaveTaskUseCase(taskRepository);

    saveTaskUseCase.execute({ todo: "Study English" });

    const tasks = await taskRepository.find();

    expect(tasks).toHaveLength(ONE_TASK);
  });
});

describe("Add task use case in SQL", () => {
  test("Should add task", async () => {
    const database = await Client.instance("test");

    const taskRepository = new TaskRepositorySQL(database);

    const saveTaskUseCase = new SaveTaskUseCase(taskRepository);

    saveTaskUseCase.execute({ todo: "Study English" });

    const tasks = await taskRepository.find();

    expect(tasks).toHaveLength(ONE_TASK);
  });
});
