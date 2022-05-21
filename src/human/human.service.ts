/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Human } from './human.model';

@Injectable()
export class HumanService {
  constructor(
    @InjectModel('Human') private readonly HumanModel: Model<Human>,
  ) {}

  async addDriver() {
    try {
      const newHuman = await this.HumanModel.create({ name: 'Jack' });
      return newHuman._id;
    } catch (err) {
      return {
        status: 'failed',
        message: `error at creating human. ${err.message}`,
      };
    }
  }

  async findDriver(id) {
    try {
      const Human = await this.HumanModel.findById(id);
      return Human;
    } catch (err) {
      return {
        status: 'failed',
        message: `error at finding human. ${err.message}`,
      };
    }
  }
}
