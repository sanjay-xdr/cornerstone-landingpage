'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4">
      <Link href="https://chromewebstore.google.com/detail/cornerstone/eiblcdbfflafafgokjoeighgdpclhepd" className="text-xl font-bold flex items-center space-x-2">
          <Image src="/icon128.png" alt="CornerStone Logo" width={40} height={40} />
          <span>CornerStone</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Button variant="default" className="bg-[#f59e0b] hover:bg-[#f59e0b]/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

