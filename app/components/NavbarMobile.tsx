"use client"
import React,{useState} from 'react'
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:hidden'>
      <button 
        onClick={toggleMenu} 
        className="text-white focus:outline-none z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div 
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='flex flex-col h-full pt-20 px-8'>
          <ul className='flex flex-col gap-8'>
            <li>
              <a 
                href="#advantage" 
                onClick={toggleMenu}
                className='text-white text-2xl font-semibold hover:text-yellow-400 transition-colors'
              >
                Advantage
              </a>
            </li>
            <li>
              <a 
                href="#membership" 
                onClick={toggleMenu}
                className='text-white text-2xl font-semibold hover:text-yellow-400 transition-colors'
              >
                Membership
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={toggleMenu}
                className='text-white text-2xl font-semibold hover:text-yellow-400 transition-colors'
              >
                About
              </a>
            </li>
          </ul>

          <button className='mt-auto mb-12 w-full py-4 bg-yellow-400 text-black font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 transition'>
            Get Started
          </button>
        </nav>
      </div>

      {isOpen && (
        <div 
          onClick={toggleMenu}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden'
        />
      )}
    </div>
  );
};
export default NavbarMobile