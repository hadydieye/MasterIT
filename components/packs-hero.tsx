import { Sparkles, TrendingDown } from "lucide-react"

export function PacksHero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles className="h-4 w-4" />
          Économise jusqu'à 50%
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-balance">
          Packs de{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Formations
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Combine plusieurs formations et économise gros. Nos packs sont conçus pour te donner une expertise complète
          dans ton domaine.
        </p>
        <div className="flex items-center justify-center gap-2 text-accent">
          <TrendingDown className="h-5 w-5" />
          <span className="font-semibold">Meilleur rapport qualité-prix garanti</span>
        </div>
      </div>
    </section>
  )
}
