"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  TrendingUp,
  Repeat,
  Zap,
  Wallet,
  ArrowUpRight,
  Twitter,
  MessageCircle,
  BarChart3,
} from "lucide-react"

interface Stats {
  totalSolCollected: number
  totalSmmBought: number
  latestBuyback: {
    amount: number
    timestamp: string
  }
}

export default function SwiftMarketMakerLanding() {
  const [stats, setStats] = useState<Stats>({
    totalSolCollected: 0,
    totalSmmBought: 0,
    latestBuyback: {
      amount: 0,
      timestamp: new Date().toISOString(),
    },
  })

  // Simulate live data fetching
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats")
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        // Fallback to mock data for demo
        setStats({
          totalSolCollected: 1247.89,
          totalSmmBought: 892456.32,
          latestBuyback: {
            amount: 23.45,
            timestamp: new Date(Date.now() - 300000).toISOString(),
          },
        })
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num)
  }

  const formatTimeAgo = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime()
    const minutes = Math.floor(diff / 60000)
    return `${minutes}m ago`
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="animate-grid absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.1)_25px,rgba(59,130,246,0.1)_26px,transparent_27px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">$SMM</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Swift Market Maker
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            The coin that fuels itself
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
              Buy on PumpFun
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              Join Telegram
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Live Buyback Dashboard */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Buyback Dashboard</h2>
            <p className="text-muted-foreground text-lg">Real-time stats from the automated buyback system</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 animate-glow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Total SOL Collected</h3>
                  <p className="text-3xl font-bold text-primary">{formatNumber(stats.totalSolCollected)}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/40 transition-all duration-300 animate-glow">
                <CardContent className="p-6 text-center">
                  <Repeat className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Total $SMM Bought Back</h3>
                  <p className="text-3xl font-bold text-secondary">{formatNumber(stats.totalSmmBought)}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/40 transition-all duration-300 animate-glow">
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Latest Buyback</h3>
                  <p className="text-2xl font-bold text-accent">{formatNumber(stats.latestBuyback.amount)} $SMM</p>
                  <p className="text-sm text-muted-foreground mt-1">{formatTimeAgo(stats.latestBuyback.timestamp)}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Flywheel</h2>
            <p className="text-muted-foreground text-lg">How Swift Market Maker creates perpetual value</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trading Activity</h3>
              <p className="text-muted-foreground">Every trade generates creator rewards automatically</p>
            </motion.div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="h-8 w-8 text-secondary animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Repeat className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Conversion</h3>
              <p className="text-muted-foreground">Rewards instantly converted to $SMM purchases</p>
            </motion.div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supply Squeeze</h3>
              <p className="text-muted-foreground">Buybacks reduce supply, creating upward pressure</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="text-muted-foreground text-lg">Built for sustainable growth and community value</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur border-primary/20 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Total Supply</h3>
                  <p className="text-3xl font-bold mb-2">1B $SMM</p>
                  <p className="text-muted-foreground">Fixed supply with deflationary mechanics through buybacks</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur border-secondary/20 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Distribution</h3>
                  <p className="text-lg font-semibold mb-2">100% Fair Launch</p>
                  <p className="text-muted-foreground">No team allocation, no presale. Pure community-driven token</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur border-accent/20 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Creator Rewards</h3>
                  <p className="text-lg font-semibold mb-2">100% → Buybacks</p>
                  <p className="text-muted-foreground">All creator rewards automatically fuel the buyback mechanism</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Buy</h2>
            <p className="text-muted-foreground text-lg">Get started with $SMM in three simple steps</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Get Phantom Wallet</h3>
              <p className="text-muted-foreground">Download and set up your Solana wallet</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Load with SOL</h3>
              <p className="text-muted-foreground">Add Solana to your wallet for trading</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Repeat className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Swap for $SMM</h3>
              <p className="text-muted-foreground">Trade your SOL for $SMM on PumpFun</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
              Buy Now on PumpFun
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
            <p className="text-muted-foreground text-lg">Connect with fellow $SMM holders and stay updated</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 animate-glow bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 animate-glow bg-transparent"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 animate-glow bg-transparent"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Dexscreener
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Swift Market Maker automatically routes creator rewards into buybacks. Experimental project. Not financial
            advice. DYOR.
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="#" className="hover:text-secondary transition-colors">
              View buyback bot code on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
