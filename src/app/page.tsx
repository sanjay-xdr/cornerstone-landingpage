'use client'

import NavBar from '@/components/nav-bar'
import Rating from '@/components/rating'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import WhyChoose from '@/components/why-choose'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <NavBar />
        
        <main className="container max-w-7xl mx-auto pt-32 pb-16 px-4">
          <div className="">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                Streamline Your{' '}
                <span className="text-[#f59e0b]">
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
                  className="bg-[#f59e0b] hover:bg-[#f59e0b]/90"
                >
                 <a href="https://chromewebstore.google.com/detail/cornerstone/eiblcdbfflafafgokjoeighgdpclhepd" target="_blank" rel="noopener noreferrer"> Add to Chrome</a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                >
                <a href="https://youtu.be/AGoLznh73GM" target="_blank" rel="noopener noreferrer"> Watch Demo</a>
                </Button>
              </div>
              
              <Rating />
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

