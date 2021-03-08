import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Block, BlockResponseModel } from 'src/models/models';
import { getLastBlockNumber, getBlock } from 'src/utils/processor';

@Injectable()
export class BlockService {
  async getLatestBlockNumber(): Promise<string> {
    return `Last block: #${await getLastBlockNumber()}`;
  }

  async getBlock(blockId: number): Promise<BlockResponseModel> {
    try {
      const block: Block = await getBlock(blockId);
      const blockResponse: BlockResponseModel = {
        ...block,
        transactionCount: block.transactions.length,
      };

      return blockResponse;
    } catch (err) {
      throw new HttpException(
        'Unexpected error.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
