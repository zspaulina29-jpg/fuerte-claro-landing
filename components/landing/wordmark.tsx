import { cn } from "@/lib/utils"

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-base font-semibold tracking-tight text-brand-gris",
        className,
      )}
    >
      Fuerte
      <span aria-hidden className="size-1.5 rounded-full bg-brand-fucsia" />
      Claro
    </span>
  )
}
