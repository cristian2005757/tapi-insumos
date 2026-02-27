import type { Product } from '@/types/product'
import type { QuoteItem } from '@/types/product'
import { site } from '@/data/site'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

export function buildWhatsAppMessage(
  product?: Product,
  quoteItems?: QuoteItem[]
): string {
  const base = `Hola, soy de ${site.name}. `
  if (quoteItems && quoteItems.length > 0) {
    const lines = quoteItems.map((item) => {
      let line = `• ${item.productName}`
      if (item.measure) line += ` - Medidas: ${item.measure}`
      if (item.color) line += ` - Color: ${item.color}`
      if (item.city) line += ` - Ciudad: ${item.city}`
      if (item.preferredDate) line += ` - Fecha preferida: ${item.preferredDate}`
      return line
    })
    return base + `Me gustaría cotizar:\n\n${lines.join('\n')}\n\n¿Podrían darme más información?`
  }
  if (product) {
    return base + `Me interesa el producto: ${product.name}. ¿Podrían darme más información?`
  }
  return base + 'Me gustaría recibir información sobre sus productos.'
}

export function openWhatsApp(product?: Product, quoteItems?: QuoteItem[]) {
  if (!WHATSAPP_NUMBER) return
  const message = encodeURIComponent(buildWhatsAppMessage(product, quoteItems))
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
