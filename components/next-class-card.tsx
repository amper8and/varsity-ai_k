'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin, Calendar, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ClassEvent {
  id: string
  courseCode: string
  courseName: string
  venue: string
  startTime: Date
  endTime: Date
}

// Sample class data
const sampleClasses: ClassEvent[] = [
  {
    id: '1',
    courseCode: 'CSC 101',
    courseName: 'Introduction to Programming',
    venue: 'Lecture Hall 2B',
    startTime: new Date(Date.now() + 45 * 60 * 1000), // 45 mins from now
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
  },
  {
    id: '2',
    courseCode: 'MAT 201',
    courseName: 'Calculus II',
    venue: 'Science Block A',
    startTime: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
    endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
  },
  {
    id: '3',
    courseCode: 'PHY 102',
    courseName: 'General Physics',
    venue: 'Physics Lab',
    startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
    endTime: new Date(Date.now() + 26 * 60 * 60 * 1000),
  },
]

function formatCountdown(targetTime: Date): string {
  const now = new Date()
  const diff = targetTime.getTime() - now.getTime()
  
  if (diff <= 0) return 'Starting now'
  
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  
  if (hours > 0) {
    return `Starts in ${hours}h ${minutes}m`
  }
  return `Starts in ${minutes} mins`
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  })
}

interface NextClassCardProps {
  onClick?: () => void
}

export function NextClassCard({ onClick }: NextClassCardProps) {
  const [nextClass] = useState<ClassEvent>(sampleClasses[0])
  const [countdown, setCountdown] = useState(formatCountdown(nextClass.startTime))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCountdown(formatCountdown(nextClass.startTime))
    }, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [nextClass])

  if (!mounted) return null

  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full rounded-2xl p-4 text-left transition-all active:scale-[0.98]",
        "bg-[#21618C] shadow-lg"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <span className="text-white/80 text-xs font-medium">Next Class</span>
        </div>
        <div className="flex items-center gap-1 text-white/80">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Course Info */}
      <div className="mb-3">
        <div className="flex items-baseline gap-2">
          <h3 className="text-white font-bold text-lg">{nextClass.courseCode}</h3>
          <span className="text-white/70 text-sm truncate">{nextClass.courseName}</span>
        </div>
      </div>

      {/* Details Row */}
      <div className="flex items-center justify-between">
        {/* Countdown */}
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
          <Clock className="w-3.5 h-3.5 text-white/90" />
          <span className="text-white text-xs font-medium">{countdown}</span>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-1.5 text-white/80">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{nextClass.venue}</span>
        </div>
      </div>

      {/* Time hint */}
      <div className="mt-2 text-white/60 text-xs">
        {formatTime(nextClass.startTime)} - {formatTime(nextClass.endTime)}
      </div>
    </button>
  )
}

export { sampleClasses }
export type { ClassEvent }
