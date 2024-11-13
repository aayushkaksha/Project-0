import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, MailIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SearchBox from './SearchBox'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='sticky top-0 z-50 w-full bg-white shadow-md'>
      <div className='container mx-auto relative'>
        <nav className='flex items-center justify-between py-4 pr-4 font-poppins'>
          <NavLink to='/' className='text-2xl font-bold pl-4 font-poppins'>
            Brand<span className='text-primary'>.</span>
          </NavLink>
          <ul className='hidden lg:flex space-x-6 font-poppins'>
            <li>
              <NavLink to='/Men' className='flex items-center font-poppins'>
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to='/Women' className='font-poppins'>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to='/About' className='text-primary font-poppins'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/ContactPage' className='font-poppins'>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className='flex items-center space-x-4 font-poppins'>
            <button
              onClick={toggleSearch}
              className='p-2 hover:bg-gray-100 rounded-full font-poppins'
            >
              <Search className='w-5 h-5' />
            </button>
            <NavLink
              to='/Profile'
              className='p-2 hover:bg-gray-100 rounded-full font-poppins'
            >
              <User className='w-5 h-5' />
            </NavLink>
            <NavLink
              to='/message'
              className='relative p-2 hover:bg-gray-100 rounded-full'
            >
              <MailIcon className='w-5 h-5' />
            </NavLink>
            <NavLink
              to='/Cart'
              className='relative p-2 hover:bg-gray-100 rounded-full font-poppins'
            >
              <ShoppingCart className='w-5 h-5' />
              <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full font-poppins'>
                2
              </span>
            </NavLink>
            <button
              onClick={toggleMenu}
              className='lg:hidden p-2 hover:bg-gray-100 rounded-full font-poppins'
            >
              <Menu className='w-5 h-5' />
            </button>
          </div>
        </nav>
        {searchOpen && <SearchBox toggleSearch={toggleSearch} />}
        {isMenuOpen && (
          <div className='lg:hidden mt-2 py-2 bg-white border-t font-poppins'>
            <ul className='space-y-2 font-poppins'>
              <li>
                <NavLink
                  to='/Men'
                  className='block px-4 py-2 hover:bg-gray-100 font-poppins'
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/Women'
                  className='block px-4 py-2 hover:bg-gray-100 font-poppins'
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/About'
                  className='block px-4 py-2 hover:bg-gray-100 text-primary font-poppins'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/ContactPage'
                  className='block px-4 py-2 hover:bg-gray-100 font-poppins'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
