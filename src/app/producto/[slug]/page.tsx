import Link from 'next/link'
import { ProductGallery } from '@/components/product/ProductGallery'
import { products } from '@/data/products'
import { site } from '@/data/site'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  return {
    title: product ? `${product.name} | ${site.name}` : `Producto | ${site.name}`,
    description: product?.description ?? 'Detalle del producto',
  }
}

export default async function ProductoPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p className="text-text-secondary mb-6">El producto que buscas no existe o fue eliminado.</p>
        <Link href="/catalogo" className="text-primary hover:text-primary-hover font-medium">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-24 md:pb-16">
      <ProductGallery product={product} />
    </div>
  )
}
