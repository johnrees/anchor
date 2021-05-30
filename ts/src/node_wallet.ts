import { Keypair } from "@solana/web3.js";

export const payer = Keypair.fromSecretKey(
  Buffer.from(
    JSON.parse(
      require("fs").readFileSync(
        require("os").homedir() + "/.config/solana/id.json",
        {
          encoding: "utf-8",
        }
      )
    )
  )
);
