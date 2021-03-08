import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthzService {
  getHealthz(): string {
    return 'OK';
  }
}
