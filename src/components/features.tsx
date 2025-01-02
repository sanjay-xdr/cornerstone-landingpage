'use client'

import { ClipboardList, LayoutGrid, Zap, Folder, Plus, Lock } from 'lucide-react'

const features = [
  {
    icon: ClipboardList,
    title: "Goal Setting",
    description: "Set and track your main goals directly from your browser. Stay focused on what matters most."
  },
  {
    icon: LayoutGrid,
    title: "Task Management",
    description: "Create and organize multiple tasks effortlessly. Keep your workflow streamlined and efficient."
  },
  {
    icon: Zap,
    title: "Quick Access",
    description: "Open all your frequently used links with a single click. Save time and boost productivity."
  },
  {
    icon: Folder,
    title: "Workspace Organization",
    description: "Create custom workspaces for different projects or areas of focus. Keep everything organized."
  },
  {
    icon: Plus,
    title: "Easy Integration",
    description: "Seamlessly integrates with Chrome. Install and start using in seconds with no complex setup."
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Your data is securely stored locally. Complete privacy and control over your information."
  }
]

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to stay focused and productive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-background/50">
              <div className="w-12 h-12 rounded-lg bg-[#6C5CE7]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#6C5CE7]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

