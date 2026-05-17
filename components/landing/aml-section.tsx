export function AmlSection() {
  return (
    <section id="security" className="relative overflow-hidden bg-white py-28 lg:py-40">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Premium card with gradient border */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#ecfdf5] via-[#f0fdf4] to-white p-1">
            <div className="relative rounded-[28px] bg-white p-8 lg:p-12">
              {/* Shield decoration */}
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#10b981]/5 blur-3xl" />
              
              <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr]">
                {/* Icon column */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#10b981] to-[#059669] shadow-xl shadow-[#10b981]/20">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#ecfdf5] px-4 py-1.5 text-xs font-bold text-[#047857]">
                    Verified
                  </span>
                </div>
                
                {/* Content column */}
                <div>
                  <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-[#64748b]">Security</span>
                  <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-[#0f172a] sm:text-3xl">
                    AML checks that protect the exchange
                  </h2>
                  <p className="mb-8 max-w-lg text-[#64748b]">
                    All incoming crypto transactions may be checked by AML systems. If a transaction is marked as high-risk, the exchange may be paused for additional verification.
                  </p>

                  {/* Success metrics */}
                  <div className="mb-8 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-3 rounded-2xl bg-[#f8fafc] px-5 py-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10b981]">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f172a]">99%+</p>
                        <p className="text-xs text-[#64748b]">Pass without action</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-[#f8fafc] px-5 py-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b82f6]">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f172a]">Real-time</p>
                        <p className="text-xs text-[#64748b]">Instant verification</p>
                      </div>
                    </div>
                  </div>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e293b]"
                  >
                    Read AML / KYC policy
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
