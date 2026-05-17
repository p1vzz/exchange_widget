"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroWidgetProps {
  initialPair?: { from: string; to: string }
}

const CURRENCY_DATA: Record<string, { symbol: string; name: string; network?: string; color: string; icon: string }> = {
  USDT: { symbol: "USDT", name: "Tether", network: "TRC20", color: "#26a17b", icon: "₮" },
  BTC: { symbol: "BTC", name: "Bitcoin", color: "#f7931a", icon: "₿" },
  Cash: { symbol: "Cash", name: "USD / EUR", color: "#22c55e", icon: "$" },
  UAH: { symbol: "UAH", name: "Privat24", color: "#1e3a5f", icon: "iP" },
  Card: { symbol: "Card", name: "Bank transfer", color: "#1e3a5f", icon: "💳" },
}

const RATES: Record<string, number> = {
  "USDT-UAH": 43.3,
  "USDT-Card": 43.1,
  "BTC-UAH": 2650000,
  "BTC-Card": 2640000,
  "Cash-USDT": 1.02,
  "Cash-UAH": 44.2,
}

export function HeroWidget({ initialPair }: HeroWidgetProps) {
  const [sendCurrency, setSendCurrency] = useState(initialPair?.from || "USDT")
  const [receiveCurrency, setReceiveCurrency] = useState(initialPair?.to || "UAH")
  const [sendAmount, setSendAmount] = useState("230.00")
  const [countdown, setCountdown] = useState(30) // 30 seconds
  const [rateRefreshed, setRateRefreshed] = useState(false)
  
  const rateKey = `${sendCurrency}-${receiveCurrency}`
  const rate = RATES[rateKey] || 43.3
  const numericAmount = parseFloat(sendAmount.replace(/,/g, '') || "0")
  const receiveAmount = (numericAmount * rate).toFixed(2)

  // Update pair when initialPair changes
  useEffect(() => {
    if (initialPair) {
      setSendCurrency(initialPair.from)
      setReceiveCurrency(initialPair.to)
      setCountdown(30) // Reset timer on pair change
    }
  }, [initialPair])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Refresh rate (simulate)
          setRateRefreshed(true)
          setTimeout(() => setRateRefreshed(false), 500)
          return 30
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Calculate timer color - gray to red (30 seconds)
  const getTimerColor = useCallback(() => {
    if (countdown <= 5) return "#ef4444" // red
    if (countdown <= 10) return "#f97316" // orange
    return "#9ca3af" // gray
  }, [countdown])

  // Calculate progress for circular timer (30 seconds)
  const progress = (countdown / 30) * 100
  const strokeDasharray = 2 * Math.PI * 8 // circumference
  const strokeDashoffset = strokeDasharray * (1 - progress / 100)

  const sendData = CURRENCY_DATA[sendCurrency] || CURRENCY_DATA.USDT
  const receiveData = CURRENCY_DATA[receiveCurrency] || CURRENCY_DATA.UAH

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Send Section - compact */}
      <div className="px-5 pb-2 pt-4">
        <p className="mb-1.5 text-sm font-medium text-[#6b7280]">Send</p>
        
        <div className="flex items-center justify-between gap-3">
          <button className="group flex items-center gap-2 rounded-xl border border-transparent px-1 py-0.5 transition-colors hover:border-[#f0f0f0] hover:bg-[#fafafa]">
            <div 
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: sendData.color }}
            >
              <span className="text-base font-bold text-white">{sendData.icon}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base font-semibold text-[#0f0f0f]">{sendData.symbol}</span>
              {sendData.network && (
                <span className="hidden text-sm text-[#9ca3af] sm:inline">{sendData.name} {sendData.network}</span>
              )}
              <ChevronDown className="h-4 w-4 text-[#9ca3af]" />
            </div>
          </button>
          
          <input
            type="text"
            value={sendAmount}
            onChange={(e) => setSendAmount(e.target.value)}
            className="w-24 text-right text-2xl font-semibold tracking-tight text-[#0f0f0f] outline-none sm:w-28"
            placeholder="0.00"
          />
        </div>
        
        {/* Min/Max - gray labels, accent values */}
        <div className="mt-1.5 flex items-center justify-between text-sm">
          <span className="text-[#9ca3af]">Min <button className="font-medium text-[#26a17b] hover:underline">230.00</button></span>
          <span className="text-[#9ca3af]">Max <button className="font-medium text-[#26a17b] hover:underline">230000.06</button></span>
        </div>
      </div>

      {/* Swap Divider - compact */}
      <div className="relative flex items-center justify-center py-0.5">
        <div className="absolute inset-x-0 h-px bg-[#f0f0f0]" />
        <button className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#9ca3af] shadow-sm transition-all hover:border-[#d4d4d4] hover:text-[#6b7280] hover:shadow-md">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        </button>
      </div>

      {/* Receive Section - compact */}
      <div className="px-5 pb-2 pt-1.5">
        <p className="mb-1.5 text-sm font-medium text-[#6b7280]">Receive</p>
        
        <div className="flex items-center justify-between gap-3">
          <button className="group flex items-center gap-2 rounded-xl border border-transparent px-1 py-0.5 transition-colors hover:border-[#f0f0f0] hover:bg-[#fafafa]">
            <div 
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ backgroundColor: receiveData.color }}
            >
              <span className="text-sm font-bold text-white">{receiveData.icon}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-base font-semibold text-[#0f0f0f]">{receiveData.symbol}</span>
              <span className="hidden text-sm text-[#9ca3af] sm:inline">{receiveData.name}</span>
              <ChevronDown className="h-4 w-4 text-[#9ca3af]" />
            </div>
          </button>
          
          <span className={`text-2xl font-semibold tracking-tight text-[#0f0f0f] transition-opacity sm:text-[1.625rem] ${rateRefreshed ? 'opacity-50' : ''}`}>
            {Number(receiveAmount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </span>
        </div>
        
        {/* Reserve & Rate with countdown timer */}
        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-[#9ca3af]">Reserve <button className="font-medium text-[#26a17b] hover:underline">230000.00</button></span>
          <div className="flex items-center gap-2 rounded-full bg-[#f8f8f8] px-2.5 py-1">
            {/* Circular countdown timer - icon only, no text */}
            <div className="relative h-4 w-4 flex-shrink-0">
              <svg className="h-4 w-4 -rotate-90" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <circle 
                  cx="10" 
                  cy="10" 
                  r="8" 
                  fill="none" 
                  stroke={getTimerColor()} 
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000"
                />
              </svg>
            </div>
            <span className="text-[#525252]">Rate</span>
            <span className="font-medium text-[#0f0f0f]">1 {sendData.symbol} = {rate} {receiveData.symbol}</span>
          </div>
        </div>
      </div>

      {/* CTA Button - pushed to bottom */}
      <div className="mt-auto px-5 pb-4 pt-2">
        <Button className="h-11 w-full rounded-2xl bg-[#1a1f2e] text-base font-semibold text-white shadow-lg shadow-[#1a1f2e]/20 transition-all hover:bg-[#0f1219] hover:shadow-xl hover:shadow-[#1a1f2e]/25">
          Start exchange
        </Button>
      </div>
    </div>
  )
}
