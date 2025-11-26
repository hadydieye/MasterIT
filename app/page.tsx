import { Hero3D } from "@/components/hero-3d"
import { WhyMasterIT } from "@/components/why-masterit"
import { CategoriesPreview } from "@/components/categories-preview"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero3D />
      <WhyMasterIT />
      <CategoriesPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
