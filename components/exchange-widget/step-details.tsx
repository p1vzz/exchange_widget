"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, Info, Clock } from "lucide-react"
import type { ExchangeData } from "./index"

interface StepDetailsProps {
  data: ExchangeData
  updateData: (updates: Partial<ExchangeData>) => void
  onNext: () => void
  onBack: () => void
}

// Exchange rates (simplified)
const rates: Record<string, Record<string, number>> = {
  usdt_trc20: { usd_cash: 1.007, eur_cash: 0.93, uah_cash: 41.20, usd_bank: 1.005, btc: 0.000015, paypal: 0.98 },
  usdt_erc20: { usd_cash: 1.005, eur_cash: 0.92, uah_cash: 41.00, usd_bank: 1.003, btc: 0.000015, paypal: 0.97 },
  btc: { usdt_trc20: 67000, usd_cash: 66800, eur_cash: 61500, uah_cash: 2750000 },
  eth: { usdt_trc20: 3200, usd_cash: 3180, usd_bank: 3170 },
  usd: { usd_cash: 1.00, uah_cash: 41.00, btc: 0.000015 },
  eur: { usd_cash: 1.08, uah_cash: 44.50 },
  uah: { usd_cash: 0.024, usdt_trc20: 0.024 },
}

export function StepDetails({ data, updateData, onNext, onBack }: StepDetailsProps) {
  const [error, setError] = useState("")
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes

  // Rate timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 120))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const sendAmount = parseFloat(data.sendAmount) || 0
  const rate = rates[data.sendAsset?.id || ""]?.[data.receiveAsset?.id || ""] || 1
  const feePercent = 1.5
  const feeAmount = sendAmount * (feePercent / 100)
  const receiveAmount = (sendAmount - feeAmount) * rate

  const isCash = data.receiveAsset?.category === "cash"

  const handleAmountChange = (value: string) => {
    updateData({ sendAmount: value })
    setError("")
  }

  const handleContinue = () => {
    if (!data.sendAmount || parseFloat(data.sendAmount) <= 0) {
      setError("Please enter a valid amount")
      return
    }
    onNext()
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold text-[#0c0c0c]">Exchange details</h3>
        <p className="mt-1 text-sm text-[#6d6d6d]">Enter amount and review your exchange</p>
      </div>

      {/* Amount Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">Amount</label>
        <div className="relative">
          <Input
            type="number"
            placeholder="0.00"
            value={data.sendAmount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className={`h-14 rounded-xl bg-white pr-24 text-lg ${error ? "border-[#ef4444]" : "border-[#e5e7eb]"}`}
          />
          <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
            <div 
              className="flex h-6 w-6 items-center justify-center rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: data.sendAsset?.color }}
            >
              {data.sendAsset?.code.slice(0, 1)}
            </div>
            <span className="font-medium text-[#0c0c0c]">{data.sendAsset?.code}</span>
          </div>
        </div>
        {error && <p className="mt-2 text-sm text-[#ef4444]">{error}</p>}
      </div>

      {/* Summary Card */}
      <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
        {/* Timer */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] bg-[#f9fafb] px-5 py-3">
          <span className="text-sm text-[#6d6d6d]">Rate updates in</span>
          <div className="flex items-center gap-2">
            {/* Circular Progress */}
            <div className="relative h-6 w-6">
              <svg className="h-6 w-6 -rotate-90 transform">
                <circle
                  cx="12" cy="12" r="10"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <circle
                  cx="12" cy="12" r="10"
                  fill="none"
                  stroke="#0c0c0c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={62.83}
                  strokeDashoffset={62.83 * (1 - timeLeft / 120)}
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-[#0c0c0c]">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* You Send */}
        <div className="border-b border-[#e5e7eb] p-5">
          <p className="mb-1 text-sm text-[#6d6d6d]">You send</p>
          <p className="text-2xl font-semibold text-[#0c0c0c]">
            {sendAmount > 0 ? sendAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"} {data.sendAsset?.code}
          </p>
        </div>

        {/* You Receive */}
        <div className="border-b border-[#e5e7eb] p-5">
          <p className="mb-1 text-sm text-[#6d6d6d]">You receive</p>
          <div className="inline-block rounded-lg bg-[#fef9c3] px-4 py-2">
            <span className="text-2xl font-semibold text-[#0c0c0c]">
              {sendAmount > 0 ? receiveAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"} {data.receiveAsset?.code}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6d6d6d]">Rate</span>
            <span className="text-sm font-medium text-[#0c0c0c]">
              1 {data.sendAsset?.code} = {rate.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {data.receiveAsset?.code}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6d6d6d]">Fee</span>
            <span className="text-sm font-medium text-[#0c0c0c]">Included ({feePercent}%)</span>
          </div>
          {isCash && data.city && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6d6d6d]">City</span>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.city}</span>
            </div>
          )}
        </div>
      </div>

      {/* Info Block */}
      <div className="flex gap-3 rounded-xl bg-[#f3f4f6] p-4">
        <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#6d6d6d]" />
        <p className="text-sm text-[#6d6d6d]">
          Final details may be confirmed by the operator. Exchange rates may vary slightly.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onBack}
          className="h-14 gap-2 rounded-xl border-[#e5e7eb] px-6 text-[#6d6d6d] hover:bg-[#f3f4f6] hover:text-[#0c0c0c]"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={handleContinue}
          className="h-14 flex-1 rounded-xl bg-[#0c0c0c] text-base font-medium text-white hover:bg-[#1f1f1f]"
        >
          Create request
        </Button>
      </div>
    </div>
  )
}
