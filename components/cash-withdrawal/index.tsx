"use client"

import { useState } from "react"
import { CashWithdrawalForm } from "./cash-withdrawal-form"
import { ConfirmationScreen } from "./confirmation-screen"
import { ProcessingScreen } from "./processing-screen"
import { SuccessScreen } from "./success-screen"
import { 
  LayoutDashboard, 
  Users, 
  History, 
  Download, 
  Upload, 
  ArrowLeftRight, 
  FileText, 
  Settings, 
  LogOut,
  Copy,
  Moon,
  HelpCircle,
  ChevronDown
} from "lucide-react"

export type FlowStep = "form" | "confirmation" | "processing" | "success"

export interface WithdrawalData {
  amount: string
  currency: "USD" | "UAH"
  city: string
  location: string
  name: string
  phone: string
  telegram: string
  promoCode: string
  email?: string
  recipientPhone?: string
}

const initialData: WithdrawalData = {
  amount: "",
  currency: "UAH",
  city: "",
  location: "",
  name: "",
  phone: "",
  telegram: "",
  promoCode: "",
  email: "",
  recipientPhone: "",
}

const cryptoPrices = [
  { symbol: "BTC", price: "$11 921,37", change: "+2,15%" },
  { symbol: "ETH", price: "$11 921,37", change: "+2,15%" },
  { symbol: "USDT", price: "$11 921,37", change: "+2,15%" },
  { symbol: "DOGE", price: "$11 921,37", change: "+2,15%" },
]

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "P2P platform" },
  { icon: History, label: "History" },
  { icon: Download, label: "Deposit" },
  { icon: Upload, label: "Withdrawal", active: true },
  { icon: ArrowLeftRight, label: "Transfer" },
  { icon: FileText, label: "Blog" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Log Out" },
]

const userAssets = [
  { symbol: "gpUAH", value: "5 421,56" },
  { symbol: "UAHg", value: "3 345 421,56" },
  { symbol: "KZTg", value: "0,33" },
  { symbol: "ETH", value: "4,456663" },
]

export function CashWithdrawal() {
  const [step, setStep] = useState<FlowStep>("form")
  const [formData, setFormData] = useState<WithdrawalData>(initialData)
  const [pickupCode, setPickupCode] = useState("")

  const handleFormSubmit = (data: WithdrawalData) => {
    setFormData(data)
    setStep("confirmation")
  }

  const handleConfirm = () => {
    setStep("processing")
    setTimeout(() => {
      setPickupCode(Math.random().toString().slice(2, 8))
      setStep("success")
    }, 2500)
  }

  const handleEdit = () => {
    setStep("form")
  }

  const handleNewRequest = () => {
    setStep("form")
    setFormData(initialData)
    setPickupCode("")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Header with Crypto Prices */}
      <header className="border-b border-[#e0e0e0] bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold tracking-tight text-[#0c0c0c]">GEO</span>
            <span className="text-xl text-[#6d6d6d]">|</span>
            <span className="text-xl text-[#6d6d6d]">Pay</span>
          </div>

          {/* Crypto Ticker */}
          <div className="hidden items-center gap-8 md:flex">
            {cryptoPrices.map((crypto) => (
              <div key={crypto.symbol} className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#0c0c0c]">{crypto.symbol}</span>
                <span className="text-sm text-[#6d6d6d]">{crypto.price}</span>
                <span className="text-sm text-[#0acf83]">{crypto.change}</span>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f4f4]">
              <Moon className="h-5 w-5 text-[#6d6d6d]" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f4f4]">
              <HelpCircle className="h-5 w-5 text-[#6d6d6d]" />
            </button>
            <button className="flex items-center gap-1 text-sm text-[#6d6d6d] hover:text-[#0c0c0c]">
              EN
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="hidden w-[240px] flex-shrink-0 border-r border-[#e0e0e0] bg-white lg:block">
          <div className="flex h-full flex-col p-4">
            {/* User Profile */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0acf83] text-sm font-bold text-white">
                  AR
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#0c0c0c]">Andrew Rydvansky</p>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-[#6d6d6d]">ID: 432sk-fw631-e4321-244dd</span>
                <button className="text-[#6d6d6d] hover:text-[#0c0c0c]">
                  <Copy className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* My Assets */}
            <div className="mb-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xs text-[#6d6d6d]">My assets</span>
                <Settings className="h-3 w-3 text-[#6d6d6d]" />
              </div>
              <div className="flex flex-col gap-1">
                {userAssets.map((asset) => (
                  <div key={asset.symbol} className="flex items-center justify-between text-sm">
                    <span className="text-[#6d6d6d]">{asset.symbol}</span>
                    <span className="font-medium text-[#0c0c0c]">{asset.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    item.active
                      ? "bg-[#f4f4f4] font-medium text-[#0c0c0c]"
                      : "text-[#6d6d6d] hover:bg-[#f9fafb] hover:text-[#0c0c0c]"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-4">
              <span className="text-xs text-[#6d6d6d]">Powered by </span>
              <span className="text-xs font-bold text-[#0c0c0c]">GEO</span>
              <span className="text-xs text-[#6d6d6d]">|Pay</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex flex-1 justify-center px-4 py-8 md:px-8">
          <div className="flex w-full max-w-[900px] gap-8">
            {/* Center Content - 596px */}
            <div className="w-full max-w-[596px]">
              {step === "form" && (
                <CashWithdrawalForm
                  initialData={formData}
                  onSubmit={handleFormSubmit}
                />
              )}

              {step === "confirmation" && (
                <ConfirmationScreen
                  data={formData}
                  onConfirm={handleConfirm}
                  onEdit={handleEdit}
                />
              )}

              {step === "processing" && <ProcessingScreen />}

              {step === "success" && (
                <SuccessScreen
                  code={pickupCode}
                  onNewRequest={handleNewRequest}
                />
              )}
            </div>

            {/* Right Info Panel */}
            <div className="hidden w-[280px] flex-shrink-0 lg:block">
              {/* Warning Box */}
              <div className="rounded-lg bg-[#fef5f3] p-4">
                <h3 className="mb-2 text-sm font-semibold text-[#e42208]">Attention</h3>
                <div className="flex flex-col gap-2 text-sm text-[#e42208]/80">
                  <p>Payments are processed from 07:00 to 23:59</p>
                  <p>Withdrawal is only available to UAHG cards and funds may come from other individuals.</p>
                  <p>Payments may take from a few minutes to 7 hours.</p>
                </div>
              </div>

              {/* Related Questions */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-medium text-[#0c0c0c]">Related questions</h4>
                <a href="#" className="flex items-center gap-1 text-sm text-[#376fe5] hover:underline">
                  How does cash withdrawal work?
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href="#" className="mt-2 block text-sm text-[#376fe5] hover:underline">
                  More
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e0e0e0] bg-white px-6 py-4">
        <div className="flex items-center justify-end gap-6">
          <a href="#" className="text-sm text-[#6d6d6d] hover:text-[#0c0c0c]">Privacy Policy</a>
          <a href="#" className="text-sm text-[#6d6d6d] hover:text-[#0c0c0c]">Terms of Use</a>
        </div>
      </footer>
    </div>
  )
}
