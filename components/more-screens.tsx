'use client'

import { useState } from 'react'
import { AnimatedCard, DealCard, Badge, ProgressBar } from './ui-enhancements'

// Deals Screen with Filters
export function DealsScreen() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Food', 'Shopping', 'Transport', 'Tech']
  
  return (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 sticky top-0 z-10 border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display font-bold text-xl text-gray-900">Deals</h1>
          <button className="p-2 bg-gray-100 rounded-full">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
        
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search deals..."
            className="w-full h-11 bg-gray-100 rounded-full pl-11 pr-4 text-sm"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-unizik-500 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Banner */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-mtn-500 to-mtn-400 rounded-2xl p-4 text-white">
          <div className="flex items-start justify-between">
            <div>
              <Badge variant="warning" size="sm">MTN Exclusive</Badge>
              <h3 className="font-bold text-lg mt-2">Double Data Week!</h3>
              <p className="text-sm text-white/80 mt-1">Get 2x data on all bundles</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-3xl">📱</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Deals Grid */}
      <div className="px-4 mt-4 space-y-3">
        <h3 className="font-semibold text-gray-800 text-sm">Popular Near You</h3>
        <DealCard 
          partner="Chicken Republic"
          title="Buy 1 Get 1 Free on Wednesdays"
          category="Food"
          discount="50%"
          color="bg-red-500"
        />
        <DealCard 
          partner="Slot"
          title="Student Discount on Laptops"
          category="Tech"
          discount="10%"
          color="bg-blue-500"
        />
        <DealCard 
          partner="Bolt"
          title="₦200 off 5 rides"
          category="Transport"
          discount="₦200"
          color="bg-green-500"
        />
      </div>
    </div>
  )
}

// Profile Screen
export function ProfileScreen() {
  const [showSettings, setShowSettings] = useState(false)
  
  const menuItems = [
    { icon: 'heart', label: 'Saved Deals', count: 12 },
    { icon: 'ticket', label: 'My Redemptions', count: 5 },
    { icon: 'bell', label: 'Notifications', badge: true },
    { icon: 'credit-card', label: 'Payment Methods' },
    { icon: 'help', label: 'Help & Support' },
    { icon: 'settings', label: 'Settings' },
  ]
  
  return (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header Card */}
      <div className="bg-unizik-500 px-4 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl">
            👩‍🎓
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-xl text-white">Chioma Okonkwo</h1>
            <p className="text-white/70 text-sm">Computer Science • Year 3</p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="warning" size="sm">Gold Member</Badge>
              <span className="text-white/60 text-xs">Since 2024</span>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="flex justify-around mt-6 pt-4 border-t border-white/20">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">₦24K</p>
            <p className="text-white/60 text-xs">Saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">47</p>
            <p className="text-white/60 text-xs">Deals Used</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-white/60 text-xs">Streak Days</p>
          </div>
        </div>
      </div>
      
      {/* Digital ID Card */}
      <div className="px-4 -mt-3">
        <AnimatedCard className="p-4 bg-gradient-to-br from-gold-400 to-gold-500 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gold-100 text-xs font-medium">UNIZIK CONNECT ID</p>
              <p className="font-bold text-lg mt-1">UNZ-2024-78432</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-xs text-gold-100">Valid until: September 2026</p>
          </div>
        </AnimatedCard>
      </div>
      
      {/* Menu */}
      <div className="px-4 mt-4 space-y-2">
        {menuItems.map((item, idx) => (
          <AnimatedCard key={idx} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-unizik-100 rounded-xl flex items-center justify-center text-unizik-500">
                <MenuIcon name={item.icon} />
              </div>
              <span className="font-medium text-gray-800">{item.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {item.count && (
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
              {item.badge && (
                <span className="w-2 h-2 bg-red-500 rounded-full" />
              )}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}

// Services Screen
export function ServicesScreen() {
  const services = [
    { icon: '🏠', label: 'Accommodation', color: 'bg-blue-100 text-blue-600' },
    { icon: '🚌', label: 'Transport', color: 'bg-green-100 text-green-600' },
    { icon: '📚', label: 'Library', color: 'bg-amber-100 text-amber-600' },
    { icon: '🍽️', label: 'Cafeteria', color: 'bg-red-100 text-red-600' },
    { icon: '🏥', label: 'Health Center', color: 'bg-rose-100 text-rose-600' },
    { icon: '💼', label: 'Career Center', color: 'bg-purple-100 text-purple-600' },
    { icon: '🏦', label: 'Bursary', color: 'bg-emerald-100 text-emerald-600' },
    { icon: '📋', label: 'Records', color: 'bg-gray-100 text-gray-600' },
  ]
  
  return (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Header */}
      <div className="bg-unizik-500 px-4 py-6">
        <h1 className="font-display font-bold text-xl text-white">Campus Services</h1>
        <p className="text-white/70 text-sm mt-1">Everything you need on campus</p>
      </div>
      
      {/* Services Grid */}
      <div className="px-4 mt-4">
        <div className="grid grid-cols-4 gap-3">
          {services.map((service, idx) => (
            <button key={idx} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-2xl`}>
                {service.icon}
              </div>
              <span className="text-[10px] font-medium text-gray-600 text-center">{service.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="px-4 mt-6">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Quick Links</h3>
        <div className="space-y-2">
          <AnimatedCard className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center text-xl">
                📅
              </div>
              <div>
                <p className="font-medium text-gray-800">Academic Calendar</p>
                <p className="text-xs text-gray-500">2026/2027 Session</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </AnimatedCard>
          
          <AnimatedCard className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mtn-100 rounded-xl flex items-center justify-center text-xl">
                🗺️
              </div>
              <div>
                <p className="font-medium text-gray-800">Campus Map</p>
                <p className="text-xs text-gray-500">Find your way around</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </AnimatedCard>
          
          <AnimatedCard className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-unizik-100 rounded-xl flex items-center justify-center text-xl">
                🚨
              </div>
              <div>
                <p className="font-medium text-gray-800">Emergency</p>
                <p className="text-xs text-gray-500">Security & Medical</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </AnimatedCard>
        </div>
      </div>
      
      {/* Events Preview */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 text-sm">Upcoming Events</h3>
          <button className="text-unizik-500 text-xs">View all</button>
        </div>
        <AnimatedCard className="p-4">
          <div className="flex gap-3">
            <div className="w-14 h-14 bg-unizik-500 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
              <span className="text-xs font-medium">MAR</span>
              <span className="text-lg font-bold">25</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 text-sm">Faculty of Engineering Week</h4>
              <p className="text-xs text-gray-500 mt-1">📍 Engineering Complex • 10:00 AM</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white" />
                  <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white" />
                  <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white" />
                </div>
                <span className="text-[10px] text-gray-500">+45 attending</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  )
}

// Helper Components
function MenuIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    heart: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    ticket: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>,
    bell: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    'credit-card': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    help: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    settings: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  }
  
  return icons[name] || null
}
