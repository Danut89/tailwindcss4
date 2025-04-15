import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine } from 'lucide-react'; // Updated icon
import Skills from './Skills';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="bg-background text-text px-6 md:px-12 lg:px-20 py-24 font-body">
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Title */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient flex justify-center items-center gap-3">
            <ScanLine className="w-7 h-7 text-accent" />
            <span>Who I Am & What I Do</span>
          </h2>

          <p className="text-muted text-base mt-3 max-w-xl mx-auto">
            I’m a full-stack developer focused on building accessible, user-first experiences that balance performance and visual polish.
          </p>

          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-md" />
        </motion.div>

        {/* 🔸 Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* 💬 About Text */}
          <motion.div
            className="glass-effect p-6 md:p-8 rounded-xl hover:shadow-glow transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <p className="mb-4 leading-relaxed text-muted">
              I’m a <span className="font-semibold text-text">full–stack developer</span> passionate about building seamless and intuitive web experiences.
            </p>
            <p className="mb-4 leading-relaxed text-muted">
              On the frontend, I enjoy crafting with <span className="text-primary font-medium">HTML, CSS, JavaScript, React</span>, and on the backend I work with Node.js, Django & PostgreSQL.
            </p>
            <p className="mb-4 leading-relaxed text-muted">
              My journey began with curiosity and a love for creating. I now translate ideas into <span className="text-primary font-medium">high-performance, accessible</span> solutions that scale.
            </p>
            <p className="italic text-muted">
              Whether I’m coding late at night or collaborating with a team, I’m committed to building experiences that matter.
            </p>
          </motion.div>

          {/* 🛠️ Skills */}
          <motion.div
            className="glass-effect p-6 md:p-8 rounded-xl hover:shadow-glow transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
