import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

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
              
              {/* Logo Graphic Part */}
                
      
            
              
              
              {/*
              <div className="flex items-end relative h-10 md:h-12 pb-1">
                 {/* Gold A */}      
                 <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-[0.8] select-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                   A
                 </span>
                 
                 {/* Brain I */}    
                 <div className="flex flex-col items-center justify-end h-full ml-[-2px] mb-[2px]">
                   <Brain className="w-5 h-5 md:w-6 md:h-6 text-orange-500" strokeWidth={2.5} />
                   <div className="w-2.5 h-4 md:w-3 md:h-5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm mt-0.5 shadow-sm"></div>
                 </div>
              </div>

              {/* Logo Text Part */}        
              <div className="flex flex-col justify-center ml-2 border-l border-gray-200 pl-2 md:pl-3 h-8 md:h-10">
                 <span className="text-sm md:text-lg font-bold text-gray-500 tracking-[0.2em] leading-none">INSIGHT</span>
                 <span className="text-sm md:text-lg font-bold text-gray-500 tracking-[0.2em] leading-none mt-0.5 md:mt-1">LABZ</span>
              </div>
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
