import { Controller, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionResponseModel } from 'src/models/models';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get(':transactionHash')
  async getTransaction(@Param() params): Promise<TransactionResponseModel> {
    const transactionHash = params.transactionHash;

    return await this.transactionService.getTransaction(transactionHash);
  }
}
