"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function TrainingFilters() {
  const [priceRange, setPriceRange] = useState([0, 500000])

  const categories = [
    "Développement Web & Mobile",
    "Intelligence Artificielle",
    "Réseaux & Infrastructures",
    "Cybersécurité",
    "Systèmes & Administration",
    "Business & E-Commerce",
    "Trading & Finance",
    "Design & Création",
    "Compétences Complémentaires",
  ]

  const levels = ["Débutant", "Intermédiaire", "Avancé", "Expert"]

  const durations = ["0-10h", "10-20h", "20-40h", "40h+"]

  return (
    <Card className="p-6 sticky top-24 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Filtres</h3>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <X className="h-4 w-4 mr-1" />
          Réinitialiser
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold mb-3 block">Catégories</Label>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label
                  htmlFor={category}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-sm font-semibold mb-3 block">Niveau</Label>
          <div className="space-y-2">
            {levels.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label
                  htmlFor={level}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-sm font-semibold mb-3 block">Durée</Label>
          <div className="space-y-2">
            {durations.map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <label
                  htmlFor={duration}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {duration}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-sm font-semibold mb-3 block">
            Prix (GNF): {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()}
          </Label>
          <Slider value={priceRange} onValueChange={setPriceRange} max={500000} step={10000} className="mt-2" />
        </div>
      </div>
    </Card>
  )
}
