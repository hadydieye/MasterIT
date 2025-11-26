import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function PacksFAQ() {
  const faqs = [
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer:
        "Oui ! Nous proposons des plans de paiement flexibles. Contacte-nous sur WhatsApp pour discuter des options de paiement échelonné adaptées à ton budget.",
    },
    {
      question: "Combien de temps ai-je accès aux formations ?",
      answer:
        "Tu as un accès à vie à toutes les formations incluses dans ton pack. Tu peux apprendre à ton rythme et revenir sur le contenu quand tu veux.",
    },
    {
      question: "Puis-je changer de pack après l'achat ?",
      answer:
        "Oui, tu peux upgrader vers un pack supérieur en payant simplement la différence. Contacte notre support pour effectuer le changement.",
    },
    {
      question: "Les packs incluent-ils des certificats ?",
      answer:
        "Oui ! Tu recevras un certificat pour chaque formation complétée, plus un certificat de spécialisation pour l'ensemble du pack.",
    },
    {
      question: "Y a-t-il une garantie satisfait ou remboursé ?",
      answer:
        "Oui, nous offrons une garantie de 14 jours. Si tu n'es pas satisfait, nous te remboursons intégralement, sans poser de questions.",
    },
    {
      question: "Puis-je offrir un pack en cadeau ?",
      answer:
        "Absolument ! Les packs font d'excellents cadeaux. Contacte-nous pour obtenir un code cadeau que tu pourras offrir à quelqu'un.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-muted-foreground">Tout ce que tu dois savoir sur nos packs</p>
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
