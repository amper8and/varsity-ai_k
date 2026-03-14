'use client'

import { useState } from 'react'
import { useApp, Deal } from '@/contexts/app-context'
import { IMAGES } from '@/lib/images'
import { Heart, X, Copy, Check, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Food', 'Mobile', 'Tech', 'Transport']

export function DealsScreen() {
  const { deals, toggleSaveDeal, redeemDeal, setCurrentScreen } = useApp()
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
  const [copied, setCopied] = useState(false)

  const filteredDeals = activeFilter === 'All' 
    ? deals 
    : deals.filter(d => d.category === activeFilter)

  const handleCopy = () => {
    if (selectedDeal) {
      navigator.clipboard.writeText(selectedDeal.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header Image */}
      <div className="relative h-48">
        <img 
          src={IMAGES.shopping} 
          alt="Deals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-50" />
        
        <div className="absolute top-12 left-5 right-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-white font-bold text-xl">Deals</h1>
            <div className="w-10" />
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="px-5 -mt-6">
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeFilter === cat
                  ? 'bg-unizik-500 text-white'
                  : 'bg-white text-gray-600'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Deals Grid */}
      <div className="px-5 mt-4 space-y-4">
        {filteredDeals.map((deal) => (
          <DealCard 
            key={deal.id} 
            deal={deal} 
            onSave={() => toggleSaveDeal(deal.id)}
            onClick={() => setSelectedDeal(deal)}
          />
        ))}
      </div>

      {/* Deal Detail Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl overflow-hidden animate-slide-up">
            {/* Deal Image */}
            <div className="relative h-48">
              <img 
                src={selectedDeal.image} 
                alt={selectedDeal.partner}
                className="w-full h-full object-cover"
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              )} />
              <button
                onClick={() => setSelectedDeal(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-5">
                <span className={cn(
                  "px-3 py-1 rounded-full text-sm font-bold text-white",
                  "bg-gradient-to-r",
                  selectedDeal.partnerColor
                )}>
                  {selectedDeal.discount} OFF
                </span>
              </div>
            </div>
            
            {/* Deal Info */}
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{selectedDeal.partner}</p>
                  <h3 className="font-bold text-xl text-gray-800 mt-1">{selectedDeal.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedDeal.description}</p>
                </div>
                <button
                  onClick={() => toggleSaveDeal(selectedDeal.id)}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <Heart 
                    className={cn(
                      "w-6 h-6",
                      selectedDeal.saved ? "fill-red-500 text-red-500" : "text-gray-400"
                    )} 
                  />
                </button>
              </div>
              
              {/* Redemption Code */}
              {!selectedDeal.redeemed ? (
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-2">Your redemption code</p>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3">
                      <code className="font-mono text-lg tracking-wider text-gray-800">
                        {selectedDeal.code}
                      </code>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="w-14 bg-unizik-100 rounded-xl flex items-center justify-center"
                    >
                      {copied ? (
                        <Check className="w-6 h-6 text-unizik-500" />
                      ) : (
                        <Copy className="w-6 h-6 text-unizik-500" />
                      )}
                    </button>
                  </div>
                  
                  <button
                    onClick={() => {
                      redeemDeal(selectedDeal.id)
                      setTimeout(() => setSelectedDeal(null), 500)
                    }}
                    className="w-full mt-4 py-4 bg-unizik-500 text-white font-semibold rounded-xl"
                  >
                    Redeem Deal
                  </button>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Redeemed</p>
                      <p className="text-sm text-green-600">Code: {selectedDeal.code}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function DealCard({ deal, onSave, onClick }: { 
  deal: Deal
  onSave: () => void
  onClick: () => void 
}) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm"
    >
      <div className="relative h-40">
        <img 
          src={deal.image} 
          alt={deal.partner}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <button
          onClick={(e) => {
            e.stopPropagation()
            onSave()
          }}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"
        >
          <Heart 
            className={cn(
              "w-5 h-5",
              deal.saved ? "fill-red-500 text-red-500" : "text-gray-400"
            )} 
          />
        </button>
        
        <div className="absolute top-3 left-3">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-bold text-white",
            "bg-gradient-to-r",
            deal.partnerColor
          )}>
            {deal.discount}
          </span>
        </div>
        
        {deal.redeemed && (
          <div className="absolute bottom-3 right-3">
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              Redeemed
            </span>
          </div>
        )}
        
        <div className="absolute bottom-3 left-3">
          <p className="text-white/80 text-xs">{deal.partner}</p>
          <p className="text-white font-bold">{deal.title}</p>
        </div>
      </div>
    </div>
  )
}
