import { describe, it, expect, beforeEach } from 'vitest'
import { buildWhatsAppMessage } from '../whatsapp'

describe('buildWhatsAppMessage', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '573001234567'
  })

  it('builds general message without product', () => {
    const msg = buildWhatsAppMessage()
    expect(msg).toContain('Tapinsumos')
    expect(msg).toContain('información')
  })

  it('builds message with product', () => {
    const msg = buildWhatsAppMessage({
      id: '1',
      name: 'Cama Milano',
      slug: 'cama-milano',
      categoryId: 'camas',
    })
    expect(msg).toContain('Cama Milano')
  })

  it('builds message with quote items', () => {
    const items = [
      {
        id: '1',
        productId: '1',
        productName: 'Cama Milano',
        productSlug: 'cama-milano',
        measure: '1.90m',
        color: 'Gris',
        city: 'Cúcuta',
        preferredDate: 'próxima semana',
        quantity: 1,
      },
    ]
    const msg = buildWhatsAppMessage(undefined, items)
    expect(msg).toContain('Cama Milano')
    expect(msg).toContain('1.90m')
    expect(msg).toContain('Gris')
    expect(msg).toContain('Cúcuta')
  })
})
