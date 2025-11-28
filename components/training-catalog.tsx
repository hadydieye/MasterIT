'use client'

import { useState, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart, Star, Users, X } from "lucide-react"
import { trainingPrograms } from "@/data/trainings"
import { getPriceBreakdown } from "@/lib/utils"

export function TrainingCatalog() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get("categorie")

  const [sortBy, setSortBy] = useState("popular")

  const categoryMap: Record<string, string> = {
    programmation: "Programmation",
    data: "Data & BI",
    ia: "Intelligence Artificielle",
    reseaux: "Réseaux & Infrastructure",
    linux: "Linux & Systèmes",
    devops: "DevOps & Cloud",
    securite: "Cybersécurité & Hacking",
    business: "Business & Marketing",
    skills: "Compétences Complémentaires",
    trading: "Trading & Finance",
  }

  const trainings = Object.values(trainingPrograms)

  const filteredTrainings = useMemo(() => {
    let result = [...trainings]

    if (categoryParam && categoryMap[categoryParam]) {
      result = result.filter((t) => t.category === categoryMap[categoryParam])
    }

    // Sort trainings
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "recent":
        // Keep original order for recent
        break
      default: // popular
        result.sort((a, b) => b.students - a.students)
    }

    return result
  }, [categoryParam, sortBy])

  const clearFilter = () => {
    router.push("/formations")
  }

  return (
    <div className="space-y-6">
      {categoryParam && categoryMap[categoryParam] && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm py-2 px-4">
            Catégorie: {categoryMap[categoryParam]}
            <button onClick={clearFilter} className="ml-2 hover:text-destructive">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{filteredTrainings.length}</span> formation
          {filteredTrainings.length > 1 ? "s" : ""} trouvée{filteredTrainings.length > 1 ? "s" : ""}
        </p>
        <select
          className="bg-card border border-border rounded-lg px-4 py-2 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popular">Plus populaires</option>
          <option value="rating">Mieux notées</option>
          <option value="price-asc">Prix croissant</option>
          <option value="price-desc">Prix décroissant</option>
          <option value="recent">Plus récentes</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredTrainings.map((training) => {
          const price = getPriceBreakdown(training.price)
          return (
          <Card key={training.id} className="overflow-hidden hover:border-primary/50 transition-all group">
            <div className="relative h-36 overflow-hidden">
              <Image
                src={training.image || "/placeholder.svg"}
                alt={training.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{training.category}</Badge>
            </div>
            <div className="p-4 space-y-3">
              <div className="space-y-2">
                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{training.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{training.description}</p>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  {training.level}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {training.duration}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{training.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Users className="h-4 w-4" />
                  {training.students.toLocaleString()} étudiants
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-primary">{price.gnf.formatted}</span>
                    <span className="text-xs text-muted-foreground">GNF</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    ≈ {price.fcfa.formatted} FCFA • {price.usd.formatted} $
                  </p>
                </div>
                <Button asChild size="sm" className="text-xs">
                  <Link href={`/formations/${training.id}`}>Voir détails</Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
