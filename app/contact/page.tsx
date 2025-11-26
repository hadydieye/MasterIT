import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactFAQ } from "@/components/contact-faq"

export const metadata = {
  title: "Contact - MasterIT",
  description: "Contacte-nous pour toute question sur nos formations tech",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactFAQ />
    </main>
  )
}
