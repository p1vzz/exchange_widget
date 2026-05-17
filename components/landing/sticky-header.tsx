"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { label: "Exchange", href: "#exchange" },
  { label: "Directions", href: "#directions" },
  { label: "Security", href: "#security" },
  { label: "Support", href: "#support" },
  { label: "FAQ", href: "#faq" },
]

const languages = [
  { code: "EN", label: "English" },
  { code: "UA", label: "Українська" },
  { code: "RU", label: "Русский" },
]

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState("EN")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:h-[72px] lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] shadow-md">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-bold text-[#0f172a]">Exchange</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden items-center gap-2 rounded-xl border border-[#e2e8f0] bg-white px-3.5 py-2.5 text-sm font-medium text-[#64748b] transition-all hover:border-[#cbd5e1] hover:shadow-sm sm:flex">
                <Globe className="h-4 w-4" />
                {currentLang}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`rounded-lg ${currentLang === lang.code ? "bg-[#f1f5f9]" : ""}`}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Button
            className="hidden h-11 rounded-xl bg-[#0f172a] px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1e293b] hover:shadow-lg sm:flex"
            asChild
          >
            <Link href="#exchange">Start exchange</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0f172a] transition-colors hover:bg-[#f1f5f9] lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#e2e8f0] bg-white/98 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3 border-t border-[#e2e8f0] pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm font-medium text-[#64748b]">
                    <Globe className="h-4 w-4" />
                    {currentLang}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="h-12 flex-1 rounded-xl bg-[#0f172a] text-sm font-semibold text-white">
                Start exchange
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
