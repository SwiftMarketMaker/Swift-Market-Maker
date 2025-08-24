# Swift Market Maker ($SMM) — Auto Buyback Engine

![Solana](https://img.shields.io/badge/solana-mainnet-purple)  
![Status](https://img.shields.io/badge/status-experimental-orange)  
![License](https://img.shields.io/badge/license-MIT-green)

Swift Market Maker ($SMM) is a **self-sustaining PumpFun coin**.  
Every creator reward is automatically routed into $SMM buybacks, fueling a perpetual flywheel:

**trading → rewards → auto-buybacks → stronger $SMM**

---

## 🚀 Features
- **Auto Buybacks** — listens for incoming creator rewards (SOL) and swaps them into $SMM via Jupiter  
- **Live Stats API** — exposes `/api/stats` with totals (SOL collected, $SMM bought back, recent buys)  
- **Front-End Integration** — plug directly into a v0.dev site to display real-time buyback data  
- **Configurable Strategy** — set thresholds, slippage, and destination wallet in `.env`

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/swift-market-maker.git
cd swift-market-maker
