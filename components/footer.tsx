import Link from "next/link"
import Image from "next/image"
import { Send, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="MasterIT Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                MasterIT
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Apprends. Progresse. Domine la Tech.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/packs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Packs & Bundles
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/formations#dev" className="text-muted-foreground hover:text-foreground transition-colors">
                  Développement
                </Link>
              </li>
              <li>
                <Link href="/formations#ia" className="text-muted-foreground hover:text-foreground transition-colors">
                  Intelligence Artificielle
                </Link>
              </li>
              <li>
                <Link
                  href="/formations#cyber"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cybersécurité
                </Link>
              </li>
              <li>
                <Link
                  href="/formations#trading"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/224611353456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/scriptseinsei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Formulaire
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MasterIT. Tous droits réservés. Conakry, Guinée.</p>
        </div>
      </div>
    </footer>
  )
}
