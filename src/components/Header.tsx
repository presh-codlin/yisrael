"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { DesktopNav, MenuIcon, MobileNav } from './Nav'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the menu whenever the pathname changes
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Yisrael<span className='text-accent'>.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav/>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className='xl:hidden flex items-center gap-8'>
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <MenuIcon setIsMenuOpen={setIsMenuOpen}/>
        </div>
      </div>
    </header>
  )
}

export default Header