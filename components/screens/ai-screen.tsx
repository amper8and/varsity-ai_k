'use client'

import { useState, useRef, useEffect } from 'react'
import { useApp } from '@/contexts/app-context'
import { Send, ChevronLeft, Bot, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const SUGGESTIONS = [
  'Best food deals?',
  'Library hours?',
  'Exam dates?',
  'Hostels near campus?',
]

export function AIScreen() {
  const { messages, sendMessage, isTyping, setCurrentScreen } = useApp()
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim())
      setInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-unizik-500 px-5 pt-12 pb-5">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('home')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-unizik-500 rounded-full" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">ZIK AI</h1>
              <p className="text-white/70 text-xs">Always online</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat */}
      <div 
        ref={scrollRef}
        className="flex-1 px-5 py-4 space-y-4 overflow-y-auto"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={cn(
              "flex",
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {msg.type === 'ai' && (
              <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={cn(
              "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
              msg.type === 'user' 
                ? 'bg-unizik-500 text-white rounded-br-md' 
                : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
            )}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-2">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-bl-md shadow-sm p-4">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Suggestions */}
      {messages.length < 3 && !isTyping && (
        <div className="px-5 pb-3">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-xs text-gray-500">Try asking</span>
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {SUGGESTIONS.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input */}
      <div className="p-5 bg-white border-t">
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
              input.trim() ? 'bg-unizik-500 text-white' : 'bg-gray-300 text-gray-500'
            )}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
