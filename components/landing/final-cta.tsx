"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc] py-32 lg:py-48">
      {/* Dramatic gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.4) 0%, transparent 50%)', animationDelay: '0s' }}
        />
        <div 
          className="absolute right-1/4 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 animate-pulse-soft rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 50%)', animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/4 animate-pulse-soft rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, transparent 50%)', animationDelay: '2s' }}
        />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white px-5 py-2.5 shadow-sm">
          <div className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10b981]" />
          </div>
          <span className="text-sm font-medium text-[#475569]">Exchange service ready</span>
        </div>

        {/* Dramatic headline */}
        <h2 className="mb-8 text-[3.5rem] font-bold leading-[0.95] tracking-[-0.04em] text-[#0f172a] sm:text-[5rem] lg:text-[6rem]">
          Ready to
          <br />
          <span className="bg-gradient-to-r from-[#64748b] to-[#94a3b8] bg-clip-text text-transparent">exchange?</span>
        </h2>
        
        <p className="mx-auto mb-12 max-w-lg text-xl leading-relaxed text-[#64748b]">
          Choose direction, check rate, create request. Exchange in minutes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="group h-16 w-full rounded-2xl bg-[#0f172a] px-12 text-lg font-bold text-white shadow-xl shadow-black/[0.15] transition-all hover:bg-[#1e293b] hover:shadow-2xl sm:w-auto"
          >
            <Link href="#exchange">
              Start exchange
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="h-16 w-full rounded-2xl border-[#e2e8f0] bg-white px-12 text-lg font-semibold text-[#0f172a] shadow-sm transition-all hover:bg-[#f8fafc] hover:shadow-md sm:w-auto"
          >
            Contact support
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", text: "No registration" },
            { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", text: "Fast processing" },
            { icon: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z", text: "24/7 support" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ecfdf5]">
                <svg className="h-4 w-4 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <span className="font-medium text-[#475569]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
