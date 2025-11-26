import { Card } from "@/components/ui/card"
import { Users, GraduationCap, Award, Globe } from "lucide-react"

export function AboutStats() {
  const stats = [
    {
      icon: Users,
      value: "1200+",
      label: "Apprenants accompagnés",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      value: "25",
      label: "Programmes & bootcamps",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: "8",
      label: "Certifications techniques",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      value: "10",
      label: "Pays où vivent mes élèves",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon impact en chiffres</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque formation part d'une expérience vécue sur le terrain et se mesure par les résultats de mes élèves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center space-y-4 hover:border-primary/50 transition-all flex flex-col items-center justify-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color}`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
