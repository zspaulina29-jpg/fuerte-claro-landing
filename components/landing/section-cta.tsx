import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CHECKOUT_URL, PRICE_NOW } from "./config"
import { cn } from "@/lib/utils"

type Variant = "primary" | "soft" | "dark"

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-fucsia text-white hover:bg-brand-fucsia/90 shadow-md shadow-brand-fucsia/25",
  soft: "bg-brand-crema text-brand-fucsia hover:bg-white shadow-md ring-1 ring-brand-fucsia/15",
  dark: "bg-brand-lima text-brand-gris hover:bg-brand-lima/90 shadow-md shadow-brand-lima/30",
}

export function SectionCta({
  label,
  note,
  variant = "primary",
  className,
}: {
  label?: string
  note?: string
  variant?: Variant
  className?: string
}) {
  const text = label ?? `Empezar ahora · ${PRICE_NOW}`
  return (
    <div className={cn("mt-12 flex flex-col items-center gap-2", className)}>
      <Button
        asChild
        className={cn(
          "h-12 px-6 text-sm font-semibold sm:text-base",
          variantClasses[variant],
        )}
      >
        <a href={CHECKOUT_URL}>
          {text}
          <ArrowRight className="size-4" />
        </a>
      </Button>
      {note ? (
        <p className="text-xs text-brand-cafe/70">{note}</p>
      ) : (
        <p className="text-xs text-brand-cafe/70">
          Pago único · acceso inmediato · 7 días de garantía
        </p>
      )}
    </div>
  )
}
