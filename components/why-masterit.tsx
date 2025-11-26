'use client'

import { Card } from "@/components/ui/card"
import { Brain, Laptop, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function WhyMasterIT() {
  const { ref, visible } = useReveal<HTMLElement>()

  const features = [
    {
      icon: Laptop,
      title: "Programmes calibrés terrain",
      description:
        "Chaque module reprend les process que j'utilise pour mes clients : audits de sécu, pipelines CI/CD, apps Next.js, automatisations IA.",
      gradient: "from-primary/30 to-primary/5",
    },
    {
      icon: Brain,
      title: "Coaching individuel",
      description:
        "Tu m'envoies ton code ou ta stratégie, je te réponds sous 24h sur WhatsApp avec un plan d'action concret et des revues vidéo.",
      gradient: "from-secondary/30 to-secondary/5",
    },
    {
      icon: MessageSquare,
      title: "Livrables actionnables",
      description:
        "Templates Notion, scripts Bash, checklists de pentest, devis freelances : tu repars avec des outils prêts à être facturés.",
      gradient: "from-accent/30 to-accent/5",
    },
  ]

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 px-4 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Méthode MasterIT</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Une pédagogie pensée pour les{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              builders africains
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pas de théorie inutile : tu avances grâce à des sprints pratiques, des feedbacks honnêtes et des missions
            facturables dès la fin du parcours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

