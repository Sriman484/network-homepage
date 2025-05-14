import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className={`w-7 h-7 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>NetSphere</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`font-medium transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-800 hover:text-violet-600'
                : 'text-gray-100 hover:text-emerald-400'
            }`}
          >
            {link}
          </a>
          
          ))}
          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Get Started</button>
        </nav>

        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-emerald-600"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="w-full mt-2 px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
