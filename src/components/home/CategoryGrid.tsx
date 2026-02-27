'use client'

import Link from 'next/link'
import { categories } from '@/data/categories'
import { useReveal } from '@/hooks/useReveal'

export function CategoryGrid() {
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section
      ref={ref}
      id="categorias"
      className="py-20 px-4 scroll-mt-20"
      aria-labelledby="category-title"
    >
      <div className="container mx-auto">
        <h2
          id="category-title"
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Explora por categoría
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/catalogo?categoria=${cat.id}`}
              className={`group block p-4 sm:p-6 rounded-2xl border border-white/10 bg-surface hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 active:scale-[0.98] touch-manipulation ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${100 + i * 50}ms` }}
            >
              <div className="aspect-square rounded-xl bg-white/5 mb-4 flex items-center justify-center text-4xl group-hover:bg-primary/10 transition-colors">
                {cat.id === 'camas' && '🛏️'}
                {cat.id === 'cabeceros' && '🪑'}
                {cat.id === 'salas' && '🛋️'}
                {cat.id === 'mesitas' && '🪴'}
                {cat.id === 'comedores' && '🍽️'}
                {cat.id === 'promos' && '🎉'}
              </div>
              <h3 className="font-semibold text-center">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
