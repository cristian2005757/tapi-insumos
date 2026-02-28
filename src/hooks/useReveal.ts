'use client'

import { useEffect, useRef, useState } from 'react'

interface UseRevealOptions {
  threshold?: number
  /** En móvil (≤768px) mostrar contenido de inmediato, sin esperar al observer */
  instantOnMobile?: boolean
}

export function useReveal(thresholdOrOptions: number | UseRevealOptions = 0.1) {
  const opts = typeof thresholdOrOptions === 'number'
    ? { threshold: thresholdOrOptions, instantOnMobile: false }
    : { threshold: 0.1, instantOnMobile: false, ...thresholdOrOptions }
  const { threshold, instantOnMobile } = opts

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // En móvil, mostrar de inmediato para evitar espacio vacío
    if (instantOnMobile && typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      {
        threshold,
        rootMargin: '0px 0px 150px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, instantOnMobile])

  return { ref, isVisible }
}
