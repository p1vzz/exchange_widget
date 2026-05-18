"use client"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] via-[#fafbfc] to-white border-b border-[#e2e8f0]">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute right-[20%] top-[20%] h-[300px] w-[300px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.5) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute left-[30%] top-[40%] h-[200px] w-[200px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main content with proper spacing */}
      <div className="relative mx-auto max-w-[1400px] px-6 pt-28 pb-10 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start gap-5">
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </div>
            <span className="text-sm font-medium text-[#475569]">Exchange service</span>
            <span className="text-sm text-[#94a3b8]">—</span>
            <span className="text-sm font-semibold text-[#0f172a]">50K+ trades</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-[#0f172a] sm:text-5xl lg:text-[3.5rem]">
            Exchange <span className="bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8] bg-clip-text text-transparent">everything.</span>
          </h1>
          
          {/* Value prop */}
          <p className="max-w-xl text-base text-[#475569] leading-relaxed">
            Crypto, cash and bank transfers. Transparent rates. No hidden steps. Real support.
          </p>
          
          {/* Trust metrics row */}
          <div className="flex flex-wrap items-center gap-6 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0fdf4]">
                <svg className="h-4 w-4 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">50K+</p>
                <p className="text-xs text-[#64748b]">exchanges</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff]">
                <svg className="h-4 w-4 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">24/7</p>
                <p className="text-xs text-[#64748b]">human support</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#faf5ff]">
                <svg className="h-4 w-4 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0f172a]">2 min</p>
                <p className="text-xs text-[#64748b]">avg response</p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#converter" 
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#1a1f2e] px-7 text-sm font-semibold text-white shadow-lg shadow-[#1a1f2e]/20 transition-all hover:bg-[#0f1219] hover:shadow-xl"
            >
              Start exchange
            </a>
            <a 
              href="#how-it-works" 
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-6 text-sm font-medium text-[#334155] shadow-sm transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
            >
              How it works
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
