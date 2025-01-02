'use client'

import NavBar from '@/components/nav-bar'
import BrowserMockup from '@/components/browser-mockup'
import Rating from '@/components/rating'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import WhyChoose from '@/components/why-choose'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        
        <main className="container max-w-7xl mx-auto pt-32 pb-16 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                Streamline Your{' '}
                <span className="text-[#6C5CE7]">
                  Browser Workflow
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Set goals, manage tasks, and access your favorite links instantly. 
                Boost your productivity with our smart Chrome extension.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90"
                >
                 <a href="http://" target="_blank" rel="noopener noreferrer"> Add to Chrome</a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                >
                    <a href="http://" target="_blank" rel="noopener noreferrer"> Watch Demo</a>
                </Button>
              </div>
              
              <Rating />
            </div>
            
            <div className="lg:block">
              <BrowserMockup />
            </div>
          </div>
        </main>
        <Features />
        <HowItWorks />
        <WhyChoose />
        <Footer />
      </div>
    </div>
  )
}

