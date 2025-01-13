## Copy trading bot

A copy trading bot on Solana automatically tracks and mimics the trades of a specific trader's wallet. It monitors the trader's transactions (like buying or selling tokens) and automatically executes the same actions in your wallet in real-time. The bot allows you to follow experienced traders without manually managing trades, copying their buys and sells on the Solana blockchain.

Supported on Raydium, Jupiter and Pumpfun

### Bot Features

- Track Token Swaps: Continuously monitors every token swap on the Solana network to identify the best opportunities.
- Trade Across Multiple DEXs: Swap tokens on any supported decentralized exchange according to your preferences.
- Automatic Trades: Let the bot automatically buy and sell based on your customized strategy, so you don’t have to lift a finger.
- Customizable Trading Strategy: Tailor your own trading approach to fit your risk tolerance and goals.
- Multi-Wallet Support: Set up and manage multiple wallets, executing trades on each at the same time.

### Enhanced websocket

```json
{
  "jsonrpc": "2.0",
  "id": 420,
  "method": "transactionSubscribe",
  "params": [
      {
        "vote": false,
        "failed": false,
        "signature": "2dd5zTLrSs2udfNsegFRCnzSyQcPrM9svX6m1UbEM5bSdXXFj3XpqaodtKarLYFP2mTVUsV27sRDdZCgcKhjeD9S",
        "accountInclude": ["pqx3fvvh6b2eZBfLhTtQ5KxzU3CginmgGTmDCjk8TPP"],
        "accountExclude": ["FbfwE8ZmVdwUbbEXdq4ofhuUEiAxeSk5kaoYrJJekpnZ"],
        "accountRequired": ["As1XYY9RdGkjs62isDhLKG3yxMCMatnbanXrqU85XvXW"]
      },
      {
	"commitment": "processed",
    	"encoding": "base64",
    	"transactionDetails": "full",
    	"showRewards": true,
    	"maxSupportedTransactionVersion": 0
      }
  ]
}
```

# 👤 Author
### Telegram: [Vladmeer](https://t.me/vladmeer67)   
https://t.me/vladmeer67
