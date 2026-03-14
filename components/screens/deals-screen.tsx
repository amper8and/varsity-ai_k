'use client'

import { useState } from 'react'
import { useApp, Deal } from '@/contexts/app-context'
import { Search, Filter, Heart, X, Check, Copy, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export function DealsScreen() {
  const { deals, toggleSaveDeal, redeemDeal, getFilteredDeals, setCurrentScreen } = useApp()
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null)
  const [showRedeemModal, setShowRedeemModal] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const filters = ['All', 'Food', 'Shopping', 'Transport', 'Tech', 'Mobile']
  
  const filteredDeals = getFilteredDeals(activeFilter).filter(deal => 
    deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    deal.partner.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleRedeem = (deal: Deal) => {
    setSelectedDeal(deal)
    setShowRedeemModal(true)
  }

  const confirmRedeem = () => {
    if (selectedDeal) {
      redeemDeal(selectedDeal.id)
      setShowRedeemModal(false)
    }
  }

  const copyCode = () => {
    if (selectedDeal) {
      navigator.clipboard.writeText(selectedDeal.code)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4 sticky top-0 z-10 border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display font-bold text-xl text-gray-900">Deals</h1>
          <button className="p-2 bg-gray-100 rounded-full active:bg-gray-200 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search deals..."
            className="w-full h-12 bg-gray-100 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-unizik-500/20"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95",
                activeFilter === filter
                  ? 'bg-unizik-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600'
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Banner */}
      {!searchQuery && activeFilter === 'All' && (
        <div className="px-4 mt-4">
          <div className="bg-gradient-to-r from-mtn-500 to-mtn-400 rounded-2xl p-4 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full mb-2">
                MTN EXCLUSIVE
              </span>
              <h3 className="font-bold text-lg">Double Data Week!</h3>
              <p className="text-sm text-white/80 mt-1">Get 2x data on all bundles</p>
              <button 
                onClick={() => {
                  const mtnDeal = deals.find(d => d.partner === 'MTN')
                  if (mtnDeal) handleRedeem(mtnDeal)
                }}
                className="mt-3 px-4 py-2 bg-white text-mtn-500 rounded-full text-sm font-semibold active:scale-95 transition-transform"
              >
                Claim Now
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Deals List */}
      <div className="px-4 mt-4 pb-24 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 text-sm">
            {searchQuery ? 'Search Results' : 'Popular Near You'}
          </h3>
          <span className="text-xs text-gray-500">{filteredDeals.length} deals</span>
        </div>
        
        {filteredDeals.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-800">No deals found</h3>
            <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl p-4 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex gap-4">
                {/* Deal Image */}
                <div className={`w-20 h-20 ${deal.color} rounded-xl flex items-center justify-center flex-shrink-0 relative`}>
                  <span className="text-white font-bold text-2xl">{deal.partner[0]}</span>
                  <span className="absolute -top-2 -left-2 bg-gold-400 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {deal.discount}
                  </span>
                </div>
                
                {/* Deal Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">{deal.partner}</p>
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight mt-0.5">{deal.title}</h4>
                    </div>
                    <button
                      onClick={() => toggleSaveDeal(deal.id)}
                      className="p-1.5 rounded-full active:bg-gray-100 transition-colors"
                    >
                      <Heart 
                        className={cn(
                          "w-5 h-5 transition-colors",
                          deal.saved ? "fill-red-500 text-red-500" : "text-gray-300"
                        )} 
                      />
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{deal.description}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      Expires {new Date(deal.expiryDate).toLocaleDateString()}
                    </span>
                    
                    {deal.redeemed ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                        <Check className="w-4 h-4" />
                        Redeemed
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRedeem(deal)}
                        className="px-4 py-1.5 bg-unizik-500 text-white text-xs font-semibold rounded-full active:scale-95 transition-transform"
                      >
                        Redeem
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Redeem Modal */}
      {showRedeemModal && selectedDeal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 animate-slide-up">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display font-bold text-xl">Redeem Deal</h3>
              <button 
                onClick={() => setShowRedeemModal(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className={`${selectedDeal.color} rounded-2xl p-4 text-white mb-4`}>
              <p className="text-white/80 text-xs font-medium">{selectedDeal.partner}</p>
              <h4 className="font-bold text-lg mt-1">{selectedDeal.title}</h4>
              <p className="text-white/80 text-sm mt-2">{selectedDeal.description}</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-500 mb-2">Your redemption code:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 text-center font-mono text-lg tracking-wider">
                  {selectedDeal.code}
                </code>
                <button
                  onClick={copyCode}
                  className="p-3 bg-unizik-100 text-unizik-600 rounded-lg active:scale-95 transition-transform"
                >
                  {copiedCode ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              {copiedCode && (
                <p className="text-xs text-green-600 mt-2 text-center">Code copied!</p>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">Terms & Conditions:</p>
              {selectedDeal.terms.map((term, idx) => (
                <p key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                  <span className="text-unizik-500 mt-0.5">•</span>
                  {term}
                </p>
              ))}
            </div>
            
            <button
              onClick={confirmRedeem}
              className="w-full py-3 bg-unizik-500 text-white font-semibold rounded-xl active:scale-95 transition-transform"
            >
              Confirm Redemption
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
