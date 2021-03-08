import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlockModule } from './modules/block/block.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { HealthzModule } from './modules/healthz/healthz.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthzModule,
    BlockModule,
    TransactionModule,
  ],
})
export class AppModule {}
