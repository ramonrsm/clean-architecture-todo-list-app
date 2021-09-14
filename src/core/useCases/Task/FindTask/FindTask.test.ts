/* eslint-disable no-magic-numbers */
import TaskAdapter from "@adapters/Task/TaskAdapter";
import DatabaseInMemory from "@infrastructure/database/DatabaseInMemory";
import TaskRepositoryInMemory from "@infrastructure/repositories/TaskRepository/TaskRepositoryInMemory";

describe("Update task use case in memory", () => {
  test("Should find zero tasks", () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const tasks = taskRepository.find();

    expect(tasks).resolves.toHaveLength(0);
  });

  test("Should find all tasks", async () => {
    const database = new DatabaseInMemory();

    const taskRepository = new TaskRepositoryInMemory(database);

    const taskId = "7a4110ae-4204-4e36-9713-10c371a2c342";

    const newTask = TaskAdapter.create({ id: taskId, todo: "Study JavaScript" });

    await taskRepository.save(newTask);

    const tasks = taskRepository.find();

    expect(tasks).resolves.toHaveLength(1);
  });
});
