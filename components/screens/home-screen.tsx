'use client'

import { useApp } from '@/contexts/app-context'
import { IMAGES } from '@/lib/images'
import { NextClassCard } from '@/components/next-class-card'
import { Search, Bell, Heart, BookOpen, Home, Coffee, Stethoscope, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HomeScreen() {
  const { user, deals, toggleSaveDeal, setCurrentScreen } = useApp()
  
  const featuredDeals = deals.slice(0, 3)
  const savedCount = deals.filter(d => d.saved).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Image Background */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.campus} 
            alt="Campus" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-gray-50" />
        </div>
        
        <div className="relative px-5 pt-12 pb-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <div>
                <p className="text-white/80 text-xs">Good morning</p>
                <p className="text-white font-semibold">{user.name.split(' ')[0]}</p>
              </div>
            </div>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Next Class Reminder */}
          <div className="mb-4">
            <NextClassCard onClick={() => setCurrentScreen('services')} />
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search deals..."
              className="w-full h-12 bg-white rounded-2xl pl-12 pr-4 text-sm shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Quick Actions - Minimal */}
      <div className="px-5 -mt-2">
        <div className="flex gap-3">
          <QuickAction 
            image={IMAGES.food}
            label="Food"
            onClick={() => setCurrentScreen('deals')}
          />
          <QuickAction 
            image={IMAGES.shopping}
            label="Shop"
            onClick={() => setCurrentScreen('deals')}
          />
          <QuickAction 
            image={IMAGES.transport}
            label="Ride"
            onClick={() => setCurrentScreen('deals')}
          />
          <QuickAction 
            image={IMAGES.tech}
            label="Tech"
            onClick={() => setCurrentScreen('deals')}
          />
        </div>
      </div>
      
      {/* Campus Guide */}
      <div className="px-5 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Campus Guide</h3>
          <button 
            onClick={() => setCurrentScreen('services')}
            className="text-unizik-500 text-sm flex items-center gap-1"
          >
            View all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <CampusCard 
            image={IMAGES.library}
            icon={BookOpen}
            label="Library"
            subtitle="Study & Research"
            onClick={() => setCurrentScreen('services')}
          />
          <CampusCard 
            image={IMAGES.hostel}
            icon={Home}
            label="Housing"
            subtitle="Accommodation"
            onClick={() => setCurrentScreen('services')}
          />
          <CampusCard 
            image={IMAGES.cafeteria}
            icon={Coffee}
            label="Dining"
            subtitle="Food & Drinks"
            onClick={() => setCurrentScreen('services')}
          />
          <CampusCard 
            image={IMAGES.campus}
            icon={Stethoscope}
            label="Health"
            subtitle="Medical Center"
            onClick={() => setCurrentScreen('services')}
          />
        </div>
      </div>
      
      {/* Featured Banner - Large Image */}
      <div className="px-5 mt-5">
        <div 
          onClick={() => setCurrentScreen('deals')}
          className="relative h-36 rounded-2xl overflow-hidden cursor-pointer"
        >
          <img 
            src={IMAGES.mtnBanner} 
            alt="MTN Deal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mtn-500/90 to-transparent" />
          <div className="absolute inset-0 p-5 flex flex-col justify-center">
            <span className="text-white/80 text-xs font-medium">Featured</span>
            <h3 className="text-white font-bold text-xl mt-1">Double Data Week</h3>
            <p className="text-white/80 text-sm mt-1">2x data on all bundles</p>
          </div>
        </div>
      </div>
      
      {/* Featured Deals - Horizontal Scroll with Images */}
      <div className="mt-6">
        <div className="px-5 flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Featured</h3>
          <button 
            onClick={() => setCurrentScreen('deals')}
            className="text-unizik-500 text-sm"
          >
            See all
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 hide-scrollbar">
          {featuredDeals.map((deal) => (
            <div
              key={deal.id}
              onClick={() => setCurrentScreen('deals')}
              className="min-w-[200px] bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative h-28">
                <img 
                  src={deal.image} 
                  alt={deal.partner}
                  className="w-full h-full object-cover"
                />
                <div className={cn(
                  "absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold text-white",
                  "bg-gradient-to-r",
                  deal.partnerColor
                )}>
                  {deal.discount}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleSaveDeal(deal.id)
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center"
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
                <p className="text-xs text-gray-500">{deal.partner}</p>
                <p className="font-semibold text-gray-800 text-sm mt-0.5">{deal.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Saved Deals Preview */}
      {savedCount > 0 && (
        <div className="px-5 mt-2">
          <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
            <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{savedCount} saved deals</p>
              <p className="text-sm text-gray-500">Ready to redeem</p>
            </div>
            <button 
              onClick={() => setCurrentScreen('deals')}
              className="text-unizik-500 text-sm font-medium"
            >
              View
            </button>
          </div>
        </div>
      )}
      
      {/* Your Savings */}
      <div className="px-5 mt-5 pb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src={IMAGES.campus} 
            alt="Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-unizik-500/90" />
          <div className="relative p-5">
            <p className="text-white/70 text-sm">Your savings</p>
            <p className="text-white text-3xl font-bold mt-1">₦{user.totalSaved.toLocaleString()}</p>
            <div className="flex gap-6 mt-4">
              <div>
                <p className="text-white text-xl font-semibold">{user.dealsUsed}</p>
                <p className="text-white/60 text-xs">Deals used</p>
              </div>
              <div>
                <p className="text-white text-xl font-semibold">{savedCount}</p>
                <p className="text-white/60 text-xs">Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CampusCard({ image, icon: Icon, label, subtitle, onClick }: { 
  image: string
  icon: typeof BookOpen
  label: string
  subtitle: string
  onClick: () => void 
}) {
  return (
    <button onClick={onClick} className="relative h-28 rounded-2xl overflow-hidden">
      <img src={image} alt={label} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute top-3 left-3">
        <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3">
        <p className="text-white font-semibold text-sm">{label}</p>
        <p className="text-white/70 text-xs">{subtitle}</p>
      </div>
    </button>
  )
}

function QuickAction({ image, label, onClick }: { image: string; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex-1">
      <div className="relative h-16 rounded-xl overflow-hidden">
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <span className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">
          {label}
        </span>
      </div>
    </button>
  )
}
