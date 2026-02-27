'use client'

import Link from 'next/link'
import { openWhatsApp } from '@/lib/whatsapp'
import { useReveal } from '@/hooks/useReveal'

export function CTAFinal() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="py-24 px-4"
      aria-labelledby="cta-final-title"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-surface border border-white/10 p-12 md:p-16 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
      >
        <h2
          id="cta-final-title"
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Cotiza hoy y agenda tu entrega
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Te respondemos rápido y te asesoramos según tu espacio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => openWhatsApp()}
            className="bg-primary hover:bg-primary-hover text-[#0B0F14] px-8 py-4 rounded-xl font-semibold transition-colors active:scale-[0.98]"
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </button>
          <Link
            href="/catalogo"
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold transition-colors inline-block"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  )
}
