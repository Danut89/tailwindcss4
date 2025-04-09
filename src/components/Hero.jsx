import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-background min-h-screen px-6 md:px-12 lg:px-20 py-24 text-text font-body">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-20">

        {/* Left: Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-primary">
            Hi, I’m <span className="text-secondary">Danut Grigore</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            I build accessible, user-friendly interfaces that balance performance and aesthetics.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-full transition font-medium shadow-sm hover:bg-primary/90"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full transition font-medium hover:bg-primary/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="/src/assets/profile.jpg"
            alt="Danut Grigore"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-secondary/40 shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

