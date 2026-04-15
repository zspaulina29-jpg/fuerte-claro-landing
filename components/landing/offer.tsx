import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { CHECKOUT_URL, PRICE_BEFORE, PRICE_NOW, TOTAL_VALUE } from "./config"

const ITEMS = [
  { label: "Curso completo: 4 módulos · 30 días", value: "299 €" },
  { label: "Plantillas de contenido", value: "49 €" },
  { label: "Calendario estratégico de 30 días", value: "39 €" },
  { label: "Guía: posiciónate como experto", value: "29 €" },
  { label: "Optimización de perfil", value: "29 €" },
  { label: "Masterclass: pierde el miedo", value: "59 €" },
]

export function Offer() {
  return (
    <section id="oferta" className="bg-brand-crema py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            La oferta
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Esto es todo lo que te llevas hoy:
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-brand-fucsia/15 bg-brand-beige shadow-xl shadow-brand-fucsia/5">
          <div className="divide-y divide-border">
            {ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8"
              >
                <div className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-fucsia"
                    strokeWidth={3}
                  />
                  <span className="text-sm text-brand-gris sm:text-base">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-medium text-brand-cafe tabular-nums">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-1 border-t-2 border-dashed border-brand-fucsia/30 bg-brand-rosa/40 px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between text-base text-brand-cafe">
              <span>Valor total</span>
              <span className="font-semibold line-through tabular-nums">
                {TOTAL_VALUE}
              </span>
            </div>
            <div className="flex items-center justify-between text-base text-brand-cafe/80">
              <span>Antes</span>
              <span className="font-medium line-through tabular-nums">
                {PRICE_BEFORE}
              </span>
            </div>
          </div>

          <div className="bg-brand-crema px-6 py-8 text-center sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-fucsia">
              Precio de lanzamiento
            </p>
            <p className="mt-2 text-6xl font-semibold tracking-tight text-brand-fucsia tabular-nums sm:text-7xl">
              {PRICE_NOW}
            </p>
            <p className="mt-2 text-sm text-brand-cafe">
              Pago único · acceso inmediato
            </p>

            <Button
              asChild
              className="mt-6 h-12 px-6 text-base font-semibold shadow-md shadow-brand-fucsia/25"
            >
              <a href={CHECKOUT_URL}>
                Sí, quiero entrar por {PRICE_NOW}
                <ArrowRight className="size-4" />
              </a>
            </Button>

            <p className="mt-4 text-xs text-brand-cafe/70">
              Pago seguro · 7 días de garantía total
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
