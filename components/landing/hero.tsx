import { Button } from "@/components/ui/button"
import { PlayCircle, Sparkles, Star } from "lucide-react"
import { CHECKOUT_URL, PRICE_BEFORE, PRICE_NOW } from "./config"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-beige pt-10 pb-16 sm:pt-16 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-brand-rosa opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 size-[24rem] rounded-full bg-brand-lima-soft opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-fucsia/20 bg-brand-fucsia-soft/60 px-3 py-1 text-xs font-medium text-brand-fucsia">
            <Sparkles className="size-3.5" />
            Nuevo método P.O.S.I.C.I.O.N.A · 30 días
          </span>

          <h1 className="text-balance text-4xl leading-[1.05] font-semibold tracking-tight text-brand-gris sm:text-5xl lg:text-6xl">
            Construye tu marca personal desde cero y{" "}
            <span className="text-brand-fucsia">posiciónate</span> en tu sector en 30 días.
          </h1>

          <p className="max-w-xl text-balance text-lg text-brand-cafe sm:text-xl">
            Claridad, mensaje, contenido y visibilidad. Un sistema paso a paso para dejar de ser invisible y convertirte en la opción clara de tu mercado — sin improvisar, sin teoría de relleno.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 px-6 text-base font-semibold shadow-md shadow-brand-fucsia/20"
            >
              <a href={CHECKOUT_URL}>Quiero posicionarme · {PRICE_NOW}</a>
            </Button>
            <p className="text-sm text-brand-cafe/80">
              <span className="line-through opacity-60">Antes {PRICE_BEFORE}</span>
              <span className="mx-2">·</span>
              Precio de lanzamiento por tiempo limitado
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs text-brand-cafe/80">
            <div className="flex items-center gap-0.5 text-brand-fucsia">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <span>+1,200 personas ya empezaron su posicionamiento</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-rosa via-brand-crema to-brand-lima-soft shadow-xl shadow-brand-fucsia/10 ring-1 ring-brand-fucsia/10">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <button
                type="button"
                aria-label="Reproducir video de presentación del método"
                className="group flex size-20 items-center justify-center rounded-full bg-brand-crema/90 shadow-lg backdrop-blur transition hover:scale-105"
              >
                <PlayCircle className="size-12 text-brand-fucsia transition group-hover:scale-110" />
              </button>
              <p className="max-w-xs text-balance text-base font-medium text-brand-gris">
                Mira cómo funciona el método en 90 segundos
              </p>
              <span className="text-xs uppercase tracking-wider text-brand-cafe/70">
                Video presentación
              </span>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rotate-[-4deg] rounded-2xl bg-brand-crema p-3 shadow-lg ring-1 ring-brand-fucsia/10 sm:block">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-full bg-gradient-to-br from-brand-fucsia to-brand-rosa" />
                <div className="space-y-1">
                  <div className="h-2 w-20 rounded bg-brand-gris/80" />
                  <div className="h-1.5 w-14 rounded bg-brand-cafe/40" />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 hidden rotate-[6deg] rounded-2xl bg-brand-crema p-3 shadow-lg ring-1 ring-brand-fucsia/10 sm:block">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-brand-fucsia" />
                <span className="text-xs font-medium text-brand-gris">
                  Día 30 · Posicionada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
