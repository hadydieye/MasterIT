import { Hero3D } from "@/components/hero-3d"
import { WhyMasterIT } from "@/components/why-masterit"
import { CategoriesPreview } from "@/components/categories-preview"
import { FeaturedTrainings } from "@/components/featured-trainings"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { trainingPrograms } from "@/data/trainings"
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero3D />
      <WhyMasterIT />
      <CategoriesPreview />
      <FeaturedTrainings trainings={Object.values(trainingPrograms)} />
      <Testimonials />
      <CTASection />
      <Footer />
      <Analytics />
    </main>
  )
}
