/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { HumanService } from 'src/human/human.service';
import mongoose from 'mongoose';


@Injectable()
export class CarService {
    constructor(private readonly HumanService: HumanService ) {}

    async createCar(req,res){
        try{
            // const newDriver = await this.HumanService.createDriver();
            // const newCar = await Car.create({
            //     _id: new mongoose.Types.ObjectId(),
            //     name: req.body.name,
            //     brand: req.body.brand,
            //     driver: newDriver._id
            // });
            const newCar = await Car.create(req.body);
        
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
            const cars = await Car.find();
        
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
            const car = await Car.findById(id);

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
            const car = await Car.findByIdAndDelete(id);
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
            const car = await Car.findByIdAndUpdate(id, req.body, {
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
