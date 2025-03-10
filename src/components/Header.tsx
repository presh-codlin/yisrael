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
    document.body.addEventListener("resize", ()=> {
      document.body.style.overflow = "visible";
    })
  }, [pathname, setIsMenuOpen]);

 
  return (
    <header className='w-full py-8 md:py-12 text-white'>
      <div className='w-[90%] xsm:w-full max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] xsm:px-10 mtb:px-6 tb:px-16 lg:px-20 mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Yisrael<span className='text-accent'>.</span>
          </h1>
        </Link>

        <div className="hidden mtb:flex items-center gap-8">
          <DesktopNav/>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className='mtb:hidden flex items-center gap-8'>
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <MenuIcon setIsMenuOpen={setIsMenuOpen}/>
        </div>
      </div>
    </header>
  )
}

export default Header