import { ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CHECKOUT_URL, PRICE_NOW } from "./config"

export function Guarantee() {
  return (
    <section className="bg-brand-lima-soft py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative rounded-3xl bg-brand-crema p-8 shadow-xl ring-1 ring-brand-fucsia/10 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="relative">
              <div className="flex size-24 items-center justify-center rounded-full bg-brand-fucsia text-brand-crema shadow-lg">
                <ShieldCheck className="size-12" strokeWidth={1.8} />
              </div>
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-brand-fucsia/40" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-fucsia">
                Garantía
              </span>
              <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
                Pruébalo 7 días. Sin letras chiquitas.
              </h2>
            </div>

            <p className="max-w-xl text-balance text-base leading-relaxed text-brand-cafe sm:text-lg">
              Entra al curso, revisa los módulos y aplica lo que quieras. Si en 7 días sientes que no te aporta claridad o no es para ti, escríbenos a un correo y te devolvemos el 100% de tu dinero. Sin formularios eternos. Sin justificar nada. Así de simple.
            </p>

            <Button
              asChild
              className="h-12 px-6 text-base font-semibold shadow-md shadow-brand-fucsia/25"
            >
              <a href={CHECKOUT_URL}>
                Probarlo sin riesgo · {PRICE_NOW}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
