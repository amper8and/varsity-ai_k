'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { IMAGES } from '@/lib/images'
import { Heart, Ticket, Bell, ChevronRight, Crown, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const MENU_ITEMS = [
  { id: 'saved', icon: Heart, label: 'Saved', count: 0 },
  { id: 'redeemed', icon: Ticket, label: 'Redeemed', count: 0 },
  { id: 'notifications', icon: Bell, label: 'Notifications', badge: 0 },
]

export function ProfileScreen() {
  const { user, deals, setCurrentScreen } = useApp()
  const [showCopied, setShowCopied] = useState(false)
  
  const savedCount = deals.filter(d => d.saved).length
  const redeemedCount = deals.filter(d => d.redeemed).length

  const handleCopyID = () => {
    navigator.clipboard.writeText('UNZ-2024-78432')
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header Image */}
      <div className="relative h-56">
        <img 
          src={IMAGES.campus} 
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-gray-50" />
        
        {/* Profile Info */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-6">
          <div className="flex items-end gap-4">
            <div className="relative">
              <img 
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 rounded-2xl border-4 border-white object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1 pb-2">
              <h1 className="font-bold text-xl text-gray-800">{user.name}</h1>
              <p className="text-gray-500 text-sm">{user.course} • Year {user.year}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-5 flex justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">₦{user.totalSaved.toLocaleString()}</p>
            <p className="text-gray-500 text-sm">Saved</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{user.dealsUsed}</p>
            <p className="text-gray-500 text-sm">Deals</p>
          </div>
          <div className="w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">{savedCount}</p>
            <p className="text-gray-500 text-sm">Saved</p>
          </div>
        </div>
      </div>
      
      {/* Digital ID */}
      <div className="px-5 mt-4">
        <div 
          onClick={handleCopyID}
          className="relative rounded-2xl overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-500" />
          <div className="relative p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/70 text-xs">UNIZIK Connect ID</p>
                <p className="font-mono text-white text-xl mt-1">UNZ-2024-78432</p>
              </div>
              <Crown className="w-8 h-8 text-white/50" />
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center">
              <p className="text-white/70 text-xs">Gold Member</p>
              <span className={cn(
                "text-xs text-white transition-opacity",
                showCopied ? 'opacity-100' : 'opacity-0'
              )}>
                Copied!
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Menu */}
      <div className="px-5 mt-4 space-y-2">
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon
          const count = item.id === 'saved' ? savedCount : 
                       item.id === 'redeemed' ? redeemedCount : 0
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen('deals')}
              className="w-full bg-white rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {count > 0 && (
                  <span className="bg-unizik-100 text-unizik-600 text-sm font-medium px-3 py-1 rounded-full">
                    {count}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          )
        })}
        
        <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <span className="font-medium text-gray-800">Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  )
}
