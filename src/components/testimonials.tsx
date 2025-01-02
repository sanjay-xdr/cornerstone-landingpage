'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: "Emma Wilson",
    role: "Content Creator",
    avatar: "E",
    quote: "Setting daily goals has never been easier. The interface is clean and intuitive, making task management a breeze."
  },
  {
    name: "David Chen",
    role: "Software Developer",
    avatar: "D",
    quote: "TaskFlow has completely transformed how I organize my browser tabs and manage my daily workflow."
  },
  {
    name: "Sarah Miller",
    role: "Project Manager",
    avatar: "S",
    quote: "The workspace organization feature is a game-changer. I can finally keep all my projects neatly separated."
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }

  const previous = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }

  return (
    <section className="py-24 bg-zinc-950" id="testimonials">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of satisfied users worldwide
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900/50 rounded-xl p-8 relative">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-12 w-12 bg-[#6C5CE7]">
                <AvatarFallback>{testimonials[currentIndex].avatar}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#6C5CE7] text-[#6C5CE7]" />
              ))}
            </div>

            <blockquote className="text-lg italic text-muted-foreground">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={previous}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

