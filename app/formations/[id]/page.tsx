import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, BarChart, Star, Users, CheckCircle2, PlayCircle, FileText, Award, Share2, MapPin } from "lucide-react"
import { trainingPrograms } from "@/data/trainings"

export function generateStaticParams() {
  return Object.keys(trainingPrograms).map((id) => ({ id }))
}

export default async function TrainingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const training = trainingPrograms[id as keyof typeof trainingPrograms]
  const totalPrograms = Object.keys(trainingPrograms).length

  if (!training) {
    notFound()
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "224611353456"
  const whatsappMessage = encodeURIComponent(
    `Bonjour MasterIT, je suis intéressé par la formation "${training.title}". Pouvez-vous me donner plus d'informations ?`,
  )

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Badge className="mb-4">{training.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{training.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 text-pretty">{training.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{training.rating}</span>
                  <span className="text-muted-foreground">({training.reviews} avis)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  {training.students.toLocaleString()} étudiants
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  {training.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BarChart className="h-5 w-5" />
                  {training.level}
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <Image
                src={training.image || "/placeholder.svg"}
                alt={training.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button size="lg" className="rounded-full h-16 w-16 p-0">
                  <PlayCircle className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* Overview Section */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Ce que tu vas apprendre</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {training.whatYouLearn.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Prérequis</h3>
              <ul className="space-y-2">
                {training.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary">•</span>
                    <span className="text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Curriculum Section */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Programme de la formation</h3>
              <Accordion type="single" collapsible className="w-full">
                {training.curriculum.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">
                          Section {index + 1}: {section.title}
                        </span>
                        <Badge variant="secondary">{section.lessons.length} leçons</Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 mt-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-3 py-2">
                            <PlayCircle className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            {/* Instructor Section */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Ton instructeur</h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                  {training.instructor.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{training.instructor}</h4>
                  <p className="text-muted-foreground">{training.instructorBio}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{training.rating}</div>
                  <div className="text-sm text-muted-foreground">Note moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{totalPrograms}</div>
                  <div className="text-sm text-muted-foreground">Programmes actifs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1.2K</div>
                  <div className="text-sm text-muted-foreground">Élèves accompagnés</div>
                </div>
              </div>
            </Card>

            {/* Reviews Section */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Avis des étudiants</h3>
              <div className="space-y-6">
                {training.testimonials.map((review, index) => (
                  <div key={review.name} className="border-b pb-6 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-white">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{review.name}</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wide">{review.role}</span>
                          <div className="flex items-center gap-1 text-muted-foreground text-xs">
                            <MapPin className="h-3 w-3" />
                            {review.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star
                              key={`${review.name}-${starIndex}`}
                              className={`h-4 w-4 ${starIndex < Math.round(review.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground">{review.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">"{review.quote}"</p>
                        {index === 0 && (
                          <p className="text-xs text-primary mt-2">
                            Validation scriptsensei : retour partagé après relecture de livrables réels.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 space-y-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">{training.price.toLocaleString()} GNF</div>
                <div className="text-sm text-muted-foreground">Paiement unique</div>
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  S'inscrire maintenant
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                    Contacter sur WhatsApp
                  </a>
                </Button>
              </div>

              <div className="border-t pt-6 space-y-3">
                <h4 className="font-semibold mb-3">Cette formation inclut :</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 text-muted-foreground" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <span>Ressources téléchargeables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <span>Certificat de fin de formation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Accès à vie</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                    <span>Support communautaire</span>
                  </div>
                </div>
              </div>

              <Button variant="ghost" className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Partager cette formation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
