"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CHECKOUT_URL, PRICE_NOW } from "./config"
import { cn } from "@/lib/utils"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b border-border/60 bg-brand-beige/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Fuerte y Claro — inicio">
          <Image
            src="/images/logo-fuerte-claro.png"
            alt="Fuerte y Claro Marketing"
            width={140}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#metodo"
            className="hidden text-sm font-medium text-brand-cafe hover:text-brand-fucsia sm:inline"
          >
            Ver el método
          </a>
          <Button
            asChild
            className="h-9 px-4 text-sm font-semibold shadow-sm"
          >
            <a href={CHECKOUT_URL}>Entrar al curso · {PRICE_NOW}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
