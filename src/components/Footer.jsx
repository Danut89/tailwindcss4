import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUpCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-background py-12 px-6 text-sm font-body border-t border-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* 📋 Left: Copyright */}
        <p className="text-muted">
          &copy; {new Date().getFullYear()} <span className="text-gradient">Danut Grigore</span>. All rights reserved.
        </p>

        {/* 🌐 Right: Links & Socials */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center text-sm">

          {/* Resume */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Danut-Grigore-Resume.pdf"
            download
            className="flex items-center gap-2 text-muted hover:text-primary transition duration-300"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:voicuion488@gmail.com"
            className="flex items-center gap-2 text-muted hover:text-primary transition duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Danut89"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-link text-muted hover:text-primary transition"
          >
            <Github className="w-5 h-5" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/danut-grigore-573674304/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link text-muted hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          {/* Top */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#top"
            className="flex items-center gap-2 text-muted hover:text-primary transition duration-300"
          >
            <ArrowUpCircle className="w-4 h-4" />
            <span>Top</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



