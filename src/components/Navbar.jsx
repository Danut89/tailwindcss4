import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <div className="text-xl sm:text-2xl font-heading font-semibold text-primary tracking-tight">
          Danut <span className="text-accent">Grigore</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-text font-body text-sm">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative hover:text-primary transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full" />
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

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden px-6 py-4 bg-white shadow-md rounded-b-xl space-y-3 text-text font-body text-base animate-fadeIn">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={toggleMenu}
                className="block py-1 hover:text-primary transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

