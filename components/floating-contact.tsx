"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = "224611353456"
  const telegramUsername = "scriptseinsei"
  const phoneNumber = "+224611353456"

  const whatsappMessage = encodeURIComponent("Bonjour MasterIT, je souhaite en savoir plus sur vos formations.")

  return (
    <>
      {/* Main floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isExpanded ? (
          <Button
            size="icon"
            className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
            onClick={() => setIsExpanded(true)}
          >
            <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
          </Button>
        ) : (
          <div className="flex flex-col gap-3 items-end">
            <Button
              size="icon"
              variant="outline"
              className="h-12 w-12 rounded-full bg-transparent"
              onClick={() => setIsExpanded(false)}
            >
              <Image src="/close-icon.png" alt="Close" width={24} height={24} />
            </Button>

            <Button
              asChild
              className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
              >
                <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
              </a>
            </Button>

            <Button
              asChild
              className="h-14 w-14 rounded-full bg-[#0088cc] hover:bg-[#0077b5] shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur Telegram"
              >
                <Image src="/telegram-icon.png" alt="Telegram" width={24} height={24} />
              </a>
            </Button>

            <Button
              asChild
              className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all"
            >
              <a href={`tel:${phoneNumber}`} aria-label="Appeler">
                <Image src="/phone-icon.png" alt="Phone" width={24} height={24} />
              </a>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
