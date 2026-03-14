'use client'

import { useEffect, useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { HomeScreen } from '@/components/screens/home-screen'
import { DealsScreen } from '@/components/screens/deals-screen'
import { AIScreen } from '@/components/screens/ai-screen'
import { ServicesScreen } from '@/components/screens/services-screen'
import { ProfileScreen } from '@/components/screens/profile-screen'
import { BottomNav } from '@/components/navigation/bottom-nav'
import { InstallPrompt } from '@/components/install-prompt'
import { SplashScreen } from '@/components/splash-screen'

export default function App() {
  const { currentScreen, setCurrentScreen, showInstallPrompt, setShowInstallPrompt, isInstalled } = useApp()
  const [showSplash, setShowSplash] = useState(true)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  // Handle PWA install prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      if (!isInstalled) {
        setShowInstallPrompt(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [isInstalled, setShowInstallPrompt])

  // Hide splash after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setShowInstallPrompt(false)
      }
    }
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />
      case 'deals':
        return <DealsScreen />
      case 'ai':
        return <AIScreen />
      case 'services':
        return <ServicesScreen />
      case 'profile':
        return <ProfileScreen />
      default:
        return <HomeScreen />
    }
  }

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <main className="relative min-h-screen bg-gray-50 pb-20">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      {showInstallPrompt && (
        <InstallPrompt 
          onInstall={handleInstall} 
          onDismiss={() => setShowInstallPrompt(false)} 
        />
      )}
    </main>
  )
}
