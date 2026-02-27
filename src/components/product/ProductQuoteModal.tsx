'use client'

import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { useQuote } from '@/contexts/QuoteContext'
import { openWhatsApp } from '@/lib/whatsapp'
import type { Product } from '@/types/product'

interface ProductQuoteModalProps {
  product: Product
  onClose: () => void
}

export function ProductQuoteModal({ product, onClose }: ProductQuoteModalProps) {
  const { addItem } = useQuote()
  const [measure, setMeasure] = useState('')
  const [color, setColor] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')

  const handleAdd = () => {
    addItem(product, {
      measure: measure.trim() || undefined,
      color: color.trim() || undefined,
      city: city.trim() || undefined,
      preferredDate: date.trim() || undefined,
    })
    onClose()
  }

  const handleAddAndSend = () => {
    addItem(product, {
      measure: measure.trim() || undefined,
      color: color.trim() || undefined,
      city: city.trim() || undefined,
      preferredDate: date.trim() || undefined,
    })
    const items = [
      {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        measure: measure.trim() || undefined,
        color: color.trim() || undefined,
        city: city.trim() || undefined,
        preferredDate: date.trim() || undefined,
        quantity: 1,
      },
    ]
    openWhatsApp(product, items)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
        <div className="space-y-4">
        <h2 className="text-xl font-bold text-text-primary">Cotizar: {product.name}</h2>
        <p className="text-sm text-text-secondary">
          Completa los datos para una cotización precisa.
        </p>
        <div className="grid gap-4">
          <label className="block">
            <span className="text-sm font-medium text-text-primary">Medidas</span>
            <input
              type="text"
              value={measure}
              onChange={(e) => setMeasure(e.target.value)}
              placeholder="Ej: 1.90m x 1.20m"
              className="mt-1 w-full rounded-lg border border-white/10 bg-surface px-3 py-3 text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none min-h-[44px]"
              maxLength={100}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-text-primary">Color / tela</span>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Ej: Gris oscuro"
              className="mt-1 w-full rounded-lg border border-white/10 bg-surface px-3 py-3 text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none min-h-[44px]"
              maxLength={80}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-text-primary">Ciudad</span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ej: Cúcuta"
              className="mt-1 w-full rounded-lg border border-white/10 bg-surface px-3 py-3 text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none min-h-[44px]"
              maxLength={60}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-text-primary">Fecha preferida de entrega</span>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Ej: próxima semana"
              className="mt-1 w-full rounded-lg border border-white/10 bg-surface px-3 py-3 text-base text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none min-h-[44px]"
              maxLength={60}
            />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 border border-primary text-primary py-3 min-h-[44px] rounded-lg font-medium hover:bg-primary/10 touch-manipulation"
          >
            Agregar a cotización
          </button>
          <button
            type="button"
            onClick={handleAddAndSend}
            className="flex-1 bg-primary hover:bg-primary-hover text-[#0B0F14] py-3 min-h-[44px] rounded-lg font-medium touch-manipulation"
          >
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </Modal>
  )
}
