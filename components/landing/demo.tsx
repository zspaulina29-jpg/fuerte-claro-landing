import { Badge } from "@/components/ui/badge"
import { SectionCta } from "./section-cta"
import {
  User,
  Calendar,
  MessageSquare,
  Layers,
  Camera,
  Sparkles,
} from "lucide-react"

const PIECES = [
  {
    icon: User,
    label: "Bio optimizada",
    desc: "Tu perfil dice quién eres, qué haces y por qué importa — en 5 segundos.",
    gradient: "from-brand-rosa to-brand-fucsia-soft",
  },
  {
    icon: Calendar,
    label: "Calendario de 30 días",
    desc: "Cada día sabes qué publicar y por qué. Sin staring at the cursor.",
    gradient: "from-brand-lima-soft to-brand-azul",
  },
  {
    icon: MessageSquare,
    label: "Post de posicionamiento",
    desc: "Plantilla para mostrar tu punto de vista sin sonar arrogante ni genérica.",
    gradient: "from-brand-azul to-brand-rosa",
  },
  {
    icon: Layers,
    label: "Carrusel de autoridad",
    desc: "Estructura para enseñar lo que sabes y que el algoritmo lo amplifique.",
    gradient: "from-brand-fucsia-soft to-brand-lima-soft",
  },
  {
    icon: Camera,
    label: "Historia estratégica",
    desc: "Lo que publicas en stories también suma posicionamiento — si lo haces con plan.",
    gradient: "from-brand-rosa to-brand-azul",
  },
  {
    icon: Sparkles,
    label: "Mensaje de valor",
    desc: "Pieza pilar para presentarte ante un cliente potencial sin parecer venta fría.",
    gradient: "from-brand-lima-soft to-brand-fucsia-soft",
  },
]

export function Demo() {
  return (
    <section className="bg-brand-beige py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            Demostración
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Esto es lo que vas a poder crear:
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            Plantillas y formatos probados — solo los rellenas con tu voz, tu nicho y tu propuesta.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PIECES.map(({ icon: Icon, label, desc, gradient }) => (
            <article
              key={label}
              className="group overflow-hidden rounded-3xl bg-brand-crema shadow-sm ring-1 ring-brand-rosa/60 transition hover:shadow-md"
            >
              <div
                className={`relative aspect-[5/4] w-full bg-gradient-to-br ${gradient}`}
                aria-label={`Mockup: ${label}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-crema/90 shadow-md backdrop-blur">
                    <Icon className="size-7 text-brand-fucsia" />
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-brand-crema text-brand-fucsia hover:bg-brand-crema">
                  {label}
                </Badge>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-brand-cafe">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <SectionCta label="Quiero crear esto · empezar ahora" />
      </div>
    </section>
  )
}
