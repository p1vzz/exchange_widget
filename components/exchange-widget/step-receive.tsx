"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { SelectorPopover } from "./selector-modal"
import type { ExchangeData, Asset } from "./index"
import { ALL_RECEIVE_ASSETS } from "@/lib/currencies"

interface StepReceiveProps {
  data: ExchangeData
  updateData: (updates: Partial<ExchangeData>) => void
  onNext: () => void
  onBack: () => void
}

const cities = ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv", "Zaporizhzhia"]

// Filter logic based on send asset
function getAvailableReceiveAssets(sendAsset: Asset | null): Asset[] {
  if (!sendAsset) return []
  
  // If sending crypto, can receive anything except same asset
  if (sendAsset.category === "crypto") {
    return ALL_RECEIVE_ASSETS.filter(a => a.id !== sendAsset.id)
  }

  // If sending fiat, can receive crypto or different fiat methods
  return ALL_RECEIVE_ASSETS.filter(a =>
    a.category === "crypto" || 
    (a.code !== sendAsset.code)
  )
}

export function StepReceive({ data, updateData, onNext, onBack }: StepReceiveProps) {
  const [error, setError] = useState("")

  const availableAssets = useMemo(() => 
    getAvailableReceiveAssets(data.sendAsset), 
    [data.sendAsset]
  )

  const isCash = data.receiveAsset?.category === "cash"

  const handleSelect = (asset: Asset) => {
    updateData({ receiveAsset: asset, city: "" })
    setError("")
  }

  const handleCityChange = (city: string) => {
    updateData({ city })
    setError("")
  }

  const handleContinue = () => {
    if (!data.receiveAsset) {
      setError("Please select what you want to receive")
      return
    }
    if (isCash && !data.city) {
      setError("Please select a city for cash pickup")
      return
    }
    onNext()
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Summary of Step 1 */}
      <div className="flex items-center gap-3 rounded-xl bg-[#f3f4f6] p-4">
        <div 
          className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold"
          style={{ backgroundColor: data.sendAsset?.color }}
        >
          {data.sendAsset?.code.slice(0, 2)}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6d6d6d]">You send:</span>
          <span className="font-semibold text-[#0c0c0c]">{data.sendAsset?.code}</span>
        </div>
        <ArrowRight className="ml-auto h-4 w-4 text-[#9ca3af]" />
      </div>

      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold text-[#0c0c0c]">What do you want to receive?</h3>
        <p className="mt-1 text-sm text-[#6d6d6d]">Select a currency or payment method</p>
      </div>

      {/* Selector */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">You receive</label>
        <SelectorPopover
          selectedAsset={data.receiveAsset}
          onSelect={handleSelect}
          title="Select what you receive"
          assets={availableAssets}
          filterCategories={["all", "crypto", "ewallets", "banks", "cash"]}
          hasError={!!error && !data.receiveAsset}
        />
      </div>

      {/* City Selector - Only for Cash */}
      {isCash && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-200">
          <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">City</label>
          <Select value={data.city} onValueChange={handleCityChange}>
            <SelectTrigger 
              className={`h-14 rounded-xl bg-white ${
                error && !data.city ? "border-[#ef4444]" : "border-[#e5e7eb]"
              }`}
            >
              <SelectValue placeholder="Select city for pickup" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Error */}
      {error && <p className="text-sm text-[#ef4444]">{error}</p>}

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
          Show exchange details
        </Button>
      </div>

    </div>
  )
}
