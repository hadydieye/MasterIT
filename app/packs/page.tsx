import { PacksHero } from "@/components/packs-hero"
import { PacksGrid } from "@/components/packs-grid"
import { PacksComparison } from "@/components/packs-comparison"
import { PacksFAQ } from "@/components/packs-faq"

export const metadata = {
  title: "Packs & Bundles - MasterIT",
  description: "Économise jusqu'à 50% avec nos packs de formations groupées",
}

export default function PacksPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <PacksHero />
      <PacksGrid />
      <PacksComparison />
      <PacksFAQ />
    </main>
  )
}
