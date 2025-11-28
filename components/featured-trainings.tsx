import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

type Training = {
  id: string
  title: string
  description: string
  image: string
  category: string
  level: string
  duration: string
  price: number
  rating: number
  students: number
}

interface FeaturedTrainingsProps {
  trainings: Training[]
}

export function FeaturedTrainings({ trainings }: FeaturedTrainingsProps) {
  // Fonction pour formater le prix
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('GNF', 'GNF')
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos Formations Populaires</h2>
          <p className="mt-4 text-lg text-muted-foreground">Découvrez nos formations les plus demandées par nos apprenants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.slice(0, 3).map((training) => (
            <Card key={training.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={training.image || "/placeholder.svg"}
                  alt={training.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {training.category}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{training.level}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium">{training.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{training.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{training.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{formatPrice(training.price)}</span>
                  <Button asChild size="sm">
                    <Link href={`/formations/${training.id}`}>
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/formations">
              Voir toutes les formations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
