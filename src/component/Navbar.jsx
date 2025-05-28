import React from 'react'
import { Button } from "@/components/ui/button"
import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between fixed top-0 w-full  h-16 shadow-md px-3 py-3 backdrop-blur-md bg-white/30 z-50'>
      <div className="logo">
        <img src="/logo.png" className='h-14 w-14 rounded-full'  alt="logo of pdf my code " />
      </div>
      <ul className='flex items-center gap-5 poppins-medium'>
        <li className='hover:text-gray-700 transition-all'><Link to={'/'}>Home</Link></li>
        <li className='hover:text-gray-700 transition-all'><Link to={'/'}>About Us</Link></li>
        <li className='hover:text-gray-700 transition-all'><Link to={'/'}>Generate</Link></li>
        <li className='hover:text-gray-700 transition-all'><Link to={'/'}>Team</Link></li>
        <li className='hover:text-gray-700 transition-all'><Link to={'/'}>Services</Link></li>
      </ul>
      <div className="actions">
      <Button variant="default" asChild>
  <Link to="/contact">Contact Us <FaPhone className='text-sm'/></Link>
</Button>
      </div>
    </div>
  )
}

export default Navbar