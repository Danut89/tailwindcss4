import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ['about', 'projects', 'experience', 'contact'];

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border shadow-sm backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <a href="#" className="text-2xl font-heading font-bold text-primary tracking-tight">
          Danut <span className="text-secondary">Grigore</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-body text-text">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative hover:text-primary transition duration-200"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden px-6 py-4 bg-background border-t border-border space-y-4 text-base font-body text-text animate-fadeIn">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={toggleMenu}
                className="block hover:text-primary transition-colors duration-200"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;


