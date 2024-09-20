import React from 'react'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  return (
    <nav className='px-12 py-16 flex justify-between items-center'>
        <h1 className='text-3xl italic'>
            Body <span className='text-[#FAFF00]'>Gym</span>
        </h1>
        <div className='hidden md:block'>
            <ul className='flex items-center justify-center cursor-pointer'>
                <li className='mr-5'>Advantage</li>
                <li className='mr-5'>Membership</li>
                <li className='mr-5'>About</li>
            </ul>
        </div>
        <div className='md:hidden'>
            <NavbarMobile />
        </div>
    </nav>

  )
}

export default Navbar