import React from 'react'
import logo from '../assets/images/logo2.png'
const Header = () => {
  return (
    <div className='w-full p-2 flex justify-center items-center'>
            <img src={logo} className='w-52' alt="" />
    </div>
  )
}

export default Header