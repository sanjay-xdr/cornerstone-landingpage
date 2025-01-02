'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="https://chromewebstore.google.com/detail/cornerstone/eiblcdbfflafafgokjoeighgdpclhepd" className="text-xl font-bold mb-4 block">
              CornerStone
            </Link>
            <p className="text-sm text-muted-foreground">
              Streamline your browser workflow and boost productivity with our smart Chrome extension.
            </p>
          </div>

          <div >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 CornerStone. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  )
}

