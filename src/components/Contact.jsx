import React from 'react';
import { motion } from 'framer-motion';
import { Mail, SendHorizonal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--color-surface-alt)] text-text font-body">
      <div className="max-w-3xl mx-auto">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-gradient justify-center">
            <Mail className="w-6 h-6 text-primary" />
            Let’s Connect
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto mt-2">
            Got a project in mind or just want to say hello? I’m always open to meaningful collaborations, freelance work, or friendly tech chats.
          </p>
        </motion.div>

        {/* ✨ Modern Contact Box */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="relative border border-glass bg-dark-surface/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-300"
        >
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <div className="space-y-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-text placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-text placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full rounded-lg border border-border bg-transparent px-4 py-3 text-text placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
            ></textarea>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              aria-label="Send contact message"
              className="btn btn-outline flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <SendHorizonal className="w-4 h-4" />
              <span>Send Message</span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

