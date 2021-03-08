import { Controller, Get } from '@nestjs/common';
import { HealthzService } from './healthz.service';

@Controller('healthz')
export class HealthzController {
  constructor(private healthzService: HealthzService) {}

  @Get()
  getHealthz(): string {
    return this.healthzService.getHealthz();
  }
}
