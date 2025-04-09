import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-background min-h-screen px-6 md:px-12 lg:px-20 py-24 text-text font-body">
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
              className="bg-primary text-background px-6 py-3 rounded-full transition font-medium shadow-md hover:bg-primary/90"
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
        <div className="relative w-72 h-72 bg-background/20 backdrop-blur-md rounded-2xl shadow-xl p-2 border border-secondary/30">
          <img
            src="/src/assets/profile5.png"
            alt="Danut Grigore"
            className="w-72 h-72 object-contain rounded-2xl border border-secondary/60 shadow-lg p-1 bg-background "
          />
        </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

