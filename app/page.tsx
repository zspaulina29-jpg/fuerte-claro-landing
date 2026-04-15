import { Nav } from "@/components/landing/nav"
import { Countdown } from "@/components/landing/countdown"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Agitation } from "@/components/landing/agitation"
import { BeliefShift } from "@/components/landing/belief-shift"
import { Solution } from "@/components/landing/solution"
import { Visualization } from "@/components/landing/visualization"
import { Method } from "@/components/landing/method"
import { Proof } from "@/components/landing/proof"
import { Demo } from "@/components/landing/demo"
import { Modules } from "@/components/landing/modules"
import { Bonuses } from "@/components/landing/bonuses"
import { Offer } from "@/components/landing/offer"
import { Guarantee } from "@/components/landing/guarantee"
import { Urgency } from "@/components/landing/urgency"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="bg-brand-beige text-brand-gris">
      <Nav />
      <Countdown />
      <Hero />
      <Problem />
      <Agitation />
      <BeliefShift />
      <Solution />
      <Visualization />
      <Method />
      <Proof />
      <Demo />
      <Modules />
      <Bonuses />
      <Offer />
      <Guarantee />
      <Urgency />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
