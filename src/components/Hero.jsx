import React from 'react';
import { motion } from 'framer-motion'; 

const Hero = () => {
  return (
    <section className="bg-background min-h-screen px-8 md:px-16 py-16 text-text font-body">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16 py-12">

        {/* Left Text Block */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight text-primary">
            Hi, I’m <span className="text-accent">Danut Grigore</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl leading-relaxed">
            I build accessible, user-friendly interfaces that balance performance and aesthetics.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition font-medium">
              View Projects
            </button>
            <button className="border-2 border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition font-medium">
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src="/src/assets/profile.jpg"
          alt="Danut Grigore"
          className="w-72 h-72 rounded-full object-cover ring-4 ring-accent/40 shadow-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
