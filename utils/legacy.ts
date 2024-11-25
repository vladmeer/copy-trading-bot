import { Connection, VersionedTransaction } from "@solana/web3.js";
import { RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT } from "../constants";


interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}

export const execute = async (transaction: VersionedTransaction, latestBlockhash: Blockhash, isBuy: boolean = true) => {
  const solanaConnection = new Connection(RPC_ENDPOINT, {
    wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
  })

  console.log(1)
  const signature = await solanaConnection.sendRawTransaction(transaction.serialize(), { skipPreflight: true })
  console.log("🚀 ~ execute ~ signature:", `https://solscan.io/tx/${signature}`)
  const confirmation = await solanaConnection.confirmTransaction(
    {
      signature,
      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      blockhash: latestBlockhash.blockhash,
    }
  );
  console.log("🚀 ~ execute ~ confirmation:", confirmation)

  if (confirmation.value.err) {
    console.log("Confrimtaion error")
    return ""
  } else {
    if (isBuy)
      console.log(`Success in buy transaction: https://solscan.io/tx/${signature}`)
    else
      console.log(`Success in Sell transaction: https://solscan.io/tx/${signature}`)
  }
  return signature
}
