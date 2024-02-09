import dataSource from '../../connection';
import { Task } from './task.entity';

export const taskRepository = dataSource.getRepository(Task);
