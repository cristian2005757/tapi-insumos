'use client'

import { useState } from 'react'
import Image from 'next/image'
import { openWhatsApp } from '@/lib/whatsapp'
import { ProductQuoteModal } from './ProductQuoteModal'
import type { Product } from '@/types/product'

interface ProductGalleryProps {
  product: Product
  compact?: boolean
}

export function ProductGallery({ product, compact = false }: ProductGalleryProps) {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const imageSrc = product.image || product.images?.[0]

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative bg-surface rounded-2xl overflow-hidden border border-white/10" style={{ position: 'relative' }}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl text-text-secondary">
              🛋️
            </div>
          )}
        </div>
        <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
        {product.bullets && (
            <ul className="mb-6 space-y-1">
              {product.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-primary">•</span> {b}
                </li>
              ))}
            </ul>
          )}
          {product.description && (
            <p className="text-text-secondary mb-6">{product.description}</p>
          )}
          {!compact && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-6 py-3 min-h-[44px] rounded-xl font-semibold transition-colors active:scale-[0.98] touch-manipulation"
              >
                Cotizar con opciones
              </button>
              <button
                onClick={() => openWhatsApp(product)}
                className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-6 py-3 min-h-[44px] rounded-xl font-semibold transition-colors active:scale-[0.98] touch-manipulation"
              >
                Consultar por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
      {showQuoteModal && (
        <ProductQuoteModal product={product} onClose={() => setShowQuoteModal(false)} />
      )}
    </>
  )
}
