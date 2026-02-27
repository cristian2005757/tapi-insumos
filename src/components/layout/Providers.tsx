'use client'

import { QuoteProvider } from '@/contexts/QuoteContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <QuoteProvider>{children}</QuoteProvider>
}
