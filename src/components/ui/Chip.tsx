interface ChipProps {
  children: React.ReactNode
  variant?: 'default' | 'primary'
  className?: string
}

export function Chip({ children, variant = 'default', className = '' }: ChipProps) {
  const variants = {
    default: 'bg-surface border border-white/10 text-text-secondary',
    primary: 'bg-primary/10 text-primary',
  }
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
