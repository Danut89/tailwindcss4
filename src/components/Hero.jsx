import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import profileImage from '../assets/profile7.jpg';
import { ChevronsDown } from 'lucide-react';

const Hero = () => {
  return (
<section className="relative bg-dark-surface text-text-light font-body px-6 md:px-12 lg:px-20 pt-24 pb-20 overflow-hidden">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16 lg:gap-24 text-center md:text-left">

    {/* 👋 Text Block */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col items-center md:items-start"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight text-primary">
        Hello, <br />
        I’m <span className="text-accent">Danut Grigore</span>
      </h1>

      <p className="mt-6 text-base sm:text-lg max-w-xl text-muted leading-relaxed fade-in">
        I build accessible, user-friendly interfaces that balance performance and aesthetics. <br />
        Let’s transform ideas into seamless digital experiences.
      </p>

      {/* 🌐 Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#projects"
          aria-label="View my projects"
          className="btn btn-primary btn-hero shadow-glow"
        >
          <Globe className="w-5 h-5" />
          <span>View Projects</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          aria-label="Contact me"
          className="btn btn-outline btn-hero ring-glow"
        >
          <Mail className="w-5 h-5" />
          <span>Contact Me</span>
        </motion.a>
      </div>
    </motion.div>

    {/* 🧑 Profile Image with Gradient Aura */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex justify-center mt-12 md:mt-0 relative"
    >
      {/* Blurred Glow Behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 to-accent-peach/20 blur-3xl opacity-40"></div>
      </div>

      <div className="relative w-56 h-56 sm:w-64 sm:h-64 glass-effect rounded-2xl p-2 border border-accent-peach/30 glow-ring z-10">
        <motion.img
          src={profileImage}
          alt="Danut Grigore"
          className="w-full h-full object-contain rounded-2xl border border-accent-peach/60 shadow-lg p-1 bg-dark-surface"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        />
      </div>
    </motion.div>
  </div>

  
</section>

  
  );
};

export default Hero;
