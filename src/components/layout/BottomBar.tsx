'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { openWhatsApp } from '@/lib/whatsapp'

export function BottomBar() {
  const [visible, setVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible || !scrolled) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface/95 backdrop-blur-lg border-t border-white/10 safe-area-pb"
      role="navigation"
      aria-label="Accesos rápidos"
    >
      <div className="flex">
        <Link
          href="/catalogo"
          className="flex-1 py-4 min-h-[48px] flex items-center justify-center font-medium text-text-secondary hover:text-primary touch-manipulation"
        >
          Catálogo
        </Link>
        <span className="w-px bg-white/10" aria-hidden />
        <button
          onClick={() => openWhatsApp()}
          className="flex-1 py-4 min-h-[48px] flex items-center justify-center font-medium text-primary touch-manipulation"
          aria-label="Cotizar por WhatsApp"
        >
          Cotizar
        </button>
      </div>
    </div>
  )
}
