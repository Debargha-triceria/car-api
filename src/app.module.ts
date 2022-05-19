import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { HumanModule } from './human/human.module';

@Module({
  imports: [
    CarModule,
    MongooseModule.forRoot(
      'mongodb+srv://debargha:5OuY8tYNg0veqGOl@cluster0.lrqn1.mongodb.net/cars?retryWrites=true&w=majority',
    ),
    HumanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
