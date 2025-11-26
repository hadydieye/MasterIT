import { Card } from "@/components/ui/card"
import { Linkedin, Mail, Award } from "lucide-react"

export function AboutTeam() {
  const highlights = [
    "8+ ans d'expérience en développement full-stack et cybersécurité",
    "Accompagnement de freelances pour décrocher leurs premiers clients",
    "Workshops réguliers sur l'IA appliquée, DevOps et hacking éthique",
  ]

  const expertise = ["Full-Stack JS/TS", "DevOps & Cloud", "Cybersécurité offensive", "IA générative"]

  const formats = ["Bootcamps intensifs", "Coaching 1:1", "Formations autonomes", "Workshops entreprises"]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Je suis ton formateur</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Chaque ligne de code, chaque process DevOps ou plan de cybersécurité que j'enseigne provient de missions que
            j'ai réellement exécutées pour des startups, ONG et PME africaines.
          </p>
        </div>

        <Card className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Hady Dieye</p>
                <h3 className="text-3xl font-bold">Formateur & Consultant indépendant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  J'accompagne les développeurs, étudiants et entrepreneurs à construire une carrière tech rentable.
                  Je suis passé par les mêmes obstacles (connexion instable, manque de matériel, besoin de clients) et
                  j'ai créé cette plateforme pour partager des raccourcis actionnables.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 hover:border-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:scriptseinseidieye@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-muted-foreground/30 hover:border-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Me contacter
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden bg-muted aspect-square">
                <img
                  src="/images/profile.jpg"
                  alt="Portrait de Hady Dieye"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6 bg-primary/5 border-primary/10 space-y-3">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold">Expertises</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <span key={skill} className="px-2 py-1 rounded text-xs bg-white text-primary font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card className="p-6 space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Formats</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {formats.map((format) => (
                      <li key={format}>{format}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
