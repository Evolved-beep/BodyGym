"use client"
import React,{useState} from 'react'
const NavbarMobile = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false)
  const toggleMenu = () => {
        setIsOpen(!isOpen)
  }
  return (
    <>
        <div className='relative md:hidden'>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

        </div>
          {isOpen && (
            <div className='absolute z-50 left-0 w-full bg-gray-800 mt-2 md:hidden'>
              <ul className='flex flex-col space-y-2 text-white p-4'>
                <li>Advantage</li>
                <li>Membership</li>
                <li>About</li>
              </ul>
            </div>
          )}
    </>
  )
}

export default NavbarMobile