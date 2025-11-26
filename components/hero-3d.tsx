'use client'

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero3D() {
  // scriptsensei signature: hero animé construit pour raconter mon histoire en direct
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: Math.random() * 2 + 1,
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z -= particle.vz

        // Reset if out of bounds
        if (particle.z < 1) {
          particle.z = 1000
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }

        // Calculate 3D projection
        const scale = 500 / particle.z
        const x2d = particle.x * scale + canvas.width / 2
        const y2d = particle.y * scale + canvas.height / 2
        const size = scale * 2

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size)
        const colors = ["#3B82F6", "#8B5CF6", "#10B981"]
        const color = colors[i % colors.length]
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2)
        ctx.fill()

        particles.forEach((other, j) => {
          if (i >= j) return
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const dz = particle.z - other.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 150) {
            const scale2 = 500 / other.z
            const ox2d = other.x * scale2 + canvas.width / 2
            const oy2d = other.y * scale2 + canvas.height / 2

            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(x2d, y2d)
            ctx.lineTo(ox2d, oy2d)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-bounce-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Formations par Hady Dieye
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-down animation-delay-100">
            Je t'aide à passer du statut d'autodidacte
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              au freelance rentable.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Je construis des bootcamps et parcours modulaires autour de mes missions réelles en full-stack, DevOps, IA et cybersécurité.
            Tu suis un plan clair, tu pratiques sur des projets clients et tu es accompagné directement sur WhatsApp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Link href="/packs">Voir les packs disponibles</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary/20 hover:bg-primary/10 bg-transparent"
            >
              <Link href="/contact">Parler avec moi</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            {[
              { label: "Élèves accompagnés", value: "1 200+", accent: "text-primary" },
              { label: "Certifs & missions clients", value: "8", accent: "text-secondary" },
              { label: "Coaching WhatsApp", value: "1:1 & collectif", accent: "text-accent" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="space-y-2 animate-scale-in"
                style={{ "--stagger": String(index) } as React.CSSProperties}
              >
                <div className={cn("text-3xl md:text-4xl font-bold", item.accent)}>{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="absolute left-12 top-32 w-60 rounded-2xl border border-white/10 bg-white/5 backdrop-blur animate-float">
            <div className="p-6 text-left space-y-1">
              <p className="text-sm text-muted-foreground">Prochain bootcamp</p>
              <p className="text-lg font-semibold text-white">Full-Stack & DevOps</p>
              <p className="text-xs text-muted-foreground">Places limitées · Support live</p>
            </div>
            </div>
          <div className="absolute right-10 bottom-24 w-64 rounded-2xl border border-white/10 bg-white/5 backdrop-blur animate-float [animation-delay:300ms]">
            <div className="p-6 text-left space-y-1">
              <p className="text-sm text-muted-foreground">Projet livré par un élève</p>
              <p className="text-lg font-semibold text-white">Dashboard IA en Next.js</p>
              <p className="text-xs text-muted-foreground">Client basé à Dakar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
