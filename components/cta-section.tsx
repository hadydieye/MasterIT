'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Send, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

export function CTASection() {
  // scriptsensei signature: CTA orienté conversation directe
  const { ref, visible } = useReveal<HTMLElement>()
  const whatsappNumber = "224611353456"
  const telegramUsername = "scriptseinsei"
  const whatsappMessage = encodeURIComponent(
    "Salut Hady, je veux des détails sur tes packs (paiement, démarrage, support).",
  )

  return (
    <section
      ref={ref}
      className={cn(
        "py-24 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 transition-all duration-700",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
      )}
    >
      <div className="container mx-auto text-center space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Travaillons ensemble</p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Tu veux un plan clair pour{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              monétiser tes compétences tech
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tu discutes directement avec moi (pas de chatbot). On valide ton objectif, ton matériel et on choisit le pack
            ou le coaching adapté.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="min-w-[220px]">
            <Link href="/packs">
              Découvrir les packs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[220px] bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366]"
          >
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
              M'écrire sur WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[220px] bg-[#0088cc] hover:bg-[#0077b5] text-white border-[#0088cc]"
          >
            <a href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer">
              <Send className="h-4 w-4 mr-2" />
              Continuer sur Telegram
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-left text-sm text-muted-foreground">
          {[
            { label: "Durée moyenne d'un pack", value: "6 à 10 semaines" },
            { label: "Support inclus", value: "WhatsApp vocal + live debrief" },
            { label: "Paiement", value: "Échelonné (jusqu'à 3 fois)" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-primary font-semibold">{item.label}</p>
              <p className="text-base text-foreground mt-2">{item.value}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

