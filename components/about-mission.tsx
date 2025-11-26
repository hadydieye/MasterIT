import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Users, Rocket } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Qui suis-je ?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis Hady Dieye, formateur, développeur full-stack et hacker éthique basé à Conakry. J'ai lancé MasterIT pour proposer
                des formations pragmatiques et abordables aux personnes qui veulent lancer une carrière tech sans devoir quitter l'Afrique.
              </p>
              <p>
                Mon approche est simple : des programmes concrets, des cas pratiques inspirés de missions clients
                et un accompagnement humain que tu peux suivre à ton rythme, même en parallèle d'un emploi ou des études.
              </p>
              <p>
                En travaillant en solo, je reste proche de chaque apprenant. Je construis les formations, réponds aux questions et mets à jour les supports
                pour coller aux réalités du terrain (freelance, remote jobs, cybersécurité, etc.).
              </p>
              <p className="font-semibold text-primary">
                Mon engagement : te donner les compétences et la confiance pour vendre ton expertise tech rapidement.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img 
              src="/images/profile.jpg" 
              alt="Hady Dieye" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: "Mission personnelle",
              description: "Rendre les carrières tech accessibles aux autodidactes africains",
            },
            {
              icon: Lightbulb,
              title: "Vision",
              description: "Former une communauté de freelances et de builders capables d'exporter leur savoir-faire",
            },
            {
              icon: Users,
              title: "Approche",
              description: "Coaching individuel, projets concrets, ressources 100% actionnables",
            },
            {
              icon: Rocket,
              title: "Impact",
              description: "1200+ apprenants accompagnés depuis 2020",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center space-y-4">
              <div className="flex justify-center w-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
