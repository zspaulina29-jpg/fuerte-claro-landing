import { X } from "lucide-react"
import { SectionCta } from "./section-cta"

const PAINS = [
  "Sabes mucho de lo tuyo, pero en redes pareces uno más.",
  "Publicas sin estrategia y nunca sabes si está sirviendo.",
  "Ves a otros con menos preparación llevarse a tus clientes ideales.",
  "Te bloqueas pensando qué decir y terminas por no publicar.",
  "Tu perfil no transmite ni la mitad de lo que realmente vales.",
  "Quieres clientes, proyectos o colaboraciones, pero nadie te está viendo.",
]

export function Problem() {
  return (
    <section className="bg-brand-crema py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            Identifícate
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Si te pasa esto, estás en el lugar correcto:
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {PAINS.map((pain) => (
            <li
              key={pain}
              className="flex items-start gap-3 rounded-2xl border border-brand-rosa/60 bg-brand-beige/60 p-5"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-fucsia-soft text-brand-fucsia">
                <X className="size-4" />
              </span>
              <p className="text-sm leading-relaxed text-brand-cafe sm:text-base">
                {pain}
              </p>
            </li>
          ))}
        </ul>

        <SectionCta label="Sí, me identifico — quiero la solución" />
      </div>
    </section>
  )
}
