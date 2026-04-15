import { Check } from "lucide-react"
import { SectionCta } from "./section-cta"

const MODULES = [
  {
    n: "01",
    title: "Claridad",
    days: "Días 1 — 7",
    points: [
      "Diagnóstico honesto: dónde estás hoy y dónde quieres llegar.",
      "Tu propuesta de valor en una sola frase potente.",
      "Cliente ideal sin teoría: quién es y por qué te elige a ti.",
      "Posicionamiento único: el ángulo que solo tú puedes ocupar.",
    ],
  },
  {
    n: "02",
    title: "Mensaje",
    days: "Días 8 — 14",
    points: [
      "Tus 3 pilares de comunicación (lo que vas a defender siempre).",
      "Tono propio: cómo sonar tú, no como copia de otra cuenta.",
      "Mensaje diferenciador: por qué deberían escucharte a ti.",
      "Storytelling práctico para conectar sin dramatizar.",
    ],
  },
  {
    n: "03",
    title: "Contenido",
    days: "Días 15 — 22",
    points: [
      "Tipos de contenido por objetivo (autoridad, conexión, conversión).",
      "Plantillas listas para post, carrusel, story y reel.",
      "Cómo crear sin bloqueos cuando “no se te ocurre nada”.",
      "Guion express: de idea a publicación en 25 minutos.",
    ],
  },
  {
    n: "04",
    title: "Posicionamiento",
    days: "Días 23 — 30",
    points: [
      "Calendario estratégico para ejecutar sin saturarte.",
      "Cómo publicar con consistencia (aunque tengas semanas locas).",
      "Métricas que sí importan para medir posicionamiento real.",
      "Plan de continuidad: cómo seguir creciendo después del día 30.",
    ],
  },
]

export function Modules() {
  return (
    <section className="bg-brand-rosa py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            Contenido del curso
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Lo que incluye el curso
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            4 módulos · 30 días · video + plantillas + ejercicios + checklist diario.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {MODULES.map((m) => (
            <div
              key={m.n}
              className="grid gap-6 rounded-3xl bg-brand-crema p-7 shadow-sm ring-1 ring-brand-fucsia/10 sm:grid-cols-[200px_1fr] sm:p-9"
            >
              <div>
                <span className="font-mono text-5xl font-semibold text-brand-cafe/40 tabular-nums leading-none">
                  {m.n}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-brand-gris">
                  Módulo {m.n.replace("0", "")} · {m.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-fucsia">
                  {m.days}
                </p>
              </div>

              <ul className="space-y-3">
                {m.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-cafe sm:text-base"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-lima text-brand-gris">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionCta label="Acceder a los 4 módulos · 99 €" />
      </div>
    </section>
  )
}
