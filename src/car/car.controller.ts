import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private readonly CarService: CarService) {}
  @Post()
  async createCar(@Body() dto: { name: string; brand: string }) {
    return await this.CarService.createCar(dto.name, dto.brand);
  }
  @Get()
  async getAllCars() {
    return await this.CarService.getAllCars();
  }

  @Get(':id')
  async getCar(@Param() params) {
    return await this.CarService.getCar(params);
  }

  @Delete(':id')
  async deleteCar(@Param() params) {
    return await this.CarService.deleteCar(params);
  }

  @Patch(':id')
  async updateCar(@Body() body, @Param() params) {
    return await this.CarService.updateCar(body, params);
  }
}
