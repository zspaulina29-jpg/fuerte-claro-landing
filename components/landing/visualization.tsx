import { Check } from "lucide-react"
import { SectionCta } from "./section-cta"

const RESULTS = [
  "Tu perfil comunica en segundos quién eres y a quién ayudas.",
  "Publicas con un plan claro, no por obligación ni por culpa.",
  "Tu audiencia empieza a verte como una opción clara dentro de tu sector.",
  "Llegan mensajes de personas interesadas en trabajar contigo.",
  "Dejas de competir por precio y empiezas a competir por valor.",
]

export function Visualization() {
  return (
    <section className="bg-brand-beige py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            El resultado
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Imagina que dentro de 30 días…
          </h2>
        </div>

        <ul className="mx-auto mt-12 max-w-2xl space-y-3">
          {RESULTS.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 rounded-2xl border border-border bg-brand-crema p-5"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-lima text-brand-gris">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <p className="text-base leading-relaxed text-brand-gris">{r}</p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative h-2 w-full rounded-full bg-brand-rosa">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-fucsia to-brand-lima"
              style={{ width: "100%" }}
            />
            <div className="absolute -top-1.5 left-0 size-5 rounded-full border-2 border-brand-fucsia bg-brand-crema" />
            <div className="absolute -top-1.5 right-0 size-5 rounded-full border-2 border-brand-lima bg-brand-crema" />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-medium text-brand-cafe">
            <span>Día 1 · Invisible</span>
            <span>Día 30 · Referente</span>
          </div>
        </div>

        <SectionCta label="Quiero esos resultados en 30 días" />
      </div>
    </section>
  )
}
