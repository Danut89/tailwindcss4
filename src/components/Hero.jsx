import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile5.png';

const Hero = () => {
  return (
    <section className="bg-background min-h-screen px-6 md:px-12 lg:px-20 py-24 text-text font-body relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16 lg:gap-24">

        {/* Left: Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-primary">
            Hi, I’m <span className="text-secondary">Danut Grigore</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            I build accessible, user-friendly interfaces that balance performance and aesthetics.
            Let’s transform ideas into seamless digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              aria-label="View my projects"
              className="bg-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform shadow-md hover:brightness-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              aria-label="Contact me"
              className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:bg-primary/10 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 md:mt-0"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-background/20 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-secondary/30">
            <motion.img
              src={profileImage}
              alt="Danut Grigore"
              className="w-full h-full object-contain rounded-2xl border border-secondary/60 shadow-lg p-1 bg-background"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="text-muted text-sm"
        >
          ↓ Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
