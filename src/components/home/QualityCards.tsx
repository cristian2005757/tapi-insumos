'use client'

import { useReveal } from '@/hooks/useReveal'

const cards = [
  { icon: '🔧', title: 'Estructura reforzada', desc: 'Soportes de alta resistencia.' },
  { icon: '🛏️', title: 'Espuma / acolchado premium', desc: 'Comodidad y durabilidad.' },
  { icon: '🧵', title: 'Tela resistente', desc: 'Acabados que perduran.' },
  { icon: '🛡️', title: 'Garantía', desc: 'Respaldamos nuestra calidad.' },
]

export function QualityCards() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      id="garantia"
      className="py-20 px-4 scroll-mt-20"
      aria-labelledby="quality-title"
    >
      <div className="container mx-auto">
        <h2
          id="quality-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Calidad que se nota
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/30 transition-all ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <span className="text-4xl block mb-3" aria-hidden>
                {card.icon}
              </span>
              <h3 className="font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-text-secondary">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
