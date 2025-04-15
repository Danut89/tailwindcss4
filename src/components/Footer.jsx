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
    <footer className="bg-background border-t border-border py-10 px-6 text-sm font-body">
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
            href="/Danut-Grigore-Resume.pdf"
            download
            className="flex items-center gap-2 text-muted hover:text-primary transition"
          >
            <FileText className="w-4 h-4" />
            Resume
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:voicuion488@gmail.com"
            className="flex items-center gap-2 text-muted hover:text-primary transition"
          >
            <Mail className="w-4 h-4" />
            Email
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Danut89"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-primary transition"
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
            className="text-muted hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>

          {/* Back to top */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#top"
            className="flex items-center gap-2 text-muted hover:text-primary transition"
          >
            <ArrowUpCircle className="w-4 h-4" />
            Top
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


