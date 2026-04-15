import { Wordmark } from "./wordmark"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-brand-crema py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Wordmark />
          <p className="text-xs text-brand-cafe/70">
            Curso de marca personal · Método P.O.S.I.C.I.O.N.A
          </p>
        </div>

        <nav
          aria-label="Enlaces de pie de página"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-cafe"
        >
          <a href="#" className="hover:text-brand-fucsia">
            Términos
          </a>
          <a href="#" className="hover:text-brand-fucsia">
            Privacidad
          </a>
          <a href="#" className="hover:text-brand-fucsia">
            Contacto
          </a>
        </nav>

        <p className="text-xs text-brand-cafe/70">
          © {year} Fuerte y Claro
        </p>
      </div>
    </footer>
  )
}
