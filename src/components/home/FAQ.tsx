'use client'

import { useState } from 'react'
import { faqs } from '@/data/faq'
import { useReveal } from '@/hooks/useReveal'

export function FAQ() {
  const { ref, isVisible } = useReveal(0.1)
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section
      ref={ref}
      id="faq"
      className="py-20 px-4 scroll-mt-20"
      aria-labelledby="faq-title"
    >
      <div className="container mx-auto max-w-2xl">
        <h2
          id="faq-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`bg-surface rounded-xl border border-white/10 overflow-hidden transition-all ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-text-primary"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`faq-${faq.id}`}
                role="region"
                aria-labelledby={`faq-btn-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-4 text-text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
