import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../AI_Insight_Labz Logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeClass = "text-primary font-semibold";
  const inactiveClass = "text-gray-600 hover:text-primary transition-colors duration-200";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 safe-pt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-1 group" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="AI Insight Labz logo" className="h-20 md:h-15 object-contain" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => isActive ? activeClass : inactiveClass}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/courses"
              className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" /* iOS touch target size */
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto safe-pb">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                    isActive ? "bg-blue-50 text-primary border border-blue-100" : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <NavLink
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white px-5 py-4 rounded-xl font-medium mt-4 shadow-md hover:bg-blue-600 transition-colors"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
