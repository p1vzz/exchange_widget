"use client"

import { useState } from "react"

export function FloatingSupportButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-2xl shadow-black/[0.15]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10b981] text-sm font-bold text-white">
                  S
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0f172a] bg-[#10b981]" />
              </div>
              <div>
                <p className="font-semibold text-white">Support</p>
                <p className="text-xs text-white/60">Usually replies in 2 min</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f5f9]">
                <svg className="h-7 w-7 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <p className="font-semibold text-[#0f172a]">Need help with your exchange?</p>
              <p className="mt-1 text-sm text-[#64748b]">
                Start a conversation below
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-[#f1f5f9] bg-[#fafafa] p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#10b981] focus:shadow-sm"
              />
              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10b981] text-white shadow-lg shadow-[#10b981]/25 transition-all hover:bg-[#059669]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-200 hover:scale-105 ${
          isOpen 
            ? "bg-[#0f172a] shadow-xl shadow-black/20" 
            : "bg-[#10b981] shadow-xl shadow-[#10b981]/30"
        }`}
      >
        {isOpen ? (
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
        )}
        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f59e0b] opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#f59e0b]" />
          </span>
        )}
      </button>
    </>
  )
}
