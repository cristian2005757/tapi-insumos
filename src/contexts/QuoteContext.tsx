'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { Product } from '@/types/product'
import type { QuoteItem } from '@/types/product'

const STORAGE_KEY = 'tapinsumos-quote'

interface QuoteContextValue {
  items: QuoteItem[]
  addItem: (product: Product, options?: Partial<QuoteItem>) => void
  removeItem: (id: string) => void
  clear: () => void
}

const QuoteContext = createContext<QuoteContextValue | null>(null)

function loadFromStorage(): QuoteItem[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveToStorage(items: QuoteItem[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([])

  useEffect(() => {
    setItems(loadFromStorage())
  }, [])

  useEffect(() => {
    if (items.length > 0) saveToStorage(items)
  }, [items])

  const addItem = useCallback(
    (product: Product, options?: Partial<QuoteItem>) => {
      const item: QuoteItem = {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        quantity: 1,
        ...options,
      }
      setItems((prev) => [...prev, item])
    },
    []
  )

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  return (
    <QuoteContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </QuoteContext.Provider>
  )
}

const emptyQuote: QuoteContextValue = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  return ctx ?? emptyQuote
}
