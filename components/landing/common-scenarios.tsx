"use client"

const scenarios = [
  {
    title: "USDT to cash",
    subtitle: "Crypto to physical",
    description: "Select crypto, choose cash pickup city. Operator confirms location and code.",
    from: { code: "USDT", color: "#26a17b", icon: "₮" },
    to: { code: "Cash", color: "#22c55e", icon: "$" },
    popular: true,
  },
  {
    title: "Crypto to card",
    subtitle: "Digital to bank",
    description: "Exchange crypto directly to Privat24, Mono or other supported banks.",
    from: { code: "BTC", color: "#f7931a", icon: "₿" },
    to: { code: "UAH", color: "#1e3a5f", icon: "₴" },
  },
  {
    title: "Buy crypto",
    subtitle: "Fiat to digital",
    description: "Send from bank or bring cash — receive crypto to your wallet.",
    from: { code: "UAH", color: "#3b82f6", icon: "₴" },
    to: { code: "USDT", color: "#26a17b", icon: "₮" },
  },
  {
    title: "E-wallets",
    subtitle: "Fintech flows",
    description: "Revolut, Wise and PayPal to crypto or local currency.",
    from: { code: "Revolut", color: "#0066ff", icon: "R" },
    to: { code: "USDT", color: "#26a17b", icon: "₮" },
  },
]

export function CommonScenarios() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28 lg:py-40">
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="scenarios-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#scenarios-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b] shadow-sm">
                Scenarios
              </span>
              <h2 className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
                Find your
                <br />
                <span className="text-[#94a3b8]">flow.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-[#64748b]">
              Start from your goal. Each scenario is designed for clarity and speed.
            </p>
          </div>
        </div>

        {/* Scenario cards - asymmetric bento grid */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* First card - large */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-8 transition-all hover:shadow-xl lg:col-span-7 lg:p-10">
            {scenarios[0].popular && (
              <div className="absolute right-6 top-6 rounded-full bg-[#10b981] px-3 py-1 text-[11px] font-semibold text-white">
                Most popular
              </div>
            )}
            
            <div className="mb-8 flex items-center gap-4">
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: scenarios[0].from.color }}
              >
                {scenarios[0].from.icon}
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg className="h-6 w-6 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div 
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: scenarios[0].to.color }}
              >
                {scenarios[0].to.icon}
              </div>
            </div>
            
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">{scenarios[0].subtitle}</p>
            <h3 className="mb-4 text-2xl font-bold text-[#0f172a]">{scenarios[0].title}</h3>
            <p className="max-w-md text-[#64748b]">{scenarios[0].description}</p>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
              <span>Start this flow</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>

          {/* Second card - stacked */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="relative flex-1 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-8 transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: scenarios[1].from.color }}
                >
                  {scenarios[1].from.icon}
                </div>
                <svg className="h-4 w-4 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: scenarios[1].to.color }}
                >
                  {scenarios[1].to.icon}
                </div>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">{scenarios[1].subtitle}</p>
              <h3 className="mb-2 text-lg font-bold text-[#0f172a]">{scenarios[1].title}</h3>
              <p className="text-sm text-[#64748b]">{scenarios[1].description}</p>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-8 transition-all hover:shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: scenarios[2].from.color }}
                >
                  {scenarios[2].from.icon}
                </div>
                <svg className="h-4 w-4 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: scenarios[2].to.color }}
                >
                  {scenarios[2].to.icon}
                </div>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">{scenarios[2].subtitle}</p>
              <h3 className="mb-2 text-lg font-bold text-[#0f172a]">{scenarios[2].title}</h3>
              <p className="text-sm text-[#64748b]">{scenarios[2].description}</p>
            </div>
          </div>

          {/* Fourth card - full width accent */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-gradient-to-r from-[#f8fafc] to-white p-8 lg:col-span-12 lg:p-10">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white"
                    style={{ backgroundColor: scenarios[3].from.color }}
                  >
                    {scenarios[3].from.icon}
                  </div>
                  <svg className="h-5 w-5 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <div 
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white"
                    style={{ backgroundColor: scenarios[3].to.color }}
                  >
                    {scenarios[3].to.icon}
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">{scenarios[3].subtitle}</p>
                  <h3 className="text-xl font-bold text-[#0f172a]">{scenarios[3].title}</h3>
                </div>
              </div>
              <p className="max-w-sm text-[#64748b]">{scenarios[3].description}</p>
              <button className="shrink-0 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e293b]">
                Start flow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
