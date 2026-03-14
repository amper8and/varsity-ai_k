'use client'

import { GraduationCap } from 'lucide-react'

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-unizik-500 flex flex-col items-center justify-center z-50">
      <div className="animate-float">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
          <GraduationCap className="w-14 h-14 text-unizik-500" />
        </div>
      </div>
      <h1 className="mt-6 text-2xl font-display font-bold text-white">UNIZIK Connect</h1>
      <p className="mt-2 text-white/70 text-sm">Powered by MTN + AIM</p>
      <div className="mt-8 flex gap-1">
        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}
