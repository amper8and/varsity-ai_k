'use client'

import { useEffect, useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { HomeScreen } from '@/components/screens/home-screen'
import { DealsScreen } from '@/components/screens/deals-screen'
import { AIScreen } from '@/components/screens/ai-screen'
import { ServicesScreen } from '@/components/screens/services-screen'
import { ProfileScreen } from '@/components/screens/profile-screen'
import { BottomNav } from '@/components/navigation/bottom-nav'
import { SplashScreen } from '@/components/splash-screen'

export default function App() {
  const { currentScreen, setCurrentScreen } = useApp()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />
      case 'deals': return <DealsScreen />
      case 'ai': return <AIScreen />
      case 'services': return <ServicesScreen />
      case 'profile': return <ProfileScreen />
      default: return <HomeScreen />
    }
  }

  if (showSplash) return <SplashScreen />

  return (
    <main className="relative min-h-screen">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </main>
  )
}
