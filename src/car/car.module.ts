import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './car.model';
import { HumanModule } from 'src/human/human.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
    HumanModule,
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
