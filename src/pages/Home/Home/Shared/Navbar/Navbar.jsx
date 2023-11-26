/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  const navItems = <>
    <li>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/alltoys'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        All Toys
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/myToys'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        My Toys
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/addToy'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        Add a Toy
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/blog'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'text-orange-400' : '')}
      >
        Login
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/register'
        className={({ isActive }) => (isActive ? 'text-orange-400' : 'default')}
      >
        Register
      </NavLink>
    </li>
  </>



  return (
    <div className='bg-black text-white fixed z-30 opacity-70 w-full h-[100px] top-0 px-4 py-5 mx-auto  md:px-24 lg:px-8'>
      <div className='flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className=''>
          <span className=' text-xl font-bold tracking-wide uppercase text-white'>
            Bistro Boss <br /> Restaurants
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          {navItems}
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <FaPlaneDeparture className='h-6 w-6 text-blue-500' />
                      <span className=' text-xl font-bold tracking-wide text-white uppercase'>
                        Bistro Boss <br /> Restaurant
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    {navItems}

                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
