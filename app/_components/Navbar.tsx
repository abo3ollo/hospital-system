"use client"

import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/nextjs'
import { Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react'

export default function Navbar() {
  const { isSignedIn } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-doctors", label: "Doctors" },
    { href: "/appointments", label: "My Appointments" },
  ]

  return (
    <nav className=" sticky top-0 z-50 bg-background/80 border-border border-b  backdrop-blur-md  ">
      {/* Logo */}
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href="/" className="flex items-center gap-2 text-black text-2xl font-bold">
          <Stethoscope className='w-8 h-8' />
          <span>Medcare</span>
        </Link>

        {/* Nav Links */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto mr-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        
        <ul
          className={`flex-col lg:flex-row flex lg:flex gap-8 lg:gap-12 list-none m-0 absolute lg:static top-16 left-0 right-0 bg-black lg:bg-transparent border-t lg:border-none border-white/10 lg:rounded-none rounded-b-2xl shadow-lg lg:shadow-none px-6 lg:px-0 py-6 lg:py-0 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} lg:flex`}
        >
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-black  text-lg font-medium transition-colors duration-300 hover:text-black/60"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* auth buttons */}
        <div className='flex items-center gap-4'>
          {isSignedIn ? (
            <UserButton afterSignOutUrl='/' />
          ) : (
            <div className='flex gap-2'>
              <SignInButton mode='modal'>
                <Button variant="ghost" size="sm" >
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <Button size="sm" >
                  Signup
                </Button>
              </SignUpButton>
            </div>

          )}
        </div>
      </div>


    </nav>
  );
}
