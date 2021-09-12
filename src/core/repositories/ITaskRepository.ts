import Task from '@core/entities/Task';

export default interface ITaskRepository {
  add(task: Task): Promise<void>;
  
  getAll(): Promise<Task[]>;

  update(id: string, data: Task): Promise<void>;

  remove(id: string): Promise<void>;
};
