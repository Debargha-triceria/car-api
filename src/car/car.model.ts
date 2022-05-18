/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    brand:{
        type: String,
        required: true
    }
});

export interface Car{
    id: string,
    name: string,
    brand: string
}