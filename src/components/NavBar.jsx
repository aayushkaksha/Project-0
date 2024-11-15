import { useState } from 'react';
import { User, ShoppingCart, Menu, MailIcon } from 'lucide-react';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const GotoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="sticky top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto relative">
        <nav className="flex items-center justify-between py-4">
          <NavLink to="/" className="text-2xl font-bold" onClick={GotoTop}>
            Brand<span className="text-primary">.</span>
          </NavLink>

          <ul className="hidden lg:flex space-x-6">
            <li>
              <NavLink to="/Men" className="flex items-center" onClick={GotoTop}>
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/Women" onClick={GotoTop}>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="text-primary" onClick={GotoTop}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactPage" onClick={GotoTop}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <NavLink to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </NavLink>
            <NavLink to="/message" className="relative p-2 hover:bg-gray-100 rounded-full">
              <MailIcon className="w-5 h-5" />
            </NavLink>
            <button onClick={openCart} className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button onClick={toggleMenu} className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden mt-2 py-2 bg-white border-t">
            <ul className="space-y-2">
              <li>
                <NavLink to="/Men" className="block px-4 py-2 hover:bg-gray-100" onClick={GotoTop}>
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink to="/Women" className="block px-4 py-2 hover:bg-gray-100" onClick={GotoTop}>
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="block px-4 py-2 hover:bg-gray-100 text-primary" onClick={GotoTop}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/ContactPage" className="block px-4 py-2 hover:bg-gray-100" onClick={GotoTop}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Render Cart */}
      <Cart open={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default NavBar;
