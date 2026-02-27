export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  price?: number
  image?: string
  images?: string[]
  categoryId: string
  bullets?: string[]
}

export interface ProductVariant {
  id: string
  name: string
  options?: VariantOption[]
}

export interface VariantOption {
  id: string
  label: string
  value: string
}

export interface QuoteItem {
  id: string
  productId: string
  productName: string
  productSlug: string
  measure?: string
  color?: string
  city?: string
  preferredDate?: string
  quantity: number
}
