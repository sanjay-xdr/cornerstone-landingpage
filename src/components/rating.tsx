'use client'

import { Star } from 'lucide-react'

export default function Rating() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(3)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        4.4/5 rating from 10+ users
      </span>
    </div>
  )
}

