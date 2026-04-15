import { Badge } from "@/components/ui/badge"
import { Gift, FileText, CalendarRange, Crown, UserCog, Mic } from "lucide-react"
import { SectionCta } from "./section-cta"

const BONUSES = [
  {
    icon: FileText,
    title: "Plantillas de contenido listas para usar",
    desc: "Más de 30 plantillas editables para post, carrusel, story y reel — solo cambias el texto.",
    value: "49 €",
  },
  {
    icon: CalendarRange,
    title: "Calendario estratégico de 30 días",
    desc: "Día por día qué publicar, en qué formato y con qué objetivo de posicionamiento.",
    value: "39 €",
  },
  {
    icon: Crown,
    title: "Guía: posiciónate como experto en tu nicho",
    desc: "El mapa para construir autoridad real, no solo seguidores. Aplicable a cualquier sector.",
    value: "29 €",
  },
  {
    icon: UserCog,
    title: "Optimización de perfil: de visita a seguidor",
    desc: "Cómo convertir cada visita a tu perfil en una persona que decide quedarse.",
    value: "29 €",
  },
  {
    icon: Mic,
    title: "Masterclass: pierde el miedo a exponerte",
    desc: "Sesión grabada con ejercicios prácticos para soltar el bloqueo de mostrarte en cámara.",
    value: "59 €",
  },
]

export function Bonuses() {
  return (
    <section className="bg-brand-beige py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            <Gift className="size-3.5" />
            Bonos de lanzamiento
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            5 bonos incluidos por tiempo limitado
          </h2>
          <p className="mt-5 text-balance text-base text-brand-cafe sm:text-lg">
            Solo durante esta ventana de lanzamiento. Después, el curso se vende sin ellos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map(({ icon: Icon, title, desc, value }) => (
            <div
              key={title}
              className="relative flex h-full flex-col rounded-3xl bg-brand-crema p-6 shadow-sm ring-1 ring-brand-rosa/60"
            >
              <Badge className="absolute -top-2 right-5 bg-brand-lima text-brand-gris hover:bg-brand-lima">
                INCLUIDO
              </Badge>

              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-fucsia-soft text-brand-fucsia">
                <Icon className="size-5" />
              </span>

              <h3 className="mt-4 text-base font-semibold text-brand-gris">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-cafe">
                {desc}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-brand-cafe/70">Valor por separado</span>
                <span className="font-semibold text-brand-cafe line-through">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <SectionCta label="Quiero el curso + los 5 bonos" />
      </div>
    </section>
  )
}
