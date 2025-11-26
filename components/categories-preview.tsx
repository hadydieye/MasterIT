'use client'

import Link from "next/link"
import { Code, ShieldCheck, Brain, Cloud, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function CategoriesPreview() {
  const { ref, visible } = useReveal<HTMLElement>()

  const categories = [
    {
      icon: Code,
      title: "Parcours Full-Stack Freelance",
      description: "React + Next.js, APIs Node, CI/CD GitHub Actions, offre freelance prête à vendre.",
      color: "from-blue-500 to-cyan-500",
      count: "4 projets client",
      href: "/packs/fullstack-dev",
    },
    {
      icon: ShieldCheck,
      title: "Cybersécurité & Pentest",
      description: "CEH, Kali, OWASP Top 10, rapports d'audit livrables pour des PME africaines.",
      color: "from-red-500 to-orange-500",
      count: "5 labs guidés",
      href: "/packs/cybersec-expert",
    },
    {
      icon: Brain,
      title: "IA & Automatisation",
      description: "ChatGPT, prompts no-code, Python pour data, dashboards Power BI.",
      color: "from-purple-500 to-pink-500",
      count: "4 projets IA",
      href: "/packs/ai-master",
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, Terraform, bonnes pratiques AWS pour déployer en prod.",
      color: "from-emerald-500 to-teal-500",
      count: "5 ateliers live",
      href: "/packs/devops-cloud",
    },
    {
      icon: Rocket,
      title: "Business & Monétisation",
      description: "YouTube, marketing digital, création d'offres, funnels pour générer des revenus récurrents.",
      color: "from-yellow-500 to-amber-500",
      count: "4 playbooks",
      href: "/packs/business-digital",
    },
  ]

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 px-4 bg-muted/30 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Packs disponibles</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Choisis un{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              parcours clé en main
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des packs condensés qui couvrent un stack complet + les scripts, modèles et stratégies que j'utilise au
            quotidien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link key={category.title} href={category.href}>
              <Card
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{category.description}</p>
                <div className="text-xs font-medium text-primary">{category.count}</div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/packs">Comparer tous les packs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
