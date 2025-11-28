import { Suspense } from "react"
import { trainingPrograms } from "@/data/trainings"
import { TrainingCatalog } from "@/components/training-catalog"

export const metadata = {
  title: "Programmes & Formations - MasterIT",
  description: "Les bootcamps et coachings animés par Hady Dieye pour créer un vrai revenu tech",
}

const totalPrograms = Object.keys(trainingPrograms).length

export default function FormationsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Mes{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              programmes accompagnés
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {totalPrograms} formations couvrent désormais chaque stack : langages, IA, réseaux, Linux, DevOps, cyber,
            business, trading et compétences transverses. Tout est découpé par technologie, prêt à être choisi.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-12">Chargement...</div>}>
          <TrainingCatalog />
        </Suspense>
      </div>
    </main>
  )
}
