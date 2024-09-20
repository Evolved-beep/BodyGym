import React from 'react'
import { Instagram, Mail, Facebook } from 'lucide-react'


const Footer = () => {
  return (
    <footer className='w-full flex border-t-white border-t-2 justify-center items-center p-5 mt-6 gap-4'>
      <Instagram />
      <Mail />
      <Facebook />
    </footer>
  )
}

export default Footer