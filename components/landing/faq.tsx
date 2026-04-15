import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionCta } from "./section-cta"

const FAQS = [
  {
    q: "¿Esto funciona si empiezo desde cero?",
    a: "Sí. El curso está pensado precisamente para personas que parten sin marca personal definida, sin seguidores y sin saber qué publicar. El primer pilar (Claridad) construye los cimientos antes de pedirte producir nada.",
  },
  {
    q: "¿Cuánto tiempo al día necesito?",
    a: "Entre 30 y 45 minutos al día son suficientes para completar el roadmap diario. Si tienes más tiempo, avanzas más rápido; si tienes menos, vas a tu ritmo — el contenido queda contigo de por vida.",
  },
  {
    q: "¿Funciona para mi nicho?",
    a: "El método está probado en más de 50 nichos: coaches, freelancers, consultores, profesionales de la salud, arquitectos, diseñadores, emprendedores digitales y más. La estructura es la misma; lo que cambia es lo que tú aportas.",
  },
  {
    q: "¿Es autoguiado o con acompañamiento?",
    a: "Es autoguiado por diseño — entras y avanzas a tu ritmo. Si quieres acompañamiento extra, hay una opción opcional con sesiones grupales mensuales que se ofrece dentro del curso.",
  },
  {
    q: "¿Y si no tengo idea de qué publicar?",
    a: "Justo por eso existen los Bonos: calendario de 30 días, plantillas listas y banco de ideas por nicho. No vas a abrir Instagram en blanco ni un solo día.",
  },
  {
    q: "¿Cómo accedo después de comprar?",
    a: "Recibes un correo en menos de 5 minutos con tu acceso a la plataforma. Funciona desde móvil, tablet y computadora — y los materiales son descargables.",
  },
  {
    q: "¿Puedo pedir el reembolso sin dar explicaciones?",
    a: "Sí. Tienes 7 días desde tu compra. Escribes un correo a soporte y te devolvemos el 100% sin pedirte que justifiques nada. Sin letras chiquitas.",
  },
]

export function Faq() {
  return (
    <section className="bg-brand-beige py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-fucsia">
            Dudas frecuentes
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-brand-gris sm:text-4xl">
            Las preguntas que probablemente te estás haciendo
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-brand-crema"
        >
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-border px-5 last:border-b-0 sm:px-7"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-brand-gris hover:no-underline sm:text-lg [&[data-state=open]_[data-slot=accordion-trigger-icon]]:text-brand-fucsia">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-brand-cafe">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <SectionCta label="Resolver mis dudas adentro · 99 €" />
      </div>
    </section>
  )
}
