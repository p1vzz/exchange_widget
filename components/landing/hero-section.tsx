"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-auto h-[180px] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#fafbfc] to-white pb-8 pt-8 border-b border-[#cbd5e1]">
      {/* Premium layered gradients - aurora effect */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute right-[10%] top-[0%] h-[900px] w-[900px] animate-pulse-soft rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.45) 0%, rgba(167, 243, 208, 0.15) 35%, transparent 60%)' }}
        />
        <div 
          className="absolute right-[30%] top-[15%] h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(196, 181, 253, 0.35) 0%, rgba(196, 181, 253, 0.1) 40%, transparent 55%)' }}
        />
        <div 
          className="absolute right-[5%] top-[30%] h-[450px] w-[450px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 50%)' }}
        />
        <div 
          className="absolute left-[10%] bottom-[10%] h-[350px] w-[350px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(253, 224, 71, 0.25) 0%, transparent 50%)' }}
        />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-[180px] max-w-[1400px] items-center px-6 pb-0 pt-0 lg:px-12 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-1 lg:gap-0">
          
          {/* Left: Editorial content - compact */}
          <div className="relative z-10 max-w-4xl">
            {/* Trust badge */}
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-sm font-medium text-[#475569]">Exchange service</span>
              <span className="text-sm text-[#94a3b8]">—</span>
              <span className="text-sm font-semibold text-[#0f172a]">50K+ trades</span>
            </div>
            
            {/* Headline - compact */}
            <h1 className="mb-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-3xl">
              Exchange
              <br />
              <span className="bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8] bg-clip-text text-transparent">everything.</span>
            </h1>
            
            {/* Value prop - compact */}
            <p className="mb-1.5 text-sm font-medium text-[#334155]">
              Crypto, cash and bank transfers.
            </p>
            <p className="mb-3 text-sm text-[#64748b]">
              Transparent rates. No hidden steps. Real support.
            </p>
            
            {/* Trust metrics - inline, compact */}
            <div className="mb-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f0fdf4]">
                  <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a]">50K+</p>
                  <p className="text-[10px] text-[#64748b]">exchanges</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eff6ff]">
                  <svg className="h-3.5 w-3.5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a]">24/7</p>
                  <p className="text-[10px] text-[#64748b]">human support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#faf5ff]">
                  <svg className="h-3.5 w-3.5 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a]">2 min</p>
                  <p className="text-[10px] text-[#64748b]">avg response</p>
                </div>
              </div>
            </div>

            {/* CTA buttons - compact */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="#converter" 
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#1a1f2e] px-6 text-sm font-semibold text-white shadow-md shadow-[#1a1f2e]/20 transition-all hover:bg-[#0f1219] hover:shadow-lg"
              >
                Start exchange
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e2e8f0] bg-white px-5 text-sm font-medium text-[#334155] shadow-sm transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
              >
                How it works
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />
    </section>
  )
}
