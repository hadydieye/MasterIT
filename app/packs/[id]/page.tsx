import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Award, Users, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPriceBreakdown } from "@/lib/utils"

const packs = {
  "fullstack-dev": {
    id: "fullstack-dev",
    name: "Pack Full-Stack Developer",
    tagline: "Deviens développeur complet",
    description:
      "Maîtrise le frontend et le backend pour créer des applications web complètes. Ce pack te transformera en développeur full-stack recherché sur le marché.",
    originalPrice: 900000,
    price: 550000,
    discount: 39,
    duration: "120h",
    courses: 4,
    level: "Débutant à Avancé",
    students: 3200,
    rating: 4.9,
    image: "/fullstack-developer-complete-workspace.jpg",
    includes: [
      {
        title: "React & Next.js - Développement Web Moderne",
        duration: "35h",
        level: "Intermédiaire",
      },
      {
        title: "Python & Django - Backend Development",
        duration: "40h",
        level: "Débutant",
      },
      {
        title: "Node.js & Express - API REST",
        duration: "25h",
        level: "Intermédiaire",
      },
      {
        title: "PostgreSQL & Bases de données",
        duration: "20h",
        level: "Débutant",
      },
    ],
    benefits: [
      "4 formations complètes du frontend au backend",
      "Certificat de Full-Stack Developer",
      "5 projets pratiques intégrés",
      "Support prioritaire 7j/7",
      "Accès à vie avec mises à jour gratuites",
      "Communauté privée de développeurs",
      "Sessions de mentorat mensuelles",
      "Portfolio professionnel inclus",
    ],
    skills: [
      "Créer des interfaces React modernes",
      "Développer des APIs REST robustes",
      "Gérer des bases de données SQL",
      "Déployer des applications complètes",
      "Implémenter l'authentification",
      "Optimiser les performances",
      "Travailler en équipe avec Git",
      "Suivre les best practices",
    ],
    projects: [
      "Application e-commerce complète",
      "Réseau social avec chat en temps réel",
      "Dashboard d'analytics",
      "API de gestion de contenu",
      "Portfolio personnel déployé",
    ],
  },
  "cybersec-expert": {
    id: "cybersec-expert",
    name: "Pack Cybersécurité Expert",
    tagline: "Protège les systèmes",
    description:
      "Deviens expert en sécurité informatique et hacking éthique. Ce pack couvre tous les aspects de la cybersécurité moderne avec certifications reconnues.",
    originalPrice: 1200000,
    price: 750000,
    discount: 38,
    duration: "180h",
    courses: 5,
    level: "Intermédiaire à Expert",
    students: 2100,
    rating: 4.8,
    image: "/cybersecurity-hacking-setup.jpg",
    includes: [
      {
        title: "CEH - Certified Ethical Hacker",
        duration: "50h",
        level: "Avancé",
      },
      {
        title: "Kali Linux - Hacking Éthique Pratique",
        duration: "45h",
        level: "Intermédiaire",
      },
      {
        title: "Wireshark - Analyse de réseau",
        duration: "30h",
        level: "Intermédiaire",
      },
      {
        title: "Sécurité Web - OWASP Top 10",
        duration: "35h",
        level: "Débutant",
      },
      {
        title: "Cryptographie & Sécurité",
        duration: "20h",
        level: "Avancé",
      },
    ],
    benefits: [
      "5 formations avancées en cybersécurité",
      "Préparation certifiée CEH",
      "Labs pratiques avec cas réels",
      "Mentorat personnalisé 1:1",
      "Accès à des outils professionnels",
      "Réseau de professionnels sécurité",
      "Mise à jour continue",
      "Garantie emploi",
    ],
    skills: [
      "Effectuer des tests de pénétration",
      "Analyser les trafics réseau",
      "Identifier les vulnérabilités",
      "Implémenter la sécurité",
      "Gérer les incidents",
      "Crypter les données",
      "Sécuriser les applications",
      "Respecter la conformité RGPD",
    ],
    projects: [
      "Test de pénétration complet",
      "Audit de sécurité réseau",
      "Analyse de malware",
      "Simulation d'attaque",
      "Plan de réponse incident",
    ],
  },
  "ai-master": {
    id: "ai-master",
    name: "Pack IA & Data Science",
    tagline: "Maîtrise l'intelligence artificielle",
    description:
      "Apprends l'IA, le Machine Learning et la Data Science. Transform les données en insights et crée des modèles IA révolutionnaires.",
    originalPrice: 800000,
    price: 500000,
    discount: 38,
    duration: "100h",
    courses: 4,
    level: "Intermédiaire",
    students: 2800,
    rating: 4.9,
    image: "/artificial-intelligence-neural-network.jpg",
    includes: [
      {
        title: "ChatGPT & IA Générative",
        duration: "25h",
        level: "Débutant",
      },
      {
        title: "Data Science & Machine Learning",
        duration: "30h",
        level: "Intermédiaire",
      },
      {
        title: "Python pour Data Science",
        duration: "25h",
        level: "Débutant",
      },
      {
        title: "Power BI - Visualisation de données",
        duration: "20h",
        level: "Débutant",
      },
    ],
    benefits: [
      "4 formations IA & ML",
      "Projets ML sur vrais datasets",
      "Datasets inclus et prétraités",
      "Certificat reconnu internationalement",
      "Accès à des notebooks Jupyter",
      "Communauté data scientists",
      "Support illimité",
      "Mises à jour mensuelles",
    ],
    skills: [
      "Utiliser ChatGPT et IA générative",
      "Prédire avec Machine Learning",
      "Analyser les données",
      "Créer des modèles IA",
      "Visualiser les données",
      "Traiter les données manquantes",
      "Optimiser les modèles",
      "Déployer les modèles",
    ],
    projects: [
      "Chatbot IA personnalisé",
      "Modèle de prédiction",
      "Dashboard analytics",
      "Classification d'images",
      "Détection d'anomalies",
    ],
  },
  "devops-cloud": {
    id: "devops-cloud",
    name: "Pack DevOps & Cloud",
    tagline: "Automatise et déploie",
    description:
      "Maîtrise Docker, Kubernetes, AWS et les pratiques DevOps modernes. Devient un expert en infrastructure cloud.",
    originalPrice: 950000,
    price: 600000,
    discount: 37,
    duration: "140h",
    courses: 5,
    level: "Intermédiaire à Avancé",
    students: 1900,
    rating: 4.7,
    image: "/devops-cloud-infrastructure.jpg",
    includes: [
      {
        title: "Docker & Containerization",
        duration: "35h",
        level: "Intermédiaire",
      },
      {
        title: "Kubernetes - Orchestration",
        duration: "35h",
        level: "Avancé",
      },
      {
        title: "AWS Cloud Practitioner",
        duration: "30h",
        level: "Intermédiaire",
      },
      {
        title: "CI/CD avec GitHub Actions",
        duration: "25h",
        level: "Intermédiaire",
      },
      {
        title: "Terraform - Infrastructure as Code",
        duration: "15h",
        level: "Avancé",
      },
    ],
    benefits: [
      "5 formations DevOps complètes",
      "Labs AWS gratuits",
      "Projets basés sur cas réels",
      "Certification AWS incluse",
      "Accès à AWS Free Tier",
      "Support technique 24/7",
      "Matériaux mis à jour",
      "Communauté DevOps active",
    ],
    skills: [
      "Containeriser les applications",
      "Orchestrer avec Kubernetes",
      "Déployer sur AWS",
      "Automatiser les pipelines",
      "Gérer l'infrastructure",
      "Monitorer les applications",
      "Scaler automatiquement",
      "Sécuriser le cloud",
    ],
    projects: [
      "Application containerisée",
      "Cluster Kubernetes",
      "Pipeline CI/CD complet",
      "Infrastructure AWS",
      "Monitoring & logging",
    ],
  },
  "business-digital": {
    id: "business-digital",
    name: "Pack Business Digital",
    tagline: "Lance ton business en ligne",
    description:
      "Crée et développe ton business en ligne rentable. Apprends les stratégies éprouvées pour générer des revenus passifs.",
    originalPrice: 650000,
    price: 400000,
    discount: 38,
    duration: "80h",
    courses: 4,
    level: "Débutant",
    students: 3500,
    rating: 4.9,
    image: "/digital-business-entrepreneur.jpg",
    includes: [
      {
        title: "Dropshipping - E-Commerce Rentable",
        duration: "20h",
        level: "Débutant",
      },
      {
        title: "Marketing Digital & SEO",
        duration: "20h",
        level: "Débutant",
      },
      {
        title: "YouTube - Créer une chaîne rentable",
        duration: "20h",
        level: "Débutant",
      },
      {
        title: "Réseaux sociaux - Instagram & TikTok",
        duration: "20h",
        level: "Débutant",
      },
    ],
    benefits: [
      "4 formations business pratiques",
      "Templates et outils gratuits",
      "Stratégies éprouvées et testées",
      "Communauté privée d'entrepreneurs",
      "Mentorat en groupe hebdomadaire",
      "Accès à des outils premium",
      "Mises à jour stratégies",
      "Support communauté active",
    ],
    skills: [
      "Lancer une boutique Shopify",
      "Optimiser pour Google",
      "Créer du contenu viral",
      "Gérer les réseaux sociaux",
      "Faire du marketing d'influence",
      "Automatiser les ventes",
      "Analyser les métriques",
      "Scaler ton business",
    ],
    projects: [
      "Boutique e-commerce complète",
      "Chaîne YouTube monétisée",
      "Stratégie Instagram/TikTok",
      "Funnels de vente",
      "Campagne marketing intégrée",
    ],
  },
  "trading-pro": {
    id: "trading-pro",
    name: "Pack Trading Professionnel",
    tagline: "Trade comme un pro",
    description:
      "Maîtrise le trading Crypto, Forex et Actions. Apprends les stratégies des traders professionnels et commence à trader intelligemment.",
    originalPrice: 750000,
    price: 480000,
    discount: 36,
    duration: "90h",
    courses: 4,
    level: "Débutant à Avancé",
    students: 2400,
    rating: 4.8,
    image: "/professional-trading-charts.jpg",
    includes: [
      {
        title: "Trading Crypto - Bitcoin & Altcoins",
        duration: "25h",
        level: "Débutant",
      },
      {
        title: "Forex Trading - Devises",
        duration: "25h",
        level: "Intermédiaire",
      },
      {
        title: "Trading Actions - Bourse",
        duration: "20h",
        level: "Intermédiaire",
      },
      {
        title: "Analyse Technique - SMC",
        duration: "20h",
        level: "Avancé",
      },
    ],
    benefits: [
      "4 formations trading complètes",
      "Stratégies rentables et testées",
      "Signaux de trading en temps réel",
      "Groupe VIP de traders",
      "Analyse de marché quotidienne",
      "Webinaires trading hebdo",
      "Gestion du risque incluse",
      "Support traders 24/7",
    ],
    skills: [
      "Trader les cryptos intelligemment",
      "Analyser les graphiques",
      "Gérer les risques",
      "Utiliser les indicateurs",
      "Identifier les tendances",
      "Placer les ordres",
      "Gérer la psychologie",
      "Diversifier les portefeuilles",
    ],
    projects: [
      "Portefeuille Crypto diversifié",
      "Stratégie Forex automatisée",
      "Portefeuille actions équilibré",
      "Bot de trading personnalisé",
      "Plan de trading complet",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(packs).map((id) => ({ id }))
}

export default async function PackDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const pack = packs[id as keyof typeof packs]

  if (!pack) {
    notFound()
  }

  const price = getPriceBreakdown(pack.price)
  const originalPrice = getPriceBreakdown(pack.originalPrice)
  const savings = getPriceBreakdown(pack.originalPrice - pack.price)

  const whatsappNumber = "224611353456"
  const whatsappMessage = encodeURIComponent(
    `Bonjour MasterIT, je suis intéressé par le pack "${pack.name}". Pouvez-vous me donner plus d'informations sur les modalités de paiement ?`,
  )

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <TrendingUp className="h-3 w-3 mr-1" />
                Économise {pack.discount}%
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{pack.name}</h1>
              <p className="text-2xl text-primary font-semibold mb-4">{pack.tagline}</p>
              <p className="text-xl text-muted-foreground mb-6 text-pretty">{pack.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{pack.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  {pack.students.toLocaleString()} étudiants
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  {pack.duration} de contenu
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="h-5 w-5" />
                  {pack.courses} formations
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img src={pack.image || "/placeholder.svg"} alt={pack.name} className="w-full h-full object-cover" />
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Formations incluses</h2>
              <div className="space-y-4">
                {pack.includes.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{course.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Compétences que tu vas acquérir</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {pack.skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Projets pratiques</h2>
              <ul className="space-y-3">
                {pack.projects.map((project, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{project}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 space-y-6">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{price.gnf.formatted}</span>
                  <span className="text-sm text-muted-foreground">GNF</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  ≈ {price.fcfa.formatted} FCFA • {price.usd.formatted} $
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">
                    {originalPrice.gnf.formatted}
                  </span>
                  <Badge className="bg-accent text-accent-foreground">-{pack.discount}%</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Économise {savings.gnf.formatted} GNF (≈ {savings.fcfa.formatted} FCFA • {savings.usd.formatted} $)
                </p>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  Acheter maintenant
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>

              <div className="border-t pt-6 space-y-3">
                <h4 className="font-semibold mb-3">Ce pack inclut :</h4>
                <div className="space-y-3">
                  {pack.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-semibold">Garantie satisfait ou remboursé</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Essaie le pack pendant 14 jours. Si tu n'es pas satisfait, nous te remboursons intégralement.
                  </p>
                </div>
              </div>

              <Button variant="ghost" className="w-full" asChild>
                <Link href="/packs">Voir tous les packs</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
