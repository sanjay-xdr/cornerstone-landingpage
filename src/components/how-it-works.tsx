'use client'

import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Install Extension",
    description: "Add TaskFlow to Chrome with a single click. No registration required to get started."
  },
  {
    number: 2,
    title: "Set Your Goals",
    description: "Define your main objectives and break them down into manageable tasks."
  },
  {
    number: 3,
    title: "Create Workspaces",
    description: "Organize your links and tasks into custom workspaces for better organization."
  },
  {
    number: 4,
    title: "Boost Productivity",
    description: "Access everything with one click and stay focused on your goals."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-zinc-950" id="how-it-works">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple steps to boost your productivity
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#6C5CE7] md:left-1/2 md:-translate-x-0.5" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Number indicator */}
                <div className="absolute left-0 w-8 h-8 rounded-full bg-[#6C5CE7] flex items-center justify-center text-sm font-medium text-white md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="bg-zinc-900/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              size="lg"
              className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

