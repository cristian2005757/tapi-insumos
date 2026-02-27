'use client'

import { useSearchParams } from 'next/navigation'
import { ProductCard } from './ProductCard'
import { products } from '@/data/products'
import { useFilters } from '@/lib/filters'

export function ProductGrid() {
  const searchParams = useSearchParams()
  const search = searchParams.get('buscar') ?? ''
  const category = searchParams.get('categoria') ?? ''
  const { filteredProducts } = useFilters(products, { search, category })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
