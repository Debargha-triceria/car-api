import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HumanSchema } from './human.model';
import { HumanService } from './human.service';
import { HumanController } from './human.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Human', schema: HumanSchema }]),
  ],
  providers: [HumanService],
  exports: [HumanService],
  controllers: [HumanController],
})
export class HumanModule {}
