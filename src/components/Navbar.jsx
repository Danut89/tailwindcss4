import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons for mobile toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ['about', 'projects', 'experience', 'contact'];

  return (
    <header className="sticky top-0 z-50 border-b border-glass bg-dark-surface/80 backdrop-blur-md shadow-glow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔷 Logo / Name */}
        <a
          href="#"
          className="text-xl sm:text-3xl font-heading font-bold tracking-tight text-gradient hover:opacity-90 transition"
        >
          D <span className="text-accent">G</span>
        </a>

        {/* 🖥 Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium font-body text-muted">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative hover:text-primary hover-underline capitalize transition duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 py-6 bg-dark-surface border-t border-glass space-y-4 text-base font-body text-text fade-in">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={toggleMenu}
                className="block hover:text-primary transition-colors duration-200 capitalize"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
