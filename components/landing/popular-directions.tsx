const directions = [
  { from: "USDT", fromLabel: "TRC20", to: "UAH", toLabel: "Privat24", hot: true },
  { from: "USDT", fromLabel: "TRC20", to: "USD", toLabel: "Cash", hot: true },
  { from: "USD", fromLabel: "Cash", to: "USDT", toLabel: "TRC20" },
  { from: "BTC", fromLabel: "Bitcoin", to: "USDT", toLabel: "TRC20" },
  { from: "EUR", fromLabel: "Cash", to: "USDT", toLabel: "TRC20" },
  { from: "REV", fromLabel: "Revolut", to: "USDT", toLabel: "TRC20" },
  { from: "WISE", fromLabel: "Wise", to: "USDT", toLabel: "TRC20" },
  { from: "USDT", fromLabel: "TRC20", to: "MONO", toLabel: "Monobank" },
]

const colorMap: Record<string, string> = {
  USDT: "#26a17b",
  BTC: "#f7931a",
  ETH: "#627eea",
  UAH: "#1e3a5f",
  USD: "#22c55e",
  EUR: "#8b5cf6",
  REV: "#0066ff",
  WISE: "#00b9ff",
  MONO: "#1a1a1a",
}

export function PopularDirections() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28 lg:py-40">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header - asymmetric */}
        <div className="mb-16 grid items-end gap-8 lg:mb-20 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b] shadow-sm">
              Popular routes
            </span>
            <h2 className="text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
              Exchange
              <br />
              <span className="text-[#94a3b8]">directions.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#64748b]">
            Start from one of the most requested exchange pairs.
          </p>
        </div>

        {/* Direction cards - grid with visual hierarchy */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction, index) => (
            <button
              key={index}
              className={`group relative flex flex-col items-start gap-4 rounded-2xl border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-xl ${
                direction.hot 
                  ? 'border-[#10b981]/30 bg-gradient-to-br from-white to-[#ecfdf5]/50' 
                  : 'border-[#e2e8f0] bg-white'
              }`}
            >
              {direction.hot && (
                <div className="absolute -top-2 right-4 rounded-full bg-[#10b981] px-2 py-0.5 text-[10px] font-bold text-white">
                  HOT
                </div>
              )}
              
              {/* Currency pair visual */}
              <div className="flex w-full items-center gap-3">
                <div 
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md"
                  style={{ backgroundColor: colorMap[direction.from] || "#64748b" }}
                >
                  {direction.from.charAt(0)}
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#e2e8f0] to-transparent" />
                  <svg className="mx-2 h-4 w-4 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <div className="h-px flex-1 bg-gradient-to-l from-[#e2e8f0] to-transparent" />
                </div>
                <div 
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white shadow-md"
                  style={{ backgroundColor: colorMap[direction.to] || "#64748b" }}
                >
                  {direction.to.charAt(0)}
                </div>
              </div>
              
              {/* Labels */}
              <div className="flex w-full items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0f172a]">{direction.from}</p>
                  <p className="text-xs text-[#94a3b8]">{direction.fromLabel}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#0f172a]">{direction.to}</p>
                  <p className="text-xs text-[#94a3b8]">{direction.toLabel}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-6 py-3 text-sm font-semibold text-[#0f172a] transition-all hover:shadow-md">
            View all directions
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
