"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, AlertTriangle } from "lucide-react"
import type { WithdrawalData } from "./index"

interface CashWithdrawalFormProps {
  initialData: WithdrawalData
  onSubmit: (data: WithdrawalData) => void
}

const cities = [
  "Kyiv",
  "Kharkiv",
  "Odesa",
  "Dnipro",
  "Lviv",
  "Zaporizhzhia",
]



export function CashWithdrawalForm({ initialData, onSubmit }: CashWithdrawalFormProps) {
  const [formData, setFormData] = useState<WithdrawalData>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof WithdrawalData, string>>>({})

  const balance = 3455234.25
  const minAmount = 15
  const maxAmount = 29500
  const commission = 0.015 // 1.5%

  const feeAmount = formData.amount ? parseFloat(formData.amount) * commission : 0
  const calculatedReceive = formData.amount 
    ? (parseFloat(formData.amount) - feeAmount).toFixed(2) 
    : ""

  const handleChange = (field: keyof WithdrawalData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleMaxAmount = () => {
    const max = Math.min(balance, maxAmount)
    handleChange("amount", max.toString())
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof WithdrawalData, string>> = {}

    const amount = parseFloat(formData.amount)
    if (!formData.amount || amount <= 0) {
      newErrors.amount = "Please enter a valid amount"
    } else if (amount < minAmount) {
      newErrors.amount = `Minimum amount is ${minAmount} USDT`
    } else if (amount > maxAmount) {
      newErrors.amount = `Maximum amount is ${maxAmount} USDT`
    } else if (amount > balance) {
      newErrors.amount = "Amount exceeds available balance"
    }

    if (!formData.city) {
      newErrors.city = "Please select a city"
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter pickup location"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Wallet & Payment Method Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Wallet */}
        <div>
          <label className="mb-2 block text-sm text-[#6d6d6d]">Wallet</label>
          <div className="flex h-12 cursor-pointer items-center justify-between rounded-lg border border-[#e0e0e0] bg-white px-4 transition-colors hover:border-[#c2c2c2]">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#50af95]">
                <span className="text-xs font-bold text-white">$</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">USDT</span>
            </div>
            <ChevronDown className="h-4 w-4 text-[#6d6d6d]" />
          </div>
          <p className="mt-2 text-sm text-[#6d6d6d]">
            Balance: <span className="font-medium text-[#0c0c0c]">{balance.toLocaleString()}</span>
          </p>
        </div>

        {/* Payment Method - Fixed to Cash */}
        <div>
          <label className="mb-2 block text-sm text-[#6d6d6d]">Payment method</label>
          <div className="flex h-12 cursor-pointer items-center justify-between rounded-lg border border-[#e0e0e0] bg-white px-4 transition-colors hover:border-[#c2c2c2]">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0acf83]">
                <span className="text-xs font-bold text-white">C</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">Cash Pickup</span>
            </div>
            <ChevronDown className="h-4 w-4 text-[#6d6d6d]" />
          </div>
        </div>
      </div>

      {/* City & Location Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* City */}
        <div>
          <label className="mb-2 block text-sm text-[#6d6d6d]">City</label>
          <Select value={formData.city} onValueChange={(v) => handleChange("city", v)}>
            <SelectTrigger className={`h-12 bg-white ${errors.city ? "border-[#e42208]" : "border-[#e0e0e0]"}`}>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.city && <p className="mt-1 text-xs text-[#e42208]">{errors.city}</p>}
        </div>

        {/* Pickup Location */}
        <div>
          <label className="mb-2 block text-sm text-[#6d6d6d]">Pickup location</label>
          <Input
            placeholder="Address or landmark"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className={`h-12 bg-white ${errors.location ? "border-[#e42208]" : "border-[#e0e0e0]"}`}
          />
          {errors.location && <p className="mt-1 text-xs text-[#e42208]">{errors.location}</p>}
        </div>
      </div>

      {/* Amount */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm text-[#6d6d6d]">Amount</label>
          <span className="text-sm text-[#6d6d6d]">Limit {minAmount}-{maxAmount.toLocaleString()} USDT</span>
        </div>
        <div className="relative">
          <Input
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            className={`h-12 bg-white pr-20 ${errors.amount ? "border-[#e42208]" : "border-[#e0e0e0]"}`}
          />
          <button
            type="button"
            onClick={handleMaxAmount}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-[#0c0c0c] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#363a3a]"
          >
            MAX
          </button>
        </div>
        {errors.amount && <p className="mt-1 text-xs text-[#e42208]">{errors.amount}</p>}
      </div>

      {/* Payout Currency - Fixed USD */}
      <div>
        <label className="mb-2 block text-sm text-[#6d6d6d]">Payout currency</label>
        <div className="flex h-12 items-center gap-3 rounded-lg border border-[#e0e0e0] bg-white px-4">
          <span className="text-base">🇺🇸</span>
          <span className="font-medium text-[#0c0c0c]">USD</span>
          <span className="text-[#6d6d6d]">US Dollar</span>
        </div>
      </div>

      {/* Exchange Summary Block - Horizontal */}
      <div className="rounded-xl bg-[#f6f7f8] p-5">
        <p className="mb-4 text-xs font-medium uppercase tracking-wide text-[#868686]">Exchange details</p>
        
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* You Send - Left */}
          <div>
            <p className="mb-2 text-sm text-[#6d6d6d]">You send</p>
            <p className="text-xl font-semibold text-[#0c0c0c]">
              {formData.amount ? Number(formData.amount).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"} USDT
            </p>
            <p className="mt-2 text-xs text-[#868686]">Includes fee (1.5%)</p>
          </div>

          {/* Arrow Divider */}
          <div className="flex items-center justify-center text-[#c2c2c2]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* You Get - Right */}
          <div className="text-right">
            <p className="mb-2 text-sm text-[#6d6d6d]">You get</p>
            <div className="inline-block rounded-lg bg-[#fffc8d] px-4 py-2">
              <span className="text-xl font-semibold text-[#0c0c0c]">
                {calculatedReceive ? Number(calculatedReceive).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "—"} USD
              </span>
            </div>
          </div>
        </div>

        {/* Exchange Rate - Footer */}
        <div className="mt-4 border-t border-[#e0e0e0] pt-3">
          <p className="text-center text-xs text-[#868686]">
            Rate: 1 USDT ≈ 1.00 USD
          </p>
        </div>
      </div>

      {/* Warning Info Block - Light Yellow */}
      <div className="flex gap-3 rounded-lg bg-[#fffcdd] p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#8d660a]" />
        <div className="text-sm text-[#4e4d4b]">
          <p>Please note, payments may take from a few minutes up to 7 hours.</p>
          <p className="mt-1">Funds may be received from other persons.</p>
          <p className="mt-1">Payments are processed from 07:00 to 23:59</p>
        </div>
      </div>

      {/* Submit Button - Dark */}
      <Button 
        type="submit" 
        className="h-14 w-full bg-[#0c0c0c] text-base font-medium text-white transition-colors hover:bg-[#363a3a]"
      >
        Continue
      </Button>
    </form>
  )
}
