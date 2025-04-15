import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Handshake } from 'lucide-react';

const BannerCTA = () => {
  return (
    <section id="cta" className="my-24 px-6 font-body text-center">
      {/* 🔹 Section for Mobile */}
      <div className="sm:hidden max-w-3xl mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-heading font-bold text-primary mb-3"
        >
          Ready to Work Together?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-base leading-relaxed"
        >
          You won’t regret it — I prove my value through thoughtful collaboration and results-driven work.
        </motion.p>
      </div>

      {/* 🔸 Main CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative animated-border glow-ring z-10 max-w-5xl mx-auto card-glass border border-border rounded-2xl backdrop-blur-md shadow-xl ring-1 ring-white/10 overflow-hidden"
      >
        <div className="px-6 py-12 md:py-20">
          {/* 🔹 Desktop Title */}
          <h2 className="hidden sm:block text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Ready to Work Together?
          </h2>
          <p className="hidden sm:block text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            You won’t regret it — I prove my value through thoughtful collaboration and results-driven work.
          </p>

          {/* 🔘 CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/Danut-Grigore-Resume.pdf"
              download
              className="btn btn-outline w-full sm:w-auto"
              aria-label="Download resume"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn btn-primary w-full sm:w-auto"
              aria-label="Contact to hire me"
            >
              <Handshake className="w-4 h-4" />
              <span>Hire Me</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BannerCTA;
