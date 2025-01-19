import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
const Header = () => {
  return (
    <div className='w-full p-2 flex  items-center justify-around absolute top-0
    z-10'>
            <img src={logo} className='w-52' alt="" />
            <ul className='md:flex hidden gap-7'>
              <li>
                <Link className='text-white font-semibold'>Home </Link>
              </li>
              <li>
                <Link className='text-white font-semibold'>About</Link>
              </li>
              <li>
                <Link className='text-white font-semibold'>Socails </Link>
              </li>
            </ul>
            <button className='bg-[#8312F5] text-white font-semibold px-4 py-2 rounded-lg '>Join Now</button>
    </div>
  )
}

export default Header