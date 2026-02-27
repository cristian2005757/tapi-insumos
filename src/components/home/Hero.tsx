'use client'

import Link from 'next/link'
import { openWhatsApp } from '@/lib/whatsapp'
import { useReveal } from '@/hooks/useReveal'

const badges = [
  { icon: '🧵', text: 'Personalización (color / tela / medidas)' },
  { icon: '🚚', text: 'Entrega e instalación' },
  { icon: '🛡️', text: 'Garantía y calidad' },
]

export function Hero() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-20 overflow-hidden"
      aria-label="Bienvenida"
    >
      {/* Fondo hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(/images/hero-bg.png)',
        }}
        aria-hidden
      />

      <div
        className={`relative container mx-auto px-4 transition-all duration-700 delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mb-6 leading-tight">
          Muebles modernos que transforman tu hogar
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8">
          Camas, cabeceros y salas con acabados premium. Personaliza medidas y
          color. Entrega a tiempo.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => openWhatsApp()}
            className="bg-primary hover:bg-primary-hover active:scale-[0.98] text-[#0B0F14] px-8 py-4 min-h-[44px] rounded-xl font-semibold transition-all shadow-lg touch-manipulation"
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </button>
          <Link
            href="/catalogo"
            className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 min-h-[44px] rounded-xl font-semibold transition-colors active:scale-[0.98] touch-manipulation"
          >
            Ver catálogo
          </Link>
        </div>

        <div className="flex flex-wrap gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.text}
              className={`flex items-center gap-2 text-text-secondary transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <span className="text-2xl" aria-hidden>
                {badge.icon}
              </span>
              <span className="text-sm md:text-base">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
