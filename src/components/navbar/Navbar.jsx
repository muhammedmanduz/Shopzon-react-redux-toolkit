import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-5  bg-white text-black relative shadow-sm font-semibold'>
        <NavbarLeft />
        <NavbarRight />
    </div>
  )
}

export default Navbar