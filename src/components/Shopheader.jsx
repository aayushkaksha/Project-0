import React, { useState } from 'react'
import { Search } from 'lucide-react'
import SortDropdown from './SortDropdown'

function Shopheader() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className='bg-white text-black p-4 mt-3 mb-0 pb-0 md:pr-20 flex items-center justify-between'>
      {/* Left section for the Products title */}
      <div className='flex justify-start'>
        <h2 className='text-xl md:text-2xl font-bold tracking-tight text-gray-900 font-poppins ml-0 md:ml-12'>
          Products
        </h2>
      </div>

      {/* Right section for search and sort options */}
      <div className='flex items-center space-x-4'>
        <form className='flex items-center'>
          <div className='relative w-full max-w-xs md:max-w-sm border-b border-gray-300 flex'>
            <label htmlFor='search-input' className='sr-only'>
              Search:
            </label>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full py-2 px-2 placeholder-gray-500 focus:outline-none'
              name='searchString'
            />
            <button
              type='submit'
              className='flex items-center justify-center px-2'
            >
              <Search className='w-5 h-5' />
            </button>
          </div>
          <input type='hidden' name='search-cat' value='header-search' />
        </form>
        <div>
          <SortDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Shopheader
