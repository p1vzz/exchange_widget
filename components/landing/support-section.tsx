"use client"

import { Button } from "@/components/ui/button"

const channels = [
  { name: "Telegram", handle: "@exchange_support", icon: "T", color: "#0088cc" },
  { name: "WhatsApp", handle: "+380 XX XXX", icon: "W", color: "#25D366" },
  { name: "Email", handle: "support@exchange.com", icon: "@", color: "#3b82f6" },
]

export function SupportSection() {
  return (
    <section id="support" className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white py-28 lg:py-40">
      {/* Subtle gradient */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.3) 0%, transparent 60%)' }} />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left Content */}
          <div>
            <span className="mb-6 inline-block rounded-full bg-[#ecfdf5] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#047857]">
              Live support
            </span>
            <h2 className="mb-6 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
              Support is
              <br />
              <span className="text-[#94a3b8]">not hidden.</span>
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-[#64748b]">
              Ask questions before or during the exchange. Real humans respond, not bots.
            </p>

            {/* Channels - vertical stack */}
            <div className="mb-10 space-y-3">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-4 transition-all hover:shadow-lg"
                >
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white shadow-md"
                    style={{ backgroundColor: channel.color }}
                  >
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#0f172a]">{channel.name}</p>
                    <p className="text-sm text-[#64748b]">{channel.handle}</p>
                  </div>
                  <svg className="h-5 w-5 text-[#cbd5e1] transition-all group-hover:translate-x-1 group-hover:text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              ))}
            </div>

            <Button className="h-14 rounded-2xl bg-[#0f172a] px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1e293b] hover:shadow-xl">
              Contact support
            </Button>
          </div>

          {/* Right: Chat preview - more realistic */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[36px] border border-dashed border-[#e2e8f0] opacity-50" />
            
            <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white shadow-2xl shadow-black/[0.08]">
              {/* Chat header */}
              <div className="flex items-center justify-between border-b border-[#f1f5f9] bg-[#fafafa] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10b981] text-sm font-bold text-white">
                      S
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#10b981]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a]">Support</p>
                    <p className="text-xs text-[#10b981]">Online now</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-[#ecfdf5] px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#10b981]" />
                  <span className="text-xs font-medium text-[#047857]">2 min avg</span>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 p-6">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-md bg-[#0f172a] px-4 py-3 text-white">
                    <p className="text-sm">Can I receive USD cash in Kyiv?</p>
                    <p className="mt-1 text-right text-[10px] text-white/50">14:32</p>
                  </div>
                </div>

                {/* Support message */}
                <div className="flex items-end gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-xs font-bold text-white">
                    S
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3">
                    <p className="text-sm text-[#334155]">Yes! Select USDT → USD Cash, choose Kyiv as pickup location. After you create the request, we&apos;ll confirm the exact address and your pickup code.</p>
                    <p className="mt-1 text-[10px] text-[#94a3b8]">14:33</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-xs font-bold text-white">
                    S
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8]" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8]" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-[#94a3b8]" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-[#f1f5f9] bg-[#fafafa] px-6 py-4">
                <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white px-4 py-3">
                  <span className="text-sm text-[#94a3b8]">Type a message...</span>
                  <svg className="ml-auto h-5 w-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
