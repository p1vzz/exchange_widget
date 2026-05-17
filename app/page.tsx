"use client"

import { StickyHeader } from "@/components/landing/sticky-header"
import { HeroSection } from "@/components/landing/hero-section"
import { ConverterSection } from "@/components/landing/converter-section"
import { ExchangePossibilities } from "@/components/landing/exchange-possibilities"
import { CommonScenarios } from "@/components/landing/common-scenarios"
import { BeforeYouExchange } from "@/components/landing/before-you-exchange"
import { NoHiddenSteps } from "@/components/landing/no-hidden-steps"
import { SupportSection } from "@/components/landing/support-section"
import { AmlSection } from "@/components/landing/aml-section"
import { PopularDirections } from "@/components/landing/popular-directions"
import { CashCities } from "@/components/landing/cash-cities"
import { ReviewsSection } from "@/components/landing/reviews-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FinalCta } from "@/components/landing/final-cta"
import { LargeFooter } from "@/components/landing/large-footer"
import { FloatingSupportButton } from "@/components/landing/floating-support-button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <main>
        <HeroSection />
        <ConverterSection />
        <ExchangePossibilities />
        <CommonScenarios />
        <BeforeYouExchange />
        <NoHiddenSteps />
        <SupportSection />
        <AmlSection />
        <PopularDirections />
        <CashCities />
        <ReviewsSection />
        <FaqSection />
        <FinalCta />
      </main>
      <LargeFooter />
      <FloatingSupportButton />
    </div>
  )
}
