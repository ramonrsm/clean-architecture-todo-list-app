import Task from "@core/entities/Task";

export default interface ITaskRepository {
  save(task: Task): Promise<void>;

  findById(id: string): Promise<Task | undefined>;

  find(): Promise<Task[] | []>;

  update(id: string, data: Task): Promise<void>;

  delete(id: string): Promise<void>;
}
