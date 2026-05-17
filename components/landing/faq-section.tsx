"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does an exchange take?",
    answer: "Most requests are processed within minutes, but timing depends on the selected direction, payment method and operator confirmation.",
  },
  {
    question: "Can the final amount change?",
    answer: "The widget shows the current estimated amount. Final details may be confirmed before the exchange is completed.",
  },
  {
    question: "Why do I need to choose a crypto network?",
    answer: "Some assets are available on different networks. Choosing the correct network helps avoid transfer mistakes.",
  },
  {
    question: "What happens if my transaction is flagged by AML?",
    answer: "The request may be paused for additional verification. Support will contact you with further instructions.",
  },
  {
    question: "Can I contact support before creating a request?",
    answer: "Yes. You can contact support before, during or after creating a request.",
  },
  {
    question: "What is the difference between old and new USD?",
    answer: "Different cash types may have different rates and conditions. They are shown as separate options when relevant.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-28 lg:py-40">
      {/* Subtle background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(241, 245, 249, 1) 0%, transparent 60%)' }} />
      
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-6 inline-block rounded-full bg-[#f1f5f9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#64748b]">
              FAQ
            </span>
            <h2 className="mb-6 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#0f172a] sm:text-[3.5rem]">
              Questions
              <br />
              <span className="text-[#94a3b8]">answered.</span>
            </h2>
            <p className="mb-10 max-w-sm text-lg leading-relaxed text-[#64748b]">
              Common questions about how the exchange process works.
            </p>
            
            {/* Contact card */}
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#fafafa] p-6">
              <p className="mb-3 font-semibold text-[#0f172a]">Still have questions?</p>
              <p className="mb-4 text-sm text-[#64748b]">Our support team is here to help.</p>
              <a href="#support" className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e293b]">
                Contact support
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#fafafa] px-6 transition-all data-[state=open]:border-[#10b981]/30 data-[state=open]:bg-white data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold text-[#0f172a] hover:no-underline [&[data-state=open]]:text-[#10b981]">
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-[#94a3b8] shadow-sm group-data-[state=open]:bg-[#ecfdf5] group-data-[state=open]:text-[#10b981]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-12 text-[#64748b]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
