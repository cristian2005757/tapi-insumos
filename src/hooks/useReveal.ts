'use client'

import { useEffect, useRef, useState } from 'react'

export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      {
        threshold,
        // En móviles el observer a veces no dispara; rootMargin hace que se active antes
        rootMargin: '0px 0px 150px 0px',
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
