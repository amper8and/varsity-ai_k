'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { Search, Bell, Heart, ChevronRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HomeScreen() {
  const { user, deals, toggleSaveDeal, setCurrentScreen, notifications, unreadCount } = useApp()
  const [greeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  })

  const featuredDeals = deals.slice(0, 3)
  const savedDealsCount = deals.filter(d => d.saved).length

  const quickActions = [
    { 
      id: 'deals', 
      label: 'Deals', 
      icon: 'tag', 
      color: 'bg-rose-100 text-rose-600',
      count: deals.filter(d => !d.redeemed).length
    },
    { 
      id: 'ai', 
      label: 'ZIK AI', 
      icon: 'robot', 
      color: 'bg-gold-100 text-gold-600',
      isNew: true
    },
    { 
      id: 'events', 
      label: 'Events', 
      icon: 'calendar', 
      color: 'bg-mtn-100 text-mtn-600' 
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: 'map', 
      color: 'bg-unizik-100 text-unizik-600' 
    },
  ]

  const categories = ['Food & Dining', 'Accommodation', 'Transport', 'Fashion', 'Electronics']

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <div className="bg-unizik-500 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              👩‍🎓
            </div>
            <div>
              <p className="text-white/80 text-xs">{greeting},</p>
              <p className="text-white font-semibold text-lg">{user.name.split(' ')[0]} 👋</p>
            </div>
          </div>
          <button 
            onClick={() => setCurrentScreen('profile')}
            className="relative p-2 rounded-full active:bg-white/10 transition-colors"
          >
            <Bell className="w-6 h-6 text-white" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-gold-400 rounded-full animate-pulse" />
            )}
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search deals, services..."
            className="w-full h-12 bg-white rounded-2xl pl-12 pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 grid grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => setCurrentScreen(action.id as any)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200",
                "group-active:scale-95",
                action.color
              )}>
                <QuickActionIcon name={action.icon} />
                {action.count && (
                  <span className="absolute -top-1 -right-1 bg-unizik-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {action.count}
                  </span>
                )}
                {action.isNew && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>
              <span className="text-[11px] font-medium text-gray-600">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Deals */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-semibold text-gray-800">Featured Deals</h3>
            <p className="text-xs text-gray-500">Exclusive savings for you</p>
          </div>
          <button 
            onClick={() => setCurrentScreen('deals')}
            className="text-unizik-500 text-sm font-medium flex items-center gap-1 active:opacity-70"
          >
            See all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar">
          {featuredDeals.map((deal) => (
            <div
              key={deal.id}
              onClick={() => setCurrentScreen('deals')}
              className="min-w-[160px] bg-white rounded-xl overflow-hidden shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <div className={`h-20 ${deal.color} relative flex items-center justify-center`}>
                <span className="text-white font-bold text-2xl">{deal.partner[0]}</span>
                <span className="absolute top-2 left-2 bg-white/90 text-gray-800 text-[10px] font-bold px-2 py-1 rounded-lg">
                  {deal.discount}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleSaveDeal(deal.id)
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center active:scale-90 transition-transform"
                >
                  <Heart 
                    className={cn(
                      "w-4 h-4 transition-colors",
                      deal.saved ? "fill-red-500 text-red-500" : "text-gray-400"
                    )} 
                  />
                </button>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-gray-500 font-medium">{deal.partner}</p>
                <p className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">{deal.title}</p>
                <p className="text-[10px] text-gray-400 mt-1">{deal.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Categories */}
      <div className="px-4 mt-4">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCurrentScreen('deals')}
              className="px-4 py-2 bg-unizik-100 text-unizik-600 text-xs font-medium rounded-full active:scale-95 transition-transform"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Your Savings Summary */}
      <div className="px-4 mt-5">
        <div className="bg-gradient-to-r from-unizik-500 to-unizik-600 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span className="font-semibold">Your Savings</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-3xl font-bold">₦{user.totalSaved.toLocaleString()}</p>
              <p className="text-unizik-100 text-sm">Total saved this year</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{user.dealsUsed}</p>
              <p className="text-unizik-100 text-sm">Deals used</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Notifications */}
      {notifications.slice(0, 2).map((notification) => (
        <div key={notification.id} className="px-4 mt-3">
          <div 
            onClick={() => setCurrentScreen('profile')}
            className={cn(
              "bg-white rounded-xl p-3 shadow-sm flex items-start gap-3 cursor-pointer",
              "active:scale-[0.98] transition-transform",
              !notification.read && "border-l-4 border-unizik-500"
            )}
          >
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
              notification.type === 'deal' ? 'bg-rose-100 text-rose-600' :
              notification.type === 'event' ? 'bg-mtn-100 text-mtn-600' :
              'bg-unizik-100 text-unizik-600'
            )}>
              <NotificationIcon type={notification.type} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800 text-sm">{notification.title}</h4>
              <p className="text-xs text-gray-500 line-clamp-2">{notification.message}</p>
              <p className="text-[10px] text-gray-400 mt-1">
                {new Date(notification.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {!notification.read && (
              <span className="w-2 h-2 bg-unizik-500 rounded-full flex-shrink-0 mt-1" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function QuickActionIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    tag: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    robot: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    calendar: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    map: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  }
  return icons[name] || null
}

function NotificationIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    deal: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    event: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    system: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  }
  return icons[type] || icons.system
}
