import { Module } from '@nestjs/common';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';

@Module({
  imports: [],
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
