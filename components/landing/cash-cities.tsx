const locations = {
  ukraine: {
    code: "UA",
    name: "Ukraine",
    flag: "🇺🇦",
    cities: ["Kyiv", "Lviv", "Odesa", "Dnipro", "Kharkiv", "Cherkasy", "Chernivtsi"],
  },
  poland: {
    code: "PL", 
    name: "Poland",
    flag: "🇵🇱",
    cities: ["Warsaw"],
  },
}

export function CashCities() {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-44">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cities-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cities-grid)" />
        </svg>
      </div>
      
      {/* Warm ambient gradient */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(253, 224, 71, 0.2) 0%, transparent 55%)' }} />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[600px] w-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.2) 0%, transparent 55%)' }} />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header - centered and prominent */}
        <div className="mb-16 text-center lg:mb-24">
          <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#fef3c7] to-[#fef9c3] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#92400e]">
            Cash locations
          </span>
          <h2 className="mb-6 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[4rem]">
            Supported cities.
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#64748b]">
            Cash pickup available in these locations. Exact address and unique code provided after operator confirmation.
          </p>
        </div>

        {/* Location cards - grouped by country */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Ukraine card */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-gradient-to-b from-white to-[#fafafa] p-8 shadow-lg shadow-black/[0.02]">
              {/* Country header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fef3c7] text-2xl">
                    {locations.ukraine.flag}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">{locations.ukraine.name}</h3>
                    <p className="text-sm text-[#64748b]">{locations.ukraine.cities.length} cities available</p>
                  </div>
                </div>
                <div className="flex h-8 items-center rounded-full bg-[#ecfdf5] px-3">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#10b981]" />
                  <span className="text-xs font-semibold text-[#059669]">Active</span>
                </div>
              </div>

              {/* Cities grid */}
              <div className="grid grid-cols-2 gap-3">
                {locations.ukraine.cities.map((city, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3.5 transition-all hover:border-[#f59e0b]/30 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f8fafc] transition-colors group-hover:bg-[#f59e0b] group-hover:text-white">
                      <svg className="h-4 w-4 text-[#94a3b8] transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[#0f172a]">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Poland card */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-gradient-to-b from-white to-[#fafafa] p-8 shadow-lg shadow-black/[0.02]">
              {/* Country header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7f3] text-2xl">
                    {locations.poland.flag}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">{locations.poland.name}</h3>
                    <p className="text-sm text-[#64748b]">{locations.poland.cities.length} city available</p>
                  </div>
                </div>
                <div className="flex h-8 items-center rounded-full bg-[#ecfdf5] px-3">
                  <div className="mr-2 h-2 w-2 rounded-full bg-[#10b981]" />
                  <span className="text-xs font-semibold text-[#059669]">Active</span>
                </div>
              </div>

              {/* Cities */}
              <div className="grid gap-3">
                {locations.poland.cities.map((city, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3.5 transition-all hover:border-[#ec4899]/30 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f8fafc] transition-colors group-hover:bg-[#ec4899] group-hover:text-white">
                      <svg className="h-4 w-4 text-[#94a3b8] transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-[#0f172a]">{city}</span>
                  </div>
                ))}
              </div>

              {/* Coming soon hint */}
              <div className="mt-6 rounded-xl bg-[#f8fafc] px-4 py-3">
                <p className="text-center text-xs text-[#64748b]">
                  More EU cities coming soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-8 rounded-full border border-[#e2e8f0] bg-white px-8 py-4 shadow-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0f172a]">12+</p>
              <p className="text-xs text-[#64748b]">Pickup points</p>
            </div>
            <div className="h-8 w-px bg-[#e2e8f0]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0f172a]">2</p>
              <p className="text-xs text-[#64748b]">Countries</p>
            </div>
            <div className="h-8 w-px bg-[#e2e8f0]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0f172a]">24/7</p>
              <p className="text-xs text-[#64748b]">Coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
