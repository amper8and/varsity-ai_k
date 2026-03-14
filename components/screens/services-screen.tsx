'use client'

import { useApp } from '@/contexts/app-context'
import { IMAGES } from '@/lib/images'
import { MapPin, Calendar, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const SERVICES = [
  { id: 'library', label: 'Library', image: IMAGES.library, color: 'from-amber-500 to-amber-600' },
  { id: 'accommodation', label: 'Housing', image: IMAGES.hostel, color: 'from-blue-500 to-blue-600' },
  { id: 'cafeteria', label: 'Food', image: IMAGES.cafeteria, color: 'from-red-500 to-red-600' },
  { id: 'transport', label: 'Transport', image: IMAGES.transport, color: 'from-green-500 to-green-600' },
]

const EVENTS = [
  {
    id: '1',
    title: 'Engineering Week',
    image: IMAGES.eventTech,
    date: 'Mar 25',
    location: 'Engineering Complex',
    attendees: [IMAGES.attendee1, IMAGES.attendee2, IMAGES.attendee3],
  },
  {
    id: '2',
    title: 'Career Fair 2026',
    image: IMAGES.eventCareer,
    date: 'Apr 5',
    location: 'Convocation Arena',
    attendees: [IMAGES.attendee2, IMAGES.attendee3, IMAGES.attendee1],
  },
]

const CONTACTS = [
  { name: 'Student Affairs', phone: '+2348031234567', icon: '👥' },
  { name: 'Security', phone: '+2348039876543', icon: '🛡️' },
  { name: 'Health Center', phone: '+2348034567890', icon: '🏥' },
]

export function ServicesScreen() {
  const { setCurrentScreen } = useApp()

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="relative h-44">
        <img 
          src={IMAGES.campus} 
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-50" />
        <div className="absolute top-12 left-5">
          <h1 className="text-white font-bold text-2xl">Campus</h1>
          <p className="text-white/80">Everything you need</p>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="px-5 -mt-6">
        <div className="grid grid-cols-2 gap-3">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setCurrentScreen('ai')}
              className="relative h-28 rounded-2xl overflow-hidden"
            >
              <img 
                src={service.image} 
                alt={service.label}
                className="w-full h-full object-cover"
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t",
                service.color,
                "opacity-80"
              )} />
              <span className="absolute bottom-3 left-3 text-white font-semibold">
                {service.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Events */}
      <div className="px-5 mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">Upcoming Events</h3>
        <div className="space-y-3">
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="relative h-32">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-white font-bold">{event.title}</h4>
                  <div className="flex items-center gap-4 mt-1 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {event.attendees.map((avatar, i) => (
                    <img 
                      key={i}
                      src={avatar}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-600">
                    +
                  </div>
                </div>
                <button className="px-4 py-2 bg-unizik-500 text-white text-sm font-medium rounded-full">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contacts */}
      <div className="px-5 mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">Emergency Contacts</h3>
        <div className="bg-white rounded-2xl overflow-hidden">
          {CONTACTS.map((contact, idx, arr) => (
            <a
              key={contact.name}
              href={`tel:${contact.phone}`}
              className={cn(
                "flex items-center gap-3 p-4 active:bg-gray-50",
                idx !== arr.length - 1 && "border-b border-gray-100"
              )}
            >
              <span className="text-2xl">{contact.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.phone}</p>
              </div>
              <Phone className="w-5 h-5 text-unizik-500" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
