'use client'

import { Star } from 'lucide-react'

export default function Rating() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(3)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[#6C5CE7] text-[#6C5CE7]"
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        4.8/5 rating from 1000+ users
      </span>
    </div>
  )
}

