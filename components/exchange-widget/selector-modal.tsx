"use client"

import { useState, useMemo } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronRight, Check } from "lucide-react"
import type { Asset } from "./index"

interface SelectorPopoverProps {
  selectedAsset: Asset | null
  onSelect: (asset: Asset) => void
  title: string
  assets: Asset[]
  filterCategories?: string[]
  hasError?: boolean
  placeholder?: string
}

const categoryLabels: Record<string, string> = {
  all: "All",
  crypto: "Crypto",
  fiat: "Fiat",
  banks: "Banks",
  ewallets: "E-wallets",
  cash: "Cash",
}

const categoryColors: Record<string, string> = {
  crypto: "#f7931a",
  fiat: "#22c55e",
  banks: "#3b82f6",
  ewallets: "#8b5cf6",
  cash: "#10b981",
}

export function SelectorPopover({
  selectedAsset,
  onSelect,
  title,
  assets,
  filterCategories = ["all", "crypto", "fiat", "banks", "ewallets", "cash"],
  hasError = false,
  placeholder = "Select currency or payment method",
}: SelectorPopoverProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["crypto"])

  const filteredAssets = useMemo(() => {
    let result = assets
    if (activeFilter !== "all") {
      result = result.filter((a) => a.category === activeFilter)
    }
    if (search.trim()) {
      const query = search.toLowerCase()
      result = result.filter(
        (a) =>
          a.code.toLowerCase().includes(query) ||
          a.name.toLowerCase().includes(query)
      )
    }
    return result
  }, [assets, activeFilter, search])

  const groupedAssets = useMemo(() => {
    const groups: Record<string, Asset[]> = {}
    filteredAssets.forEach((asset) => {
      if (!groups[asset.category]) groups[asset.category] = []
      groups[asset.category].push(asset)
    })
    return groups
  }, [filteredAssets])

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleSelect = (asset: Asset) => {
    onSelect(asset)
    setOpen(false)
    setSearch("")
    setActiveFilter("all")
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setSearch("")
      setActiveFilter("all")
    }
  }

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <PopoverPrimitive.Trigger asChild>
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-xl border-2 bg-white p-4 text-left transition-all hover:border-[#c2c2c2] ${
            hasError
              ? "border-[#ef4444]"
              : selectedAsset
              ? "border-[#0c0c0c]"
              : "border-[#e5e7eb]"
          }`}
        >
          {selectedAsset ? (
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-white font-bold"
                style={{ backgroundColor: selectedAsset.color }}
              >
                {selectedAsset.code.slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-[#0c0c0c]">{selectedAsset.code}</p>
                <p className="text-sm text-[#6d6d6d]">{selectedAsset.name}</p>
              </div>
            </div>
          ) : (
            <span className="text-[#9ca3af]">{placeholder}</span>
          )}
          <ChevronRight className="h-5 w-5 text-[#9ca3af]" />
        </button>
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side="bottom"
          align="center"
          sideOffset={10}
          collisionPadding={16}
          className="z-50 flex flex-col rounded-2xl bg-white"
          style={{
            width: "var(--radix-popover-trigger-width)",
            height: "90vh",
            filter:
              "drop-shadow(0 0 1px rgba(0,0,0,0.18)) drop-shadow(0 12px 40px rgba(0,0,0,0.13))",
          }}
        >
          {/* Arrow pointing toward the trigger button */}
          <PopoverPrimitive.Arrow
            width={22}
            height={11}
            className="fill-white"
          />

          {/* Inner wrapper handles overflow/rounding so the arrow stays visible */}
          <div className="flex flex-col overflow-hidden rounded-2xl flex-1">
            {/* Header */}
            <div className="flex-shrink-0 border-b border-[#e5e7eb] px-5 py-4">
              <p className="text-base font-semibold text-[#0c0c0c]">{title}</p>
            </div>

            {/* Search */}
            <div className="flex-shrink-0 border-b border-[#e5e7eb] px-5 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]" />
                <Input
                  placeholder="Search currencies..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 border-[#e5e7eb] bg-[#f9fafb] pl-10 focus:bg-white"
                  autoFocus
                />
              </div>
            </div>

            {/* Filter chips */}
            <div className="flex-shrink-0 flex gap-2 overflow-x-auto border-b border-[#e5e7eb] px-5 py-3 scrollbar-none">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    activeFilter === cat
                      ? "bg-[#0c0c0c] text-white"
                      : "bg-[#f3f4f6] text-[#6d6d6d] hover:bg-[#e5e7eb]"
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>

            {/* Scrollable asset list */}
            <div className="flex-1 overflow-y-auto">
              {Object.keys(groupedAssets).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-sm text-[#6d6d6d]">No currencies found</p>
                </div>
              ) : (
                <div className="divide-y divide-[#e5e7eb]">
                  {Object.entries(groupedAssets).map(([category, categoryAssets]) => (
                    <div key={category}>
                      {/* Category accordion header */}
                      <button
                        type="button"
                        onClick={() => toggleCategory(category)}
                        className="flex w-full items-center justify-between bg-[#f9fafb] px-5 py-3 text-left transition-colors hover:bg-[#f3f4f6]"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor:
                                categoryColors[category] || "#6d6d6d",
                            }}
                          />
                          <span className="text-sm font-medium text-[#0c0c0c]">
                            {categoryLabels[category]}
                          </span>
                          <span className="text-xs text-[#9ca3af]">
                            {categoryAssets.length}
                          </span>
                        </div>
                        {expandedCategories.includes(category) ? (
                          <ChevronDown className="h-4 w-4 text-[#9ca3af]" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-[#9ca3af]" />
                        )}
                      </button>

                      {/* Asset rows */}
                      {expandedCategories.includes(category) && (
                        <div className="bg-white">
                          {categoryAssets.map((asset) => (
                            <button
                              key={asset.id}
                              type="button"
                              onClick={() => handleSelect(asset)}
                              className={`flex w-full items-center gap-4 px-5 py-3 text-left transition-colors hover:bg-[#f9fafb] ${
                                selectedAsset?.id === asset.id
                                  ? "bg-[#f3f4f6]"
                                  : ""
                              }`}
                            >
                              <div
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold"
                                style={{
                                  backgroundColor:
                                    asset.color ||
                                    categoryColors[asset.category] ||
                                    "#6d6d6d",
                                }}
                              >
                                {asset.icon || asset.code.slice(0, 2)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-[#0c0c0c]">
                                  {asset.code}
                                </p>
                                <p className="truncate text-sm text-[#6d6d6d]">
                                  {asset.name}
                                </p>
                              </div>
                              {selectedAsset?.id === asset.id && (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0c0c0c]">
                                  <Check className="h-3.5 w-3.5 text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
