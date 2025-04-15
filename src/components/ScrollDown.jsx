import React from 'react';
import { ChevronsDown } from 'lucide-react';

const ScrollDown = () => {
  return (
    <a
      href="#about"
      className="flex flex-col items-center justify-center text-muted hover:text-primary transition duration-300 animate-bounce mt-10"
      aria-label="Scroll down"
    >
      <ChevronsDown className="w-6 h-6" />
      <span className="text-xs mt-1">Scroll to explore</span>
    </a>
  );
};

export default ScrollDown;
