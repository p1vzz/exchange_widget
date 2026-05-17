"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, CheckCircle2 } from "lucide-react"

interface SuccessScreenProps {
  code: string
  onNewRequest: () => void
}

export function SuccessScreen({ code, onNewRequest }: SuccessScreenProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#a6f2ac]">
        <Check className="h-10 w-10 text-[#01ab26]" />
      </div>

      {/* Header */}
      <h2 className="text-xl font-semibold text-[#0c0c0c]">Successful withdrawal</h2>
      <p className="mt-2 text-sm text-[#6d6d6d]">Your cash withdrawal request has been confirmed</p>

      {/* Code Card */}
      <div className="mt-8 w-full rounded-lg border border-[#e0e0e0] bg-white p-6">
        <p className="mb-4 text-sm text-[#6d6d6d]">Your pickup code</p>
        <div className="mb-6 rounded-lg bg-[#f4f4f4] px-8 py-6">
          <p className="font-mono text-4xl font-bold tracking-[0.25em] text-[#0c0c0c]">{code}</p>
        </div>
        <Button
          variant="outline"
          onClick={handleCopy}
          className="h-12 w-full gap-2 border-[#e0e0e0] text-sm font-medium text-[#0c0c0c] hover:bg-[#f4f4f4]"
        >
          {copied ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-[#01ab26]" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy code
            </>
          )}
        </Button>
      </div>

      {/* Status Badge */}
      <div className="mt-6 flex items-center gap-2 rounded-full bg-[#a6f2ac] px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-[#01ab26]" />
        <span className="text-sm font-medium text-[#01ab26]">Ready for pickup</span>
      </div>

      {/* Instructions */}
      <div className="mt-6 w-full rounded-lg bg-[#f4f4f4] p-4">
        <p className="text-sm text-[#6d6d6d]">
          Show this code at the cash desk to receive your funds. Please bring a valid ID document.
        </p>
      </div>

      {/* New Request Button */}
      <Button
        variant="outline"
        onClick={onNewRequest}
        className="mt-6 h-12 w-full border-[#e0e0e0] text-sm font-medium text-[#0c0c0c] hover:bg-[#f4f4f4]"
      >
        New Withdrawal Request
      </Button>
    </div>
  )
}
