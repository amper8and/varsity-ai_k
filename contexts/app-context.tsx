'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { IMAGES } from '@/lib/images'

// Types
export interface Deal {
  id: string
  partner: string
  title: string
  description: string
  category: string
  discount: string
  image: string
  partnerColor: string
  expiryDate: string
  code: string
  redeemed: boolean
  saved: boolean
}

export interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  text: string
  timestamp: Date
}

export interface UserProfile {
  name: string
  email: string
  course: string
  year: number
  avatar: string
  memberSince: string
  totalSaved: number
  dealsUsed: number
}

interface AppState {
  currentScreen: 'home' | 'deals' | 'ai' | 'services' | 'profile'
  setCurrentScreen: (screen: 'home' | 'deals' | 'ai' | 'services' | 'profile') => void
  user: UserProfile
  deals: Deal[]
  toggleSaveDeal: (dealId: string) => void
  redeemDeal: (dealId: string) => void
  getFilteredDeals: (category: string) => Deal[]
  messages: ChatMessage[]
  sendMessage: (text: string) => void
  isTyping: boolean
}

const defaultUser: UserProfile = {
  name: 'Chioma Okonkwo',
  email: 'chioma@unizik.edu.ng',
  course: 'Computer Science',
  year: 3,
  avatar: IMAGES.userAvatar,
  memberSince: '2024',
  totalSaved: 24500,
  dealsUsed: 12,
}

const defaultDeals: Deal[] = [
  {
    id: '1',
    partner: 'Chicken Republic',
    title: 'Buy 1 Get 1 Free',
    description: 'Every Wednesday',
    category: 'Food',
    discount: '50%',
    image: IMAGES.chickenRepublic,
    partnerColor: 'from-red-500 to-red-600',
    expiryDate: '2026-12-31',
    code: 'CR-BOGO-001',
    redeemed: false,
    saved: true,
  },
  {
    id: '2',
    partner: 'MTN',
    title: 'Double Data',
    description: '2x on all bundles',
    category: 'Mobile',
    discount: '100%',
    image: IMAGES.mtn,
    partnerColor: 'from-mtn-400 to-mtn-500',
    expiryDate: '2026-03-31',
    code: 'MTN-2X-001',
    redeemed: false,
    saved: false,
  },
  {
    id: '3',
    partner: 'Jumia',
    title: '20% Off Electronics',
    description: 'Laptops & phones',
    category: 'Tech',
    discount: '20%',
    image: IMAGES.jumia,
    partnerColor: 'from-orange-400 to-orange-500',
    expiryDate: '2026-06-30',
    code: 'JUM-20-001',
    redeemed: true,
    saved: false,
  },
  {
    id: '4',
    partner: 'Bolt',
    title: '₦200 Off Rides',
    description: 'First 5 rides',
    category: 'Transport',
    discount: '₦200',
    image: IMAGES.bolt,
    partnerColor: 'from-green-400 to-green-500',
    expiryDate: '2026-04-15',
    code: 'BOLT-200',
    redeemed: false,
    saved: false,
  },
  {
    id: '5',
    partner: 'Uber',
    title: '₦500 Off',
    description: 'Campus rides',
    category: 'Transport',
    discount: '₦500',
    image: IMAGES.uber,
    partnerColor: 'from-gray-700 to-black',
    expiryDate: '2026-03-20',
    code: 'UBER-500',
    redeemed: false,
    saved: true,
  },
  {
    id: '6',
    partner: 'Slot',
    title: '10% Off Laptops',
    description: 'Student pricing',
    category: 'Tech',
    discount: '10%',
    image: IMAGES.slot,
    partnerColor: 'from-blue-400 to-blue-500',
    expiryDate: '2026-05-30',
    code: 'SLOT-10',
    redeemed: false,
    saved: false,
  },
]

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'deals' | 'ai' | 'services' | 'profile'>('home')
  const [user] = useState<UserProfile>(defaultUser)
  const [deals, setDeals] = useState<Deal[]>(defaultDeals)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      text: "Hi! I'm ZIK AI 👋\n\nI can help you find deals, answer campus questions, or assist with your studies. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const toggleSaveDeal = (dealId: string) => {
    setDeals(prev => prev.map(deal => 
      deal.id === dealId ? { ...deal, saved: !deal.saved } : deal
    ))
  }

  const redeemDeal = (dealId: string) => {
    setDeals(prev => prev.map(deal => 
      deal.id === dealId ? { ...deal, redeemed: true } : deal
    ))
  }

  const getFilteredDeals = (category: string) => {
    if (category === 'All') return deals
    return deals.filter(deal => deal.category === category)
  }

  const generateAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('exam') || msg.includes('registration')) {
      return "Registration closes March 30th. 📅\n\nRegister through the student portal. Need help with the process?"
    }
    
    if (msg.includes('library')) {
      return "Library hours:\n\nMon-Fri: 8AM - 10PM\nSat: 9AM - 6PM\nSun: 2PM - 8PM\n\nAccess online resources through the portal. 📚"
    }
    
    if (msg.includes('hostel') || msg.includes('accommodation')) {
      return "Check the Deals section for verified hostels near campus with student discounts! 🏠"
    }
    
    if (msg.includes('deal') || msg.includes('discount')) {
      return "Great deals available! 🎉\n\n• Chicken Republic: BOGO Wednesdays\n• MTN: Double Data Week\n• Jumia: 20% off electronics\n\nBrowse all deals in the Deals tab!"
    }
    
    if (msg.includes('hello') || msg.includes('hi')) {
      return "Hello! 👋 How can I help you today?"
    }
    
    return "I can help with:\n\n• Campus info\n• Deals & discounts\n• Academic questions\n\nWhat would you like to know?"
  }

  const sendMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)
    
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: generateAIResponse(text),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1200)
  }

  const value: AppState = {
    currentScreen,
    setCurrentScreen,
    user,
    deals,
    toggleSaveDeal,
    redeemDeal,
    getFilteredDeals,
    messages,
    sendMessage,
    isTyping,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
