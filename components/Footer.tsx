import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, Phone, Mail, MapPin, Brain } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8 safe-pb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div>
            <NavLink to="/" className="flex items-center gap-1 mb-6 group">
              {/* Logo Graphic */}
              <div className="flex items-end relative h-10 pb-1">
                 <span className="text-4xl font-extrabold bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-[0.8] select-none" style={{ fontFamily: 'Times New Roman, serif' }}>
                   A
                 </span>
                 <div className="flex flex-col items-center justify-end h-full ml-[-2px] mb-[1px]">
                   <Brain className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                   <div className="w-2.5 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm mt-0.5"></div>
                 </div>
              </div>
              <div className="flex flex-col justify-center ml-2 pl-2 h-8 border-l border-gray-700">
                <span className="text-base font-bold text-gray-300 tracking-[0.2em] leading-none group-hover:text-white transition-colors">INSIGHT</span>
                <span className="text-base font-bold text-gray-300 tracking-[0.2em] leading-none mt-1 group-hover:text-white transition-colors">LABZ</span>
              </div>
            </NavLink>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering students and professionals with cutting-edge skills, real-time projects, and career-defining opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2 -ml-2"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/ai-insight-labz/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors p-2"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white border-b-2 border-primary inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base block py-1">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base block py-1">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base block py-1">Services</NavLink></li>
              <li><NavLink to="/courses" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base block py-1">Courses</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-400 hover:text-primary transition-colors text-sm sm:text-base block py-1">Projects</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white border-b-2 border-primary inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm sm:text-base">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm sm:text-base">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm sm:text-base break-all">{EMAIL_ADDRESS}</span>
              </li>
            </ul>
          </div>

           {/* Newsletter / CTA */}
           <div>
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white border-b-2 border-primary inline-block pb-1">Join Us</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Ready to start your journey?</p>
            <a 
              href={`https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg touch-manipulation"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;