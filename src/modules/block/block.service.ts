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
      const blockResponse: BlockResponseModel = {
        ...(await getBlock(blockId)),
        transactions: '',
        uncles: '',
      };

      return blockResponse;
    } catch (err) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
