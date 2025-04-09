import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 px-6 text-muted text-sm font-body">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left: Copyright */}
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Danut Grigore. All rights reserved.
        </p>

        {/* Right: Socials */}
        <div className="flex gap-5 text-xl">
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
