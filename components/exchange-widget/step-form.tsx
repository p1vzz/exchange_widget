"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Info, ArrowRight } from "lucide-react"
import type { ExchangeData } from "./index"

interface StepFormProps {
  data: ExchangeData
  updateData: (updates: Partial<ExchangeData>) => void
  onSubmit: () => void
  onBack: () => void
}

export function StepForm({ data, updateData, onSubmit, onBack }: StepFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isCash = data.receiveAsset?.category === "cash"

  const handleChange = (field: keyof ExchangeData, value: string) => {
    updateData({ [field]: value })
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!data.senderPhone.trim()) {
      newErrors.senderPhone = "Phone number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      onSubmit()
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Compact Summary */}
      <div className="flex items-center gap-3 rounded-xl bg-[#f3f4f6] p-4">
        <div 
          className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: data.sendAsset?.color }}
        >
          {data.sendAsset?.code.slice(0, 2)}
        </div>
        <span className="font-medium text-[#0c0c0c]">{data.sendAsset?.code}</span>
        <ArrowRight className="h-4 w-4 text-[#9ca3af]" />
        <div 
          className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold"
          style={{ backgroundColor: data.receiveAsset?.color }}
        >
          {data.receiveAsset?.code.slice(0, 2)}
        </div>
        <span className="font-medium text-[#0c0c0c]">{data.receiveAsset?.name}</span>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-xl font-semibold text-[#0c0c0c]">Create request</h3>
        <p className="mt-1 text-sm text-[#6d6d6d]">Enter your contact details</p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        {/* Two columns for name and email on larger screens */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">Name</label>
            <Input
              placeholder="Your full name"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`h-12 rounded-xl bg-white ${errors.name ? "border-[#ef4444]" : "border-[#e5e7eb]"}`}
            />
            {errors.name && <p className="mt-1 text-xs text-[#ef4444]">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">Email</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`h-12 rounded-xl bg-white ${errors.email ? "border-[#ef4444]" : "border-[#e5e7eb]"}`}
            />
            {errors.email && <p className="mt-1 text-xs text-[#ef4444]">{errors.email}</p>}
          </div>
        </div>

        {/* Telegram */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">
            Telegram <span className="text-[#9ca3af]">(optional)</span>
          </label>
          <Input
            placeholder="@username"
            value={data.telegram}
            onChange={(e) => handleChange("telegram", e.target.value)}
            className="h-12 rounded-xl border-[#e5e7eb] bg-white"
          />
        </div>

        {/* Phone numbers in two columns */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Sender Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">Sender phone</label>
            <Input
              type="tel"
              placeholder="+380"
              value={data.senderPhone}
              onChange={(e) => handleChange("senderPhone", e.target.value)}
              className={`h-12 rounded-xl bg-white ${errors.senderPhone ? "border-[#ef4444]" : "border-[#e5e7eb]"}`}
            />
            {errors.senderPhone && <p className="mt-1 text-xs text-[#ef4444]">{errors.senderPhone}</p>}
          </div>

          {/* Recipient Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#0c0c0c]">
              Recipient phone <span className="text-[#9ca3af]">(optional)</span>
            </label>
            <Input
              type="tel"
              placeholder="+380"
              value={data.recipientPhone}
              onChange={(e) => handleChange("recipientPhone", e.target.value)}
              className="h-12 rounded-xl border-[#e5e7eb] bg-white"
            />
          </div>
        </div>

        {/* Cash Pickup Info */}
        {isCash && (
          <div className="flex gap-3 rounded-xl bg-[#fef3c7] p-4">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d97706]" />
            <div>
              <p className="text-sm font-medium text-[#92400e]">Cash pickup in {data.city}</p>
              <p className="mt-1 text-sm text-[#a16207]">
                Exact pickup location will be provided by the operator after confirmation.
              </p>
            </div>
          </div>
        )}
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
          onClick={handleSubmit}
          className="h-14 flex-1 rounded-xl bg-[#0c0c0c] text-base font-medium text-white hover:bg-[#1f1f1f]"
        >
          Submit request
        </Button>
      </div>
    </div>
  )
}
