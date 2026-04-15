import { Button } from "@/components/ui/button"
import { Clock, AlertTriangle } from "lucide-react"
import { CHECKOUT_URL, PRICE_BEFORE, PRICE_NOW } from "./config"

const REASONS = [
  `El precio de lanzamiento (${PRICE_NOW}) termina al cerrar el cupo actual. Después vuelve a ${PRICE_BEFORE}.`,
  "Los 5 bonos solo se entregan dentro de esta ventana. Quien entre después, los compra aparte.",
  "Cada semana que postergas es otra semana en la que alguien con menos preparación que tú ocupa tu espacio.",
]

export function Urgency() {
  return (
    <section className="bg-brand-cafe py-20 text-brand-crema sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-lima">
            <Clock className="size-3.5" />
            Por tiempo limitado
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Si lo dejas para después,{" "}
            <span className="text-brand-lima">el precio sube</span>.
          </h2>
        </div>

        <ul className="mx-auto mt-12 max-w-2xl space-y-4">
          {REASONS.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 rounded-2xl bg-brand-crema/5 p-5 ring-1 ring-brand-crema/10"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-lima/15 text-brand-lima">
                <AlertTriangle className="size-4" />
              </span>
              <p className="text-base leading-relaxed text-brand-crema/90">{r}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="h-12 bg-brand-lima px-6 text-base font-semibold text-brand-gris hover:bg-brand-lima/90"
          >
            <a href={CHECKOUT_URL}>Asegurar mi lugar por {PRICE_NOW}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
