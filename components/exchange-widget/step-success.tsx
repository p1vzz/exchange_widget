"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Copy, Clock, ArrowRight } from "lucide-react"
import { useState } from "react"
import type { ExchangeData } from "./index"

interface StepSuccessProps {
  data: ExchangeData
  requestId: string
  onNewExchange: () => void
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

export function StepSuccess({ data, requestId, onNewExchange }: StepSuccessProps) {
  const [copied, setCopied] = useState(false)

  const sendAmount = parseFloat(data.sendAmount) || 0
  const rate = rates[data.sendAsset?.id || ""]?.[data.receiveAsset?.id || ""] || 1
  const feePercent = 1.5
  const feeAmount = sendAmount * (feePercent / 100)
  const receiveAmount = (sendAmount - feeAmount) * rate

  const isCash = data.receiveAsset?.category === "cash"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(requestId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      {/* Success Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#dcfce7]">
        <CheckCircle2 className="h-10 w-10 text-[#22c55e]" />
      </div>

      {/* Title */}
      <div>
        <h3 className="text-2xl font-semibold text-[#0c0c0c]">Request created</h3>
        <p className="mt-2 max-w-sm text-sm text-[#6d6d6d]">
          Your request has been successfully created. Our operator will contact you shortly with further instructions.
        </p>
      </div>

      {/* Request ID Card */}
      <div className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
        <p className="mb-2 text-sm text-[#6d6d6d]">Request ID</p>
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono text-xl font-semibold text-[#0c0c0c]">{requestId}</span>
          <button
            onClick={handleCopy}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#6d6d6d] transition-colors hover:bg-[#e5e7eb] hover:text-[#0c0c0c]"
            title="Copy to clipboard"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        {copied && (
          <p className="mt-2 text-xs text-[#22c55e]">Copied to clipboard</p>
        )}
      </div>

      {/* Status Badge */}
      <div className="flex items-center gap-2 rounded-full bg-[#fef3c7] px-4 py-2">
        <Clock className="h-4 w-4 text-[#d97706]" />
        <span className="text-sm font-medium text-[#92400e]">Waiting for instructions</span>
      </div>

      {/* Exchange Summary */}
      <div className="w-full overflow-hidden rounded-xl border border-[#e5e7eb] bg-white">
        <div className="border-b border-[#e5e7eb] bg-[#f9fafb] px-5 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-[#6d6d6d]">Exchange Summary</p>
        </div>
        <div className="flex flex-col gap-3 p-5">
          {/* Exchange Direction */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="flex items-center gap-2">
              <div 
                className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold"
                style={{ backgroundColor: data.sendAsset?.color }}
              >
                {data.sendAsset?.code.slice(0, 2)}
              </div>
              <span className="font-medium">{data.sendAsset?.code}</span>
            </div>
            <ArrowRight className="h-4 w-4 text-[#9ca3af]" />
            <div className="flex items-center gap-2">
              <div 
                className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold"
                style={{ backgroundColor: data.receiveAsset?.color }}
              >
                {data.receiveAsset?.code.slice(0, 2)}
              </div>
              <span className="font-medium">{data.receiveAsset?.code}</span>
            </div>
          </div>

          <div className="h-px bg-[#e5e7eb]" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6d6d6d]">You send</span>
            <span className="text-sm font-medium text-[#0c0c0c]">
              {sendAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} {data.sendAsset?.code}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6d6d6d]">You receive</span>
            <span className="text-sm font-medium text-[#0c0c0c]">
              {receiveAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })} {data.receiveAsset?.code}
            </span>
          </div>
          {isCash && data.city && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6d6d6d]">Pickup city</span>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.city}</span>
            </div>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <Button
          className="h-14 flex-1 rounded-xl bg-[#0c0c0c] text-base font-medium text-white hover:bg-[#1f1f1f]"
        >
          View request
        </Button>
        <Button
          variant="outline"
          onClick={onNewExchange}
          className="h-14 flex-1 rounded-xl border-[#e5e7eb] text-[#6d6d6d] hover:bg-[#f3f4f6] hover:text-[#0c0c0c]"
        >
          New exchange
        </Button>
      </div>
    </div>
  )
}
