"use client"

// Hero section component
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-16 pb-12">
      {/* Subtle background glow behind headline area */}
      <div className="pointer-events-none absolute left-1/2 top-8 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc]/80 to-transparent blur-3xl" />
      
      {/* Main content */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          {/* Left: Status pill, Title and description */}
          <div className="max-w-2xl">
            {/* Status pill - subtle live indicator */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f0fdf4]/60 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22c55e]"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#166534]/80">Exchange service online</span>
            </div>
            
            <h1 className="mb-4 text-[2.75rem] font-bold leading-[1.02] tracking-[-0.04em] text-[#0f172a] sm:text-[3.5rem] lg:text-[4rem]">
              Exchange<br />
              everything.
            </h1>
            
            <p className="mb-1 text-lg font-medium text-[#334155] sm:text-xl">
              Crypto, cash and bank transfers.
            </p>
            <p className="text-[15px] text-[#64748b]">
              Transparent rates. No hidden steps. Real support.
            </p>
          </div>

          {/* Right: Live service indicators - aligned with subtitle */}
          <div className="flex flex-shrink-0 flex-col gap-2 pb-1 sm:flex-row sm:items-center lg:flex-col lg:items-end xl:flex-row xl:items-center xl:gap-2.5">
            {/* 50K+ completed exchanges */}
            <div className="flex items-center gap-2 rounded-lg border border-[#e2e8f0]/60 bg-white/50 px-3 py-2 backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#f0fdf4]">
                <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tracking-tight text-[#0f172a]">50K+</span>
                <span className="text-[11px] text-[#64748b]">completed exchanges</span>
              </div>
            </div>
            
            {/* 24/7 human support online */}
            <div className="flex items-center gap-2 rounded-lg border border-[#e2e8f0]/60 bg-white/50 px-3 py-2 backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#eff6ff]">
                <svg className="h-3.5 w-3.5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tracking-tight text-[#0f172a]">24/7</span>
                <span className="text-[11px] text-[#64748b]">human support online</span>
              </div>
            </div>
            
            {/* Avg response: 2 min */}
            <div className="flex items-center gap-2 rounded-lg border border-[#e2e8f0]/60 bg-white/50 px-3 py-2 backdrop-blur-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#fef3c7]">
                <svg className="h-3.5 w-3.5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[11px] text-[#64748b]">Avg response:</span>
                <span className="text-sm font-semibold tracking-tight text-[#0f172a]">2 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
