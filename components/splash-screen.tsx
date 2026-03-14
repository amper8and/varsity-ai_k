'use client'

import { IMAGES } from '@/lib/images'

export function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50">
      {/* Background Image */}
      <img 
        src={IMAGES.campus} 
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-unizik-500/90" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl animate-float">
          <span className="text-5xl font-bold text-unizik-500">Z</span>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-white">UNIZIK Connect</h1>
        <p className="mt-2 text-white/70 text-center leading-relaxed">
          Brought to you by<br />
          African Innovative Markets
        </p>
        
        <div className="mt-8 flex gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
