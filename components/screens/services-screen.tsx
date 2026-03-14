'use client'

import { useState } from 'react'
import { useApp } from '@/contexts/app-context'
import { ChevronRight, MapPin, Calendar, Phone, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const SERVICES = [
  { id: 'accommodation', icon: '🏠', label: 'Accommodation', color: 'bg-blue-100 text-blue-600', description: 'Find hostels & housing' },
  { id: 'transport', icon: '🚌', label: 'Transport', color: 'bg-green-100 text-green-600', description: 'Campus & city transport' },
  { id: 'library', icon: '📚', label: 'Library', color: 'bg-amber-100 text-amber-600', description: 'Books & resources' },
  { id: 'cafeteria', icon: '🍽️', label: 'Cafeteria', color: 'bg-red-100 text-red-600', description: 'Food & dining' },
  { id: 'health', icon: '🏥', label: 'Health Center', color: 'bg-rose-100 text-rose-600', description: 'Medical services' },
  { id: 'career', icon: '💼', label: 'Career Center', color: 'bg-purple-100 text-purple-600', description: 'Jobs & internships' },
  { id: 'bursary', icon: '🏦', label: 'Bursary', color: 'bg-emerald-100 text-emerald-600', description: 'Fees & payments' },
  { id: 'records', icon: '📋', label: 'Records', color: 'bg-gray-100 text-gray-600', description: 'Transcripts & docs' },
]

const QUICK_LINKS = [
  { id: 'calendar', icon: '📅', title: 'Academic Calendar', subtitle: '2026/2027 Session', color: 'bg-gold-100' },
  { id: 'map', icon: '🗺️', title: 'Campus Map', subtitle: 'Find your way around', color: 'bg-mtn-100' },
  { id: 'emergency', icon: '🚨', title: 'Emergency', subtitle: 'Security & Medical', color: 'bg-red-100' },
]

const EVENTS = [
  {
    id: '1',
    title: 'Faculty of Engineering Week',
    date: new Date(2026, 2, 25),
    time: '10:00 AM',
    location: 'Engineering Complex',
    attendees: 45,
  },
  {
    id: '2',
    title: 'Career Fair 2026',
    date: new Date(2026, 3, 5),
    time: '9:00 AM',
    location: 'Convocation Arena',
    attendees: 120,
  },
]

export function ServicesScreen() {
  const { setCurrentScreen } = useApp()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId)
    setTimeout(() => setSelectedService(null), 200)
    // In a real app, this would navigate to the service detail
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      {/* Header */}
      <div className="bg-unizik-500 px-4 pt-12 pb-6">
        <h1 className="font-display font-bold text-xl text-white">Campus Services</h1>
        <p className="text-white/70 text-sm mt-1">Everything you need on campus</p>
      </div>
      
      {/* Services Grid */}
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="grid grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={cn(
                  "flex flex-col items-center gap-2 group",
                  "active:scale-95 transition-transform"
                )}
              >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all",
                  "group-active:scale-90",
                  service.color
                )}>
                  {service.icon}
                </div>
                <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="px-4 mt-5">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Quick Links</h3>
        <div className="space-y-2">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentScreen('ai')}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-2xl`}>
                {link.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-800">{link.title}</p>
                <p className="text-xs text-gray-500">{link.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>
      
      {/* Upcoming Events */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 text-sm">Upcoming Events</h3>
          <button className="text-unizik-500 text-xs font-medium">View all</button>
        </div>
        <div className="space-y-3">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-4 shadow-sm active:scale-[0.98] transition-transform"
            >
              <div className="flex gap-3">
                <div className="w-14 h-14 bg-unizik-500 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-[10px] font-medium uppercase">
                    {event.date.toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                  <span className="text-xl font-bold">
                    {event.date.getDate()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-800 text-sm">{event.title}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className="w-6 h-6 bg-gradient-to-br from-unizik-300 to-unizik-500 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500">+{event.attendees} attending</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Important Contacts */}
      <div className="px-4 mt-5">
        <h3 className="font-semibold text-gray-800 text-sm mb-3">Important Contacts</h3>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {[
            { name: 'Student Affairs', phone: '+234 803 123 4567', icon: '👥' },
            { name: 'Security Office', phone: '+234 803 987 6543', icon: '🛡️' },
            { name: 'Health Center', phone: '+234 803 456 7890', icon: '🏥' },
          ].map((contact, idx, arr) => (
            <a
              key={contact.name}
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className={cn(
                "flex items-center gap-3 p-4 active:bg-gray-50 transition-colors",
                idx !== arr.length - 1 && "border-b border-gray-100"
              )}
            >
              <div className="w-10 h-10 bg-unizik-100 rounded-xl flex items-center justify-center text-lg">
                {contact.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">{contact.name}</p>
                <p className="text-xs text-gray-500">{contact.phone}</p>
              </div>
              <Phone className="w-5 h-5 text-unizik-500" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
