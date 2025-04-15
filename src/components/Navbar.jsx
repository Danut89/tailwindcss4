import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ['about', 'projects', 'experience', 'contact'];

  return (
    <header className="bg-dark-surface sticky top-0 z-50 border-b border-glass backdrop-blur-md shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔷 Logo / Name */}
        <a
          href="#"
          className="text-xl sm:text-3xl font-heading font-bold tracking-tight text-primary hover:opacity-90 transition"
        >
          D <span className="text-accent">G</span>
        </a>

        {/* 🖥 Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium font-body text-muted-gray">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative transition duration-200 hover:text-primary hover:tracking-wide"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="block h-[2px] w-0 bg-primary-blue absolute -bottom-1 left-0 transition-all duration-300 hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted-gray focus:outline-none"
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

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 py-6 bg-dark-surface border-t border-glass space-y-4 text-base font-body text-text animate-fadeIn">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={toggleMenu}
                className="block transition-colors duration-200 hover:text-primary-blue"
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
