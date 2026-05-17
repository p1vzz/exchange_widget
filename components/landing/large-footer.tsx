import Link from "next/link"

const footerLinks = {
  exchange: [
    { label: "Popular directions", href: "#" },
    { label: "Crypto exchange", href: "#" },
    { label: "Cash exchange", href: "#" },
    { label: "Bank card exchange", href: "#" },
  ],
  cities: [
    { label: "Kyiv", href: "#" },
    { label: "Lviv", href: "#" },
    { label: "Odesa", href: "#" },
    { label: "Dnipro", href: "#" },
    { label: "Warsaw", href: "#" },
  ],
  company: [
    { label: "About us", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Support", href: "#support" },
  ],
  legal: [
    { label: "Exchange rules", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "AML policy", href: "#" },
  ],
}

export function LargeFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e2e8f0] bg-gradient-to-b from-[#f8fafc] to-white">
      {/* Subtle gradient orb */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.3) 0%, transparent 60%)' }} />
      
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
        {/* Top section - brand and contact */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f172a] shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#0f172a]">Exchange</span>
            </Link>
            <p className="mb-8 max-w-md text-base text-[#64748b]">
              Trusted crypto, cash and bank transfer exchange service. Operating since 2019.
            </p>
            
            {/* Contact badges */}
            <div className="flex flex-wrap gap-3">
              <a href="#" className="group flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-3 transition-all hover:shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0088cc] text-sm font-bold text-white">T</div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">Telegram</p>
                  <p className="text-xs text-[#64748b]">@exchange_support</p>
                </div>
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-3 transition-all hover:shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6] text-sm font-bold text-white">@</div>
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">Email</p>
                  <p className="text-xs text-[#64748b]">support@exchange.com</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Working hours card */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-xs rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-lg">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#94a3b8]">Working hours</p>
              <p className="mb-1 text-3xl font-bold text-[#0f172a]">09:00 — 21:00</p>
              <p className="mb-4 text-sm text-[#64748b]">EET (Kyiv time)</p>
              <div className="flex items-center gap-2 rounded-full bg-[#ecfdf5] px-3 py-1.5">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
                </div>
                <span className="text-xs font-semibold text-[#047857]">Open now</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Links Grid */}
        <div className="grid gap-8 border-t border-[#e2e8f0] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0f172a]">Exchange</h4>
            <ul className="space-y-3">
              {footerLinks.exchange.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0f172a]">Cities</h4>
            <ul className="space-y-3">
              {footerLinks.cities.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0f172a]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0f172a]">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-[#64748b] transition-colors hover:text-[#0f172a]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#e2e8f0] pt-8 sm:flex-row">
          <p className="text-sm text-[#94a3b8]">
            &copy; {new Date().getFullYear()} Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Telegram */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#94a3b8] transition-all hover:border-[#0088cc] hover:text-[#0088cc] hover:shadow-lg"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.5-3.5" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#94a3b8] transition-all hover:border-[#0f172a] hover:text-[#0f172a] hover:shadow-lg"
              aria-label="X"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.5-8L20 4h-2l-5.5 6.5L8 4H4z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#94a3b8] transition-all hover:border-[#E4405F] hover:text-[#E4405F] hover:shadow-lg"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
