import { Card } from "@/components/ui/card"
import { Award, Briefcase as Certificate, CheckCircle } from "lucide-react"

export function AboutCredentials() {
  const credentials = [
    {
      title: "Certifications techniques",
      items: ["AWS Solutions Architect", "Google Cloud Professional", "CEH - Certified Ethical Hacker"],
      icon: Certificate,
    },
    {
      title: "Références terrain",
      items: ["Mentor freelance pour 50+ développeurs", "Consultant cyber pour PME et ONG locales"],
      icon: Award,
    },
    {
      title: "Méthodes pédagogiques",
      items: ["Parcours orientés projets", "Ressources actionnables et support direct WhatsApp"],
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce qui me crédibilise</h2>
          <p className="text-muted-foreground">Expérience, certifications et retour terrain</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((cred, index) => (
            <Card key={index} className="p-8 text-center space-y-4 flex flex-col items-center justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary">
                <cred.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">{cred.title}</h3>
              <ul className="space-y-2">
                {cred.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
