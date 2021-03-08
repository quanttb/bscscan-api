import { Controller, Get, Param } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockResponseModel } from 'src/models/models';

@Controller('block')
export class BlockController {
  constructor(private blockService: BlockService) {}

  // @Get()
  // async getLatestBlockNumber(): Promise<string> {
  //   return await this.blockService.getLatestBlockNumber();
  // }

  @Get(':id')
  async getBlock(@Param() params): Promise<BlockResponseModel> {
    const blockId = params.id;

    return await this.blockService.getBlock(blockId);
  }
}
