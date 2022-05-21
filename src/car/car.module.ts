import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './car.model';
import { HumanModule } from 'src/human/human.module';
@Module({
  imports: [
    HumanModule,
    MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }]),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
