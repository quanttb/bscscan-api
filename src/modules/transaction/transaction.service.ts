import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionResponseModel } from 'src/models/models';
import { getTransaction } from 'src/utils/processor';

@Injectable()
export class TransactionService {
  async getTransaction(
    transactionHash: string,
  ): Promise<TransactionResponseModel> {
    try {
      const transaction: TransactionResponseModel = {
        ...(await getTransaction(transactionHash)),
      };

      return transaction;
    } catch (err) {
      throw new HttpException(
        'Unexpected error.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
