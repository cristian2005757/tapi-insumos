interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-surface rounded border border-white/10 ${className}`}
      aria-hidden
    />
  )
}
