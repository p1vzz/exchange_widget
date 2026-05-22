"use client"

// Hero section component
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-white pt-20 pb-12">
      {/* Subtle gradient orbs for depth */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#22c55e]/8 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-12 h-64 w-64 rounded-full bg-gradient-to-bl from-[#3b82f6]/8 to-transparent blur-3xl" />

      {/* Main content - compact two-column layout */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left: Title and description */}
          <div className="max-w-2xl">
            <h1 className="mb-3 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0f172a] sm:text-5xl lg:text-[3.25rem]">
              Exchange{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#0f172a] via-[#334155] to-[#64748b] bg-clip-text text-transparent">everything.</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#22c55e] via-[#10b981] to-[#22c55e]/50" />
              </span>
            </h1>
            
            <p className="mb-2 text-xl font-medium text-[#334155] sm:text-[1.35rem]">
              Crypto, cash and bank transfers.
            </p>
            <p className="text-base text-[#64748b]">
              Transparent rates. No hidden steps. Real support.
            </p>
          </div>

          {/* Right: Trust metrics - refined cards */}
          <div className="flex flex-shrink-0 items-center gap-3 lg:gap-4">
            {/* 50K+ exchanges */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all hover:border-[#22c55e]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#dcfce7] to-[#f0fdf4]">
                <svg className="h-5 w-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-[#0f172a]">50K+</p>
                <p className="text-xs font-medium text-[#64748b]">exchanges</p>
              </div>
            </div>
            
            {/* 24/7 support */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all hover:border-[#3b82f6]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#dbeafe] to-[#eff6ff]">
                <svg className="h-5 w-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-[#0f172a]">24/7</p>
                <p className="text-xs font-medium text-[#64748b]">human support</p>
              </div>
            </div>
            
            {/* 2 min response */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all hover:border-[#06b6d4]/30 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#cffafe] to-[#ecfeff]">
                <svg className="h-5 w-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-[#0f172a]">2 min</p>
                <p className="text-xs font-medium text-[#64748b]">avg response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
