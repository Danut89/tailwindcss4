import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-glass bg-dark-surface/80 backdrop-blur-md shadow-glow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔷 Logo */}
        <a
          href="#top"
          className="text-xl sm:text-3xl font-heading font-bold tracking-tight text-gradient hover:opacity-90 transition"
        >
          D <span className="text-accent">G</span>
        </a>

        {/* 🖥 Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium font-body text-muted">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="relative hover:text-primary capitalize transition duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* 💼 CTA Button */}
          <a
            href="#cta"
            className="btn btn-primary btn-nav shadow-glow text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* 📱 Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden px-6 py-6 bg-dark-surface border-t border-glass space-y-4 text-base font-body text-text fade-in">
          {[...links, { id: 'cta', label: 'Hire Me' }].map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={toggleMenu}
                className="block hover:text-primary transition-colors duration-200 capitalize"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

