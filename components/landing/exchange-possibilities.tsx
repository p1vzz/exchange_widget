"use client"

export function ExchangePossibilities() {
  return (
    <section id="directions" className="relative overflow-hidden bg-white pb-28 pt-40 lg:pb-40 lg:pt-52">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute left-1/2 top-0 h-[1000px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(241, 245, 249, 1) 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header - asymmetric, editorial */}
        <div className="mb-20 grid items-end gap-8 lg:mb-28 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded-full bg-[#f1f5f9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
              Routing system
            </span>
            <h2 className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem] lg:text-[4rem]">
              All routes
              <br />
              <span className="text-[#94a3b8]">connected.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#64748b] lg:text-xl">
            One interface for crypto, cash and bank transfers. Select source and destination — we handle the routing.
          </p>
        </div>

        {/* Main orchestration visualization */}
        <div className="relative mb-24 lg:mb-32">
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full border border-dashed border-[#e2e8f0] opacity-50" />
            <div className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-[#e2e8f0] opacity-50" />
          </div>

          {/* Central hub visualization */}
          <div className="relative mx-auto flex max-w-5xl items-center justify-between py-20">
            {/* Left side - Input sources */}
            <div className="relative z-10 flex flex-col gap-6">
              <SourceNode code="USDT" name="Tether TRC20" color="#26a17b" amount="230.00" />
              <SourceNode code="BTC" name="Bitcoin" color="#f7931a" amount="0.0082" />
              <SourceNode code="ETH" name="Ethereum" color="#627eea" amount="0.15" />
              <SourceNode code="Cash" name="USD bills" color="#22c55e" amount="500.00" />
            </div>

            {/* Center - Exchange hub with flowing lines */}
            <div className="relative z-10 mx-4 lg:mx-12">
              {/* Connection lines SVG */}
              <svg className="absolute -left-32 top-1/2 hidden h-[400px] w-[140px] -translate-y-1/2 lg:block" viewBox="0 0 140 400" fill="none" preserveAspectRatio="none">
                <path d="M0 50 Q70 50 130 200" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M0 150 Q70 150 130 200" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M0 250 Q70 250 130 200" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M0 350 Q70 350 130 200" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="6 4" />
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central exchange hub */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] blur-xl" />
                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-3xl border border-[#e2e8f0] bg-gradient-to-b from-[#1e293b] to-[#0f172a] shadow-2xl shadow-black/20 lg:h-40 lg:w-40">
                  <svg className="mb-2 h-8 w-8 text-white lg:h-10 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <span className="text-sm font-bold tracking-wide text-white">Exchange</span>
                </div>
                {/* Pulse rings */}
                <div className="absolute -inset-3 animate-ping rounded-3xl border border-[#10b981]/20 opacity-20" style={{ animationDuration: '3s' }} />
              </div>

              {/* Right connection lines */}
              <svg className="absolute -right-32 top-1/2 hidden h-[400px] w-[140px] -translate-y-1/2 lg:block" viewBox="0 0 140 400" fill="none" preserveAspectRatio="none">
                <path d="M10 200 Q70 50 140 50" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M10 200 Q70 150 140 150" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M10 200 Q70 250 140 250" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M10 200 Q70 350 140 350" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="6 4" />
                <defs>
                  <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right side - Output destinations */}
            <div className="relative z-10 flex flex-col gap-6">
              <DestNode code="UAH" name="Privat24" color="#1e3a5f" />
              <DestNode code="USD" name="Bank wire" color="#3b82f6" />
              <DestNode code="EUR" name="SEPA" color="#8b5cf6" />
              <DestNode code="Cash" name="Pickup" color="#f59e0b" />
            </div>
          </div>
        </div>

        {/* Feature cards - bento style with visual contrast */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5]/50 p-8 lg:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#10b981]/10 blur-3xl transition-all group-hover:bg-[#10b981]/20" />
            <span className="mb-8 inline-block font-mono text-7xl font-extralight text-[#10b981]/30">01</span>
            <h3 className="mb-3 text-xl font-bold text-[#0f172a]">Crypto assets</h3>
            <p className="text-[#475569]">USDT, BTC, ETH on TRC20, ERC20 and native networks. Select asset and chain.</p>
          </div>
          
          <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eff6ff] to-[#dbeafe]/50 p-8 lg:-translate-y-4 lg:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3b82f6]/10 blur-3xl transition-all group-hover:bg-[#3b82f6]/20" />
            <span className="mb-8 inline-block font-mono text-7xl font-extralight text-[#3b82f6]/30">02</span>
            <h3 className="mb-3 text-xl font-bold text-[#0f172a]">Bank transfers</h3>
            <p className="text-[#475569]">Privat24, Mono, SEPA and wire transfers with verified rates.</p>
          </div>
          
          <div className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#fefce8] to-[#fef3c7]/50 p-8 lg:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f59e0b]/10 blur-3xl transition-all group-hover:bg-[#f59e0b]/20" />
            <span className="mb-8 inline-block font-mono text-7xl font-extralight text-[#f59e0b]/30">03</span>
            <h3 className="mb-3 text-xl font-bold text-[#0f172a]">Cash exchange</h3>
            <p className="text-[#475569]">Physical cash pickup in 12+ cities. Operator confirms details.</p>
          </div>
        </div>

        {/* Supported currencies row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["USDT", "BTC", "ETH", "UAH", "USD", "EUR", "Privat24", "Mono", "Revolut", "Wise", "SEPA"].map((tag) => (
            <span 
              key={tag}
              className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#64748b] transition-all hover:border-[#cbd5e1] hover:text-[#0f172a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SourceNode({ code, name, color, amount }: { code: string; name: string; color: string; amount: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-lg shadow-black/[0.04] transition-all hover:shadow-xl">
      <div 
        className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-white shadow-md"
        style={{ backgroundColor: color }}
      >
        {code === "Cash" ? "$" : code.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-[#0f172a]">{code}</p>
        <p className="text-xs text-[#94a3b8]">{name}</p>
      </div>
      <div className="ml-auto text-right">
        <p className="font-mono text-sm font-medium text-[#0f172a]">{amount}</p>
      </div>
    </div>
  )
}

function DestNode({ code, name, color }: { code: string; name: string; color: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-lg shadow-black/[0.04] transition-all hover:shadow-xl">
      <div 
        className="flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold text-white shadow-md"
        style={{ backgroundColor: color }}
      >
        {code === "Cash" ? "$" : code.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-[#0f172a]">{code}</p>
        <p className="text-xs text-[#94a3b8]">{name}</p>
      </div>
    </div>
  )
}
