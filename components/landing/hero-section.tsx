"use client"

// Hero section component
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#fafbfc] to-white pt-24 pb-16">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main content - compact two-column layout */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left: Title and description */}
          <div className="max-w-xl">
            <h1 className="mb-2 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[2rem]">
              Exchange{" "}
              <span className="bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8] bg-clip-text text-transparent">everything.</span>
            </h1>
            
            <p className="mb-1 text-base font-medium text-[#334155]">
              Crypto, cash and bank transfers.
            </p>
            <p className="text-sm text-[#64748b]">
              Transparent rates. No hidden steps. Real support.
            </p>
          </div>

          {/* Right: Trust metrics in one horizontal row */}
          <div className="flex flex-shrink-0 items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0fdf4]">
                <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">50K+</p>
                <p className="text-[11px] text-[#64748b]">exchanges</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1f5f9]">
                <svg className="h-3.5 w-3.5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">24/7</p>
                <p className="text-[11px] text-[#64748b]">human support</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0fdf4]">
                <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">2 min</p>
                <p className="text-[11px] text-[#64748b]">avg response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
