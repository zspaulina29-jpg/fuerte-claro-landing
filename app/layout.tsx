import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Fuerte y Claro — Construye tu marca personal y posiciónate en 30 días",
  description:
    "Curso intensivo con el método P.O.S.I.C.I.O.N.A. Pasa de invisible a referente en tu sector en 30 días. Plantillas, calendario y masterclass incluidos. Garantía de 7 días.",
  openGraph: {
    title: "Fuerte y Claro — Posiciónate en 30 días",
    description:
      "El método P.O.S.I.C.I.O.N.A: claridad, mensaje, contenido y visibilidad. De invisible a referente en 30 días.",
    locale: "es_MX",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-MX"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
