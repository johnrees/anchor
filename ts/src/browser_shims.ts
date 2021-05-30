import { Keypair } from "@solana/web3.js";

export default () => {
  console.log("excluded from browser build");
};

export const payer = Keypair.generate();
