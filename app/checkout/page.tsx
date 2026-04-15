import type { Metadata } from "next"
import { CheckoutClient } from "./checkout-client"

export const metadata: Metadata = {
  title: "¡Bienvenido a Fuerte y Claro! · Compra confirmada",
  description:
    "Tu acceso al curso ya está activo. Revisa tu correo y empieza el Día 1 hoy mismo.",
}

export default function CheckoutPage() {
  return <CheckoutClient />
}
