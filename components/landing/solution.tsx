import { Button } from "@/components/ui/button"
import { Rocket, Calendar, Target } from "lucide-react"
import { CHECKOUT_URL } from "./config"

const REASONS = [
  {
    icon: Rocket,
    title: "Ejecución guiada, no teoría",
    body: "Cada día sabes exactamente qué hacer. Sin parálisis por análisis, sin “luego lo aplico”.",
  },
  {
    icon: Calendar,
    title: "Roadmap diario de 30 días",
    body: "Una hoja de ruta ordenada por pilares. Avanzas con criterio aunque tengas poco tiempo.",
  },
  {
    icon: Target,
    title: "Posicionamiento, no vanity metrics",
    body: "No vamos por likes. Vamos por que te perciban como referente y lleguen oportunidades reales.",
  },
]

export function Solution() {
  return (
    <section className="bg-brand-rosa py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            La solución
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Te presentamos <span className="text-brand-fucsia">Fuerte y Claro</span>: el curso que te lleva de invisible a referente en{" "}
            <span className="text-brand-fucsia">30 días</span>.
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            Un sistema estructurado, 100% práctico, diseñado para empezar a aplicar desde el día 1 — aunque empieces sin seguidores, sin contenido y sin saber qué decir.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl bg-brand-crema p-6 shadow-sm ring-1 ring-brand-fucsia/10"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-brand-fucsia-soft text-brand-fucsia">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-gris">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-cafe">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            className="h-11 px-6 text-sm font-semibold shadow-md shadow-brand-fucsia/20"
          >
            <a href={CHECKOUT_URL}>Quiero entrar al curso</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
