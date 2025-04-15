import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 px-6 text-muted text-sm font-body">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* 📋 Left: Copyright */}
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Danut Grigore. All rights reserved.
        </p>

        {/* 🌐 Right: Links & Socials */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center text-sm">
          
          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <FaFileAlt className="text-base" />
            Resume
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:voicuion488@gmail.com"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <FaEnvelope className="text-base" />
            Email
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Danut89"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary text-xl transition"
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/danut-grigore-573674304/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary text-xl transition"
          >
            <FaLinkedin />
          </motion.a>

          {/* Back to top */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#top"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <FaArrowUp className="text-base" />
            Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

