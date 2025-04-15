import React from 'react';
import { motion } from 'framer-motion';
import { Mail, SendHorizonal } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 text-text font-body">
      <div className="max-w-3xl mx-auto">

        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title justify-center">
            <Mail className="w-6 h-6 text-primary" />
            Let’s Connect
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto mt-2">
            Got a project in mind or just want to say hello? I’m always open to meaningful collaborations, freelance work, or friendly tech chats.
          </p>
        </motion.div>

        {/* ✨ Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/your-form-id" // ✅ Replace with real Formspree ID
          method="POST"
          className="card-glass border border-border p-8 rounded-2xl shadow-lg space-y-6 backdrop-blur-md"
        >
          {/* Anti-spam honeypot */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
          ></textarea>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            aria-label="Send contact message"
            className="btn btn-outline flex items-center gap-2 justify-center"
          >
            <SendHorizonal className="w-4 h-4" />
            <span>Send Message</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

