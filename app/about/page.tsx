import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { AboutStats } from "@/components/about-stats"
import { AboutValues } from "@/components/about-values"
import { AboutCredentials } from "@/components/about-credentials"

export const metadata = {
  title: "À Propos - MasterIT",
  description: "Découvre l'histoire et la mission de MasterIT, la plateforme de formations tech en Guinée et Afrique",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutValues />
      <AboutCredentials />
      <AboutTeam />
    </main>
  )
}
