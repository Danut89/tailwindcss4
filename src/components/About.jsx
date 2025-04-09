import React from 'react';
import { motion } from 'framer-motion';
import Skills from './Skills';

const About = () => {
  return (
    <section className="bg-background text-text px-6 md:px-12 lg:px-20 py-24 font-body">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

    {/* ✍️ About Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
        Who I Am & What I Do
      </h2>

      <p className="mb-4 leading-relaxed text-muted">
        I’m a <span className="font-semibold text-text">dedicated full-stack developer</span> with a passion for creating seamless and engaging user experiences.
        I work with tools like <span className="font-semibold">HTML, CSS, JavaScript, and React</span> on the frontend, and <span className="font-semibold">Python, Django, Node.js</span> on the backend.
      </p>

      <p className="mb-4 leading-relaxed text-muted">
        My journey began with curiosity — now I craft scalable, efficient, and delightful web interfaces that solve real problems.
      </p>

      <p className="text-muted">
        Whether collaborating with clients or coding late into the night, I aim to build
        <span className="text-primary font-medium"> clean, accessible, and high-performing solutions.</span>
      </p>
    </div>
    {/* 💻 Tech Stack Skills Component */}
    <Skills />
  </div>
</section>

  );
};

export default About;

