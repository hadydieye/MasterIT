"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "224611353456"
  const whatsappMessage = encodeURIComponent("Bonjour MasterIT, je souhaite en savoir plus sur vos formations.")

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/formations", label: "Formations" },
    { href: "/packs", label: "Packs" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MasterIT Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-xl">MasterIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366]"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="sm">
              <Link href="/formations">Commencer</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366]"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/whatsapp-icon.png" alt="WhatsApp" width={16} height={16} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <Link href="/formations">Commencer</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
