export function AboutHero() {
  // scriptsensei signature: intro personnelle minimaliste
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Hady Dieye</p>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Je crée des formations{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              tech accessibles
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            Je suis formateur indépendant, développeur full-stack et hacker éthique. À travers MasterIT,
            j'aide les passionnés et les professionnels à monter en compétences avec des programmes concrets et actionnables.
          </p>
        </div>
      </div>
    </section>
  )
}
