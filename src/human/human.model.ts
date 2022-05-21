import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Human extends Document {
  @Prop({ required: true, type: String })
  name: string;
}

export const HumanSchema = SchemaFactory.createForClass(Human);
