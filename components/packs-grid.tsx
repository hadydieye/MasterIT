import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Award, TrendingUp } from "lucide-react"

export function PacksGrid() {
  const packs = [
    {
      id: "fullstack-dev",
      name: "Pack Full-Stack Developer",
      tagline: "Deviens développeur complet",
      description: "Maîtrise le frontend et le backend pour créer des applications web complètes",
      originalPrice: 900000,
      price: 550000,
      discount: 39,
      duration: "120h",
      courses: 4,
      level: "Débutant à Avancé",
      popular: true,
      image: "/fullstack-developer-workspace.jpg",
      includes: [
        "React & Next.js - Développement Web Moderne",
        "Python & Django - Backend Development",
        "Node.js & Express - API REST",
        "PostgreSQL & Bases de données",
      ],
      benefits: ["4 formations complètes", "Certificat de fin", "Projets pratiques", "Support prioritaire"],
    },
    {
      id: "cybersec-expert",
      name: "Pack Cybersécurité Expert",
      tagline: "Protège les systèmes",
      description: "Deviens expert en sécurité informatique et hacking éthique",
      originalPrice: 1200000,
      price: 750000,
      discount: 38,
      duration: "180h",
      courses: 5,
      level: "Intermédiaire à Expert",
      popular: true,
      image: "/cybersecurity-hacking-setup.jpg",
      includes: [
        "CEH - Certified Ethical Hacker",
        "Kali Linux - Hacking Éthique Pratique",
        "Wireshark - Analyse de réseau",
        "Sécurité Web - OWASP Top 10",
        "Cryptographie & Sécurité",
      ],
      benefits: ["5 formations avancées", "Préparation CEH", "Labs pratiques", "Mentorat personnalisé"],
    },
    {
      id: "ai-master",
      name: "Pack IA & Data Science",
      tagline: "Maîtrise l'intelligence artificielle",
      description: "Apprends l'IA, le Machine Learning et la Data Science",
      originalPrice: 800000,
      price: 500000,
      discount: 38,
      duration: "100h",
      courses: 4,
      level: "Intermédiaire",
      popular: false,
      image: "/artificial-intelligence-neural-network.jpg",
      includes: [
        "ChatGPT & IA Générative",
        "Data Science & Machine Learning",
        "Python pour Data Science",
        "Power BI - Visualisation de données",
      ],
      benefits: ["4 formations IA", "Projets ML", "Datasets inclus", "Certificat reconnu"],
    },
    {
      id: "devops-cloud",
      name: "Pack DevOps & Cloud",
      tagline: "Automatise et déploie",
      description: "Maîtrise Docker, Kubernetes, AWS et les pratiques DevOps",
      originalPrice: 950000,
      price: 600000,
      discount: 37,
      duration: "140h",
      courses: 5,
      level: "Intermédiaire à Avancé",
      popular: false,
      image: "/devops-cloud-infrastructure.jpg",
      includes: [
        "Docker & Kubernetes",
        "AWS Cloud Practitioner",
        "CI/CD avec GitHub Actions",
        "Terraform - Infrastructure as Code",
        "Monitoring & Logging",
      ],
      benefits: ["5 formations DevOps", "Labs AWS", "Projets réels", "Certification AWS"],
    },
    {
      id: "business-digital",
      name: "Pack Business Digital",
      tagline: "Lance ton business en ligne",
      description: "Crée et développe ton business en ligne rentable",
      originalPrice: 650000,
      price: 400000,
      discount: 38,
      duration: "80h",
      courses: 4,
      level: "Débutant",
      popular: false,
      image: "/digital-business-entrepreneur.jpg",
      includes: [
        "Dropshipping - E-Commerce Rentable",
        "Marketing Digital & SEO",
        "YouTube - Créer une chaîne rentable",
        "Réseaux sociaux - Instagram & TikTok",
      ],
      benefits: ["4 formations business", "Templates inclus", "Stratégies éprouvées", "Communauté privée"],
    },
    {
      id: "trading-pro",
      name: "Pack Trading Professionnel",
      tagline: "Trade comme un pro",
      description: "Maîtrise le trading Crypto, Forex et Actions",
      originalPrice: 750000,
      price: 480000,
      discount: 36,
      duration: "90h",
      courses: 4,
      level: "Débutant à Avancé",
      popular: false,
      image: "/professional-trading-charts.jpg",
      includes: [
        "Trading Crypto - Bitcoin & Altcoins",
        "Forex Trading - Devises",
        "Trading Actions - Bourse",
        "Analyse Technique - SMC",
      ],
      benefits: ["4 formations trading", "Stratégies rentables", "Signaux de trading", "Groupe VIP"],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack) => (
            <Card
              key={pack.id}
              className={`relative overflow-hidden hover:border-primary/50 transition-all group ${
                pack.popular ? "border-primary" : ""
              }`}
            >
              {pack.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Populaire
                  </Badge>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={pack.image || "/placeholder.svg"}
                  alt={pack.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-primary/90 backdrop-blur-sm">-{pack.discount}%</Badge>
                  <h3 className="text-xl font-bold text-white">{pack.name}</h3>
                  <p className="text-sm text-white/90">{pack.tagline}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{pack.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {pack.courses} formations
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {pack.duration}
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Inclus dans ce pack :</div>
                  {pack.includes.slice(0, 3).map((course, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed">{course}</span>
                    </div>
                  ))}
                  {pack.includes.length > 3 && (
                    <div className="text-xs text-primary font-medium">+{pack.includes.length - 3} autres...</div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{pack.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">GNF</span>
                    <span className="text-sm text-muted-foreground line-through ml-auto">
                      {pack.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link href={`/packs/${pack.id}`}>Voir les détails</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
