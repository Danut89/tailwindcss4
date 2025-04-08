import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-heading font-bold text-primary">Danut Grigore</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-text font-body text-sm">
          <li>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text focus:outline-none"
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
        <ul className="md:hidden px-4 pb-4 space-y-3 text-text font-body text-sm">
          <li><a href="#about" onClick={toggleMenu} className="block hover:text-primary">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block hover:text-primary">Projects</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="block hover:text-primary">Experience</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block hover:text-primary">Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
