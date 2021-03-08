require('dotenv/config');

import { Block } from 'src/models/models';

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const fs = require('fs');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.CLIENT_URI,
);
const web3 = new Web3(provider);

export async function getLastBlockNumber(): Promise<number> {
  return await web3.eth.getBlockNumber();
}

export async function getBlock(blockId: number): Promise<Block> {
  const block = await web3.eth.getBlock(blockId, true);

  const returnBlock: Block = {
    ...block,
  };

  return returnBlock;
}
