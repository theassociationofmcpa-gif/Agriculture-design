import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { CatalogueSection } from "@/components/catalogue-section"
import { ContactCtaSection } from "@/components/contact-cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <CatalogueSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  )
}
