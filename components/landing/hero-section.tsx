"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-[50svh] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#fafbfc] to-white pb-14 border-b border-[#cbd5e1]">
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
      <div className="relative mx-auto flex min-h-[50svh] max-w-[1400px] items-center px-6 pb-[88px] pt-[160px] lg:px-12 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left: Editorial content */}
          <div className="relative z-10 max-w-xl">
            {/* Trust badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
              </div>
              <span className="text-sm font-medium text-[#475569]">Exchange service</span>
              <span className="text-sm text-[#94a3b8]">—</span>
              <span className="text-sm font-semibold text-[#0f172a]">50K+ trades</span>
            </div>
            
            {/* Headline */}
            <h1 className="mb-5 text-[3.25rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[4rem] lg:text-[5rem]">
              Exchange
              <br />
              <span className="bg-gradient-to-r from-[#475569] via-[#64748b] to-[#94a3b8] bg-clip-text text-transparent">everything.</span>
            </h1>
            
            {/* Value prop */}
            <p className="mb-2.5 max-w-md text-xl font-medium leading-relaxed text-[#334155]">
              Crypto, cash and bank transfers.
            </p>
            <p className="mb-8 max-w-md text-lg text-[#64748b]">
              Transparent rates. No hidden steps. Real support.
            </p>
            
            {/* Trust metrics */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0fdf4]">
                  <svg className="h-4.5 w-4.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-[#0f172a]">50K+</p>
                  <p className="text-xs text-[#64748b]">exchanges</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff]">
                  <svg className="h-4.5 w-4.5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-[#0f172a]">24/7</p>
                  <p className="text-xs text-[#64748b]">human support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#faf5ff]">
                  <svg className="h-4.5 w-4.5 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-bold text-[#0f172a]">2 min</p>
                  <p className="text-xs text-[#64748b]">avg response</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#converter" 
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1a1f2e] px-7 text-base font-semibold text-white shadow-lg shadow-[#1a1f2e]/20 transition-all hover:bg-[#0f1219] hover:shadow-xl"
              >
                Start exchange
              </a>
              <a 
                href="#how-it-works" 
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-6 text-base font-medium text-[#334155] shadow-sm transition-all hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
              >
                How it works
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Thematic visual - Exchange network illustration */}
          <div className="relative flex items-center justify-center">
            {/* Orbit rings */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#e2e8f0]/60 lg:h-[440px] lg:w-[440px]" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#e2e8f0]/40 lg:h-[580px] lg:w-[580px]" />

            {/* Central hub */}
            <div className="relative z-20">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-[#e2e8f0] bg-white shadow-2xl shadow-black/[0.08] lg:h-40 lg:w-40">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#10b981]/5 via-transparent to-[#3b82f6]/5" />
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] shadow-lg lg:h-16 lg:w-16">
                    <svg className="h-7 w-7 text-white lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#0f172a]">Exchange</span>
                </div>
              </div>
            </div>

            {/* USDT - top */}
            <div className="absolute -top-8 left-1/2 z-30 -translate-x-1/2 animate-float lg:-top-12" style={{ animationDelay: '0s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#26a17b]">
                    <span className="text-lg font-bold text-white">₮</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">USDT</p>
                    <p className="text-xs text-[#64748b]">Tether</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BTC - top right */}
            <div className="absolute right-[5%] top-[8%] z-30 animate-float lg:right-[2%] lg:top-[5%]" style={{ animationDelay: '0.5s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7931a]">
                    <span className="text-lg font-bold text-white">₿</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">BTC</p>
                    <p className="text-xs text-[#64748b]">Bitcoin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolut - right */}
            <div className="absolute -right-4 top-1/2 z-30 -translate-y-1/2 animate-float lg:-right-16" style={{ animationDelay: '1s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#191c1f]">
                    <span className="text-base font-bold text-white">R</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">Revolut</p>
                    <p className="text-xs text-[#64748b]">Neobank</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash - bottom */}
            <div className="absolute -bottom-8 left-1/2 z-30 -translate-x-1/2 animate-float lg:-bottom-12" style={{ animationDelay: '1.5s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22c55e]">
                    <span className="text-lg font-bold text-white">$</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">Cash</p>
                    <p className="text-xs text-[#64748b]">USD / EUR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wise - bottom left */}
            <div className="absolute bottom-[8%] left-[5%] z-30 animate-float lg:bottom-[5%] lg:left-[2%]" style={{ animationDelay: '2s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9fe870]">
                    <span className="text-base font-bold text-[#163300]">W</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">Wise</p>
                    <p className="text-xs text-[#64748b]">Transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank - left */}
            <div className="absolute -left-4 top-1/2 z-30 -translate-y-1/2 animate-float lg:-left-16" style={{ animationDelay: '2.5s' }}>
              <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-xl shadow-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">Bank</p>
                    <p className="text-xs text-[#64748b]">Transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection lines */}
            <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 400 400">
              <line x1="200" y1="55" x2="200" y2="140" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="310" y1="85" x2="265" y2="145" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="335" y1="200" x2="265" y2="200" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="200" y1="345" x2="200" y2="265" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="90" y1="315" x2="140" y2="258" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
              <line x1="65" y1="200" x2="140" y2="200" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent" />
    </section>
  )
}
