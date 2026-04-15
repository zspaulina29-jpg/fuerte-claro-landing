import { Lightbulb } from "lucide-react"
import { SectionCta } from "./section-cta"

const SHIFTS = [
  {
    myth: "Necesito publicar más para crecer.",
    truth: "Necesitas publicar con estrategia, no con frecuencia.",
  },
  {
    myth: "Tengo que volverme influencer para que me vean.",
    truth: "Solo necesitas ser referente dentro de tu nicho.",
  },
  {
    myth: "No tengo el talento ni el carisma para esto.",
    truth: "No te falta talento. Te falta un sistema claro para ejecutarlo.",
  },
]

export function BeliefShift() {
  return (
    <section className="bg-brand-beige py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            <Lightbulb className="size-3.5" />
            Cambio de mentalidad
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            El problema no es que no sepas de tu tema.{" "}
            <span className="text-brand-fucsia">Es que nadie lo sabe todavía.</span>
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            Antes de hablar del curso, hay tres ideas que conviene desarmar. Si las cargas, vas a seguir improvisando aunque cambies de método.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SHIFTS.map((s, i) => (
            <div
              key={s.truth}
              className="rounded-3xl border border-border bg-brand-crema p-6 shadow-sm"
            >
              <span className="text-xs font-semibold tracking-wider text-brand-cafe/60">
                MITO 0{i + 1}
              </span>
              <p className="mt-2 text-base font-medium text-brand-cafe/70 line-through decoration-brand-cafe/40">
                “{s.myth}”
              </p>

              <div className="my-5 h-px w-full bg-border" />

              <span className="text-xs font-semibold tracking-wider text-brand-fucsia">
                REALIDAD
              </span>
              <p className="mt-2 text-base font-semibold text-brand-gris">
                {s.truth}
              </p>
            </div>
          ))}
        </div>

        <SectionCta label="Aplicar el nuevo enfoque ya" />
      </div>
    </section>
  )
}
