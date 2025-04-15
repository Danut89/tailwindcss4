import React from 'react';
import { motion } from 'framer-motion';
import Skills from './Skills';

const About = () => {
  return (
    <section className="bg-background text-text px-6 md:px-12 lg:px-20 py-24 font-body">
  <div className="max-w-6xl mx-auto">

   {/* 🔹 About Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary flex justify-center items-center gap-2">
        <span className="text-4xl">👨‍💻</span>
        <span>Who I Am & What I Do</span>
      </h2>

      <p className="text-muted text-base mt-3 max-w-xl mx-auto">
        I’m a full-stack developer focused on building accessible, user-first experiences that balance performance and visual polish.
      </p>

      <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded" />
    </div>


    {/* Main content container */}
    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* ✍️ About Text */}
      <div className="card-soft p-6 md:p-8">
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
      </div>

      {/* 💻 Skills Stack */}
      <div className="card-soft p-6 md:p-8">
        <Skills />
      </div>
    </div>
  </div>
</section>

  );
};

export default About;

