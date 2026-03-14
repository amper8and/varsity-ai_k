'use client'

import { X, Download, GraduationCap } from 'lucide-react'

interface InstallPromptProps {
  onInstall: () => void
  onDismiss: () => void
}

export function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm p-6 animate-slide-up">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-unizik-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Install UNIZIK Connect</h3>
              <p className="text-sm text-gray-500">Add to your home screen</p>
            </div>
          </div>
          <button 
            onClick={onDismiss}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">
          Install this app on your device for quick and easy access. Experience the full power of ZIK AI and exclusive student deals!
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={onDismiss}
            className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl active:scale-95 transition-transform"
          >
            Not Now
          </button>
          <button
            onClick={onInstall}
            className="flex-1 py-3 bg-unizik-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Download className="w-4 h-4" />
            Install
          </button>
        </div>
      </div>
    </div>
  )
}
