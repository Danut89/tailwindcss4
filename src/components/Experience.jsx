import React from 'react';
import { motion } from 'framer-motion';

const data = {
  education: [
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
  ],
  experience: [
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
  ],
};

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const TimelineCard = ({ entry, i }) => (
  <motion.div
    variants={cardMotion}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    custom={i}
    className="bg-white/5 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
  >
    <div className="flex items-start gap-3">
      <div className="w-3 h-3 mt-1 rounded-full bg-secondary shadow-md ring-2 ring-white"></div>
      <div>
        <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
        <p className="text-sm italic text-muted mb-2">{entry.subtitle}</p>
        <p className="text-sm text-muted">{entry.description}</p>
        <p className="text-xs text-gray-400 mt-3">{entry.date}</p>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-background py-24 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Education */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-10">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.education.map((item, i) => (
              <TimelineCard key={i} entry={item} i={i} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary mb-10">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.experience.map((item, i) => (
              <TimelineCard key={i} entry={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
