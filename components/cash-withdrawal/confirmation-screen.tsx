"use client"

import { Button } from "@/components/ui/button"
import { MapPin, User, Phone, MessageCircle, AlertTriangle } from "lucide-react"
import type { WithdrawalData } from "./index"

interface ConfirmationScreenProps {
  data: WithdrawalData
  onConfirm: () => void
  onEdit: () => void
}

export function ConfirmationScreen({ data, onConfirm, onEdit }: ConfirmationScreenProps) {
  const commission = 0.015
  const amountNum = parseFloat(data.amount) || 0
  const receiveAmount = (amountNum * (1 - commission)).toFixed(2)

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-[#0c0c0c]">Confirm Request</h1>
        <p className="mt-1 text-sm text-[#6d6d6d]">Review your cash withdrawal details</p>
      </div>

      {/* Summary Card */}
      <div className="rounded-lg border border-[#e0e0e0] bg-white">
        {/* Amount Section */}
        <div className="border-b border-[#e0e0e0] p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#6d6d6d]">Amount</p>
              <p className="text-xl font-semibold text-[#0c0c0c]">{amountNum.toLocaleString()} USDT</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#6d6d6d]">You will receive</p>
              <p className="text-xl font-semibold text-[#0c0c0c]">{parseFloat(receiveAmount).toLocaleString()} {data.currency}</p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="border-b border-[#e0e0e0] p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#6d6d6d]">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">City</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.city}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#6d6d6d]">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Pickup location</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#6d6d6d]">
                <User className="h-4 w-4" />
                <span className="text-sm">Name</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#6d6d6d]">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Phone</span>
              </div>
              <span className="text-sm font-medium text-[#0c0c0c]">{data.phone}</span>
            </div>
            {data.telegram && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#6d6d6d]">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">Telegram</span>
                </div>
                <span className="text-sm font-medium text-[#0c0c0c]">{data.telegram}</span>
              </div>
            )}
          </div>
        </div>

        {/* Commission */}
        <div className="border-t border-[#e0e0e0] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#6d6d6d]">Service Commission</span>
            <span className="text-[#0c0c0c]">1.5%</span>
          </div>
        </div>
      </div>

      {/* Info Block */}
      <div className="flex gap-3 rounded-lg bg-[#fffcdd] p-4">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 text-[#e5a800]" />
        <div>
          <p className="text-sm font-medium text-[#8d660a]">What happens next?</p>
          <p className="mt-1 text-sm text-[#8d660a]/80">
            A manager will contact you via SMS or Telegram to confirm the details before payment.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Button onClick={onConfirm} className="h-14 w-full bg-[#0c0c0c] text-base font-medium text-white hover:bg-[#2c3030]">
          CONFIRM REQUEST
        </Button>
        <Button
          variant="outline"
          onClick={onEdit}
          className="h-12 w-full border-[#e0e0e0] text-sm font-medium text-[#0c0c0c] hover:bg-[#f4f4f4]"
        >
          Edit
        </Button>
      </div>
    </div>
  )
}
