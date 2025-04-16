import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, FileText } from 'lucide-react';

const BannerCTA = () => {
  return (
    <section id="cta" className="relative py-28 px-6 font-body text-center overflow-hidden z-10 ">
      {/* Decorative glow background */}
      <div className="absolute inset-0 z-[-1] flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      </div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="education-card relative mx-auto w-full max-w-4xl  rounded-3xl p-10 md:p-16 shadow-xl ring-1 ring-white/5 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition duration-300"
      >
        {/* Accent aura */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/20 blur-[120px] opacity-10 rounded-full z-[-1]" />

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-heading font-bold text-primary"
        >
          Let’s Build Something Amazing Together
        </motion.h2>

        {/* Subtext */}
        <p className="text-muted text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking for a reliable full-stack developer or want to collaborate on something unique —
          I bring energy, curiosity, and results-driven work to every project.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/Danut-Grigore-Resume.pdf"
            download
            className="btn btn-outline"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="btn btn-primary"
          >
            <Handshake className="w-4 h-4" />
            <span>Hire Me</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerCTA;

