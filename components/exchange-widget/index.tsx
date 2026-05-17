"use client"

import { useState } from "react"
import { StepSend } from "./step-send"
import { StepReceive } from "./step-receive"
import { StepDetails } from "./step-details"
import { StepForm } from "./step-form"
import { StepSuccess } from "./step-success"
import type { WidgetSettings } from "./settings-panel"

export type ExchangeStep = 1 | 2 | 3 | 4 | 5

export interface Asset {
  id: string
  code: string
  name: string
  category: "crypto" | "fiat" | "banks" | "ewallets" | "cash"
  icon?: string
  color?: string
}

export interface ExchangeData {
  sendAsset: Asset | null
  sendAmount: string
  receiveAsset: Asset | null
  city: string
  name: string
  email: string
  telegram: string
  senderPhone: string
  recipientPhone: string
}

const initialData: ExchangeData = {
  sendAsset: null,
  sendAmount: "",
  receiveAsset: null,
  city: "",
  name: "",
  email: "",
  telegram: "",
  senderPhone: "",
  recipientPhone: "",
}

interface ExchangeWidgetProps {
  settings?: WidgetSettings
}

export function ExchangeWidget({ settings }: ExchangeWidgetProps) {
  const [step, setStep] = useState<ExchangeStep>(1)
  const [data, setData] = useState<ExchangeData>(initialData)
  const [requestId, setRequestId] = useState("")

  const updateData = (updates: Partial<ExchangeData>) => {
    setData((prev) => ({ ...prev, ...updates }))
  }

  const goNext = () => {
    if (step < 5) setStep((step + 1) as ExchangeStep)
  }

  const goBack = () => {
    if (step > 1) setStep((step - 1) as ExchangeStep)
  }

  const handleSubmit = () => {
    setRequestId(`EX-${Date.now().toString(36).toUpperCase()}`)
    goNext()
  }

  const handleNewExchange = () => {
    setStep(1)
    setData(initialData)
    setRequestId("")
  }

  const sizeClasses = {
    compact: "text-sm",
    normal: "text-base",
    large: "text-lg",
  }

  const paddingClasses = {
    compact: "p-4",
    normal: "p-6",
    large: "p-8",
  }

  return (
    <div 
      className={`mx-auto w-full max-w-[800px] font-sans ${sizeClasses[settings?.size || "normal"]}`}
    >
      {/* Widget Container */}
      <div 
        className="overflow-hidden border border-[#e5e7eb] bg-white shadow-sm"
        style={{ borderRadius: `${settings?.borderRadius || 16}px` }}
      >
        {/* Header */}
        {step < 5 && (
          <div className="border-b border-[#e5e7eb] bg-[#fafafa] px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0c0c0c]">Exchange</h2>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      s === step 
                        ? "bg-[#0c0c0c]" 
                        : s < step 
                          ? "bg-[#22c55e]" 
                          : "bg-[#e5e7eb]"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-[#6d6d6d]">
                  Step {step} of 4
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={paddingClasses[settings?.size || "normal"]}>
          {step === 1 && (
            <StepSend
              data={data}
              updateData={updateData}
              onNext={goNext}
            />
          )}

          {step === 2 && (
            <StepReceive
              data={data}
              updateData={updateData}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 3 && (
            <StepDetails
              data={data}
              updateData={updateData}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 4 && (
            <StepForm
              data={data}
              updateData={updateData}
              onSubmit={handleSubmit}
              onBack={goBack}
            />
          )}

          {step === 5 && (
            <StepSuccess
              data={data}
              requestId={requestId}
              onNewExchange={handleNewExchange}
            />
          )}
        </div>
      </div>
    </div>
  )
}
