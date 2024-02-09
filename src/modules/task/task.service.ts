import { Repository } from 'typeorm';
import { BaseService } from '../../global/base-service';
import { Task } from './task.entity';
import { taskRepository } from './task.repository';
import { ResourceNotFoundException } from '../../global/exceptions/resource-not-found.exception';

export class TaskService extends BaseService {
  protected repository: Repository<Task> = taskRepository;

  async setAsFinished(id: string) {
    const task = await this.repository.findOne({ where: { id } });

    if (!task) throw new ResourceNotFoundException();

    task.isFinished = true;
    await this.repository.save(task);
    return task;
  }
}
