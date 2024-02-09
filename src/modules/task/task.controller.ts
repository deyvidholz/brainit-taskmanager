import { Request, Response } from 'express';
import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '../../../core/decorators/controller';
import { BaseController } from '../../global/base-controller';
import { TaskService } from './task.service';

@Controller('/tasks')
export default class TaskController extends BaseController {
  protected service: TaskService = new TaskService();

  @Get('/:id')
  findOne = async (req: Request, res: Response) => {
    super.findOne(req, res);
  };

  @Get('/')
  find = async (req: Request, res: Response) => {
    super.find(req, res);
  };

  @Post('/')
  create = async (req: Request, res: Response) => {
    super.create(req, res);
  };

  @Put('/:id')
  update = async (req: Request, res: Response) => {
    super.update(req, res);
  };

  @Patch('/:id/finish')
  setAsFinished = async (req: Request, res: Response) => {
    return this.handle({
      method: () => this.service.setAsFinished(req.params?.id),
      res,
    });
  };

  @Delete('/:id')
  delete = async (req: Request, res: Response) => {
    super.delete(req, res);
  };
}
