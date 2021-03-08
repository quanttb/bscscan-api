import { Module } from '@nestjs/common';
import { HealthzController } from './healthz.controller';
import { HealthzService } from './healthz.service';

@Module({
  imports: [],
  controllers: [HealthzController],
  providers: [HealthzService],
})
export class HealthzModule {}
