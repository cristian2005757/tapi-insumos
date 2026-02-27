import { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://tapinsumos.com'
  const productUrls = products.map((p) => ({
    url: `${base}/producto/${p.slug}`,
    lastModified: new Date(),
  }))
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/catalogo`, lastModified: new Date() },
    ...productUrls,
  ]
}
