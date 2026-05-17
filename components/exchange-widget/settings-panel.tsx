"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X, Upload, Sun, Moon } from "lucide-react"

export interface WidgetSettings {
  primaryColor: string
  theme: "light" | "dark"
  size: "compact" | "normal" | "large"
  borderRadius: number
}

interface SettingsPanelProps {
  open: boolean
  onClose: () => void
  settings: WidgetSettings
  onSettingsChange: (settings: WidgetSettings) => void
}

const colorPresets = [
  { value: "#0c0c0c", label: "Dark" },
  { value: "#2563eb", label: "Blue" },
  { value: "#16a34a", label: "Green" },
  { value: "#dc2626", label: "Red" },
  { value: "#9333ea", label: "Purple" },
]

const sizeOptions = [
  { value: "compact", label: "Compact" },
  { value: "normal", label: "Normal" },
  { value: "large", label: "Large" },
]

export function SettingsPanel({ open, onClose, settings, onSettingsChange }: SettingsPanelProps) {
  if (!open) return null

  const updateSetting = <K extends keyof WidgetSettings>(key: K, value: WidgetSettings[K]) => {
    onSettingsChange({ ...settings, [key]: value })
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-md overflow-y-auto bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-[#e5e7eb] bg-white px-6 py-4">
          <h2 className="text-lg font-semibold text-[#0c0c0c]">Widget Settings</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#6d6d6d] transition-colors hover:bg-[#f3f4f6] hover:text-[#0c0c0c]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 p-6">
          {/* Logo Upload */}
          <div>
            <Label className="mb-3 block text-sm font-medium text-[#0c0c0c]">Logo</Label>
            <div className="flex h-24 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-[#e5e7eb] bg-[#f9fafb] transition-colors hover:border-[#c2c2c2] hover:bg-[#f3f4f6]">
              <div className="flex flex-col items-center gap-2 text-[#6d6d6d]">
                <Upload className="h-6 w-6" />
                <span className="text-sm">Upload logo</span>
              </div>
            </div>
          </div>

          {/* Primary Color */}
          <div>
            <Label className="mb-3 block text-sm font-medium text-[#0c0c0c]">Primary Color</Label>
            <div className="flex flex-wrap gap-2">
              {colorPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => updateSetting("primaryColor", color.value)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 transition-all ${
                    settings.primaryColor === color.value 
                      ? "border-[#0c0c0c] ring-2 ring-[#0c0c0c] ring-offset-2" 
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
              {/* Custom Color Input */}
              <label className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-[#e5e7eb]">
                <span className="text-xs text-[#6d6d6d]">+</span>
                <input 
                  type="color" 
                  value={settings.primaryColor}
                  onChange={(e) => updateSetting("primaryColor", e.target.value)}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
              </label>
            </div>
          </div>

          {/* Theme Toggle */}
          <div>
            <Label className="mb-3 block text-sm font-medium text-[#0c0c0c]">Theme</Label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSetting("theme", "light")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 transition-all ${
                  settings.theme === "light"
                    ? "border-[#0c0c0c] bg-[#fafafa]"
                    : "border-[#e5e7eb] bg-white hover:border-[#c2c2c2]"
                }`}
              >
                <Sun className="h-4 w-4" />
                <span className="text-sm font-medium">Light</span>
              </button>
              <button
                onClick={() => updateSetting("theme", "dark")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 transition-all ${
                  settings.theme === "dark"
                    ? "border-[#0c0c0c] bg-[#fafafa]"
                    : "border-[#e5e7eb] bg-white hover:border-[#c2c2c2]"
                }`}
              >
                <Moon className="h-4 w-4" />
                <span className="text-sm font-medium">Dark</span>
              </button>
            </div>
          </div>

          {/* Size */}
          <div>
            <Label className="mb-3 block text-sm font-medium text-[#0c0c0c]">Widget Size</Label>
            <div className="flex gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size.value}
                  onClick={() => updateSetting("size", size.value as WidgetSettings["size"])}
                  className={`flex-1 rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all ${
                    settings.size === size.value
                      ? "border-[#0c0c0c] bg-[#fafafa]"
                      : "border-[#e5e7eb] bg-white hover:border-[#c2c2c2]"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <Label className="text-sm font-medium text-[#0c0c0c]">Border Radius</Label>
              <span className="text-sm text-[#6d6d6d]">{settings.borderRadius}px</span>
            </div>
            <Slider
              value={[settings.borderRadius]}
              onValueChange={([value]) => updateSetting("borderRadius", value)}
              min={0}
              max={32}
              step={4}
              className="py-2"
            />
          </div>

          {/* Preview Label */}
          <div className="rounded-xl bg-[#f3f4f6] p-4">
            <p className="text-center text-sm text-[#6d6d6d]">
              Changes are applied live to the widget above
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-[#e5e7eb] bg-white p-6">
          <Button
            onClick={onClose}
            className="h-12 w-full bg-[#0c0c0c] text-base font-medium hover:bg-[#363a3a]"
          >
            Done
          </Button>
        </div>
      </div>
    </>
  )
}
