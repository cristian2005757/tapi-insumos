'use client'

import { useMemo } from 'react'
import type { Product } from '@/types/product'

interface UseFiltersOptions {
  search?: string
  category?: string
}

export function useFilters(
  items: Product[],
  options: UseFiltersOptions = {}
) {
  const { search = '', category = '' } = options

  const filteredProducts = useMemo(() => {
    return items.filter((product) => {
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        (product.description?.toLowerCase().includes(search.toLowerCase()) ?? false)
      const matchesCategory =
        !category || product.categoryId === category
      return matchesSearch && matchesCategory
    })
  }, [items, search, category])

  return { filteredProducts }
}
