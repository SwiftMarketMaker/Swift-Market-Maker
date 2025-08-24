import { NextResponse } from "next/server"

// Mock data for demonstration - in production this would fetch from blockchain/database
export async function GET() {
  // Simulate some variation in the data
  const baseStats = {
    totalSolCollected: 1247.89 + Math.random() * 100,
    totalSmmBought: 892456.32 + Math.random() * 10000,
    latestBuyback: {
      amount: 20 + Math.random() * 50,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(), // Random time within last hour
    },
  }

  return NextResponse.json(baseStats)
}
