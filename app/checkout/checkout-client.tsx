"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  CheckCircle2,
  Mail,
  BookOpen,
  Users,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Loader2,
  Receipt,
  Download,
  Calendar,
  Crown,
  FileText,
  Mic,
  UserCog,
} from "lucide-react"
import { Wordmark } from "@/components/landing/wordmark"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type State = "processing" | "complete"

const ITEMS = [
  { icon: BookOpen, label: "Curso completo · 4 módulos / 30 días", value: "299 €" },
  { icon: FileText, label: "Plantillas de contenido", value: "49 €" },
  { icon: Calendar, label: "Calendario estratégico de 30 días", value: "39 €" },
  { icon: Crown, label: "Guía: posiciónate como experto", value: "29 €" },
  { icon: UserCog, label: "Optimización de perfil", value: "29 €" },
  { icon: Mic, label: "Masterclass: pierde el miedo", value: "59 €" },
]

const STEPS = [
  {
    icon: Mail,
    title: "Revisa tu correo",
    body: "Te enviamos los accesos en menos de 5 minutos. Si no aparece, busca en spam o promociones.",
  },
  {
    icon: BookOpen,
    title: "Empieza el Día 1 · Claridad",
    body: "Abre el primer módulo y completa el ejercicio de propuesta de valor. Tarda 25 minutos.",
  },
  {
    icon: Users,
    title: "Únete a la comunidad",
    body: "El link de la comunidad privada está dentro de tu cuenta. Preséntate con tu nicho — te conectamos.",
  },
]

const CONFETTI_COLORS = [
  "var(--brand-fucsia)",
  "var(--brand-lima)",
  "var(--brand-rosa)",
  "var(--brand-azul)",
  "#ffffff",
]

type ConfettiPiece = {
  left: number
  drift: number
  delay: number
  duration: number
  spin: number
  color: string
  width: number
  height: number
}

function makeConfetti(count: number): ConfettiPiece[] {
  const pieces: ConfettiPiece[] = []
  for (let i = 0; i < count; i++) {
    pieces.push({
      left: Math.random() * 100,
      drift: (Math.random() - 0.5) * 240,
      delay: Math.random() * 0.6,
      duration: 2.6 + Math.random() * 1.8,
      spin: 360 + Math.floor(Math.random() * 720),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      width: 6 + Math.floor(Math.random() * 8),
      height: 10 + Math.floor(Math.random() * 10),
    })
  }
  return pieces
}

function formatOrderId(now: number) {
  const stamp = now.toString(36).toUpperCase().slice(-6)
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `FYC-${stamp}-${rand}`
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d)
}

function ProcessingView() {
  const phases = [
    "Recibiendo pago seguro",
    "Verificando tus datos",
    "Activando tu acceso al curso",
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timers: number[] = []
    timers.push(window.setTimeout(() => setActive(1), 500))
    timers.push(window.setTimeout(() => setActive(2), 1100))
    return () => timers.forEach(window.clearTimeout)
  }, [])

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="relative mx-auto flex size-20 items-center justify-center rounded-full bg-brand-crema shadow-lg ring-1 ring-brand-fucsia/15">
        <Loader2 className="size-9 animate-spin text-brand-fucsia" />
      </div>
      <h1 className="mt-8 text-balance text-2xl font-semibold text-brand-gris sm:text-3xl">
        Procesando tu pago…
      </h1>
      <p className="mt-3 text-sm text-brand-cafe">
        Esto toma solo unos segundos. No cierres ni recargues esta ventana.
      </p>

      <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
        {phases.map((phase, i) => {
          const done = i < active
          const current = i === active
          return (
            <li
              key={phase}
              className={cn(
                "flex items-center gap-3 rounded-2xl border bg-brand-crema px-4 py-3 text-sm transition-all",
                done
                  ? "border-brand-lima/40 text-brand-cafe"
                  : current
                    ? "border-brand-fucsia/30 text-brand-gris shadow-sm"
                    : "border-border text-brand-cafe/50",
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full",
                  done
                    ? "bg-brand-lima text-brand-gris"
                    : current
                      ? "bg-brand-fucsia/15 text-brand-fucsia"
                      : "bg-muted text-brand-cafe/40",
                )}
              >
                {done ? (
                  <CheckCircle2 className="size-3.5" strokeWidth={3} />
                ) : current ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <span className="text-[10px] font-semibold">{i + 1}</span>
                )}
              </span>
              <span className="font-medium">{phase}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function CompleteView() {
  const [orderMeta, setOrderMeta] = useState<{ id: string; date: string; email: string } | null>(null)
  const confetti = useMemo(() => makeConfetti(48), [])

  useEffect(() => {
    setOrderMeta({
      id: formatOrderId(Date.now()),
      date: formatDate(new Date()),
      email: "tu correo registrado",
    })
  }, [])

  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {confetti.map((p, i) => (
          <span
            key={i}
            className="fyc-confetti-piece"
            style={
              {
                left: `${p.left}%`,
                width: `${p.width}px`,
                height: `${p.height}px`,
                background: p.color,
                ["--fyc-delay" as string]: `${p.delay}s`,
                ["--fyc-duration" as string]: `${p.duration}s`,
                ["--fyc-drift" as string]: `${p.drift}px`,
                ["--fyc-spin" as string]: `${p.spin}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <div className="relative mx-auto inline-flex">
            <span className="absolute inset-0 rounded-full bg-brand-fucsia/40 fyc-pulse-ring" />
            <div className="fyc-pop relative flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-fucsia to-brand-rosa shadow-xl shadow-brand-fucsia/30">
              <CheckCircle2 className="size-12 text-white" strokeWidth={2.2} />
            </div>
          </div>

          <span className="fyc-rise mt-6 inline-flex items-center gap-2 rounded-full border border-brand-fucsia/20 bg-brand-fucsia-soft/60 px-3 py-1 text-xs font-medium text-brand-fucsia [animation-delay:120ms]">
            <Sparkles className="size-3.5" />
            Pago confirmado
          </span>

          <h1 className="fyc-rise mt-5 text-balance text-3xl font-semibold tracking-tight text-brand-gris [animation-delay:200ms] sm:text-4xl lg:text-5xl">
            ¡Bienvenido a <span className="text-brand-fucsia">Fuerte y Claro</span>!
          </h1>
          <p className="fyc-rise mx-auto mt-4 max-w-xl text-balance text-base text-brand-cafe [animation-delay:280ms] sm:text-lg">
            Tu acceso al curso ya está activo. Te enviamos los detalles a {orderMeta?.email ?? "tu correo registrado"}. Empezamos hoy mismo — el Día 1 te está esperando.
          </p>
        </div>

        <div className="fyc-rise mt-12 overflow-hidden rounded-3xl border border-brand-fucsia/15 bg-brand-crema shadow-xl shadow-brand-fucsia/5 [animation-delay:380ms]">
          <div className="flex flex-col gap-3 border-b border-border bg-brand-beige/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-fucsia text-white">
                <Receipt className="size-4" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-brand-gris">
                  Resumen de tu compra
                </div>
                <div
                  className="text-xs text-brand-cafe/70 tabular-nums"
                  suppressHydrationWarning
                >
                  Pedido {orderMeta?.id ?? "FYC-——————"} · {orderMeta?.date ?? "——"}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-1.5 self-start rounded-lg border border-border bg-brand-crema px-3 py-1.5 text-xs font-medium text-brand-cafe transition hover:text-brand-fucsia sm:self-auto"
            >
              <Download className="size-3.5" />
              Descargar recibo
            </button>
          </div>

          <ul className="divide-y divide-border">
            {ITEMS.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 px-6 py-3.5 sm:px-8"
              >
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-brand-fucsia" />
                  <span className="text-sm text-brand-gris">{label}</span>
                </div>
                <span className="text-sm text-brand-cafe/70 line-through tabular-nums">
                  {value}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-2 border-t border-border bg-brand-rosa/30 px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between text-sm text-brand-cafe">
              <span>Valor total</span>
              <span className="font-medium line-through tabular-nums">504 €</span>
            </div>
            <div className="flex items-center justify-between text-sm text-brand-cafe">
              <span>Descuento de lanzamiento</span>
              <span className="font-medium tabular-nums text-brand-fucsia">−405 €</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-dashed border-brand-fucsia/30 pt-3 text-base">
              <span className="font-semibold text-brand-gris">Total pagado</span>
              <span className="text-2xl font-semibold text-brand-fucsia tabular-nums">
                99 €
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border bg-brand-crema px-6 py-5 text-xs text-brand-cafe/80 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-fucsia" />
              <span>Garantía total de 7 días · sin letras chiquitas</span>
            </div>
            <span>Pago procesado de forma segura</span>
          </div>
        </div>

        <div className="fyc-rise mt-12 [animation-delay:480ms]">
          <h2 className="text-balance text-xl font-semibold text-brand-gris sm:text-2xl">
            Próximos pasos para no perder el momentum
          </h2>
          <p className="mt-2 text-sm text-brand-cafe">
            Lo más importante ahora es no posponerlo. El método funciona si lo empiezas hoy.
          </p>

          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-3xl border border-border bg-brand-crema p-5 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-brand-fucsia-soft text-sm font-semibold text-brand-fucsia tabular-nums">
                    0{i + 1}
                  </span>
                  <step.icon className="size-4 text-brand-fucsia" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-gris">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-brand-cafe sm:text-sm">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="fyc-rise mt-12 flex flex-col items-center gap-4 rounded-3xl bg-brand-beige p-6 text-center [animation-delay:560ms] sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <Button
              asChild
              className="h-11 px-5 text-sm font-semibold shadow-md shadow-brand-fucsia/25"
            >
              <a href="#">Entrar a mi cuenta</a>
            </Button>
            <Button asChild variant="outline" className="h-11 px-5 text-sm font-medium">
              <a href="mailto:hola@fuerteyclaro.com">Contactar a soporte</a>
            </Button>
          </div>
          <p className="text-xs text-brand-cafe/70">
            ¿Dudas? Escríbenos a{" "}
            <a
              className="font-medium text-brand-fucsia underline underline-offset-4"
              href="mailto:hola@fuerteyclaro.com"
            >
              hola@fuerteyclaro.com
            </a>{" "}
            — respondemos en menos de 24 h.
          </p>
        </div>
      </div>
    </div>
  )
}

export function CheckoutClient() {
  const [state, setState] = useState<State>("processing")

  useEffect(() => {
    const t = window.setTimeout(() => setState("complete"), 1900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <main className="relative min-h-svh bg-brand-beige">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 size-[36rem] -translate-x-1/2 rounded-full bg-brand-rosa opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 -z-0 size-[24rem] rounded-full bg-brand-lima-soft opacity-50 blur-3xl"
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" aria-label="Volver al inicio">
          <Wordmark />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cafe transition hover:text-brand-fucsia"
        >
          <ArrowLeft className="size-3.5" />
          Volver al inicio
        </Link>
      </header>

      <section className="relative z-10 mx-auto px-4 pt-8 pb-20 sm:px-6 sm:pt-16">
        {state === "processing" ? <ProcessingView /> : <CompleteView />}
      </section>
    </main>
  )
}
