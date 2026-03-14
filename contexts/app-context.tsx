'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Types
export interface Deal {
  id: string
  partner: string
  title: string
  description: string
  category: string
  discount: string
  discountValue: number
  color: string
  imageUrl?: string
  expiryDate: string
  terms: string[]
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
  matricNumber: string
  memberSince: string
  totalSaved: number
  dealsUsed: number
  streakDays: number
  isGoldMember: boolean
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'deal' | 'system' | 'event'
  read: boolean
  timestamp: Date
}

interface AppState {
  // Navigation
  currentScreen: 'home' | 'deals' | 'ai' | 'services' | 'profile'
  setCurrentScreen: (screen: 'home' | 'deals' | 'ai' | 'services' | 'profile') => void
  
  // User
  user: UserProfile
  updateUser: (updates: Partial<UserProfile>) => void
  
  // Deals
  deals: Deal[]
  savedDeals: string[]
  redeemedDeals: string[]
  toggleSaveDeal: (dealId: string) => void
  redeemDeal: (dealId: string) => void
  getFilteredDeals: (category: string) => Deal[]
  
  // Chat
  messages: ChatMessage[]
  sendMessage: (text: string) => void
  isTyping: boolean
  
  // Notifications
  notifications: Notification[]
  unreadCount: number
  markNotificationRead: (id: string) => void
  markAllRead: () => void
  
  // UI State
  showInstallPrompt: boolean
  setShowInstallPrompt: (show: boolean) => void
  isInstalled: boolean
  
  // Search
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const defaultUser: UserProfile = {
  name: 'Chioma Okonkwo',
  email: 'chioma.okonkwo@unizik.edu.ng',
  course: 'Computer Science',
  year: 3,
  matricNumber: 'UNZ/2022/12345',
  memberSince: '2024',
  totalSaved: 24500,
  dealsUsed: 47,
  streakDays: 12,
  isGoldMember: true,
}

const defaultDeals: Deal[] = [
  {
    id: '1',
    partner: 'Chicken Republic',
    title: 'Buy 1 Get 1 Free on Wednesdays',
    description: 'Order any rice meal and get another one free every Wednesday',
    category: 'Food',
    discount: '50%',
    discountValue: 50,
    color: 'bg-red-500',
    expiryDate: '2026-12-31',
    terms: ['Valid on Wednesdays only', 'Rice meals only', 'One per customer'],
    code: 'UNZ-BOGO-001',
    redeemed: false,
    saved: false,
  },
  {
    id: '2',
    partner: 'MTN',
    title: 'Double Data Week',
    description: 'Get 2x data on all data bundles purchased through the app',
    category: 'Mobile',
    discount: '2x',
    discountValue: 100,
    color: 'bg-mtn-500',
    expiryDate: '2026-03-31',
    terms: ['Valid for all bundles', 'App purchase only', 'Weekly limit applies'],
    code: 'UNZ-MTN-2X',
    redeemed: false,
    saved: true,
  },
  {
    id: '3',
    partner: 'Jumia',
    title: '20% off Electronics',
    description: 'Student discount on laptops, phones, and accessories',
    category: 'Shopping',
    discount: '20%',
    discountValue: 20,
    color: 'bg-orange-500',
    expiryDate: '2026-06-30',
    terms: ['Max discount ₦10,000', 'Electronics only', 'Student verification required'],
    code: 'UNZ-JUM-20',
    redeemed: true,
    saved: false,
  },
  {
    id: '4',
    partner: 'Bolt',
    title: '₦200 off 5 rides',
    description: 'Save on your campus commute with discounted rides',
    category: 'Transport',
    discount: '₦200',
    discountValue: 200,
    color: 'bg-green-500',
    expiryDate: '2026-04-15',
    terms: ['First 5 rides only', 'Min fare ₦500', 'Awka area only'],
    code: 'UNZ-BOLT-200',
    redeemed: false,
    saved: false,
  },
  {
    id: '5',
    partner: 'Slot',
    title: 'Student Discount on Laptops',
    description: 'Special pricing on laptops for UNIZIK students',
    category: 'Tech',
    discount: '10%',
    discountValue: 10,
    color: 'bg-blue-500',
    expiryDate: '2026-05-30',
    terms: ['Student ID required', 'Selected models only', 'In-store only'],
    code: 'UNZ-SLOT-10',
    redeemed: false,
    saved: true,
  },
  {
    id: '6',
    partner: 'Uber',
    title: '₦500 off rides',
    description: 'Discounted rides for getting around campus and town',
    category: 'Transport',
    discount: '₦500',
    discountValue: 500,
    color: 'bg-black',
    expiryDate: '2026-03-20',
    terms: ['Min fare ₦800', 'Awka area only', 'Limited availability'],
    code: 'UNZ-UBER-500',
    redeemed: false,
    saved: false,
  },
]

const defaultNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Deal Available!',
    message: 'Chicken Republic is offering Buy 1 Get 1 Free on Wednesdays',
    type: 'deal',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
  },
  {
    id: '2',
    title: 'Registration Reminder',
    message: 'Course registration closes in 3 days. Have you registered?',
    type: 'system',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '3',
    title: 'Engineering Week',
    message: 'Faculty of Engineering Week starts next Monday. Don\'t miss it!',
    type: 'event',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
]

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  // Screen state
  const [currentScreen, setCurrentScreen] = useState<'home' | 'deals' | 'ai' | 'services' | 'profile'>('home')
  
  // User state
  const [user, setUser] = useState<UserProfile>(defaultUser)
  
  // Deals state
  const [deals, setDeals] = useState<Deal[]>(defaultDeals)
  
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      text: "Hi! I'm ZIK AI. I can help you with:\n\n• Study questions\n• Campus information\n• Course recommendations\n• Career advice\n\nWhat would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  
  // Notifications
  const [notifications, setNotifications] = useState<Notification[]>(defaultNotifications)
  
  // UI state
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('unizik-connect-data')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.user) setUser(data.user)
        if (data.deals) setDeals(data.deals)
        if (data.messages) {
          setMessages(data.messages.map((m: ChatMessage) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          })))
        }
        if (data.notifications) {
          setNotifications(data.notifications.map((n: Notification) => ({
            ...n,
            timestamp: new Date(n.timestamp)
          })))
        }
      } catch (e) {
        console.error('Failed to load saved data', e)
      }
    }
    
    // Check if installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }
  }, [])

  // Save to localStorage on changes
  useEffect(() => {
    const data = {
      user,
      deals,
      messages,
      notifications,
    }
    localStorage.setItem('unizik-connect-data', JSON.stringify(data))
  }, [user, deals, messages, notifications])

  // Update user
  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }))
  }

  // Toggle save deal
  const toggleSaveDeal = (dealId: string) => {
    setDeals(prev => prev.map(deal => 
      deal.id === dealId ? { ...deal, saved: !deal.saved } : deal
    ))
  }

  // Redeem deal
  const redeemDeal = (dealId: string) => {
    setDeals(prev => prev.map(deal => 
      deal.id === dealId ? { ...deal, redeemed: true } : deal
    ))
    // Update user stats
    const deal = deals.find(d => d.id === dealId)
    if (deal && !deal.redeemed) {
      setUser(prev => ({
        ...prev,
        dealsUsed: prev.dealsUsed + 1,
        totalSaved: prev.totalSaved + Math.floor(Math.random() * 2000) + 500,
      }))
    }
  }

  // Get filtered deals
  const getFilteredDeals = (category: string) => {
    if (category === 'All') return deals
    return deals.filter(deal => deal.category === category)
  }

  // AI Response generator
  const generateAIResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase()
    
    if (msg.includes('exam') || msg.includes('registration') || msg.includes('deadline')) {
      return "The exam registration deadline for the 2026/2027 session is March 30, 2026.\n\nYou can register through the student portal. Would you like me to guide you through the process?"
    }
    
    if (msg.includes('library') || msg.includes('book') || msg.includes('study')) {
      return "The Nnamdi Azikiwe University Library is open:\n\n📚 Monday - Friday: 8:00 AM - 10:00 PM\n📚 Saturday: 9:00 AM - 6:00 PM\n📚 Sunday: 2:00 PM - 8:00 PM\n\nYou can access online resources through the library portal. Need help finding a specific resource?"
    }
    
    if (msg.includes('hostel') || msg.includes('accommodation') || msg.includes('housing')) {
      return "For accommodation assistance:\n\n🏠 On-campus: Contact Student Affairs\n🏠 Off-campus: Check the Deals section for verified hostels\n\nWould you like me to show you available accommodation options near campus?"
    }
    
    if (msg.includes('course') || msg.includes('register') || msg.includes('credit')) {
      return "For course registration:\n\n1. Log into the student portal\n2. Go to 'Course Registration'\n3. Select your courses (check prerequisites)\n4. Get advisor approval\n5. Submit and print confirmation\n\nNeed help with specific course requirements?"
    }
    
    if (msg.includes('career') || msg.includes('job') || msg.includes('internship')) {
      return "Great question about career opportunities!\n\n💼 Check the Alumni Network section for job postings\n💼 Attend the Career Fair (March 25)\n💼 Book a CV review session\n\nWhat field are you interested in?"
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 Great to hear from you!\n\nI'm here to help with anything related to campus life, academics, or finding the best deals. What can I assist you with today?"
    }
    
    if (msg.includes('thank')) {
      return "You're welcome! 😊 I'm always here to help. Feel free to ask if you need anything else!"
    }
    
    return "That's a great question! While I'm still learning about that specific topic, I can help you with:\n\n• Campus information\n• Academic queries\n• Deal recommendations\n• Event updates\n\nWould you like me to connect you with student services for more detailed assistance?"
  }

  // Send message
  const sendMessage = (text: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMsg])
    
    // Show typing indicator
    setIsTyping(true)
    
    // Generate AI response with delay
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: generateAIResponse(text),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500 + Math.random() * 1000) // 1.5-2.5 second delay for realism
  }

  // Mark notification read
  const markNotificationRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ))
  }

  // Mark all notifications read
  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  // Calculate unread count
  const unreadCount = notifications.filter(n => !n.read).length

  // Derived state
  const savedDeals = deals.filter(d => d.saved).map(d => d.id)
  const redeemedDeals = deals.filter(d => d.redeemed).map(d => d.id)

  const value: AppState = {
    currentScreen,
    setCurrentScreen,
    user,
    updateUser,
    deals,
    savedDeals,
    redeemedDeals,
    toggleSaveDeal,
    redeemDeal,
    getFilteredDeals,
    messages,
    sendMessage,
    isTyping,
    notifications,
    unreadCount,
    markNotificationRead,
    markAllRead,
    showInstallPrompt,
    setShowInstallPrompt,
    isInstalled,
    searchQuery,
    setSearchQuery,
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
