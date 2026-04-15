import { TrendingDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CHECKOUT_URL, PRICE_NOW } from "./config"

const CONSEQUENCES = [
  "Pierdes oportunidades que ni siquiera supiste que existían.",
  "Te perciben como “uno más” y compites por precio, no por valor.",
  "Tu expertise sigue invisible — el mercado recuerda a quien aparece, no a quien sabe.",
]

export function Agitation() {
  return (
    <section className="bg-brand-cafe py-20 text-brand-crema sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-brand-lima">
            <TrendingDown className="size-3.5" />
            Lo que está en juego
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cada día que no te posicionas, otra persona{" "}
            <span className="text-brand-lima">ocupa tu lugar</span>.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-crema/85 sm:text-lg">
            <p>
              No es que el mercado no te necesite. Es que no sabe que existes. Mientras tú dudas si publicar o no, otra persona —con menos preparación que tú— ya está en la conversación.
            </p>
            <p>
              Y cuanto más tiempo pasa, más se normaliza la idea de que “esto del contenido no es lo tuyo”. Spoiler: el problema nunca fue tu talento.
            </p>
          </div>

          <ul className="mt-10 space-y-4 border-l-2 border-brand-lima/60 pl-5">
            {CONSEQUENCES.map((c) => (
              <li key={c} className="text-base text-brand-crema sm:text-lg">
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 bg-brand-lima px-6 text-base font-semibold text-brand-gris hover:bg-brand-lima/90"
            >
              <a href={CHECKOUT_URL}>
                Tomar acción ahora · {PRICE_NOW}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <p className="text-xs text-brand-crema/60">
              Cada día que pasa, alguien más ocupa tu espacio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
