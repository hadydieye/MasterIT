import { useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, ArrowRight } from "lucide-react"
import { trainingPrograms } from "@/data/trainings"

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

const categoryColors: Record<string, string> = {
  'Programmation': 'bg-blue-900/50 text-blue-300 border-blue-700',
  'Data & BI': 'bg-purple-900/50 text-purple-300 border-purple-700',
  'Intelligence Artificielle': 'bg-cyan-900/50 text-cyan-300 border-cyan-700',
  'Réseaux & Infrastructure': 'bg-green-900/50 text-green-300 border-green-700',
  'Linux & Systèmes': 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  'DevOps & Cloud': 'bg-indigo-900/50 text-indigo-300 border-indigo-700',
  'Cybersécurité & Hacking': 'bg-red-900/50 text-red-300 border-red-700',
  'Business & Marketing': 'bg-pink-900/50 text-pink-300 border-pink-700',
  'Compétences Complémentaires': 'bg-amber-900/50 text-amber-300 border-amber-700',
  'Trading & Finance': 'bg-emerald-900/50 text-emerald-300 border-emerald-700'
}

export function FeaturedTrainings() {
  // Sélectionner 4 formations aléatoires
  const featuredTrainings = useMemo(() => {
    const trainings = Object.values(trainingPrograms)
    return [...trainings]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('GNF', 'GNF')
  }

  return (
    <section className="py-16 bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Formations Populaires
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez nos formations les plus demandées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTrainings.map((training) => (
            <Card key={training.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-800 bg-gray-900">
              <div className="relative h-40">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <Badge 
                  className={`absolute top-2 right-2 text-xs font-medium px-2 py-1 border ${categoryColors[training.category] || 'bg-gray-800 text-gray-200 border-gray-700'}`}
                >
                  {training.category}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-800 text-gray-200">
                    {training.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-200">{training.rating}</span>
                    <span className="text-gray-600 mx-1">•</span>
                    <Users className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-sm text-gray-400">{training.students}+</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white mb-1.5 line-clamp-2 leading-tight">
                  {training.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {training.description}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                  <div>
                    <p className="text-lg font-bold text-white">{formatPrice(training.price)}</p>
                    <div className="flex items-center text-xs text-gray-400 mt-0.5">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{training.duration}</span>
                    </div>
                  </div>
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    <Link href={`/formations/${training.id}`} className="flex items-center text-sm">
                      Voir plus
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/formations" className="font-medium">
              Voir toutes les formations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
