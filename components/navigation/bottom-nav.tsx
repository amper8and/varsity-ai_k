'use client'

import { Home, Tag, Building2, User } from 'lucide-react'
import { cn } from '@/lib/utils'

type ScreenType = 'home' | 'deals' | 'ai' | 'services' | 'profile'

interface BottomNavProps {
  currentScreen: ScreenType
  onNavigate: (screen: ScreenType) => void
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems: { id: ScreenType; icon: typeof Home }[] = [
    { id: 'home', icon: Home },
    { id: 'services', icon: Building2 },
    { id: 'deals', icon: Tag },
    { id: 'profile', icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 relative">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id
          const Icon = item.icon
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex-1 h-full flex items-center justify-center"
            >
              <Icon 
                className={cn(
                  "w-6 h-6 transition-colors",
                  isActive ? "text-unizik-500" : "text-gray-400"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
            </button>
          )
        })}
        
        {/* Center AI Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5">
          <button
            onClick={() => onNavigate('ai')}
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors",
              currentScreen === 'ai' 
                ? "bg-[#D35400]" 
                : "bg-[#E67E22]"
            )}
          >
            <span className="text-white font-bold text-lg">AI</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
