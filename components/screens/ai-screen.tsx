'use client'

import { useState, useRef, useEffect } from 'react'
import { useApp } from '@/contexts/app-context'
import { Send, Paperclip, ChevronLeft, Sparkles, Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const QUICK_SUGGESTIONS = [
  'When is exam registration?',
  'Library opening hours',
  'Find accommodation',
  'Course registration help',
  'Career opportunities',
  'Campus events today',
]

export function AIScreen() {
  const { messages, sendMessage, isTyping, setCurrentScreen } = useApp()
  const [inputText, setInputText] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText.trim())
      setInputText('')
    }
  }

  const handleSuggestion = (suggestion: string) => {
    sendMessage(suggestion)
  }

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-unizik-500 px-4 pt-12 pb-4 flex items-center gap-3 sticky top-0 z-10">
        <button 
          onClick={() => setCurrentScreen('home')}
          className="p-1 rounded-full active:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center relative">
            <Bot className="w-6 h-6 text-white" />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-unizik-500 rounded-full" />
          </div>
          <div>
            <p className="text-white font-semibold">ZIK AI</p>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Always online
            </p>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 p-4 space-y-4 overflow-y-auto"
      >
        {messages.map((msg, idx) => (
          <div 
            key={msg.id} 
            className={cn(
              "flex animate-fade-in",
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {msg.type === 'ai' && (
              <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            <div className={cn(
              "max-w-[80%] relative",
              msg.type === 'user' ? 'mr-2' : ''
            )}>
              <div className={cn(
                "p-3 text-sm whitespace-pre-line",
                msg.type === 'user' 
                  ? 'bg-unizik-500 text-white rounded-2xl rounded-br-md' 
                  : 'bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm'
              )}>
                {msg.text}
              </div>
              <span className={cn(
                "text-[10px] mt-1 block",
                msg.type === 'user' ? 'text-right text-gray-400' : 'text-gray-400'
              )}>
                {formatTime(msg.timestamp)}
              </span>
            </div>
            {msg.type === 'user' && (
              <div className="w-8 h-8 bg-unizik-200 rounded-full flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-unizik-600" />
              </div>
            )}
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-bl-md shadow-sm p-3">
              <div className="flex gap-1">
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
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Try asking:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {QUICK_SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestion(suggestion)}
                className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs rounded-full whitespace-nowrap active:scale-95 transition-transform hover:border-unizik-300 hover:text-unizik-600"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <button className="p-1.5 text-gray-400 hover:text-gray-600 active:scale-95 transition-transform">
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping}
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-95",
              inputText.trim() && !isTyping
                ? 'bg-unizik-500 text-white shadow-md'
                : 'bg-gray-300 text-gray-500'
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-2">
          ZIK AI is powered by AIM and may make mistakes. Always verify important information.
        </p>
      </div>
    </div>
  )
}
