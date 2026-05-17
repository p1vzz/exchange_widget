const steps = [
  {
    number: "01",
    title: "Select direction",
    description: "Choose what you send and receive. See live rate instantly.",
    status: "active",
  },
  {
    number: "02",
    title: "Create request",
    description: "Unique ID assigned. Status tracked in real-time.",
  },
  {
    number: "03",
    title: "Operator confirms",
    description: "We send payment details or pickup instructions.",
  },
  {
    number: "04",
    title: "Complete",
    description: "Exchange done. Status updated immediately.",
  },
]

export function NoHiddenSteps() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-32 lg:py-44">
      {/* Grid background - stronger presence */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="steps-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#steps-grid)" />
        </svg>
      </div>

      {/* Ambient gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] rounded-full opacity-50" style={{ background: 'radial-gradient(circle, rgba(196, 181, 253, 0.2) 0%, transparent 60%)' }} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header - more dramatic */}
        <div className="mb-20 lg:mb-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b] shadow-sm">
              Exchange flow
            </span>
            <h2 className="mb-6 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[4rem]">
              No hidden steps.
            </h2>
            <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#64748b]">
              Every step is visible. You always know exactly what happens next and where you are in the process.
            </p>
          </div>
        </div>

        {/* Steps - journey visualization */}
        <div className="relative">
          {/* Main route line - desktop */}
          <div className="absolute left-0 right-0 top-[60px] hidden lg:block">
            <div className="mx-auto max-w-4xl">
              <svg className="w-full" height="24" viewBox="0 0 800 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path 
                  d="M 0 12 Q 100 12, 200 12 T 400 12 T 600 12 T 800 12" 
                  stroke="url(#route-gradient)" 
                  strokeWidth="2" 
                  strokeDasharray="8 4"
                  fill="none"
                />
                <defs>
                  <linearGradient id="route-gradient" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="25%" stopColor="#10b981" />
                    <stop offset="35%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#e2e8f0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Step cards */}
          <div className="relative mx-auto grid max-w-4xl gap-6 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Route checkpoint node */}
                <div className="mb-6 flex justify-center">
                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] transition-all ${
                    step.status === 'active' 
                      ? 'border-[#10b981] bg-white shadow-lg shadow-[#10b981]/20' 
                      : 'border-[#e2e8f0] bg-white'
                  }`}>
                    {step.status === 'active' ? (
                      <div className="h-4 w-4 rounded-full bg-[#10b981]" />
                    ) : (
                      <span className="text-xs font-bold text-[#94a3b8]">{step.number}</span>
                    )}
                    
                    {/* Pulse animation for active */}
                    {step.status === 'active' && (
                      <div className="absolute inset-0 animate-ping rounded-full bg-[#10b981] opacity-20" style={{ animationDuration: '2s' }} />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`relative overflow-hidden rounded-[24px] border p-6 transition-all ${
                  step.status === 'active'
                    ? 'border-[#10b981]/20 bg-white shadow-xl shadow-[#10b981]/5'
                    : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:shadow-lg'
                }`}>
                  {/* Status badge for active */}
                  {step.status === 'active' && (
                    <div className="absolute -right-px -top-px">
                      <div className="rounded-bl-xl rounded-tr-[23px] bg-[#10b981] px-3 py-1 text-[10px] font-bold text-white">
                        You are here
                      </div>
                    </div>
                  )}

                  {/* Step number */}
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${
                    step.status === 'active'
                      ? 'bg-[#ecfdf5] text-[#10b981]'
                      : 'bg-[#f1f5f9] text-[#94a3b8]'
                  }`}>
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold text-[#0f172a]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#64748b]">{step.description}</p>

                  {/* Progress indicator */}
                  {step.status === 'active' && (
                    <div className="mt-5 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#e2e8f0]">
                        <div className="h-full w-1/4 rounded-full bg-[#10b981]" />
                      </div>
                      <span className="text-[10px] font-medium text-[#10b981]">Step 1/4</span>
                    </div>
                  )}
                </div>

                {/* Mobile connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 lg:hidden">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                      <svg className="h-4 w-4 rotate-90 text-[#cbd5e1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white px-5 py-3 shadow-sm">
            <svg className="h-4 w-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm text-[#64748b]">Track all your exchanges in the</span>
            <span className="text-sm font-semibold text-[#0f172a]">Dashboard</span>
          </div>
        </div>
      </div>
    </section>
  )
}
