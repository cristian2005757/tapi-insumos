'use client'

import { Modal } from '@/components/ui/Modal'
import { ProductGallery } from './ProductGallery'
import type { Product } from '@/types/product'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <Modal onClose={onClose}>
      <ProductGallery product={product} compact />
    </Modal>
  )
}
