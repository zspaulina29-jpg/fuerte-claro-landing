"use client"

import { useEffect, useState } from "react"
import { Flame, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CHECKOUT_URL, PRICE_NOW } from "./config"

const STORAGE_KEY = "fyc_offer_deadline_v1"
const DURATION_MS = 2 * 60 * 60 * 1000 // 2 horas

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-11 min-w-12 items-center justify-center rounded-lg bg-gradient-to-b from-brand-crema/15 to-brand-crema/5 px-2.5 font-mono text-xl font-semibold tabular-nums text-brand-lima shadow-inner ring-1 ring-brand-crema/10 sm:h-12 sm:min-w-14 sm:text-2xl">
        {value}
      </div>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-brand-crema/60">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span
      aria-hidden
      className="self-start pt-2 font-mono text-xl font-semibold text-brand-lima/70 sm:text-2xl"
    >
      :
    </span>
  )
}

export function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    let deadline: number
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null
    const parsed = stored ? parseInt(stored, 10) : NaN

    if (!Number.isNaN(parsed) && parsed > Date.now()) {
      deadline = parsed
    } else {
      deadline = Date.now() + DURATION_MS
      window.localStorage.setItem(STORAGE_KEY, deadline.toString())
    }

    const tick = () => setRemaining(Math.max(0, deadline - Date.now()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  const ready = remaining !== null
  const totalSeconds = ready ? Math.floor((remaining as number) / 1000) : 0
  const hours = ready ? pad(Math.floor(totalSeconds / 3600)) : "--"
  const minutes = ready ? pad(Math.floor((totalSeconds % 3600) / 60)) : "--"
  const seconds = ready ? pad(totalSeconds % 60) : "--"
  const expired = ready && remaining === 0

  return (
    <aside
      aria-label="Oferta por tiempo limitado"
      className="relative overflow-hidden bg-brand-gris text-brand-crema"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-brand-fucsia/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 size-[18rem] rounded-full bg-brand-lima/15 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:gap-6 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-7 items-center justify-center rounded-full bg-brand-fucsia/20">
            <Flame className="size-4 text-brand-fucsia" />
            <span className="absolute inset-0 animate-ping rounded-full bg-brand-fucsia/40" />
          </span>
          <div className="leading-tight">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-lima">
              Oferta de lanzamiento
            </div>
            <div className="text-[11px] text-brand-crema/70">
              Precio especial · {PRICE_NOW} (antes 299 €)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.15em] text-brand-crema/60 sm:block">
            {expired ? "Cupo cerrado" : "Termina en"}
          </span>
          <div
            className="flex items-center gap-1.5 sm:gap-2"
            role="timer"
            aria-live="off"
            suppressHydrationWarning
          >
            <Unit value={hours} label="HRS" />
            <Separator />
            <Unit value={minutes} label="MIN" />
            <Separator />
            <Unit value={seconds} label="SEG" />
          </div>
        </div>

        <Button
          asChild
          className="h-10 bg-brand-fucsia px-4 text-xs font-semibold text-white shadow-md shadow-brand-fucsia/30 hover:bg-brand-fucsia/90 sm:text-sm"
        >
          <a href={CHECKOUT_URL}>
            Asegurar {PRICE_NOW}
            <ArrowRight className="size-3.5" />
          </a>
        </Button>
      </div>
    </aside>
  )
}
