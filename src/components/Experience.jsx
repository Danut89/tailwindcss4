import React from 'react';
import { motion } from 'framer-motion';

const timelineItem = (item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    viewport={{ once: true }}
    className="pl-10 relative"
  >
    <span className="absolute left-0 top-1.5 w-3 h-3 bg-secondary rounded-full ring-2 ring-white shadow-md"></span>
    <h3 className="text-lg font-semibold text-text">{item.title}</h3>
    <p className="italic text-sm text-muted mb-1">{item.subtitle}</p>
    <p className="text-sm text-muted">{item.description}</p>
    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
  </motion.div>
);

const Experience = () => {
  const education = [
    {
      title: 'Code Institute',
      subtitle: 'Full-Stack Web Development Diploma',
      description: 'Currently pursuing an intensive full-stack program covering HTML, CSS, JavaScript, Python, Django, and SQL.',
      date: 'Apr 2024 – May 2025',
    },
    {
      title: 'Udemy',
      subtitle: 'Self-Taught Web Development & Programming',
      description: 'Completed courses on HTML, CSS, JavaScript, and Python, strengthening my freelance work.',
      date: '2023 – August 2024',
    },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      subtitle: 'Freelance Developer',
      description: 'Built and maintained custom web apps for private clients, tailoring solutions to their needs.',
      date: 'Jul 2023 – Jul 2024',
    },
    {
      title: 'Software Engineer',
      subtitle: 'Hackathon Collaborator',
      description: 'Built innovative apps in high-pressure hackathons using modern dev stacks.',
      date: 'May 2024 – Aug 2024',
    },
  ];

  return (
    <section id="experience" className="bg-background py-24 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Education</h2>
          <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-border">
            {education.map(timelineItem)}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Experience</h2>
          <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-border">
            {experience.map(timelineItem)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
