'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

// Animated Card with hover lift effect
interface AnimatedCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function AnimatedCard({ children, className, onClick }: AnimatedCardProps) {
  const [pressed, setPressed] = useState(false)
  
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm transition-all duration-200 ease-out cursor-pointer",
        "hover:shadow-lg hover:-translate-y-1",
        pressed && "scale-[0.98] shadow-md",
        className
      )}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
    >
      {children}
    </div>
  )
}

// Animated Button with press feedback
interface AnimatedButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function AnimatedButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  onClick,
  disabled
}: AnimatedButtonProps) {
  const [pressed, setPressed] = useState(false)
  
  const variants = {
    primary: "bg-unizik-500 text-white hover:bg-unizik-600 shadow-md hover:shadow-lg",
    secondary: "bg-white text-unizik-600 border-2 border-unizik-500 hover:bg-unizik-50",
    ghost: "bg-transparent text-unizik-600 hover:bg-unizik-50"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }
  
  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-all duration-150 ease-out",
        "flex items-center justify-center gap-2",
        "active:scale-[0.97]",
        variants[variant],
        sizes[size],
        pressed && "scale-[0.97]",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Skeleton Loading Component
interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded-lg",
        className
      )}
    />
  )
}

// Deal Card with Save Animation
interface DealCardProps {
  partner: string
  title: string
  category: string
  discount: string
  color: string
  imageUrl?: string
}

export function DealCard({ partner, title, category, discount, color, imageUrl }: DealCardProps) {
  const [saved, setSaved] = useState(false)
  const [animating, setAnimating] = useState(false)
  
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    setAnimating(true)
    setSaved(!saved)
    setTimeout(() => setAnimating(false), 300)
  }
  
  return (
    <AnimatedCard className="min-w-[160px] overflow-hidden">
      <div className={`h-20 ${color} relative flex items-center justify-center`}>
        {imageUrl ? (
          <img src={imageUrl} alt={partner} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white font-bold text-2xl">{partner[0]}</span>
        )}
        
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-white/90 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
          {discount} OFF
        </span>
        
        {/* Save Button */}
        <button
          onClick={handleSave}
          className={cn(
            "absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            "bg-white/90 hover:bg-white shadow-sm",
            animating && "scale-125",
            saved ? "text-red-500" : "text-gray-400"
          )}
        >
          <svg 
            className="w-4 h-4 transition-transform duration-300" 
            fill={saved ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-3">
        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">{partner}</p>
        <p className="text-sm font-semibold text-gray-800 leading-tight mt-0.5">{title}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{category}</span>
          <span className="text-[10px] text-unizik-500 font-medium">View →</span>
        </div>
      </div>
    </AnimatedCard>
  )
}

// Toast Notification
interface ToastProps {
  message: string
  type?: 'success' | 'error' | 'info'
  onClose?: () => void
}

export function Toast({ message, type = 'info', onClose }: ToastProps) {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-unizik-500'
  }
  
  return (
    <div className={cn(
      "fixed bottom-24 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg",
      "text-white text-sm font-medium animate-slide-up",
      "flex items-center gap-2 z-50",
      colors[type]
    )}>
      {type === 'success' && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )}
      {message}
    </div>
  )
}

// Empty State Component
interface EmptyStateProps {
  icon: ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-gray-400 scale-150">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4 max-w-[200px]">{description}</p>
      {actionLabel && onAction && (
        <AnimatedButton variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </AnimatedButton>
      )}
    </div>
  )
}

// Loading State for Lists
export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 flex gap-3">
          <Skeleton className="w-16 h-16 rounded-lg flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-20 h-3" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-16 h-3" />
          </div>
        </div>
      ))}
    </div>
  )
}

// Badge Component
interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'primary', size = 'sm' }: BadgeProps) {
  const variants = {
    primary: 'bg-unizik-100 text-unizik-600',
    secondary: 'bg-gray-100 text-gray-600',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-gold-100 text-gold-600'
  }
  
  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-3 py-1'
  }
  
  return (
    <span className={cn(
      "rounded-full font-medium",
      variants[variant],
      sizes[size]
    )}>
      {children}
    </span>
  )
}

// Progress Bar
interface ProgressBarProps {
  progress: number
  className?: string
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div className={cn("w-full h-2 bg-gray-200 rounded-full overflow-hidden", className)}>
      <div 
        className="h-full bg-unizik-500 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  )
}
