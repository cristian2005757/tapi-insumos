'use client'

import Image from 'next/image'
import { openWhatsApp } from '@/lib/whatsapp'
import { useReveal } from '@/hooks/useReveal'

export function PromoBanner() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="py-16 px-4"
      aria-labelledby="promo-title"
    >
      <div className="container mx-auto">
        <div
          className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
            <div className="relative aspect-[4/3] sm:aspect-[21/9] md:aspect-[3/1] min-h-[240px]" style={{ position: 'relative' }}>
            <Image
              src="/images/promo.png"
              alt="Promo Comedor moderno + sillas negras premium"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/80 via-[#0B0F14]/50 to-transparent flex items-center">
              <div className="container mx-auto px-8 md:px-12">
                <h2 id="promo-title" className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 max-w-xl">
                  Renueva tu comedor con estilo moderno
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-4 md:mb-6 max-w-lg">
                  Comedor moderno + sillas negras premium
                </p>
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-8 py-4 rounded-xl font-semibold transition-colors active:scale-[0.98]"
                  aria-label="Cotizar comedor - WhatsApp"
                >
                  Cotizar comedor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
