/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Patch, Post, Req, Res } from '@nestjs/common';
import { CarService } from './car.service';
import { Request } from 'express';
import { Response } from 'express';

@Controller('car')
export class CarController {
    constructor(private readonly CarService: CarService){}
    @Post()
    async createCar(@Req() request:Request, @Res() response:Response){
        return await this.CarService.createCar(request,response);
    }
    @Get()
    async getAllCars(@Req() request:Request, @Res() response:Response){
        return await this.CarService.getAllCars(request,response);
    }

    @Get(':id')
    async getCar(@Req() request:Request, @Res() response:Response){
        return await this.CarService.getCar(request,response);
    }

    @Delete(':id')
    async deleteCar(@Req() request:Request, @Res() response:Response){
        return await this.CarService.deleteCar(request,response);
    }

    @Patch(':id')
    async updateCar(@Req() request:Request, @Res() response:Response){
        return await this.CarService.updateCar(request,response);
    }
}
