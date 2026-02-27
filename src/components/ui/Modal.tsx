'use client'

import { useEffect } from 'react'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-24 md:pb-4 opacity-100 transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-surface border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto scale-100 transition-transform duration-200 origin-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-secondary hover:text-text-primary touch-manipulation rounded-lg hover:bg-white/5"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
