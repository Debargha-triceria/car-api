import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.model';
import { HumanService } from 'src/human/human.service';

@Injectable()
export class CarService {
  constructor(
    @InjectModel('Car') private readonly CarModel: Model<Car>,
    private readonly HumanService: HumanService,
  ) {}

  async createCar(name: string, brand: string) {
    try {
      const newDriverId = await this.HumanService.addDriver();
      const newCoDriverId = await this.HumanService.addDriver();
      const newCar = await this.CarModel.create({
        name: name,
        brand: brand,
        driver: newDriverId,
        codriver: newCoDriverId,
      });
      await (await newCar.populate('codriver')).populate('driver');

      return {
        status: 'success',
        data: newCar,
      };
    } catch (err) {
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }

  async getAllCars() {
    try {
      const cars = await this.CarModel.find();

      return {
        status: 'success',
        data: cars,
      };
    } catch (err) {
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }

  async getCar(params) {
    try {
      const car = await this.CarModel.findById(params.id);

      if (!car) {
        throw new Error('Car not found!');
      }

      return {
        status: 'success',
        data: car,
      };
    } catch (err) {
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }

  async deleteCar(params) {
    try {
      const car = await this.CarModel.findByIdAndDelete(params.id);
      if (!car) {
        throw new Error('Car not found!');
      }

      return {
        status: 'success',
        data: car,
      };
    } catch (err) {
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }

  async updateCar(body, params) {
    try {
      const car = await this.CarModel.findByIdAndUpdate(params.id, body, {
        new: true,
        runValidators: true,
      });
      if (!car) {
        throw new Error('Car not found!');
      }

      return {
        status: 'success',
        data: car,
      };
    } catch (err) {
      return {
        status: 'failed',
        message: err.message,
      };
    }
  }
}
