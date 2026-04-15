import { Star, Quote } from "lucide-react"
import { SectionCta } from "./section-cta"

const TESTIMONIALS = [
  {
    initial: "A",
    color: "bg-brand-fucsia",
    name: "Andrea M.",
    location: "CDMX",
    role: "Coach de carrera",
    quote:
      "Cerré 4 sesiones pagadas en la primera semana de aplicar el método. Era exactamente el sistema que me faltaba.",
  },
  {
    initial: "D",
    color: "bg-brand-cafe",
    name: "Diego R.",
    location: "Monterrey",
    role: "Diseñador freelance",
    quote:
      "Pasé de no saber qué publicar a tener calendario para los próximos dos meses. Mi perfil por fin comunica lo que hago.",
  },
  {
    initial: "V",
    color: "bg-brand-fucsia",
    name: "Valeria H.",
    location: "Guadalajara",
    role: "Nutrióloga",
    quote:
      "El día 18 me escribió una marca para colaborar. Nunca antes me habían contactado así.",
  },
  {
    initial: "S",
    color: "bg-brand-cafe",
    name: "Sebastián O.",
    location: "Puebla",
    role: "Consultor financiero",
    quote:
      "El módulo de claridad valió el curso entero. Por fin sé cómo presentarme sin sonar como uno más.",
  },
  {
    initial: "C",
    color: "bg-brand-fucsia",
    name: "Camila V.",
    location: "Querétaro",
    role: "Arquitecta",
    quote:
      "Empecé sin seguidores. Al día 30 ya tenía 3 reuniones agendadas con clientes potenciales.",
  },
  {
    initial: "M",
    color: "bg-brand-cafe",
    name: "Mauricio L.",
    location: "CDMX",
    role: "Emprendedor digital",
    quote:
      "Me da pena admitirlo: tenía 5 cursos comprados sin terminar. Este lo completé en 28 días aplicando todo.",
  },
]

const METRICS = [
  { value: "+30", label: "días de contenido listo al terminar" },
  { value: "+50", label: "nichos donde el método ya se aplicó" },
  { value: "1", label: "masterclass en vivo incluida cada mes" },
]

export function Proof() {
  return (
    <section className="bg-brand-crema py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            Validación
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Personas como tú ya están dando el paso.
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            Profesionales y emprendedores que decidieron dejar de improvisar — y empezaron a comunicar con propósito.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-brand-rosa/60 bg-brand-beige p-6"
            >
              <Quote className="size-5 text-brand-fucsia/60" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-gris sm:text-base">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-0.5 text-brand-fucsia">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white ${t.color}`}
                  aria-hidden
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-gris">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-cafe">
                    {t.role} · {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl bg-brand-beige p-8 sm:grid-cols-3 sm:p-10">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-4xl font-semibold text-brand-fucsia tabular-nums sm:text-5xl">
                {m.value}
              </div>
              <p className="mt-2 text-sm text-brand-cafe">{m.label}</p>
            </div>
          ))}
        </div>

        <SectionCta label="Yo también quiero estar aquí" />
      </div>
    </section>
  )
}
