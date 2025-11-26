import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function ContactFAQ() {
  const faqs = [
    {
      question: "Quel est le délai de réponse ?",
      answer:
        "Nous répondons généralement dans les 24 heures ouvrables. Pour une réponse plus rapide, contacte-nous sur WhatsApp.",
    },
    {
      question: "Puis-je visiter vos locaux ?",
      answer:
        "Oui ! Nous accueillons les visiteurs du lundi au vendredi de 9h à 17h. Prends rendez-vous à l'avance pour garantir notre disponibilité.",
    },
    {
      question: "Proposez-vous des formations en présentiel ?",
      answer:
        "Actuellement, toutes nos formations sont en ligne pour maximiser l'accessibilité. Nous organisons cependant des événements et workshops en présentiel régulièrement.",
    },
    {
      question: "Comment puis-je devenir instructeur ?",
      answer:
        "Nous sommes toujours à la recherche d'experts passionnés. Envoie-nous ton CV et une présentation de tes compétences via le formulaire de contact.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground">Trouve rapidement des réponses à tes questions</p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  )
}
