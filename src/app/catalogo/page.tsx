import { Suspense } from 'react'
import { ProductGrid } from '@/components/product/ProductGrid'
import { site } from '@/data/site'

export const metadata = {
  title: 'Catálogo',
  description: `Explora nuestro catálogo de muebles. ${site.description}`,
}

export default function CatalogoPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-24 md:pb-16">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square bg-surface rounded-xl border border-white/10" />
          <div className="h-4 bg-surface rounded mt-4 w-3/4" />
          <div className="h-4 bg-surface rounded mt-2 w-1/2" />
        </div>
      ))}
    </div>
  )
}
