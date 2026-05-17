const checkpoints = [
  {
    id: "01",
    title: "Rate visible upfront",
    description: "See the exact rate and estimated amount before creating your request.",
    accent: "#10b981",
    bgAccent: "rgba(16, 185, 129, 0.08)",
  },
  {
    id: "02",
    title: "Limits shown",
    description: "Min, max and current reserve displayed clearly before you start.",
    accent: "#3b82f6",
    bgAccent: "rgba(59, 130, 246, 0.08)",
  },
  {
    id: "03",
    title: "Networks matter",
    description: "Choose the correct blockchain network for crypto transfers.",
    accent: "#f59e0b",
    bgAccent: "rgba(245, 158, 11, 0.08)",
  },
  {
    id: "04",
    title: "Cash confirmed",
    description: "Exact pickup location and code provided by operator after confirmation.",
    accent: "#8b5cf6",
    bgAccent: "rgba(139, 92, 246, 0.08)",
  },
  {
    id: "05",
    title: "AML checks",
    description: "High-risk funds may require additional verification steps.",
    accent: "#ef4444",
    bgAccent: "rgba(239, 68, 68, 0.08)",
  },
]

export function BeforeYouExchange() {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-44">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="before-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#before-grid)" />
        </svg>
      </div>
      
      {/* Soft gradient accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.25) 0%, transparent 60%)' }} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20 xl:gap-32">
          
          {/* Left: Visual anchor with trust shield */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-6 inline-block rounded-full bg-[#ecfdf5] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#059669]">
              Transparency
            </span>
            <h2 className="mb-6 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
              Before you
              <br />
              <span className="text-[#94a3b8]">exchange.</span>
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-[#64748b]">
              No surprises. Everything shown upfront so you can make informed decisions before starting.
            </p>
            
            {/* Visual trust element */}
            <div className="relative hidden lg:block">
              <div className="relative w-64">
                {/* Decorative container */}
                <div className="relative rounded-[28px] border border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] to-white p-6 shadow-lg shadow-black/[0.03]">
                  {/* Shield icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#10b981]/10 to-[#10b981]/5">
                    <svg className="h-8 w-8 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  
                  <p className="mb-1 text-sm font-bold text-[#0f172a]">Full transparency</p>
                  <p className="text-xs text-[#64748b]">All conditions visible before you commit</p>
                  
                  {/* Decorative checkmarks */}
                  <div className="mt-6 space-y-2">
                    {['Rates', 'Limits', 'Networks'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ecfdf5]">
                          <svg className="h-2.5 w-2.5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-xs text-[#64748b]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating accent badge */}
                <div className="absolute -right-4 -top-3 rounded-full bg-[#10b981] px-3 py-1 text-[10px] font-bold text-white shadow-lg shadow-[#10b981]/20">
                  Verified
                </div>
              </div>
            </div>
          </div>

          {/* Right: Checkpoint modules */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute bottom-8 left-6 top-8 hidden w-px lg:block">
              <div className="h-full w-full bg-gradient-to-b from-[#10b981] via-[#e2e8f0] to-[#e2e8f0]" />
            </div>

            <div className="space-y-4">
              {checkpoints.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-[20px] border border-[#e2e8f0] bg-white p-5 transition-all hover:border-transparent hover:shadow-xl hover:shadow-black/[0.04]"
                  style={{ '--accent': item.accent, '--bg-accent': item.bgAccent } as React.CSSProperties}
                >
                  <div className="flex items-start gap-5">
                    {/* Number node */}
                    <div className="relative z-10 hidden lg:block">
                      <div 
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold transition-all group-hover:shadow-lg"
                        style={{ backgroundColor: item.bgAccent, color: item.accent }}
                      >
                        {item.id}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-1.5 flex items-center gap-3">
                        {/* Mobile number */}
                        <span 
                          className="flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-bold lg:hidden"
                          style={{ backgroundColor: item.bgAccent, color: item.accent }}
                        >
                          {item.id}
                        </span>
                        <h3 className="text-base font-bold text-[#0f172a]">{item.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                    </div>

                    {/* Accent indicator */}
                    <div 
                      className="hidden h-8 w-1 rounded-full opacity-0 transition-all group-hover:opacity-100 lg:block"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>

                  {/* Bottom accent line on hover */}
                  <div 
                    className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 transition-transform group-hover:scale-x-100"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>
              ))}
            </div>

            {/* Summary note */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#f8fafc] px-5 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm">
                <svg className="h-4 w-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-[#64748b]">
                <span className="font-medium text-[#0f172a]">5 checkpoints</span> ensure complete transparency before every exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
