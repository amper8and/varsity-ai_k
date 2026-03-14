'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  children: ReactNode
  className?: string
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn(
      "relative mx-auto",
      "w-[280px] h-[580px]",
      "bg-black rounded-[40px] p-2",
      "shadow-2xl shadow-black/30",
      className
    )}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
      
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
        {/* Status Bar */}
        <div className="h-10 bg-unizik-500 flex items-center justify-between px-6 pt-2">
          <span className="text-white text-xs font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="absolute inset-0.5 bg-white rounded-sm" style={{ width: '70%' }} />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="h-[calc(100%-80px)] overflow-y-auto overflow-x-hidden">
          {children}
        </div>
        
        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around px-2">
          <NavIcon icon="home" label="Home" active />
          <NavIcon icon="tag" label="Deals" />
          <div className="relative -top-5">
            <div className="w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center shadow-lg shadow-gold-400/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <NavIcon icon="building" label="Services" />
          <NavIcon icon="user" label="Profile" />
        </div>
      </div>
    </div>
  )
}

function NavIcon({ icon, label, active }: { icon: string; label: string; active?: boolean }) {
  const icons: Record<string, JSX.Element> = {
    home: (
      <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    tag: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    building: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    user: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  }

  return (
    <button className={`flex flex-col items-center gap-1 ${active ? 'text-unizik-500' : 'text-gray-400'}`}>
      {icons[icon]}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  )
}
