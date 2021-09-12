import Task from '@core/entities/Task';

export default interface ITaskRepository {
  add(task: Task): Promise<void>;
  
  getAll(): Promise<Task[]>;

  rename(id: string): Promise<void>;

  remove(id: string): Promise<void>;
};
