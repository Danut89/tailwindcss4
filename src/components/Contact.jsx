import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-24 px-6 text-text font-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl font-heading font-bold text-primary mb-4">
          Let's Connect
        </h2>
        <p className="text-muted mb-10 text-lg">
          Got a project in mind or just want to say hello? I’m always open to new opportunities and collaborations.
        </p>

        {/* Form */}
        <form
          action="https://formspree.io/f/your-form-id" // Replace this!
          method="POST"
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-border shadow-md flex flex-col gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-text placeholder:text-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
          ></textarea>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            aria-label="Send contact message"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;


