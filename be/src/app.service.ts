import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DataDao } from './data.dao';
import { Data } from "./data.db";

@Injectable()
export class AppService {

  constructor(
    private readonly dataDao: DataDao
  ) { }


  async getAll() {
    return await this.dataDao.getAll();
  }

  async get(id: string) {
    return await this.dataDao.get(id);
  }

  async update(id: string, newState: Data) {
    return await this.dataDao.update(id, newState);
  }

  async delete(id: string) {
    return await this.dataDao.delete(id);
  }

  async create(data: { data: string }) {
    return await this.dataDao.create(data);
  }
}
