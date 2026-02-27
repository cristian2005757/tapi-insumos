import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const base = 'font-semibold rounded-lg transition-colors disabled:opacity-50'
    const variants = {
      primary: 'bg-primary text-[#0B0F14] hover:bg-primary-hover',
      secondary: 'bg-surface border border-white/10 text-text-primary hover:border-primary/30',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-[#0B0F14]',
    }
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
