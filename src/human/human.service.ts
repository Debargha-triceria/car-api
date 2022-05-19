/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { Human } from './human.model';

@Injectable()
export class HumanService {


    async createDriver(){
        try{
            const newDriver = Human.create({
                _id: new mongoose.Types.ObjectId(),
                name: 'Driver'});
            return newDriver;
        }catch(err){
            return {
                message: 'error at creating human'
            }
        }

    }
}
