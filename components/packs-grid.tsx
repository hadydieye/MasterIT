import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Award, TrendingUp } from "lucide-react"
import { getPriceBreakdown } from "@/lib/utils"

export function PacksGrid() {
  const packs = [
    {
      id: "fullstack-dev",
      name: "Pack Full-Stack Developer",
      tagline: "Deviens développeur complet",
      description: "Un parcours structuré qui couvre React, TypeScript, Node et PostgreSQL pour livrer des apps de bout en bout.",
      originalPrice: 1710000,
      price: 980000,
      discount: 43,
      duration: "140h",
      courses: 5,
      level: "Débutant à Intermédiaire",
      popular: true,
      image: "/fullstack-developer-workspace.jpg",
      includes: [
        "React.js Frontend Pro",
        "Formation Complète Développement Web",
        "TypeScript Mastery",
        "Node.js Express JWT & Mongoose",
        "PostgreSQL Architecture",
      ],
      benefits: ["5 formations complètes", "Certificat de fin", "Projets pratiques", "Support prioritaire"],
    },
    {
      id: "cybersec-expert",
      name: "Pack Cybersécurité Expert",
      tagline: "Protège les systèmes",
      description: "Prépare-toi aux missions pentest et Red Team avec les cursus les plus demandés.",
      originalPrice: 2060000,
      price: 1300000,
      discount: 37,
      duration: "200h",
      courses: 6,
      level: "Intermédiaire à Expert",
      popular: true,
      image: "/cybersecurity-hacking-setup.jpg",
      includes: [
        "CEH v13",
        "Active Directory Red Team Lab",
        "Sécurité Réseaux",
        "Cybersécurité avec l'IA",
        "Ethical Hacking from Scratch",
        "Wireshark Expert",
      ],
      benefits: ["6 formations avancées", "Préparation CEH", "Labs pratiques", "Mentorat personnalisé"],
    },
    {
      id: "ai-master",
      name: "Pack IA & Data Science",
      tagline: "Maîtrise l'intelligence artificielle",
      description: "Combine IA générative, data science et visualisation pour livrer des assistants business.",
      originalPrice: 2060000,
      price: 1150000,
      discount: 44,
      duration: "160h",
      courses: 6,
      level: "Intermédiaire",
      popular: false,
      image: "/artificial-intelligence-neural-network.jpg",
      includes: [
        "IA Fullstack avec Ollama",
        "ChatGPT & Midjourney Studio",
        "LLMs & Agents Experts",
        "Data Science & Machine Learning",
        "Power BI Dashboards",
        "NoCode & Perplexity Automations",
      ],
      benefits: ["6 formations IA", "Projets ML", "Datasets inclus", "Certificat reconnu"],
    },
    {
      id: "devops-cloud",
      name: "Pack DevOps & Cloud",
      tagline: "Automatise et déploie",
      description: "Industrialise tes déploiements avec Docker, Kubernetes, AWS et l'automatisation Ops.",
      originalPrice: 1910000,
      price: 1050000,
      discount: 45,
      duration: "170h",
      courses: 6,
      level: "Intermédiaire à Avancé",
      popular: false,
      image: "/devops-cloud-infrastructure.jpg",
      includes: [
        "Docker & Kubernetes",
        "Amazon Web Services (AWS)",
        "Linux Sécurité",
        "Windows Server Administration",
        "Linux Shell Bash",
        "PowerShell Automation",
      ],
      benefits: ["6 formations DevOps", "Labs AWS", "Projets réels", "Support d'exploitation"],
    },
    {
      id: "business-digital",
      name: "Pack Business Digital",
      tagline: "Lance ton business en ligne",
      description: "Tout pour lancer et scaler un business de contenu, e-commerce et offres digitales.",
      originalPrice: 2000000,
      price: 820000,
      discount: 59,
      duration: "120h",
      courses: 7,
      level: "Débutant",
      popular: false,
      image: "/digital-business-entrepreneur.jpg",
      includes: [
        "Digital Marketing 360",
        "Dropshipping Accéléré",
        "E-commerce Rentable",
        "Community Management Pro",
        "Créer & Administrer une Chaîne YouTube",
        "Shorts YouTube Rentables",
        "The Business Legion",
      ],
      benefits: ["7 formations business", "Templates inclus", "Stratégies éprouvées", "Communauté privée"],
    },
    {
      id: "trading-pro",
      name: "Pack Trading Professionnel",
      tagline: "Trade comme un pro",
      description: "Un parcours complet pour maîtriser crypto, Forex, SMC et gestion du risque.",
      originalPrice: 2770000,
      price: 1350000,
      discount: 51,
      duration: "160h",
      courses: 8,
      level: "Débutant à Intermédiaire",
      popular: false,
      image: "/professional-trading-charts.jpg",
      includes: [
        "Trading Crypto",
        "Forex Pro",
        "Smart Money Concepts (SMC)",
        "Crypto Futures Mastery",
        "Scalper Pro",
        "Alti Trading",
        "Investisseur Boursier",
        "Young Trader Forex Program",
      ],
      benefits: ["8 formations trading", "Stratégies rentables", "Journal Notion", "Groupe VIP"],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack) => {
            const price = getPriceBreakdown(pack.price)
            const originalPrice = getPriceBreakdown(pack.originalPrice)
            return (
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
                  <div className="space-y-1 mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{price.gnf.formatted}</span>
                      <span className="text-sm text-muted-foreground">GNF</span>
                      <span className="text-sm text-muted-foreground line-through ml-auto">
                        {originalPrice.gnf.formatted}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ≈ {price.fcfa.formatted} FCFA • {price.usd.formatted} $
                    </p>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link href={`/packs/${pack.id}`}>Voir les détails</Link>
                  </Button>
                </div>
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
