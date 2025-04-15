import React from 'react';
import { motion } from 'framer-motion';

const BannerCTA = () => {
  return (
    <section className="relative glow-ring z-10 max-w-5xl mx-auto my-24 px-6 py-16 md:py-20 text-center card-glass border border-border rounded-2xl backdrop-blur-md shadow-xl ring-1 ring-white/10 overflow-hidden">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4"
      >
        Ready to Work Together?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        You won’t regret it — I prove my value through thoughtful collaboration and results-driven work.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/Danut-Grigore-Resume.pdf"
          download
          className="btn btn-outline text-sm sm:text-base px-6 py-3 rounded-xl font-semibold border-primary text-primary hover:bg-primary/10 hover:shadow-sm transition"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="btn btn-primary text-sm sm:text-base px-6 py-3 rounded-xl font-semibold text-white shadow-md hover:brightness-110 hover:shadow-lg transition"
        >
          🤝 Hire Me
        </a>
      </div>
    </section>
  );
};

export default BannerCTA;

