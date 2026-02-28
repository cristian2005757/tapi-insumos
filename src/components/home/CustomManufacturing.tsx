'use client'

import { useReveal } from '@/hooks/useReveal'
import { openWhatsApp } from '@/lib/whatsapp'

export function CustomManufacturing() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="py-16 px-4"
      aria-labelledby="custom-title"
    >
      <div className="container mx-auto">
        <div
          className={`relative overflow-hidden rounded-2xl bg-surface border border-primary/30 p-10 md:p-14 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
        >
          {/* Línea decorativa dorada */}
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
            aria-hidden
          />
          <h2
            id="custom-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 max-w-4xl mx-auto leading-tight"
          >
            Se fabrica el modelo que desee{' '}
            <span className="text-primary">al gusto del cliente</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Color, tela, medidas y diseño. Lo hacemos a tu manera.
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-8 py-4 min-h-[44px] rounded-xl font-semibold transition-colors active:scale-[0.98] touch-manipulation shadow-lg shadow-primary/20"
            aria-label="Cotizar mi diseño por WhatsApp"
          >
            Cotizar mi diseño
          </button>
        </div>
      </div>
    </section>
  )
}
