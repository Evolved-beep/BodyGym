"use client"
import React, {useEffect, useState} from 'react'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    
  return (
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Body</span>
            <span className="text-yellow-400"> Gym</span>
          </div>
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="hover:text-yellow-400 transition cursor-pointer">Advantage</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Membership</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">About</li>
          </ul>
          <div className='md:hidden'>
            <NavbarMobile />
          </div>
        </div>
      </nav>

  )
}

export default Navbar