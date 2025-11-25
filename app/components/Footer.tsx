import React from 'react'
import { Instagram, Mail, Facebook } from 'lucide-react'


const Footer = () => {
  return (
    <footer className='w-full bg-black border-t-2 border-gray-800'>
      <div className='max-w-7xl mx-auto px-8 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-8'>
          <div className='text-center md:text-left'>
            <h3 className='text-3xl font-bold'>
              <span className='text-white'>Body</span>
              <span className='text-yellow-400'> Gym</span>
            </h3>
            <p className='text-gray-400 mt-2'>Transform Your Body</p>
          </div>

          <div className='flex gap-6'>
            <a 
              href="#" 
              className='text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform'
              aria-label="Instagram"
            >
              <Instagram className='w-7 h-7' />
            </a>
            <a 
              href="#" 
              className='text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform'
              aria-label="Email"
            >
              <Mail className='w-7 h-7' />
            </a>
            <a 
              href="#" 
              className='text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform'
              aria-label="Facebook"
            >
              <Facebook className='w-7 h-7' />
            </a>
          </div>
        </div>

        <div className='border-t border-gray-800 pt-8 text-center'>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Body Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer