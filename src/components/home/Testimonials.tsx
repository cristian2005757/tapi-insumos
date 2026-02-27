'use client'

import { testimonials } from '@/data/testimonials'
import { useReveal } from '@/hooks/useReveal'

export function Testimonials() {
  const { ref, isVisible } = useReveal(0.1)

  const items = testimonials.slice(0, 3)

  return (
    <section
      ref={ref}
      className="py-20 px-4"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto">
        <h2
          id="testimonials-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t, i) => (
            <blockquote
              key={t.id}
              className={`p-6 bg-surface rounded-2xl border border-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="flex gap-1 mb-3" aria-hidden>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-text-primary mb-4">&quot;{t.text}&quot;</p>
              <footer className="text-sm">
                <span className="font-semibold">{t.name} {t.lastName}</span>
                <span className="text-text-secondary"> · {t.city}</span>
                <span className="text-text-secondary"> · {t.product}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
