'use client'

import { Clock, LayoutGrid, Target, Plus, Zap, Lock } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Access all your important links and tasks instantly, eliminating the need to search through bookmarks or remember URLs."
  },
  {
    icon: LayoutGrid,
    title: "Organize Better",
    description: "Create custom workspaces for different projects or areas of your work life."
  },
  {
    icon: Target,
    title: "Stay Focused",
    description: "Keep your main goals visible and track progress effectively with our intuitive interface."
  },
  {
    icon: Plus,
    title: "Simple Integration",
    description: "Works seamlessly with Chrome browser. No complex setup or configuration required."
  },
  {
    icon: Zap,
    title: "Boost Efficiency",
    description: "Open multiple related links simultaneously with our workspace feature."
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays on your device. We prioritize your privacy and security."
  }
]

const stats = [
  {
    value: "20+",
    label: "Active Users"
  },
  {
    value: "7",
    label: "Review"
  },
  {
    value: "4.4/5",
    label: "User Rating"
  }
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-background" id="why-choose">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose TaskFlow
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the benefits of streamlined productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-[#f59e0b]" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#f59e0b] mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

