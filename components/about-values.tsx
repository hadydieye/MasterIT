import { Card } from "@/components/ui/card"
import { Heart, Zap, Shield, TrendingUp } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Je construis mes programmes autour de ce que je pratique au quotidien, sans théorie inutile.",
    },
    {
      icon: Zap,
      title: "Exigence",
      description: "Je ne vends que des méthodes que j'ai testées avec mes clients freelances ou mes missions en entreprise.",
    },
    {
      icon: Shield,
      title: "Transparence",
      description: "Tu connais le programme, les livrables et l'effort nécessaire avant même de rejoindre une formation.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Je mets à jour les parcours chaque trimestre pour intégrer les nouveautés IA, cloud ou cybersécurité.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes valeurs</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Je partage ici les principes qui guident mes formations et mon accompagnement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 space-y-4 hover:border-primary/50 transition-all">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
