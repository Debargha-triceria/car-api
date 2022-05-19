/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    brand:{
        type: String,
        required: true
    }
    // driver: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Human'
    // }
});

// export interface Car{
//     name: string,
//     brand: string,
//     driver: object
// }

export const Car = mongoose.model('Car',CarSchema);
