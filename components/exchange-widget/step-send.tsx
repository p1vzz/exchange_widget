"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SelectorPopover } from "./selector-modal"
import type { ExchangeData, Asset } from "./index"
import { SEND_ASSETS } from "@/lib/currencies"

interface StepSendProps {
  data: ExchangeData
  updateData: (updates: Partial<ExchangeData>) => void
  onNext: () => void
}

export function StepSend({ data, updateData, onNext }: StepSendProps) {
  const [error, setError] = useState("")

  const handleSelect = (asset: Asset) => {
    updateData({ sendAsset: asset, receiveAsset: null, city: "" })
    setError("")
  }

  const handleContinue = () => {
    if (!data.sendAsset) {
      setError("Please select what you want to send")
      return
    }
    onNext()
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold text-[#0c0c0c]">What do you want to send?</h3>
        <p className="mt-1 text-sm text-[#6d6d6d]">Select a currency or payment method</p>
      </div>

      {/* Selector */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">You send</label>
        <SelectorPopover
          selectedAsset={data.sendAsset}
          onSelect={handleSelect}
          title="Select what you send"
          assets={SEND_ASSETS}
          filterCategories={["all", "crypto", "fiat"]}
          hasError={!!error}
        />
        {error && <p className="mt-2 text-sm text-[#ef4444]">{error}</p>}
      </div>

      {/* CTA */}
      <Button
        onClick={handleContinue}
        className="h-14 w-full rounded-xl bg-[#0c0c0c] text-base font-medium text-white hover:bg-[#1f1f1f]"
      >
        Continue
      </Button>
    </div>
  )
}
