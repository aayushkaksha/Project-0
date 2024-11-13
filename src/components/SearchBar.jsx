import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

const SearchBar = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      {/* Left Section - Logo */}
      <div className='flex items-center space-x-4'>
        <a href='#' className='text-2xl font-bold'>
          Logo
        </a>
      </div>

      {/* Middle Section - Categories */}
      <div className='hidden md:flex space-x-8'>
        <a href='#' className='hover:text-gray-400'>
          Men
        </a>
        <a href='#' className='hover:text-gray-400'>
          Women
        </a>
        <a href='#' className='hover:text-gray-400'>
          About
        </a>
        <a href='#' className='hover:text-gray-400'>
          Contact
        </a>
      </div>

      {/* Right Section - Icons */}
      <div className='flex items-center space-x-4'>
        {/* Search Icon and Search Bar */}
        <div className='relative'>
          <FaSearch
            onClick={toggleSearch}
            className='cursor-pointer hover:text-gray-400'
          />
          {searchOpen && (
            <input
              type='text'
              placeholder='Search...'
              className='absolute right-0 mt-2 w-40 bg-gray-700 text-white rounded-lg p-2 outline-none'
            />
          )}
        </div>

        {/* Profile Icon */}
        <FaUser className='hover:text-gray-400 cursor-pointer' />

        {/* Cart Icon */}
        <FaShoppingCart className='hover:text-gray-400 cursor-pointer' />
      </div>
    </nav>
  )
}

export default SearchBar
