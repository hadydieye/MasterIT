import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Provider } from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MasterIT - Formations Tech en Guinée & Afrique",
  description:
    "Apprends. Progresse. Domine la Tech. Formations en développement web, IA, cybersécurité, trading et plus encore.",
  generator: "v0.app",
  keywords: "formation, tech, guinée, afrique, développement web, intelligence artificielle, cybersécurité, trading",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "MasterIT - Formations Tech",
    description: "Apprends. Progresse. Domine la Tech.",
    type: "website",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "MasterIT Logo" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Provider>
          <ScrollToTop />
          <Navigation />
          {children}
          <FloatingContact />
          <Analytics />
        </Provider>
      </body>
    </html>
  )
}
