import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL, PRICE_NOW } from "./config"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-beige py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-rosa opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 size-[24rem] rounded-full bg-brand-lima-soft opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-brand-gris sm:text-5xl lg:text-6xl">
          Dentro de 30 días puedes seguir invisible —{" "}
          <span className="text-brand-fucsia">o ser la opción clara de tu mercado.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-brand-cafe sm:text-lg">
          El método existe. Los bonos están listos. La garantía es real. Solo falta que des el paso.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            asChild
            className="h-14 px-8 text-lg font-semibold shadow-xl shadow-brand-fucsia/25"
          >
            <a href={CHECKOUT_URL}>
              Empezar ahora por {PRICE_NOW}
              <ArrowRight className="size-5" />
            </a>
          </Button>
          <p className="text-sm text-brand-cafe">
            Pago único · acceso inmediato · 7 días de garantía
          </p>
        </div>
      </div>
    </section>
  )
}
