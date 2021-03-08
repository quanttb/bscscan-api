import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { getLastBlockNumber, getBlock } from 'src/utils/processor';

@Injectable()
export class BlockService {
  async getLatestBlockNumber(): Promise<string> {
    return `Last block: #${await getLastBlockNumber()}`;
  }

  async getBlock(blockId: number): Promise<any> {
    try {
      return JSON.stringify(await getBlock(blockId));
    } catch (err) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
