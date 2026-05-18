"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronDown, X, Search, Check, AlertTriangle, ExternalLink, Clock, Shield, MessageCircle, CreditCard, Mail, User, AtSign, Lock, CheckCircle2, Phone, Wallet, MapPin, Building2, Globe, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { CURRENCY_GROUPS, OVERVIEW_TAGS, TAG_TO_CURRENCY } from "@/lib/currencies"
import type { CurrencyGroup, CurrencySelection } from "@/lib/currencies"

const OVERVIEW_GROUP_BY_TAG = Object.values(CURRENCY_GROUPS)
  .flat()
  .reduce<Record<string, CurrencyGroup>>((acc, group) => {
    acc[group.name] = group
    return acc
  }, {})

const ADDITIONAL_SERVICES = [
  {
    id: "none",
    name: "Без додаткових послуг",
    fee: "0%",
    description: "Стандартна обробка заявки без націнки.",
  },
  {
    id: "urgent",
    name: "Терміновий обмін",
    fee: "3%",
    description: "Пріоритетна обробка, коли важлива швидкість.",
  },
  {
    id: "receipt",
    name: "Квитанція про оплату",
    fee: "0.2%",
    description: "Підтвердження платежу для особистого обліку.",
  },
  {
    id: "third-party",
    name: "Платіж третьої особи",
    fee: "2%",
    description: "Коли відправник і отримувач відрізняються.",
  },
  {
    id: "wise",
    name: "Оплата з Wise на Wise",
    fee: "1%",
    description: "Для переказів усередині Wise.",
  },
  {
    id: "revolut",
    name: "Оплата з Revolut на Revolut",
    fee: "1%",
    description: "Для переказів усередині Revolut.",
  },
  {
    id: "kaspi",
    name: "Оплата через QR-код Kaspi Bank",
    fee: "1%",
    description: "Оплата за QR-кодом Kaspi Bank.",
  },
]

const OverviewTagButton = ({ tag, onClick }: { tag: string; onClick: () => void }) => {
  const currency = TAG_TO_CURRENCY[tag]
  const group = OVERVIEW_GROUP_BY_TAG[tag]
  const options = group?.subItems ?? []

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="inline-flex h-9 items-center rounded-full border border-[#e2e8f0] bg-white px-3.5 text-sm font-medium text-[#475569] shadow-sm shadow-black/[0.015] transition-all hover:-translate-y-0.5 hover:border-[#10b981] hover:bg-[#f8fffb] hover:text-[#166534] hover:shadow-md hover:shadow-emerald-950/[0.06]"
        >
          {tag}
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="center"
        sideOffset={10}
        className="max-w-[260px] rounded-xl border border-[#e2e8f0] bg-white p-3 text-[#0f172a] shadow-xl shadow-slate-950/[0.08]"
      >
        <div className="mb-2 flex items-center gap-2">
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: currency?.color ?? "#64748b" }}
            aria-hidden="true"
          >
            {currency?.icon ?? tag.slice(0, 1)}
          </span>
          <div>
            <p className="text-sm font-semibold leading-none text-[#0f172a]">{tag}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {options.map((item) => (
            <span
              key={item.id}
              className="rounded-full border border-[#cbd5e1] bg-[#f8fafc] px-2 py-1 text-[11px] font-semibold leading-none text-[#334155]"
            >
              {item.name} {item.detail}
            </span>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

const CashVariantButton = ({
  label,
  color,
  onClick,
}: {
  label: string
  color: string
  icon: string
  onClick: () => void
}) => {
  const parts = label.split(" ")
  const isUsd = parts[0] === "USD"
  return (
    <button
      onClick={onClick}
      className="inline-flex h-9 items-center rounded-full border border-[#e2e8f0] bg-white px-3.5 text-sm font-medium text-[#475569] shadow-sm shadow-black/[0.015] transition-all hover:-translate-y-0.5 hover:border-[#10b981] hover:bg-[#f8fffb] hover:text-[#166534] hover:shadow-md hover:shadow-emerald-950/[0.06]"
    >
      {isUsd ? (
        <>
          <span style={{ color }} className="font-semibold">{parts[0]}</span>
          {parts[1] && <>&nbsp;<span style={{ color }}>{parts[1]}</span></>}
          {parts.slice(2).length > 0 && <>&nbsp;{parts.slice(2).join(" ")}</>}
        </>
      ) : (
        label
      )}
    </button>
  )
}

export function ConverterSection() {
  const [sendCurrency, setSendCurrency] = useState<CurrencySelection>({ name: "USDT", detail: "TRC20", fullName: "Tether", color: "#26a17b", icon: "₮" })
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencySelection>({ name: "Privatbank", detail: "UAH", fullName: "Privatbank", color: "#4a9c2d", icon: "P" })
  const [sendAmount, setSendAmount] = useState("230.00")
  const [receiveAmount, setReceiveAmount] = useState("9441.50")
  const EXCHANGE_RATE = 41.05
  const [countdown, setCountdown] = useState(30)
  const [rateRefreshed, setRateRefreshed] = useState(false)
  
  // Selector state
  const [selectorOpen, setSelectorOpen] = useState(false)
  const converterRef = useRef<HTMLDivElement>(null)
  const [selectorMode, setSelectorMode] = useState<"send" | "receive">("send")
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"all" | "crypto" | "cash" | "accounts">("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Tag click alternation: first=send, second=receive, third=send...
  const [nextTagTarget, setNextTagTarget] = useState<"send" | "receive">("send")
  
  // Form step state
  const [showForm, setShowForm] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // 1=Direction, 2=Details, 3=Confirm
  
  // Form fields
  const [email, setEmail] = useState("")
  const [messenger, setMessenger] = useState("telegram")
  const [telegramUsername, setTelegramUsername] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  
  // Crypto payout fields
  const [walletAddress, setWalletAddress] = useState("")
  const [cryptoNetwork, setCryptoNetwork] = useState("")
  const [memoTag, setMemoTag] = useState("")
  
  // Cash payout fields
  const [cashCity, setCashCity] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [contactMethod, setContactMethod] = useState("")
  
  // E-wallet payout fields
  const [accountEmail, setAccountEmail] = useState("")
  
  // Helper function to determine receive type
  const getReceiveType = (currency: CurrencySelection): "bank" | "crypto" | "cash" | "ewallet" => {
    const bankNames = ["Privatbank", "Monobank", "Oschadbank", "PUMB", "A-Bank"]
    const ewalletNames = ["Revolut", "Wise", "Payoneer", "SEPA", "SWIFT"]
    const cryptoNames = ["USDT", "USDC", "BTC", "ETH", "LTC", "BNB", "SOL", "TON", "TRX", "XRP", "DOGE", "NOT", "POL"]
    
    if (bankNames.includes(currency.name)) return "bank"
    if (ewalletNames.includes(currency.name)) return "ewallet"
    if (cryptoNames.includes(currency.name)) return "crypto"
    if (currency.detail === "Cash" || currency.name.includes("USD") || currency.name === "EUR") return "cash"
    
    return "bank" // default
  }
  
  const receiveType = getReceiveType(receiveCurrency)
  
  // Helper functions for Cash options
  // Parse cash currency name like "USD Blue" or "EUR" to extract currency code
  const getCashCurrencyCode = (currency: CurrencySelection): string => {
    if (receiveType !== "cash") return currency.detail
    // Extract currency code: "USD Blue" -> "USD", "EUR" -> "EUR"
    const parts = currency.name.split(" ")
    return parts[0] // "USD" or "EUR"
  }
  
  // Get city from cash selection (stored in detail field)
  const getCashCity = (currency: CurrencySelection): string => {
    if (receiveType !== "cash") return ""
    // For cash options, detail contains the city (e.g., "Kyiv", "Kharkiv")
    const cities = ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv", "Zaporizhzhia", "Warsaw"]
    if (cities.includes(currency.detail)) {
      return currency.detail
    }
    return ""
  }
  
  // Get display currency for amount suffix, Max/Reserve (currency code only, no city/network)
  const getDisplayCurrency = (currency: CurrencySelection): string => {
    if (receiveType === "cash") {
      return getCashCurrencyCode(currency)
    }
    if (receiveType === "crypto") {
      // For crypto, use the currency name (e.g., "ETH", "BTC") not the network
      return currency.name
    }
    return currency.detail
  }
  
  // Optional services
  const [additionalServicesOpen, setAdditionalServicesOpen] = useState(false)
  const [selectedServiceIds, setSelectedServiceIds] = useState<Set<string>>(new Set())
  
  // AML check
  const [amlChoice, setAmlChoice] = useState<"completed" | "accept-risks" | null>(null)
  
  // Final confirmations
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [notRussianCitizen, setNotRussianCitizen] = useState(false)
  const [dontRememberData, setDontRememberData] = useState(false)

  // Countdown timer
  useEffect(() => {
    if (!selectorOpen) return
    const handleMouseDown = (e: MouseEvent) => {
      if (converterRef.current && !converterRef.current.contains(e.target as Node)) {
        setSelectorOpen(false)
      }
    }
    // Covers clicks outside the iframe in an embedded context
    const handleBlur = () => setSelectorOpen(false)
    document.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("blur", handleBlur)
    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("blur", handleBlur)
    }
  }, [selectorOpen])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setRateRefreshed(true)
          setTimeout(() => setRateRefreshed(false), 500)
          return 30
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getTimerColor = useCallback(() => {
    if (countdown <= 5) return "#ef4444"
    if (countdown <= 10) return "#f97316"
    return "#9ca3af"
  }, [countdown])

  const progress = (countdown / 30) * 100
  const strokeDasharray = 2 * Math.PI * 8
  const strokeDashoffset = strokeDasharray * (1 - progress / 100)

  // Toggle selector for Send or Receive
  const openSelector = (mode: "send" | "receive") => {
    // If already open for the same mode, close it
    if (selectorOpen && selectorMode === mode) {
      setSelectorOpen(false)
      return
    }
    // Otherwise open for the requested mode
    setSelectorMode(mode)
    setSelectorOpen(true)
    setExpandedGroup(null)
    setSearchQuery("")
    setActiveTab("all")
  }

  // Handle currency selection from selector
  const handleCurrencySelect = (currency: CurrencySelection) => {
    if (selectorMode === "send") {
      setSendCurrency(currency)
    } else {
      setReceiveCurrency(currency)
    }
    setSelectorOpen(false)
    setCountdown(30)
  }

  // Handle tag click - alternates between send and receive
  const handleQuickCurrencySelect = (currency: CurrencySelection) => {
    if (nextTagTarget === "send") {
      setSendCurrency(currency)
      setNextTagTarget("receive")
    } else {
      setReceiveCurrency(currency)
      setNextTagTarget("send")
    }
    setCountdown(30)
  }

  const handleTagClick = (tag: string) => {
    const currency = TAG_TO_CURRENCY[tag]
    if (!currency) return
    handleQuickCurrencySelect(currency)
  }

  const handleSendAmountChange = (value: string) => {
    setSendAmount(value)
    const parsed = parseFloat(value)
    if (!isNaN(parsed)) setReceiveAmount((parsed * EXCHANGE_RATE).toFixed(2))
  }

  const handleReceiveAmountChange = (value: string) => {
    setReceiveAmount(value)
    const parsed = parseFloat(value)
    if (!isNaN(parsed)) setSendAmount((parsed / EXCHANGE_RATE).toFixed(2))
  }

  // Swap currencies
  const handleSwap = () => {
    const temp = sendCurrency
    setSendCurrency(receiveCurrency)
    setReceiveCurrency(temp)
    setCountdown(30)
  }

  // Toggle group expansion (accordion - only one open at a time)
  const handleGroupToggle = (groupId: string) => {
    setExpandedGroup(expandedGroup === groupId ? null : groupId)
  }

  // Get currencies for active tab
  const getTabCurrencies = () => {
    if (activeTab === "all") {
      return [...CURRENCY_GROUPS.crypto, ...CURRENCY_GROUPS.cash, ...CURRENCY_GROUPS.accounts]
    }
    return CURRENCY_GROUPS[activeTab] || []
  }

  const tabCurrencies = getTabCurrencies().filter(c => 
    searchQuery === "" || 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.detail.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderSelectorPanel = (className = "flex h-[680px] flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white shadow-lg shadow-black/[0.04]") => (
    <div className={className}>
      {/* Selector header - sticky */}
      <div className="flex-shrink-0 border-b border-[#f0f0f0] px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#0f172a]">{selectorMode === "send" ? "You send" : "You receive"}</h3>
          </div>
          <button
            onClick={() => setSelectorOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for currency"
            className="h-10 w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-4 text-sm text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white"
          />
        </div>

        {/* Tabs */}
        <div className="mt-4 flex gap-2">
          {(["all", "crypto", "cash", "accounts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#0f172a] text-white"
                  : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#0f172a]"
              }`}
            >
              {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3">
          {tabCurrencies.map((group) => (
            <div key={group.id} className="mb-0.5">
              {/* Group header - shows only currency name, no network */}
              <button
                onClick={() => handleGroupToggle(group.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-all ${
                  expandedGroup === group.id 
                    ? "bg-[#f1f5f9]" 
                    : "hover:bg-[#f8fafc]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: group.color }}
                  >
                    <span className="text-sm font-bold text-white">{group.icon}</span>
                  </div>
                  <span className="font-semibold text-[#0f172a]">{group.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-xs font-medium text-[#64748b]">
                    {group.subItems.length}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-[#94a3b8] transition-transform duration-200 ${expandedGroup === group.id ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Sub-items (expanded) - shows logo + name + network stacked */}
              {expandedGroup === group.id && (
                <div className="ml-6 border-l border-dashed border-[#e2e8f0] pl-4 py-1">
                  {group.subItems.map((item) => {
                    const isSelected =
                      (selectorMode === "send" && sendCurrency.name === item.name && sendCurrency.detail === item.detail) ||
                      (selectorMode === "receive" && receiveCurrency.name === item.name && receiveCurrency.detail === item.detail)

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleCurrencySelect({ name: item.name, detail: item.detail, fullName: item.fullName, color: group.color, icon: group.icon })}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                          isSelected
                            ? "bg-[#eff6ff]"
                            : "hover:bg-[#f8fafc]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full"
                            style={{ backgroundColor: group.color }}
                          >
                            <span className="text-xs font-bold text-white">{group.icon}</span>
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-[#0f172a]">{item.name}</p>
                            <p className="text-xs font-medium text-[#64748b]">{item.detail}</p>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3b82f6]">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
  // Handle start exchange
  const handleStartExchange = () => {
    setShowForm(true)
    setSelectorOpen(false)
    setCurrentStep(2)
  }
  
  // Handle back to converter
  const handleBackToConverter = () => {
    setShowForm(false)
    setCurrentStep(1)
  }
  
  // Handle proceed to confirm
  const handleProceedToConfirm = () => {
    setCurrentStep(3)
  }

  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedServices = ADDITIONAL_SERVICES.filter(s => selectedServiceIds.has(s.id))

  // Check if details step is complete
  const detailsComplete = email && telegramUsername && cardNumber
  const confirmationComplete = agreeTerms && notRussianCitizen && dontRememberData && amlChoice
  const stepTwoComplete = detailsComplete && confirmationComplete

  return (
    <section id="converter" className="relative z-10 flow-root bg-gradient-to-b from-black/[0.04] to-white pt-8">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="converter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64748b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#converter-grid)" />
        </svg>
      </div>

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(167, 243, 208, 0.35) 0%, transparent 50%)' }} />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/2 rounded-full opacity-25" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 50%)' }} />

      <div className="relative w-full">
        {/* Main framed section */}
        <div className="relative mx-auto -mb-14 -mt-14 w-[90%]">
          {/* Outer glow/shadow frame */}
          <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-b from-white/80 via-[#f0fdf4]/40 to-[#eff6ff]/40 shadow-2xl shadow-black/[0.08]" />
          
          <div className="relative flex flex-col overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white/98 backdrop-blur-sm h-[800px]">
            {/* Full-frame gradient atmosphere - flowing from right to left */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {/* Mint glow - right side, flowing left */}
              <div className="absolute right-[5%] top-[10%] h-[400px] w-[500px] rounded-full bg-[#10b981]/[0.06] blur-[100px]" />
              {/* Light blue glow - center-right */}
              <div className="absolute right-[15%] top-[30%] h-[350px] w-[450px] rounded-full bg-[#3b82f6]/[0.05] blur-[90px]" />
              {/* Soft violet glow - bottom right, extending toward center */}
              <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[400px] rounded-full bg-[#a855f7]/[0.04] blur-[80px]" />
              {/* Warm yellow/peach glow - center area */}
              <div className="absolute bottom-[25%] right-[25%] h-[250px] w-[350px] rounded-full bg-[#f59e0b]/[0.035] blur-[70px]" />
              {/* Very subtle glow reaching toward left widget area */}
              <div className="absolute left-[20%] top-[40%] h-[300px] w-[400px] rounded-full bg-[#10b981]/[0.02] blur-[100px]" />
              <div className="absolute left-[30%] bottom-[20%] h-[200px] w-[300px] rounded-full bg-[#3b82f6]/[0.015] blur-[80px]" />
            </div>
            
            {/* Internal scrollable area */}
            <div className="relative z-10 flex-1 overflow-y-auto">
              <div className="p-6 pb-6 lg:p-8 lg:pb-8">
                
                {/* Converter area - first step only */}
                {!showForm && (
                <div ref={converterRef} className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
                  
                  {/* Left: Exchange Widget - More horizontal/rectangular with enough height for button */}
                  <div className="relative w-full lg:w-[440px] lg:flex-shrink-0">
                    {/* Glow behind widget */}
                    <div className="pointer-events-none absolute -inset-3 rounded-[24px] opacity-50" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.4) 60%, transparent 80%)' }} />

                    <div className="relative flex flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white shadow-lg shadow-black/[0.04]">
                      {/* Send Section */}
                      <div className="px-5 pb-2 pt-5">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-sm font-medium text-[#6b7280]">Send</p>
                          <div className="flex items-center gap-3 text-xs text-[#9ca3af]">
                            <span>Min <button onClick={() => !showForm && handleSendAmountChange("230.00")} className="font-medium text-[#10b981] hover:underline disabled:pointer-events-none" disabled={showForm}>230.00</button></span>
                            <span>Max <button onClick={() => !showForm && handleSendAmountChange("230000.06")} className="font-medium text-[#10b981] hover:underline disabled:pointer-events-none" disabled={showForm}>230000.06</button></span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => !showForm && openSelector("send")}
                            disabled={showForm}
                            className={`group flex items-center gap-2.5 rounded-xl border px-2 py-1.5 transition-all ${
                              showForm ? "cursor-default opacity-70" :
                              selectorOpen && selectorMode === "send"
                                ? "border-[#3b82f6] bg-[#eff6ff]"
                                : "border-transparent hover:border-[#e5e5e5] hover:bg-[#fafafa]"
                            }`}
                          >
                            <div
                              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: sendCurrency.color }}
                            >
                              <span className="text-base font-bold text-white">{sendCurrency.icon}</span>
                            </div>
                            <div className="flex min-w-0 items-center gap-1.5">
                              <span className="text-base font-semibold text-[#0f0f0f]">{sendCurrency.name}</span>
                              <span className="text-sm font-medium text-[#475569]">{sendCurrency.detail}</span>
                              {!showForm && <ChevronDown className="h-4 w-4 flex-shrink-0 text-[#9ca3af]" />}
                            </div>
                          </button>
                          <input
                            type="text"
                            value={sendAmount}
                            onChange={(e) => handleSendAmountChange(e.target.value)}
                            disabled={showForm}
                            className="min-w-0 flex-1 text-right text-2xl font-semibold tracking-tight text-[#0f0f0f] outline-none disabled:opacity-70"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      {/* Swap button */}
                      <div className="relative flex items-center justify-center py-1">
                        <div className="absolute inset-x-0 h-px bg-[#f0f0f0]" />
                        <button 
                          onClick={handleSwap}
                          disabled={showForm}
                          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#9ca3af] shadow-sm transition-all hover:border-[#10b981] hover:text-[#10b981] hover:shadow-md disabled:cursor-default disabled:opacity-50 disabled:hover:border-[#e5e5e5] disabled:hover:text-[#9ca3af]"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                          </svg>
                        </button>
                      </div>

                      {/* Receive Section */}
                      <div className="px-5 pb-2 pt-1">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-sm font-medium text-[#6b7280]">Receive</p>
                          <div className="flex items-center gap-3 text-xs text-[#9ca3af]">
                            <span>Min <button onClick={() => !showForm && handleReceiveAmountChange("9441.50")} className="font-medium text-[#10b981] hover:underline disabled:pointer-events-none" disabled={showForm}>9,441.50</button></span>
                            <span>Max <button onClick={() => !showForm && handleReceiveAmountChange("500000.00")} className="font-medium text-[#10b981] hover:underline disabled:pointer-events-none" disabled={showForm}>500,000</button></span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <button
                            onClick={() => !showForm && openSelector("receive")}
                            disabled={showForm}
                            className={`group flex items-center gap-2.5 rounded-xl border px-2 py-1.5 transition-all ${
                              showForm ? "cursor-default opacity-70" :
                              selectorOpen && selectorMode === "receive"
                                ? "border-[#3b82f6] bg-[#eff6ff]"
                                : "border-transparent hover:border-[#e5e5e5] hover:bg-[#fafafa]"
                            }`}
                          >
                            <div
                              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: receiveCurrency.color }}
                            >
                              <span className="text-base font-bold text-white">{receiveCurrency.icon}</span>
                            </div>
                            <div className="flex min-w-0 items-center gap-1.5">
                              <span className="text-base font-semibold text-[#0f0f0f]">{receiveCurrency.name}</span>
                              <span className="text-sm font-medium text-[#475569]">{receiveCurrency.detail}</span>
                              {!showForm && <ChevronDown className="h-4 w-4 flex-shrink-0 text-[#9ca3af]" />}
                            </div>
                          </button>
                          <input
                            type="text"
                            value={receiveAmount}
                            onChange={(e) => handleReceiveAmountChange(e.target.value)}
                            disabled={showForm}
                            className={`min-w-0 flex-1 text-right text-2xl font-semibold tracking-tight text-[#0f0f0f] outline-none transition-opacity disabled:opacity-70 ${rateRefreshed ? 'opacity-50' : ''}`}
                            placeholder="0.00"
                          />
                        </div>
                        <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                          <span className="text-[#9ca3af]">Reserve <button className="font-medium text-[#10b981] hover:underline" disabled={showForm}>230000.00</button></span>
                          <div className="flex items-center gap-1.5 rounded-full bg-[#f8f8f8] px-2.5 py-1">
                            <div className="relative h-4 w-4 flex-shrink-0">
                              <svg className="h-4 w-4 -rotate-90" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                                <circle
                                  cx="10" cy="10" r="8" fill="none"
                                  stroke={getTimerColor()}
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeDasharray={strokeDasharray}
                                  strokeDashoffset={strokeDashoffset}
                                  className="transition-all duration-1000"
                                />
                              </svg>
                            </div>
                            <span className="text-[#525252]">Rate</span>
                            <span className="font-medium text-[#0f0f0f]">1 {sendCurrency.name} = 41.05 {getDisplayCurrency(receiveCurrency)}</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto px-5 pb-5 pt-3">
                        {!showForm ? (
                          <Button 
                            onClick={handleStartExchange}
                            className="h-12 w-full rounded-xl bg-[#1a1f2e] text-base font-semibold text-white shadow-lg shadow-[#1a1f2e]/20 transition-all hover:bg-[#0f1219] hover:shadow-xl"
                          >
                            Start exchange
                          </Button>
                        ) : (
                          <Button 
                            onClick={handleBackToConverter}
                            variant="outline"
                            className="h-10 w-full rounded-xl border-[#e2e8f0] text-sm font-medium text-[#64748b] transition-all hover:border-[#cbd5e1] hover:text-[#0f172a]"
                          >
                            Change direction
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Trust badges + FAQ accordion — below the widget card */}
                    {!showForm && (
                      <div className="relative mt-4 flex flex-col gap-2 px-1">
                        {/* Mini FAQ accordion */}
                        <ConverterFaq />
                      </div>
                    )}
                  </div>

                  {/* Right: Floating cards illustration or Selector (when open) */}
                  <div className="hidden w-full lg:flex lg:flex-1 lg:items-center lg:justify-center">
                    {!showForm ? (
                      !selectorOpen ? (
                        /* Hub-and-spoke exchange diagram with features below */
                        <div className="relative flex flex-col items-center">
                          {/* Premium gradient background - extends to full area */}
                          <div className="pointer-events-none absolute -inset-8">
                            {/* Base gradient with multiple color stops */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#e8e0f0]/50 via-[#d8f0ed]/40 to-[#e0f0f8]/50" />
                            {/* Additional gradient orbs for depth */}
                            <div className="absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-[#e8dff5]/50 blur-[100px]" />
                            <div className="absolute left-1/3 top-1/3 h-[280px] w-[280px] rounded-full bg-[#d4f0eb]/40 blur-[90px]" />
                            <div className="absolute bottom-1/4 right-1/4 h-[240px] w-[240px] rounded-full bg-[#dbeef8]/45 blur-[80px]" />
                            <div className="absolute -right-10 bottom-1/3 h-[200px] w-[200px] rounded-full bg-[#fce8dc]/35 blur-[70px]" />
                            {/* Subtle checkered grid overlay */}
                            <div 
                              className="absolute inset-0 opacity-[0.25]"
                              style={{
                                backgroundImage: `
                                  linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                                  linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
                                `,
                                backgroundSize: '48px 48px'
                              }}
                            />
                            {/* Soft fade edges */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/60" />
                          </div>
                          
                          {/* Illustration content - wider and shorter */}
                          <div className="relative flex h-[520px] w-full max-w-[1050px] items-center justify-center">
                          
                          {/* Dashed connection lines with dots - SVG layer */}
                          <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 1050 520">
                            {/* USDT to center */}
                            <path d="M 280 95 L 280 140 Q 280 175 340 200 L 450 235" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="280" cy="140" r="4" fill="#cbd5e1" />
                            
                            {/* BTC to center */}
                            <path d="M 830 95 L 830 145 Q 830 180 770 210 L 600 245" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="830" cy="145" r="4" fill="#f7931a" />
                            
                            {/* Revolut to center */}
                            <path d="M 140 280 L 220 280 Q 290 280 360 255 L 450 245" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="220" cy="280" r="4" fill="#cbd5e1" />
                            
                            {/* Bank Transfer to center */}
                            <path d="M 910 280 L 830 280 Q 760 280 690 255 L 600 245" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="830" cy="280" r="4" fill="#3b82f6" />
                            
                            {/* Wise to center */}
                            <path d="M 240 430 L 300 395 Q 370 355 440 315 L 490 285" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="300" cy="395" r="4" fill="#9fe870" />
                            
                            {/* Cash Pickup to center */}
                            <path d="M 810 430 L 750 395 Q 680 355 610 315 L 560 285" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                            <circle cx="750" cy="395" r="4" fill="#22c55e" />
                          </svg>

                          {/* Feature callout: Best rates - top center */}
                          <div className="absolute left-1/2 top-[2%] z-30 -translate-x-1/2">
                            <div className="flex items-center gap-2.5 rounded-xl border border-[#bbf7d0]/60 bg-gradient-to-br from-[#dcfce7] to-[#ecfdf5] px-4 py-2.5 shadow-md shadow-[#22c55e]/10">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22c55e]">
                                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h4l3-9 4 18 3-9h4" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#166534]">Best rates</p>
                                <p className="text-xs text-[#15803d]">We find you the best</p>
                              </div>
                            </div>
                          </div>

                          {/* USDT - top left */}
                          <div className="absolute left-[8%] top-[12%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#26a17b]">
                                  <span className="text-lg font-bold text-white">&#8378;</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">USDT</p>
                                  <p className="text-xs text-[#94a3b8]">Tether</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* BTC - top right */}
                          <div className="absolute right-[8%] top-[12%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7931a]">
                                  <span className="text-lg font-bold text-white">B</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">BTC</p>
                                  <p className="text-xs text-[#94a3b8]">Bitcoin</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Central Exchange hub */}
                          <div className="relative z-20">
                            <div className="relative flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[24px] border border-[#e2e8f0] bg-white shadow-2xl shadow-black/[0.08]">
                              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#f1f5f9]">
                                <svg className="h-7 w-7 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                              </div>
                              <span className="mt-2 text-sm font-semibold text-[#0f172a]">Exchange</span>
                            </div>
                          </div>

                          {/* Feature callout: Fast - left side */}
                          <div className="absolute left-[0%] top-[38%] z-30">
                            <div className="flex items-center gap-2.5 rounded-xl border border-[#bfdbfe]/60 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] px-4 py-2.5 shadow-md shadow-[#3b82f6]/10">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]">
                                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#1e40af]">Fast</p>
                                <p className="text-xs text-[#2563eb]">2 min avg</p>
                              </div>
                            </div>
                          </div>

                          {/* Revolut - left */}
                          <div className="absolute left-[2%] top-[48%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#191c1f]">
                                  <span className="text-base font-bold text-white">R</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">Revolut</p>
                                  <p className="text-xs text-[#94a3b8]">Neobank</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bank Transfer - right */}
                          <div className="absolute right-[2%] top-[48%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#eff6ff] to-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f]">
                                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">Bank Transfer</p>
                                  <p className="text-xs text-[#94a3b8]">Direct to bank</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Feature callout: 24/7 Support - right side */}
                          <div className="absolute right-[0%] top-[38%] z-30">
                            <div className="flex items-center gap-2.5 rounded-xl border border-[#e9d5ff]/60 bg-gradient-to-br from-[#f3e8ff] to-[#faf5ff] px-4 py-2.5 shadow-md shadow-[#9333ea]/10">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#9333ea]">
                                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#6b21a8]">24/7 Support</p>
                                <p className="text-xs text-[#7c3aed]">Real people</p>
                              </div>
                            </div>
                          </div>

                          {/* Wise - bottom left */}
                          <div className="absolute bottom-[18%] left-[8%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9fe870]">
                                  <span className="text-base font-bold text-[#163300]">W</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">Wise</p>
                                  <p className="text-xs text-[#94a3b8]">Transfer</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Cash Pickup - bottom right */}
                          <div className="absolute bottom-[18%] right-[8%] z-30">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#f0fdf4] to-white px-4 py-3 shadow-lg shadow-black/[0.04]">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22c55e]">
                                  <span className="text-lg font-bold text-white">$</span>
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-[#0f172a]">Cash Pickup</p>
                                  <p className="text-xs text-[#94a3b8]">USD / EUR</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Features row below illustration - mini cards */}
                        <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
                          <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0]/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f5f9]">
                              <svg className="h-4.5 w-4.5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#0f172a]">Rate visible</p>
                              <p className="text-xs text-[#94a3b8]">before request</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0]/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f5f9]">
                              <svg className="h-4.5 w-4.5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#0f172a]">No registration</p>
                              <p className="text-xs text-[#94a3b8]">required</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0]/60 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f5f9]">
                              <svg className="h-4.5 w-4.5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-[#0f172a]">Human support</p>
                              <p className="text-xs text-[#94a3b8]">24/7</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      ) : (
                        /* Selector panel (opens when user clicks currency field) */
                        <div className="relative w-full">
                          {/* Arrow pointing left toward the trigger button */}
                          <div
                            className="absolute left-0 -translate-x-full hidden lg:block"
                            style={{ top: selectorMode === "send" ? "22px" : "82px" }}
                          >
                            {/* border layer */}
                            <div style={{ width: 0, height: 0, borderTop: "18px solid transparent", borderBottom: "18px solid transparent", borderRight: "18px solid #e2e8f0" }} />
                          </div>
                          <div
                            className="absolute left-0 hidden lg:block"
                            style={{ top: selectorMode === "send" ? "24px" : "84px", left: "-16px" }}
                          >
                            {/* white fill layer */}
                            <div style={{ width: 0, height: 0, borderTop: "16px solid transparent", borderBottom: "16px solid transparent", borderRight: "16px solid white" }} />
                          </div>

                        <div className="flex h-[680px] w-full flex-col overflow-hidden rounded-[18px] border border-[#e2e8f0] bg-white shadow-lg shadow-black/[0.04]">
                          {/* Selector header - sticky */}
                          <div className="flex-shrink-0 border-b border-[#f0f0f0] px-5 py-4">
                            <div className="flex items-center justify-between">
                              <div>
          <h3 className="text-lg font-bold text-[#0f172a]">{selectorMode === "send" ? "You send" : "You receive"}</h3>
                              </div>
                              <button 
                                onClick={() => setSelectorOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a]"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                            
                            {/* Search */}
                            <div className="relative mt-4">
                              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for currency"
                                className="h-10 w-full rounded-xl border border-[#e2e8f0] bg-[#f8fafc] pl-10 pr-4 text-sm text-[#0f172a] outline-none transition-colors placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white"
                              />
                            </div>
                            
                            {/* Tabs */}
                            <div className="mt-4 flex gap-2">
                              {(["all", "crypto", "cash", "accounts"] as const).map((tab) => (
                                <button
                                  key={tab}
                                  onClick={() => setActiveTab(tab)}
                                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                                    activeTab === tab
                                      ? "bg-[#0f172a] text-white"
                                      : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                                  }`}
                                >
                                  {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          {/* Scrollable list */}
                          <div className="flex-1 overflow-y-auto">
                            <div className="p-3">
                              {tabCurrencies.map((group) => (
                                <div key={group.id} className="mb-0.5">
                                  {/* Group header - shows only currency name, no network */}
                                  <button
                                    onClick={() => handleGroupToggle(group.id)}
                                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-all ${
                                      expandedGroup === group.id ? "bg-[#f1f5f9]" : "hover:bg-[#f8fafc]"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div 
                                        className="flex h-10 w-10 items-center justify-center rounded-full"
                                        style={{ backgroundColor: group.color }}
                                      >
                                        <span className="text-sm font-bold text-white">{group.icon}</span>
                                      </div>
                                      <span className="font-semibold text-[#0f172a]">{group.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-xs font-medium text-[#64748b]">
                                        {group.subItems.length}
                                      </span>
                                      <ChevronDown className={`h-4 w-4 text-[#94a3b8] transition-transform duration-200 ${expandedGroup === group.id ? "rotate-180" : ""}`} />
                                    </div>
                                  </button>
                                  
                                  {/* Sub-items (expanded) - shows logo + name + network stacked */}
                                  {expandedGroup === group.id && (
                                    <div className="ml-6 border-l border-dashed border-[#e2e8f0] pl-4 py-1">
                                      {group.subItems.map((item) => {
                                        const isSelected = 
                                          (selectorMode === "send" && sendCurrency.name === item.name && sendCurrency.detail === item.detail) ||
                                          (selectorMode === "receive" && receiveCurrency.name === item.name && receiveCurrency.detail === item.detail)
                                        
                                        return (
                                          <button
                                            key={item.id}
                                            onClick={() => handleCurrencySelect({ name: item.name, detail: item.detail, fullName: item.fullName, color: group.color, icon: group.icon })}
                                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                                              isSelected 
                                                ? "bg-[#eff6ff]" 
                                                : "hover:bg-[#f8fafc]"
                                            }`}
                                          >
                                            <div className="flex items-center gap-3">
                                              <div 
                                                className="flex h-8 w-8 items-center justify-center rounded-full"
                                                style={{ backgroundColor: group.color }}
                                              >
                                                <span className="text-xs font-bold text-white">{group.icon}</span>
                                              </div>
                                              <div className="text-left">
                                                <p className="font-medium text-[#0f172a]">{item.name}</p>
                                                <p className="text-xs font-medium text-[#64748b]">{item.detail}</p>
                                              </div>
                                            </div>
                                            {isSelected && (
                                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3b82f6]">
                                                <Check className="h-3 w-3 text-white" />
                                              </div>
                                            )}
                                          </button>
                                        )
                                      })}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        </div>
                      )
                    ) : (
                      /* Form mode: Empty space - details form is shown below */
                      <div className="hidden lg:block" />
                    )}
                  </div>
                </div>
                )}
                
                {/* Request details form - appears after clicking Start exchange */}
                {showForm && (
                  <div>
                    
                    {/* Step 2: Details */}
                    {currentStep === 2 && (
                      <>
                  {/* Two cards side by side - Premium styling */}
                  <div className="mb-4 grid gap-4 lg:grid-cols-2">
                          {/* Left card: You send */}
                          <div className="relative overflow-visible rounded-[20px] border border-[#e2e8f0] bg-white">
                            {/* Amount section with highlighted background */}
                            <div className="rounded-t-[20px] bg-[#f8fafc] px-5 pb-4 pt-4">
                              <div className="mb-2.5 flex items-center justify-between">
                                <h3 className="font-semibold text-[#0f172a]">You send</h3>
                                <button
                                  onClick={() => openSelector("send")}
                                  className={`group flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-left transition-all ${
                                    selectorOpen && selectorMode === "send"
                                      ? "border border-[#3b82f6] bg-[#eff6ff] ring-2 ring-[#3b82f6]/10"
                                      : "border border-transparent hover:bg-white/60"
                                  }`}
                                >
                                  <div
                                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                                    style={{ backgroundColor: sendCurrency.color }}
                                  >
                                    <span className="text-sm font-bold text-white">{sendCurrency.icon}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-base font-semibold text-[#0f172a]">{sendCurrency.name}</span>
                                    <span className="text-sm font-medium text-[#64748b]">{sendCurrency.detail}</span>
                                    <ChevronDown className={`h-4 w-4 text-[#9ca3af] transition-transform duration-200 ${selectorOpen && selectorMode === "send" ? "rotate-180" : ""}`} />
                                  </div>
                                </button>
                              </div>
                              
                              {/* Amount input with currency inside */}
                              <div className="relative">
                                <input
                                  type="text"
                                  value={sendAmount}
                                  onChange={(e) => handleSendAmountChange(e.target.value)}
                                  className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 pr-20 text-xl font-bold tracking-tight text-[#0f172a] outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10"
                                  placeholder="0.00"
                                />
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                  <span className="text-sm font-semibold text-[#94a3b8]">{sendCurrency.name}</span>
                                </div>
                              </div>
                              
                              {/* Info badges */}
                              <div className="mt-2.5 flex flex-wrap gap-2">
                                <div className="flex h-7 items-center gap-1.5 rounded-md bg-white px-2.5 text-xs">
                                  <span className="text-[#64748b]">Min:</span>
                                  <span className="font-medium text-[#0f172a]">10 {sendCurrency.name}</span>
                                </div>
                                <div className="flex h-7 items-center gap-1.5 rounded-md bg-white px-2.5 text-xs">
                                  <span className="text-[#64748b]">Network:</span>
                                  <span className="font-medium text-[#0f172a]">{sendCurrency.detail || 'TRC20'}</span>
                                </div>
                              </div>
                            </div>
                            
                            {selectorOpen && selectorMode === "send" && (
                              <div className="absolute left-4 right-4 top-[72px] z-50">
                                {renderSelectorPanel("flex max-h-[520px] flex-col overflow-hidden rounded-[18px] border border-[#dbe4ef] bg-white shadow-2xl shadow-slate-950/[0.16]")}
                              </div>
                            )}
                            
                            {/* Contact details section */}
                            <div className="p-5">
                              <h4 className="mb-4 text-sm font-semibold text-[#0f172a]">Contact details</h4>
                              <div className="space-y-4">
                                <div>
                                  <label className="mb-2 block text-xs font-medium text-[#64748b]">E-mail</label>
                                  <div className="relative">
                                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                    <input
                                      type="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="your@email.com"
                                      className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                    />
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <label className="mb-2 block text-xs font-medium text-[#64748b]">Messenger</label>
                                    <div className="relative">
                                      <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                      <select
                                        value={messenger}
                                        onChange={(e) => setMessenger(e.target.value)}
                                        className="h-12 w-full appearance-none rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-10 text-sm text-[#0f172a] outline-none transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                      >
                                        <option value="telegram">Telegram</option>
                                        <option value="viber">Viber</option>
                                        <option value="whatsapp">WhatsApp</option>
                                      </select>
                                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                    </div>
                                  </div>
                                  <div>
                                    <label className="mb-2 block text-xs font-medium text-[#64748b]">
                                      {messenger === 'whatsapp' ? 'WhatsApp number' : messenger === 'viber' ? 'Viber number' : 'Username'}
                                    </label>
                                    <div className="relative">
                                      {messenger === 'whatsapp' || messenger === 'viber' ? (
                                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                      ) : (
                                        <AtSign className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                      )}
                                      <input
                                        type="text"
                                        value={telegramUsername}
                                        onChange={(e) => setTelegramUsername(e.target.value)}
                                        placeholder={messenger === 'whatsapp' || messenger === 'viber' ? '+380 00 000 0000' : '@username'}
                                        className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Info box - green tint */}
                              <div className="mt-4 flex h-12 items-center gap-3 rounded-xl bg-[#f0fdf4] px-4">
                                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#22c55e]" />
                                <p className="text-[13px] text-[#374151]">We&apos;ll confirm the transaction via the selected messenger.</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Right card: You receive */}
                          <div className="relative overflow-visible rounded-[20px] border border-[#e2e8f0] bg-white">
                            {/* Amount section with highlighted background */}
                            <div className="rounded-t-[20px] bg-[#f8fafc] px-5 pb-4 pt-4">
                              <div className="mb-2.5 flex items-center justify-between">
                                <h3 className="font-semibold text-[#0f172a]">You receive</h3>
                                <button
                                  onClick={() => openSelector("receive")}
                                  className={`group flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-left transition-all ${
                                    selectorOpen && selectorMode === "receive"
                                      ? "border border-[#3b82f6] bg-[#eff6ff] ring-2 ring-[#3b82f6]/10"
                                      : "border border-transparent hover:bg-white/60"
                                  }`}
                                >
                                  <div
                                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                                    style={{ backgroundColor: receiveCurrency.color }}
                                  >
                                    <span className="text-sm font-bold text-white">{receiveCurrency.icon}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-base font-semibold text-[#0f172a]">{receiveCurrency.name}</span>
                                    <span className="text-sm font-medium text-[#64748b]">{receiveType === "cash" ? getCashCity(receiveCurrency) : receiveCurrency.detail}</span>
                                    <ChevronDown className={`h-4 w-4 text-[#9ca3af] transition-transform duration-200 ${selectorOpen && selectorMode === "receive" ? "rotate-180" : ""}`} />
                                  </div>
                                </button>
                              </div>
                              
                              {/* Amount input with currency inside */}
                              <div className="relative">
                                <input
                                  type="text"
                                  value={receiveAmount}
                                  onChange={(e) => handleReceiveAmountChange(e.target.value)}
                                  className={`h-12 w-full rounded-xl border border-[#e2e8f0] bg-white px-4 pr-20 text-xl font-bold tracking-tight text-[#0f172a] outline-none transition-all focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 ${rateRefreshed ? 'opacity-50' : ''}`}
                                  placeholder="0.00"
                                />
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                  <span className="text-sm font-semibold text-[#94a3b8]">{getDisplayCurrency(receiveCurrency)}</span>
                                </div>
                              </div>
                              
                              {/* Info badges */}
                              <div className="mt-2.5 flex flex-wrap gap-2">
                                <div className="flex h-7 items-center gap-1.5 rounded-md bg-white px-2.5 text-xs">
                                  <span className="text-[#64748b]">Max:</span>
                                  <span className="font-medium text-[#0f172a]">500,000 {getDisplayCurrency(receiveCurrency)}</span>
                                </div>
                                <div className="flex h-7 items-center gap-1.5 rounded-md bg-white px-2.5 text-xs">
                                  <span className="text-[#64748b]">Reserve:</span>
                                  <span className="font-medium text-[#10b981]">3.26M {getDisplayCurrency(receiveCurrency)}</span>
                                </div>
                              </div>
                            </div>
                            
                            {selectorOpen && selectorMode === "receive" && (
                              <div className="absolute left-4 right-4 top-[72px] z-50">
                                {renderSelectorPanel("flex max-h-[520px] flex-col overflow-hidden rounded-[18px] border border-[#dbe4ef] bg-white shadow-2xl shadow-slate-950/[0.16]")}
                              </div>
                            )}
                            
                            {/* Payout details section - dynamic based on receive type */}
                            <div className="p-5">
                              <h4 className="mb-4 text-sm font-semibold text-[#0f172a]">
                                {receiveType === "crypto" ? "Wallet details" : 
                                 receiveType === "cash" ? "Pickup details" : 
                                 receiveType === "ewallet" ? "Account details" : 
                                 "Payout details"}
                              </h4>
                              <div className="space-y-4">
                                {/* Bank/Card fields */}
                                {receiveType === "bank" && (
                                  <>
                                    <div>
                                      <label className="mb-2 block text-xs font-medium text-[#64748b]">Card number</label>
                                      <div className="relative">
                                        <CreditCard className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        <input
                                          type="text"
                                          value={cardNumber}
                                          onChange={(e) => setCardNumber(e.target.value)}
                                          placeholder="0000 0000 0000 0000"
                                          className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label className="mb-2 block text-xs font-medium text-[#64748b]">Cardholder name</label>
                                      <div className="relative">
                                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        <input
                                          type="text"
                                          value={cardholderName}
                                          onChange={(e) => setCardholderName(e.target.value)}
                                          placeholder="IVAN IVANOV"
                                          className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                        />
                                      </div>
                                    </div>
                                  </>
                                )}
                                
                                {/* Crypto fields */}
                                {receiveType === "crypto" && (
                                  <>
                                    <div>
                                      <label className="mb-2 block text-xs font-medium text-[#64748b]">Wallet address</label>
                                      <div className="relative">
                                        <Wallet className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        <input
                                          type="text"
                                          value={walletAddress}
                                          onChange={(e) => setWalletAddress(e.target.value)}
                                          placeholder="Enter your wallet address"
                                          className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                        />
                                      </div>
                                      <p className="mt-2 text-xs text-[#64748b]">
                                        Make sure this wallet supports {receiveCurrency.name} on {receiveCurrency.detail}.
                                      </p>
                                    </div>
                                    {(receiveCurrency.name === "XRP" || receiveCurrency.name === "TON" || receiveCurrency.name === "NOT") && (
                                      <div>
                                        <label className="mb-2 block text-xs font-medium text-[#64748b]">Memo / Tag (if required)</label>
                                        <div className="relative">
                                          <Hash className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                          <input
                                            type="text"
                                            value={memoTag}
                                            onChange={(e) => setMemoTag(e.target.value)}
                                            placeholder="Optional memo or destination tag"
                                            className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                                
                                {/* Cash pickup fields */}
                                {receiveType === "cash" && (
                                  <>
                                    {/* Readonly pickup info - city already selected via currency selector */}
                                    <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eff6ff]">
                                        <MapPin className="h-5 w-5 text-[#3b82f6]" />
                                      </div>
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-[#0f172a]">
                                          Pickup in {getCashCity(receiveCurrency) || "selected city"}
                                        </p>
                                        <p className="text-xs text-[#64748b]">
                                          Exact location will be sent via messenger
                                        </p>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <label className="mb-2 block text-xs font-medium text-[#64748b]">Preferred contact method</label>
                                      <div className="relative">
                                        <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        <select
                                          value={contactMethod}
                                          onChange={(e) => setContactMethod(e.target.value)}
                                          className="h-12 w-full appearance-none rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-10 text-sm text-[#0f172a] outline-none transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                        >
                                          <option value="">Select contact method</option>
                                          <option value="telegram">Telegram</option>
                                          <option value="viber">Viber</option>
                                          <option value="whatsapp">WhatsApp</option>
                                          <option value="phone">Phone call</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                      </div>
                                    </div>
                                  </>
                                )}
                                
                                {/* E-wallet fields (Revolut, Wise, Payoneer, SEPA, SWIFT) */}
                                {receiveType === "ewallet" && (
                                  <>
                                    <div>
                                      <label className="mb-2 block text-xs font-medium text-[#64748b]">
                                        {receiveCurrency.name === "Revolut" ? "Revolut email or phone" :
                                         receiveCurrency.name === "Wise" ? "Wise email" :
                                         receiveCurrency.name === "Payoneer" ? "Payoneer email" :
                                         receiveCurrency.name === "SEPA" ? "IBAN" :
                                         receiveCurrency.name === "SWIFT" ? "Account number" :
                                         "Account email / ID"}
                                      </label>
                                      <div className="relative">
                                        {receiveCurrency.name === "SEPA" || receiveCurrency.name === "SWIFT" ? (
                                          <CreditCard className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        ) : (
                                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                        )}
                                        <input
                                          type="text"
                                          value={accountEmail}
                                          onChange={(e) => setAccountEmail(e.target.value)}
                                          placeholder={
                                            receiveCurrency.name === "Revolut" ? "email@example.com or +380..." :
                                            receiveCurrency.name === "Wise" ? "email@example.com" :
                                            receiveCurrency.name === "Payoneer" ? "email@example.com" :
                                            receiveCurrency.name === "SEPA" ? "DE89 3704 0044 0532 0130 00" :
                                            receiveCurrency.name === "SWIFT" ? "Account number" :
                                            "email@example.com"
                                          }
                                          className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                        />
                                      </div>
                                    </div>
                                    {(receiveCurrency.name === "SEPA" || receiveCurrency.name === "SWIFT") && (
                                      <div>
                                        <label className="mb-2 block text-xs font-medium text-[#64748b]">Account holder name</label>
                                        <div className="relative">
                                          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                          <input
                                            type="text"
                                            value={cardholderName}
                                            onChange={(e) => setCardholderName(e.target.value)}
                                            placeholder="IVAN IVANOV"
                                            className="h-12 w-full rounded-xl border border-[#e2e8f0] bg-[#fafbfc] pl-11 pr-4 text-sm text-[#0f172a] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/10"
                                          />
                                        </div>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                              
                              {/* Info box - blue tint */}
                              <div className="mt-4 flex h-12 items-center gap-3 rounded-xl bg-[#eff6ff] px-4">
                                <Lock className="h-4 w-4 flex-shrink-0 text-[#3b82f6]" />
                                <p className="text-[13px] text-[#374151]">
                                  {receiveType === "crypto" ? "Double-check your wallet address. Transactions cannot be reversed." :
                                   receiveType === "cash" ? "We'll contact you to arrange the pickup details." :
                                   receiveType === "ewallet" ? "Your account details are encrypted and never stored." :
                                   "Your card details are encrypted and never stored."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6 grid gap-4 lg:grid-cols-2">
                          {/* Exchange terms */}
                          <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-slate-950/[0.02]">
                            <h4 className="mb-4 font-semibold text-[#0f172a]">Exchange terms</h4>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                              <div className="flex items-start gap-3 rounded-xl bg-[#f8fafc] p-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dbeafe]">
                                  <Clock className="h-4 w-4 text-[#3b82f6]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#0f172a]">Processing time</p>
                                  <p className="text-xs text-[#64748b]">15 minutes to 72 hours depending on direction</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 rounded-xl bg-[#f8fafc] p-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dcfce7]">
                                  <Shield className="h-4 w-4 text-[#22c55e]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#0f172a]">Rate fixation</p>
                                  <p className="text-xs text-[#64748b]">Fixed when funds are credited to our details</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 rounded-xl bg-[#f8fafc] p-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7]">
                                  <MessageCircle className="h-4 w-4 text-[#f59e0b]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#0f172a]">Telegram contact</p>
                                  <p className="text-xs text-[#64748b]">Active username required for communication</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3 rounded-xl bg-[#f8fafc] p-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fae8ff]">
                                  <CreditCard className="h-4 w-4 text-[#a855f7]" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-[#0f172a]">If contact unavailable</p>
                                  <p className="text-xs text-[#64748b]">Processing paused until you reach out</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Restricted services */}
                          <div className="rounded-[20px] border border-[#fecdd3] bg-gradient-to-br from-[#fff1f2] to-[#fef2f2] p-5 shadow-sm shadow-red-950/[0.03]">
                            <div className="mb-3 flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fee2e2]">
                                <AlertTriangle className="h-5 w-5 text-[#ef4444]" />
                              </div>
                              <div>
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                  <span className="rounded-full border border-[#fca5a5] bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#dc2626]">Важливо</span>
                                  <h4 className="font-semibold text-[#991b1b]">Не оплачуйте з цих сервісів</h4>
                                </div>
                                <p className="text-sm leading-6 text-[#b91c1c]">
                                  Перекази з зазначених нижче майданчиків автоматично потрапляють на <strong>посилену AML-пе��евірку</strong>. Заявку м��же бути призупинено для запиту KYC/SoF або повернення коштів.
                                </p>
                              </div>
                            </div>
                            <div className="mb-3 flex flex-wrap gap-2">
                              {[
                                { name: "FanPay", tag: "P2P" },
                                { name: "Exmo", tag: "P2P" },
                                { name: "Garantex", tag: "санкції" },
                                { name: "Bitzlato", tag: "санкції" },
                                { name: "SUEX", tag: "санкції" },
                                { name: "Hydra", tag: "санкції" },
                                { name: "Tornado Cash", tag: "міксер" },
                                { name: "Wasabi", tag: "міксер" },
                                { name: "ChipMixer", tag: "міксер" },
                                { name: "Samourai", tag: "міксер" },
                              ].map((s) => (
                                <span key={s.name} className="inline-flex items-center gap-1.5 rounded-full border border-[#fca5a5] bg-white px-3 py-1 text-sm text-[#991b1b]">
                                  <span className="font-semibold">{s.name}</span>
                                  <span className="text-[#fca5a5]">·</span>
                                  <span className="text-xs text-[#b91c1c]">{s.tag}</span>
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2 rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] px-3 py-2.5 text-sm font-medium text-[#166534]">
                              <Check className="h-4 w-4 shrink-0 text-[#16a34a]" />
                              Використовуйте власний гаманець або біржу з білою репутацією.
                            </div>
                          </div>

                          {/* Additional services */}
                          <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-slate-950/[0.02]">
                            <p className="mb-3 text-sm font-semibold text-[#0f172a]">Дода����ові ��ослуги</p>
                            <div className="flex flex-col gap-2">
                              {ADDITIONAL_SERVICES.map((service) => {
                                const selected = selectedServiceIds.has(service.id)
                                return (
                                  <button
                                    key={service.id}
                                    type="button"
                                    onClick={() => toggleService(service.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all ${
                                      selected
                                        ? "border-[#3b82f6] bg-[#eff6ff]"
                                        : "border-[#e2e8f0] bg-[#f8fafc] hover:border-[#cbd5e1] hover:bg-white"
                                    }`}
                                  >
                                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                                      selected ? "border-[#3b82f6] bg-[#3b82f6]" : "border-[#94a3b8] bg-white"
                                    }`}>
                                      {selected && <Check className="h-3 w-3 text-white" />}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className="block truncate text-sm font-semibold text-[#0f172a]">{service.name}</span>
                                      <span className="block truncate text-xs text-[#64748b]">{service.description}</span>
                                    </span>
                                    <span className={`shrink-0 rounded-full px-2.5 py-1 text-sm font-bold shadow-sm ${selected ? "bg-white text-[#3b82f6]" : "bg-white text-[#0f172a]"}`}>
                                      {service.fee}
                                    </span>
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* AML check */}
                          <div className="rounded-[20px] border border-[#dbe4ef] bg-gradient-to-r from-[#f8fbff] to-white p-5 shadow-sm shadow-slate-950/[0.02]">
                            <div className="mb-3 flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#eff6ff]">
                                <Shield className="h-5 w-5 text-[#3b82f6]" />
                              </div>
                              <div className="min-w-0">
                                <div className="mb-1 flex flex-wrap items-center gap-2">
                                  <span className="rounded-full border border-[#bfdbfe] bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#2563eb]">
                                    Важливо
                                  </span>
                                  <h4 className="text-base font-semibold text-[#0f172a]">Anti-Money Laundering (AML)-перевірка до оплати</h4>
                                </div>
                                <p className="text-sm leading-6 text-[#64748b]">
                                  Якщо Risk Score високий, заявку може бути призупинено для перевірки клієнта (Know Your Customer, KYC), джерела коштів (Source of Funds, SoF) або повернення коштів.
                                </p>
                              </div>
                            </div>

                            <div className="mb-4 grid gap-2 text-sm text-[#475569]">
                              <div className="rounded-xl bg-[#f1f5f9] px-3 py-2">
                                <span className="font-semibold text-[#0f172a]">1.</span> Скопіюйте адресу гаманця або ідентифікатор транзакції (TXID).
                              </div>
                              <div className="rounded-xl bg-[#f1f5f9] px-3 py-2">
                                <span className="font-semibold text-[#0f172a]">2.</span> Перейдіть за посиланням і оберіть GETBLOCK.
                              </div>
                            </div>

                            <div className="mb-4 flex flex-col gap-3">
                              <a
                                href="#"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-950/[0.12] transition-all hover:bg-[#15803d]"
                              >
                                Перевірити на BestChange <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                              <div className="flex items-start gap-2 rounded-xl bg-[#eff6ff] px-3 py-2 text-xs text-[#475569]">
                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#3b82f6]" />
                                <span>Результат зов��ішньої ��еревірки є орієнтовним і ��оже відрізнятися від внутрішньої AML-системи сервісу.</span>
                              </div>
                            </div>

                            <div className="grid gap-3">
                              <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${amlChoice === 'completed' ? 'border-[#3b82f6] bg-[#eff6ff]' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}>
                                <input
                                  type="radio"
                                  name="aml"
                                  checked={amlChoice === "completed"}
                                  onChange={() => setAmlChoice("completed")}
                                  className="sr-only"
                                />
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${amlChoice === 'completed' ? 'border-[#3b82f6]' : 'border-[#cbd5e1]'}`}>
                                  {amlChoice === 'completed' && <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />}
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-[#0f172a]">Перевірку проводив(ла)</span>
                                  <span className="block text-xs text-[#64748b]">Ознайомлений(а) з результатом Risk Score.</span>
                                </span>
                              </label>
                              <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${amlChoice === 'accept-risks' ? 'border-[#3b82f6] bg-[#eff6ff]' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}>
                                <input
                                  type="radio"
                                  name="aml"
                                  checked={amlChoice === "accept-risks"}
                                  onChange={() => setAmlChoice("accept-risks")}
                                  className="sr-only"
                                />
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${amlChoice === 'accept-risks' ? 'border-[#3b82f6]' : 'border-[#cbd5e1]'}`}>
                                  {amlChoice === 'accept-risks' && <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />}
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-[#0f172a]">Перевірку не проводив(ла)</span>
                                  <span className="block text-xs text-[#64748b]">Ризики приймаю на себе.</span>
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Final confirmations */}
                          <div className="rounded-[20px] border border-[#e2e8f0] bg-white p-5 shadow-sm shadow-slate-950/[0.02] lg:col-span-2">
                            <div className="grid gap-2 lg:grid-cols-3">
                              <label className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-2">
                                <input
                                  type="checkbox"
                                  checked={agreeTerms}
                                  onChange={(e) => setAgreeTerms(e.target.checked)}
                                  className="sr-only"
                                />
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${agreeTerms ? 'border-[#3b82f6] bg-[#3b82f6]' : 'border-[#94a3b8] bg-white'}`}>
                                  {agreeTerms && <Check className="h-3 w-3 text-white" />}
                                </span>
                                <span className="text-sm leading-6 text-[#334155]">
                                  Я погоджуюсь із <a href="#" className="font-medium text-[#6d5dfc] underline underline-offset-2">правилами обміну</a> та юридичними умовами сервісу.
                                </span>
                              </label>
                              <label className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-2">
                                <input
                                  type="checkbox"
                                  checked={notRussianCitizen}
                                  onChange={(e) => setNotRussianCitizen(e.target.checked)}
                                  className="sr-only"
                                />
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${notRussianCitizen ? 'border-[#3b82f6] bg-[#3b82f6]' : 'border-[#94a3b8] bg-white'}`}>
                                  {notRussianCitizen && <Check className="h-3 w-3 text-white" />}
                                </span>
                                <span className="text-sm leading-6 text-[#334155]">
                                  Я ознайомлений і погоджуюсь із <a href="#" className="font-medium text-[#6d5dfc] underline underline-offset-2">AML-політикою</a>.
                                </span>
                              </label>
                              <label className="flex cursor-pointer items-start gap-3 rounded-xl px-1 py-2">
                                <input
                                  type="checkbox"
                                  checked={dontRememberData}
                                  onChange={(e) => setDontRememberData(e.target.checked)}
                                  className="sr-only"
                                />
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${dontRememberData ? 'border-[#3b82f6] bg-[#3b82f6]' : 'border-[#94a3b8] bg-white'}`}>
                                  {dontRememberData && <Check className="h-3 w-3 text-white" />}
                                </span>
                                <span className="text-sm leading-6 text-[#334155]">
                                  Я підтверджую, що ознайомлений із можливістю попередньої AML-перевірки та наслідками підвищеного рівня AML-ризику.
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Step 3: Payment handoff */}
                    {currentStep === 3 && (
                      <div className="mb-6 rounded-[20px] border border-[#dbe4ef] bg-white p-6 shadow-sm shadow-slate-950/[0.02]">
                        <div className="mb-5 flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#ecfdf5]">
                            <Check className="h-5 w-5 text-[#16a34a]" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-[#0f172a]">Заявка готова до оплати</h4>
                            <p className="mt-1 text-sm leading-6 text-[#64748b]">
                              Дані перевірені. Після переходу до оплати оператор звірить реквізити та фінально підтвердить курс.
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl bg-[#f8fafc] p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-[#94a3b8]">Послуги</p>
                            <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                              {selectedServices.length > 0 ? selectedServices.map(s => s.name).join(", ") : "Без додаткових"}
                            </p>
                          </div>
                          <div className="rounded-2xl bg-[#f8fafc] p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-[#94a3b8]">Комісія</p>
                            <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                              {selectedServices.length > 0 ? selectedServices.map(s => s.fee).join(" + ") : "0%"}
                            </p>
                          </div>
                          <div className="rounded-2xl bg-[#f8fafc] p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-[#94a3b8]">AML</p>
                            <p className="mt-1 text-sm font-semibold text-[#0f172a]">
                              {amlChoice === "completed" ? "Перевірено" : "Ризики прийнято"}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* Sticky footer with Continue button */}
            {showForm && (
              <div className="flex-shrink-0 border-t border-[#e2e8f0] bg-white/95 px-6 py-4 backdrop-blur-sm lg:px-8">
                <div className="flex items-center justify-between gap-4">
                  {currentStep === 3 && (
                    <Button 
                      onClick={() => setCurrentStep(2)}
                      variant="outline"
                      className="h-12 rounded-xl border-[#e2e8f0] px-6 text-sm font-medium text-[#64748b] transition-all hover:border-[#cbd5e1] hover:text-[#0f172a]"
                    >
                      Back
                    </Button>
                  )}
                  <Button 
                    onClick={currentStep === 2 ? handleProceedToConfirm : undefined}
                    className={`h-12 flex-1 rounded-xl text-base font-semibold text-white shadow-lg transition-all ${
                      (currentStep === 2 && stepTwoComplete) || currentStep === 3
                        ? 'bg-[#1a1f2e] shadow-[#1a1f2e]/20 hover:bg-[#0f1219] hover:shadow-xl'
                        : 'cursor-not-allowed bg-[#94a3b8] shadow-none'
                    }`}
                    disabled={(currentStep === 2 && !stepTwoComplete) || currentStep === 3}
                  >
                    {currentStep === 2 ? 'Перейти до оплати' : 'Очікуємо оплату'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

const FAQ_ITEMS = [
  {
    q: "Чи потрібна верифікація (KYC)?",
    a: "Зазвичай не потрібна. Можлива у разі спрацювання AML-фільтрів.",
  },
  {
    q: "Скільки триває обмін?",
    a: "Зазвичай 30–180 хв вдень; уночі (21:00–10:00, UTC+2) до 12 годин.",
  },
  {
    q: "Яка комісія?",
    a: "Фіксується до старту та відображається перед підтвердженням. Прихованих платежів немає.",
  },
  {
    q: "Коли обирати TRC-20?",
    a: "Коли важливі мінімальна комісія та часті платежі. Альтернативи — BEP-20 / ERC-20.",
  },
]

function ConverterFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mt-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#94a3b8]">Поширені запитання</p>
      <div className="flex flex-col divide-y divide-[#f0f0f0] rounded-xl border border-[#e2e8f0] bg-white overflow-hidden">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[#f8fafc]"
            >
              <span className="text-sm font-medium text-[#0f172a]">{item.q}</span>
              <ChevronDown
                className={`h-4 w-4 flex-shrink-0 text-[#94a3b8] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="px-4 pb-3 text-sm leading-relaxed text-[#64748b]">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
