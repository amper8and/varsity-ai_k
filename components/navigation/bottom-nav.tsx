'use client'

import { Home, Tag, Building2, User } from 'lucide-react'
import { cn } from '@/lib/utils'

type ScreenType = 'home' | 'deals' | 'ai' | 'services' | 'profile'

interface BottomNavProps {
  currentScreen: ScreenType
  onNavigate: (screen: ScreenType) => void
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems: { id: ScreenType; label: string; icon: typeof Home }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'deals', label: 'Deals', icon: Tag },
    { id: 'services', label: 'Services', icon: Building2 },
    { id: 'profile', label: 'Profile', icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 relative">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id
          const Icon = item.icon
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all duration-200",
                "touch-target active:scale-95"
              )}
            >
              <div className={cn(
                "relative transition-all duration-200",
                isActive ? "transform -translate-y-0.5" : ""
              )}>
                <Icon 
                  className={cn(
                    "w-6 h-6 transition-colors duration-200",
                    isActive ? "text-unizik-500" : "text-gray-400"
                  )} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-unizik-500 rounded-full" />
                )}
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors duration-200",
                isActive ? "text-unizik-500" : "text-gray-400"
              )}>
                {item.label}
              </span>
            </button>
          )
        })}
        
        {/* Center AI Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5">
          <button
            onClick={() => onNavigate('ai')}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
              "touch-target active:scale-95 hover:scale-105",
              currentScreen === 'ai' 
                ? "bg-gold-500 shadow-gold-500/40 scale-110" 
                : "bg-gold-400 shadow-gold-400/30"
            )}
          >
            <svg 
              className="w-7 h-7 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
