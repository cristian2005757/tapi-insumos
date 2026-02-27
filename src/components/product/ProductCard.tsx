'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types/product'
import { openWhatsApp } from '@/lib/whatsapp'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.image || product.images?.[0]

  return (
    <article className="group bg-surface rounded-2xl border border-white/10 overflow-hidden hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 active:scale-[0.98]">
      <Link href={`/producto/${product.slug}`} className="block" aria-label={`Ver ${product.name}`}>
        <div className="aspect-square relative bg-white/5" style={{ position: 'relative' }}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl text-text-secondary/50">
              🛋️
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.bullets && product.bullets.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm text-text-secondary">
            {product.bullets.slice(0, 3).map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={() => openWhatsApp(product)}
          className="mt-4 w-full min-h-[44px] flex items-center justify-center bg-primary hover:bg-primary-hover text-[#0B0F14] py-3 md:py-2 rounded-lg text-sm font-medium transition-colors touch-manipulation"
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir este por WhatsApp
        </button>
      </div>
    </article>
  )
}
