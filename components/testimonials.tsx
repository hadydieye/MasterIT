'use client'

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLElement>()
  const testimonials = [
    {
      name: "Ousmane Barry",
      role: "Dev freelance à Dakar",
      content:
        "Hady m'a aidé à structurer mon offre Next.js + DevOps. J'ai signé mon premier contrat à 1 200 € après la revue de mon portfolio et du devis.",
      rating: 5,
    },
    {
      name: "Néné Bah",
      role: "Analyste cyber à Conakry",
      content:
        "Les labs Kali/OWASP sont exactement ce que je pratique en mission. J'ai livré mon premier audit pour une ONG locale en reprenant ses modèles de rapports.",
      rating: 5,
    },
    {
      name: "Boubacar Keita",
      role: "Consultant IA à Bamako",
      content:
        "Le pack IA m'a permis d'automatiser des dashboards Power BI pour un cabinet comptable. Hady a relu mes prompts et mes scripts avant livraison.",
      rating: 5,
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
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Résultats réels</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Ce que disent{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              mes élèves
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les témoignages viennent d'élèves accompagnés entre 2022 et 2024. Ils vivent tous en Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
