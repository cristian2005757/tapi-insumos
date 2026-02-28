'use client'

import Link from 'next/link'
import { products } from '@/data/products'
import { openWhatsApp } from '@/lib/whatsapp'
import { ProductCard } from '@/components/product/ProductCard'
import { useReveal } from '@/hooks/useReveal'

export function FeaturedProducts() {
  const { ref, isVisible } = useReveal({ threshold: 0.1, instantOnMobile: true })
  const hasProducts = products.length > 0

  return (
    <section
      ref={ref}
      className="py-20 px-4"
      aria-labelledby="featured-title"
    >
      <div className="container mx-auto">
        <h2
          id="featured-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-2 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Modelos destacados
        </h2>
        <p
          className={`text-center text-text-secondary mb-12 transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Los más pedidos esta semana
        </p>

        {!hasProducts ? (
          <div
            className={`text-center py-12 px-6 rounded-2xl bg-surface border border-white/10 transition-all ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-text-secondary mb-4">
              Estamos actualizando el catálogo, cotiza por WhatsApp.
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-6 py-3 rounded-lg font-medium"
              aria-label="Cotizar por WhatsApp"
            >
              Cotizar por WhatsApp
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {products.map((product, i) => (
                <div
                  key={product.id}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/catalogo"
                className="inline-block py-3 px-6 text-primary font-semibold hover:underline min-h-[44px] touch-manipulation"
              >
                Ver todos los productos →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
