import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export function ContactInfo() {
  const whatsappNumber = "224611353456"
  const telegramUsername = "scriptseinsei"
  const whatsappMessage = encodeURIComponent("Bonjour MasterIT, je souhaite en savoir plus sur vos formations.")

  return (
    <div className="space-y-6">
      <Card className="p-8 space-y-6">
        <h2 className="text-2xl font-bold">Informations de contact</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Adresse</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conakry, Guinée
                <br />
                Quartier Kaloum, Immeuble Tech Hub
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Téléphone</h3>
              <p className="text-sm text-muted-foreground">+224 611 353 456</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">scriptseinseidieye@gmail.com</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <h2 className="text-2xl font-bold">Contacte-nous directement</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Pour une réponse rapide, contacte-nous sur WhatsApp ou Telegram. Notre équipe est disponible 7j/7.
        </p>

        <div className="space-y-3">
          <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white" size="lg">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/whatsapp-icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button asChild className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white" size="lg">
            <a href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer">
              <Send className="h-5 w-5 mr-2" />
              Telegram
            </a>
          </Button>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
        <h3 className="font-bold mb-2">Horaires d'ouverture</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lundi - Vendredi</span>
            <span className="font-medium">8h - 18h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Samedi</span>
            <span className="font-medium">9h - 15h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Dimanche</span>
            <span className="font-medium">Fermé</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
