'use client'

import { useReveal } from '@/hooks/useReveal'

const steps = [
  {
    title: 'Elige tu modelo',
    description: 'Explora nuestro catálogo y selecciona el mueble que más te guste.',
  },
  {
    title: 'Personaliza',
    description: 'Color, tela y medidas. Te asesoramos según tu espacio.',
  },
  {
    title: 'Entregamos e instalamos',
    description: 'Llevamos tu pedido hasta tu hogar e instalamos sin costo adicional.',
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      className="py-20 px-4"
      aria-labelledby="how-title"
    >
      <div className="container mx-auto">
        <h2
          id="how-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Así de fácil es comprar con nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + i * 150}ms` }}
            >
              <div
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl"
                aria-hidden
              >
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
