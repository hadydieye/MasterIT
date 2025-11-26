"use client"

import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 md:px-6 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-2xl">
        {/* Main 404 Content */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-9xl md:text-[150px] font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                404
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Page Non Trouvée</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
              Désolé, la page que vous recherchez a disparu dans le cyberespace. Revenez à l'accueil pour explorer
              MasterIT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 py-8">
            <Link
              href="/"
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300 p-6 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Home className="w-5 h-5 text-primary" />
                <span className="font-medium">Retour à l'accueil</span>
              </div>
            </Link>

            <Link
              href="/formations"
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-300 p-6 hover:border-accent/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-3">
                <span className="w-5 h-5 text-accent">📚</span>
                <span className="font-medium">Nos formations</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-border">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span>À propos</span>
            </Link>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
            <Link href="/packs" className="text-muted-foreground hover:text-foreground transition-colors">
              Nos packs
            </Link>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-16 relative h-24 flex items-center justify-center">
          <div
            className="absolute w-20 h-20 border border-primary/20 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute w-32 h-32 border border-secondary/10 rounded-full animate-spin"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          ></div>
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
