import { SectionCta } from "./section-cta"

const PILLARS = [
  {
    n: "01",
    title: "Claridad",
    body: "Defines quién eres, qué haces y cuál es tu propuesta de valor. Eliminas el bloqueo de “no sé qué decir”.",
  },
  {
    n: "02",
    title: "Mensaje",
    body: "Transformas tu conocimiento en comunicación clara, relevante y diferenciada. Dejas de sonar genérico.",
  },
  {
    n: "03",
    title: "Contenido",
    body: "Creas con intención. Cada pieza alineada a tu objetivo de posicionamiento — no más improvisación.",
  },
  {
    n: "04",
    title: "Posicionamiento",
    body: "Publicas con constancia, construyes presencia y empiezas a generar autoridad real en tu nicho.",
  },
]

export function Method() {
  return (
    <section id="metodo" className="bg-brand-azul py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            El método
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Método <span className="text-brand-fucsia">P.O.S.I.C.I.O.N.A</span>: 4 pilares, 30 días, un sistema.
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            No es motivación. No es teoría. Es un proceso ordenado por pasos para personas que no tienen tiempo que perder.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="group relative overflow-hidden rounded-3xl bg-brand-crema p-7 shadow-sm ring-1 ring-brand-fucsia/10 transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-brand-gris">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-cafe">
                    {p.body}
                  </p>
                </div>
                <span className="text-5xl font-semibold text-brand-fucsia/30 tabular-nums leading-none transition group-hover:text-brand-fucsia/60">
                  {p.n}
                </span>
              </div>
              <div className="mt-6 h-1 w-12 rounded-full bg-brand-fucsia transition group-hover:w-20" />
            </div>
          ))}
        </div>

        <SectionCta label="Empezar el método hoy" />
      </div>
    </section>
  )
}
