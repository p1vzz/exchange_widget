"use client"

import { Spinner } from "@/components/ui/spinner"

export function ProcessingScreen() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      {/* Loader */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4f4f4]">
        <Spinner className="h-10 w-10 text-[#0c0c0c]" />
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold text-[#0c0c0c]">Processing...</h2>
      <p className="mt-3 max-w-[320px] text-sm text-[#6d6d6d]">
        Please wait for confirmation via SMS or Telegram
      </p>

      {/* Status indicator */}
      <div className="mt-6 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-[#e5a800]" />
        <span className="text-xs text-[#6d6d6d]">Creating your request...</span>
      </div>
    </div>
  )
}
