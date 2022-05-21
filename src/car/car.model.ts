import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Human } from 'src/human/human.model';

@Schema()
export class Car extends Document {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  brand: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Human' })
  driver: Human;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Human' })
  codriver: Human;
}

export const CarSchema = SchemaFactory.createForClass(Car);
