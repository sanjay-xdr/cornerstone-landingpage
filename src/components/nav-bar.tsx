'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold">
        <Image src="/icon128.png" alt="CornerStone Logo" width={40} height={40} />  CornerStone
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Button variant="default" className="bg-[#6C5CE7] hover:bg-[#6C5CE7]/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

