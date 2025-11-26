import { Card } from "@/components/ui/card"
import { CheckCircle2, X } from "lucide-react"

export function PacksComparison() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir un pack ?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare les avantages d'acheter un pack vs des formations individuelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-primary">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Avec un Pack</h3>
              <p className="text-sm text-muted-foreground">Économique et complet</p>
            </div>
            <ul className="space-y-3">
              {[
                "Économise jusqu'à 50%",
                "Parcours d'apprentissage structuré",
                "Support prioritaire",
                "Certificat de spécialisation",
                "Accès à vie à toutes les formations",
                "Mises à jour gratuites",
                "Communauté privée",
                "Projets intégrés",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 opacity-75">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <X className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sans Pack</h3>
              <p className="text-sm text-muted-foreground">Formations individuelles</p>
            </div>
            <ul className="space-y-3">
              {[
                "Prix plein pour chaque formation",
                "Pas de parcours guidé",
                "Support standard uniquement",
                "Certificats séparés",
                "Accès individuel par formation",
                "Mises à jour payantes",
                "Pas de communauté dédiée",
                "Projets non intégrés",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
