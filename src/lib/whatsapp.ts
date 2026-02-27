import type { Product } from '@/types/product'
import type { QuoteItem } from '@/types/product'
import { site } from '@/data/site'

export function getWhatsAppNumber(): string {
  const env = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim()
  if (env) return env
  return site.whatsapp || ''
}

export function getWhatsAppUrl(product?: Product, quoteItems?: QuoteItem[]): string {
  const number = getWhatsAppNumber()
  if (!number) return '#'
  const message = encodeURIComponent(buildWhatsAppMessage(product, quoteItems))
  return `https://wa.me/${number}?text=${message}`
}

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
  return `Hola, me interesé en el catálogo de ${site.name}. ¿Podrían darme más información?`
}

export function openWhatsApp(product?: Product, quoteItems?: QuoteItem[]) {
  const url = getWhatsAppUrl(product, quoteItems)
  if (url === '#') return
  // Usar enlace nativo en lugar de window.open: más fiable en móviles y con bloqueadores
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
