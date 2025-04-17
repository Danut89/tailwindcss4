import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

const ScrollDown = ({ href = "#about", label = "Scroll to explore" }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="flex flex-col items-center justify-center text-muted hover:text-accent text-sm transition duration-300"
      aria-label={label}
    >
      <ChevronsDown className="w-5 h-5 mb-1" />
      <span className="text-xs tracking-wide">{label}</span>
    </motion.a>
  );
};

export default ScrollDown;
