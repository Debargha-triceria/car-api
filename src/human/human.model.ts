/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const HumanSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true

    }
});

export const Human = mongoose.model('Human',HumanSchema);