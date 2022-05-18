/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car.model';


@Injectable()
export class CarService {
    constructor(@InjectModel('Car') private readonly CarModel: Model<Car> ) {}

    async createCar(req,res){
        try{
            const newCar = await this.CarModel.create(req.body);
        
            return res.json({
                status: 'success',
                data: newCar
            });
        }catch(err){
            return res.json({
                status: 'failed',
                message: err.message
            });
        }
    }

    async getAllCars(req,res){
        try{
            const cars = await this.CarModel.find();
        
            return res.json({
                status: 'success',
                data: cars
            });
        }catch(err){
            return res.json({
                status: 'failed',
                message: err.message
            });
        }
    }

    async getCar(req,res){
        try{
            const id = req.params.id;
            const car = await this.CarModel.findById(id);

            if(!car){
                throw new Error('Car not found!')
            }
        
            return res.json({
                status: 'success',
                data: car
            });
        }catch(err){
            return res.json({
                status: 'failed',
                message: err.message
            });
        }
    }


    async deleteCar(req,res){
        try{
            const id = req.params.id;
            const car = await this.CarModel.findByIdAndDelete(id);
            if(!car){
                throw new Error('Car not found!')
            }
        
            return res.json({
                status: 'success',
                data: car
            });
        }catch(err){
            return res.json({
                status: 'failed',
                message: err.message
            });
        }
    }

    async updateCar(req,res){
        try{
            const id = req.params.id;
            const car = await this.CarModel.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });
            if(!car){
                throw new Error('Car not found!')
            }
        
            return res.json({
                status: 'success',
                data: car
            });
        }catch(err){
            return res.json({
                status: 'failed',
                message: err.message
            });
        }
    }

}
