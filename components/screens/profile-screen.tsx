'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { 
  Heart, 
  Ticket, 
  Bell, 
  CreditCard, 
  HelpCircle, 
  Settings, 
  ChevronRight,
  Crown,
  LogOut,
  Edit3,
  Star,
  TrendingUp,
  Award
} from 'lucide-react'
import { cn } from '@/lib/utils'

const MENU_ITEMS = [
  { id: 'saved', icon: Heart, label: 'Saved Deals', color: 'bg-rose-100 text-rose-600' },
  { id: 'redemptions', icon: Ticket, label: 'My Redemptions', color: 'bg-unizik-100 text-unizik-600' },
  { id: 'notifications', icon: Bell, label: 'Notifications', color: 'bg-mtn-100 text-mtn-600', badge: true },
  { id: 'payment', icon: CreditCard, label: 'Payment Methods', color: 'bg-gold-100 text-gold-600' },
  { id: 'help', icon: HelpCircle, label: 'Help & Support', color: 'bg-purple-100 text-purple-600' },
  { id: 'settings', icon: Settings, label: 'Settings', color: 'bg-gray-100 text-gray-600' },
]

const ACHIEVEMENTS = [
  { id: 'saver', icon: '💰', label: 'Money Saver', description: 'Saved over ₦20,000', unlocked: true },
  { id: 'streak', icon: '🔥', label: 'On Fire', description: '12 day streak', unlocked: true },
  { id: 'explorer', icon: '🎯', label: 'Deal Explorer', description: 'Used 10+ deals', unlocked: true },
  { id: 'vip', icon: '👑', label: 'VIP Member', description: 'Gold status achieved', unlocked: true },
]

export function ProfileScreen() {
  const { user, deals, notifications, unreadCount, markAllRead, setCurrentScreen } = useApp()
  const [showID, setShowID] = useState(false)
  const [copiedID, setCopiedID] = useState(false)

  const savedDealsCount = deals.filter(d => d.saved).length
  const redeemedDealsCount = deals.filter(d => d.redeemed).length

  const copyID = () => {
    navigator.clipboard.writeText(user.matricNumber)
    setCopiedID(true)
    setTimeout(() => setCopiedID(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header Card */}
      <div className="bg-unizik-500 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl border-4 border-white/20">
              👩‍🎓
            </div>
            {user.isGoldMember && (
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center border-2 border-unizik-500">
                <Crown className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-xl text-white">{user.name}</h1>
            <p className="text-white/70 text-sm">{user.course} • Year {user.year}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 bg-gold-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                <Crown className="w-3 h-3" />
                Gold Member
              </span>
              <span className="text-white/60 text-xs">Since {user.memberSince}</span>
            </div>
          </div>
          <button className="p-2 bg-white/10 rounded-full active:bg-white/20 transition-colors">
            <Edit3 className="w-5 h-5 text-white" />
          </button>
        </div>
        
        {/* Stats Row */}
        <div className="flex justify-around mt-6 pt-4 border-t border-white/20">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">₦{user.totalSaved.toLocaleString()}</p>
            <p className="text-white/60 text-xs">Total Saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{user.dealsUsed}</p>
            <p className="text-white/60 text-xs">Deals Used</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{user.streakDays}</p>
            <p className="text-white/60 text-xs">Day Streak</p>
          </div>
        </div>
      </div>
      
      {/* Digital ID Card */}
      <div className="px-4 -mt-4">
        <div 
          onClick={() => setShowID(!showID)}
          className={cn(
            "bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl p-4 text-white shadow-lg cursor-pointer",
            "active:scale-[0.98] transition-transform"
          )}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gold-100 text-xs font-medium">UNIZIK CONNECT ID</p>
              <p className="font-mono text-lg mt-1 tracking-wider">{user.matricNumber}</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
            <div>
              <p className="text-xs text-gold-100">Valid until:</p>
              <p className="text-sm font-medium">September 2026</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                copyID()
              }}
              className="px-3 py-1.5 bg-white/20 rounded-full text-xs font-medium active:bg-white/30 transition-colors"
            >
              {copiedID ? 'Copied!' : 'Copy ID'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Achievements */}
      <div className="px-4 mt-5">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Achievements</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar">
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.id}
              className={cn(
                "min-w-[100px] bg-white rounded-xl p-3 text-center shadow-sm",
                achievement.unlocked ? "opacity-100" : "opacity-50"
              )}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <p className="font-medium text-gray-800 text-xs">{achievement.label}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Menu */}
      <div className="px-4 mt-5 space-y-2">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Menu</h3>
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon
          const isNotifications = item.id === 'notifications'
          
          return (
            <button
              key={item.id}
              onClick={() => {
                if (isNotifications && unreadCount > 0) {
                  markAllRead()
                }
              }}
              className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-800">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {isNotifications && unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
                {item.id === 'saved' && savedDealsCount > 0 && (
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {savedDealsCount}
                  </span>
                )}
                {item.id === 'redemptions' && redeemedDealsCount > 0 && (
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {redeemedDealsCount}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          )
        })}
      </div>
      
      {/* Sign Out */}
      <div className="px-4 mt-6">
        <button className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-medium flex items-center justify-center gap-2 active:bg-red-100 transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
      
      {/* Version */}
      <p className="text-center text-xs text-gray-400 mt-6">
        UNIZIK Connect v1.0.0
      </p>
    </div>
  )
}
