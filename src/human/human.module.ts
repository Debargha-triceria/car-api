import { Module } from '@nestjs/common';
import { HumanService } from './human.service';

@Module({
  providers: [HumanService],
  exports: [HumanService],
})
export class HumanModule {}
