import {
  getPaginationObject,
  GetPaginationObjectParam,
} from '../../core/functions/helpers';
import { Repository } from 'typeorm';
import { ResourceNotFoundException } from './exceptions/resource-not-found.exception';
import paginationConfig from '../../src/configs/pagination.config';

export class BaseService {
  protected repository: Repository<any>;

  async findOne(id: string) {
    const response = await this.repository.findOne({ where: { id } });

    if (!response) {
      throw new ResourceNotFoundException();
    }

    return response;
  }

  async find(options?: FindParam) {
    const paginateOptions = getPaginationObject(options);
    const [items, qty] = await this.repository.findAndCount(paginateOptions);
    const totalPages = Math.ceil(
      qty / (options?.itemsPerPage || paginationConfig.defaultItemsPerPage)
    );

    return {
      ...options,
      totalPages,
      items,
    };
  }

  async create(payload: CreateParam) {
    return this.repository.save(payload);
  }

  async update(id: string, payload: UpdateParam) {
    await this.repository.update(id, payload);
    return this.repository.findOne({ where: { id } });
  }

  async delete(id: string) {
    this.repository.delete(id);
    return;
  }
}

type FindParam = Partial<GetPaginationObjectParam>;

type CreateParam = any;

type UpdateParam = any;
