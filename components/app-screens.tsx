'use client'

import { useState } from 'react'

export function HomeScreen() {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-unizik-500 px-4 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between pt-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <p className="text-white/80 text-xs">Good morning,</p>
              <p className="text-white font-semibold text-sm">Chioma 👋</p>
            </div>
          </div>
          <button className="relative p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search deals, services..."
            className="w-full h-11 bg-white rounded-full pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-2xl shadow-sm p-4 grid grid-cols-4 gap-4">
          <QuickAction icon="tag" label="Deals" color="bg-rose-100 text-rose-600" />
          <QuickAction icon="robot" label="ZIK AI" color="bg-gold-100 text-gold-600" />
          <QuickAction icon="calendar" label="Events" color="bg-mtn-100 text-mtn-600" />
          <QuickAction icon="map" label="Campus" color="bg-unizik-100 text-unizik-600" />
        </div>
      </div>
      
      {/* Featured Deals */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 text-sm">Featured Deals</h3>
          <button className="text-unizik-500 text-xs font-medium">See all</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4">
          <DealCard 
            partner="Jumia"
            title="20% off Electronics"
            category="Shopping"
            discount="20%"
            color="bg-orange-500"
          />
          <DealCard 
            partner="Uber"
            title="₦500 off rides"
            category="Transport"
            discount="₦500"
            color="bg-black"
          />
          <DealCard 
            partner="MTN"
            title="Double Data"
            category="Mobile"
            discount="2x"
            color="bg-mtn-500"
          />
        </div>
      </div>
      
      {/* Categories */}
      <div className="px-4 mt-4">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <CategoryChip label="Food & Dining" />
          <CategoryChip label="Accommodation" />
          <CategoryChip label="Transport" />
          <CategoryChip label="Fashion" />
          <CategoryChip label="Electronics" />
        </div>
      </div>
      
      {/* Campus News */}
      <div className="px-4 mt-5 pb-20">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Campus News</h3>
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex gap-3">
            <div className="w-16 h-16 bg-unizik-100 rounded-lg flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 text-xs leading-tight">2026/2027 Registration Now Open</h4>
              <p className="text-gray-500 text-[10px] mt-1">All students are required to complete...</p>
              <p className="text-gray-400 text-[9px] mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AIScreen() {
  const [messages] = useState([
    { type: 'ai', text: 'Hi! I\'m ZIK AI. I can help you with:\n\n• Study questions\n• Campus information\n• Course recommendations\n• Career advice' },
    { type: 'user', text: 'When is the exam registration deadline?' },
    { type: 'ai', text: 'The exam registration deadline for the 2026/2027 session is March 30, 2026.\n\nYou can register through the student portal. Would you like me to guide you through the process?' },
  ])

  return (
    <div className="bg-gray-100 min-h-full flex flex-col">
      {/* Header */}
      <div className="bg-unizik-500 px-4 py-4 flex items-center gap-3">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gold-400 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">ZIK AI</p>
            <p className="text-white/70 text-[10px]">Always here to help</p>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'ai' && (
              <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <div className={`max-w-[75%] p-3 rounded-2xl text-xs whitespace-pre-line ${
              msg.type === 'user' 
                ? 'bg-unizik-500 text-white rounded-br-md' 
                : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-3 bg-white border-t">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <button className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm outline-none text-gray-700"
          />
          <button className="w-8 h-8 bg-unizik-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 mt-2 px-1">
          <SuggestionChip label="Past questions" />
          <SuggestionChip label="Course reg" />
          <SuggestionChip label="Hostel info" />
        </div>
      </div>
    </div>
  )
}

// Sub-components
function QuickAction({ icon, label, color }: { icon: string; label: string; color: string }) {
  const icons: Record<string, JSX.Element> = {
    tag: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
    robot: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    calendar: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    map: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  }

  return (
    <button className="flex flex-col items-center gap-1">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
        {icons[icon]}
      </div>
      <span className="text-[10px] font-medium text-gray-600">{label}</span>
    </button>
  )
}

function DealCard({ partner, title, category, discount, color }: { partner: string; title: string; category: string; discount: string; color: string }) {
  return (
    <div className="min-w-[140px] bg-white rounded-xl overflow-hidden shadow-sm">
      <div className={`h-16 ${color} flex items-center justify-center relative`}>
        <span className="text-white font-bold text-lg">{partner[0]}</span>
        <span className="absolute top-2 right-2 bg-white/90 text-gray-800 text-[9px] font-bold px-1.5 py-0.5 rounded">{discount}</span>
      </div>
      <div className="p-2">
        <p className="text-[10px] text-gray-500">{partner}</p>
        <p className="text-xs font-medium text-gray-800 leading-tight">{title}</p>
        <p className="text-[9px] text-gray-400 mt-1">{category}</p>
      </div>
    </div>
  )
}

function CategoryChip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 bg-unizik-100 text-unizik-600 text-[10px] font-medium rounded-full">
      {label}
    </span>
  )
}

function SuggestionChip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-full whitespace-nowrap">
      {label}
    </span>
  )
}
