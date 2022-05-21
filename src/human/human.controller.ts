import { Controller, Post } from '@nestjs/common';
import { HumanService } from './human.service';

@Controller('human')
export class HumanController {
  constructor(private readonly HumanService: HumanService) {}

  @Post()
  async createHuman() {
    return this.HumanService.addDriver();
  }
}
