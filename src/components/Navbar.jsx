import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold text-indigo-700">John Doe</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-indigo-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Links */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
