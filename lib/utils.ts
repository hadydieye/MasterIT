import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const GNF_PER_FCFA = 14 // approx 1 FCFA ≈ 14 GNF
const GNF_PER_USD = 8600 // approx 1 USD ≈ 8 600 GNF

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPriceBreakdown(priceInGNF: number) {
  const fcfaValue = Math.round(priceInGNF / GNF_PER_FCFA)
  const usdValue = Math.round(priceInGNF / GNF_PER_USD)

  return {
    gnf: {
      value: priceInGNF,
      formatted: priceInGNF.toLocaleString("fr-FR"),
    },
    fcfa: {
      value: fcfaValue,
      formatted: fcfaValue.toLocaleString("fr-FR"),
    },
    usd: {
      value: usdValue,
      formatted: usdValue.toLocaleString("en-US"),
    },
  }
}
