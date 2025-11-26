export function ContactHero() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-balance">
          Contacte{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nous
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Une question ? Un projet ? Notre équipe est là pour t'aider à démarrer ton parcours tech
        </p>
      </div>
    </section>
  )
}
