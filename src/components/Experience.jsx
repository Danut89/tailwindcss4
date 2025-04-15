import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';
import Divider from './Divider';

const experienceData = {
  education: [
    {
      title: 'Code Institute',
      subtitle: 'Full-Stack Web Development Diploma',
      date: 'Apr 2024 – May 2025',
      highlights: [
        'Distinction-grade evaluations on all milestone projects.',
        'Led frontend in agile team-based hackathons.',
        'Built ReadEase – recognized for accessibility & UX.',
        'Mastered HTML, CSS, JS, Python, Django, SQL.',
        'CI/CD, Git, testing, and modern deployment workflows.',
      ],
    },
    {
      title: 'Udemy',
      subtitle: 'Self-Taught Web Development & Programming',
      date: '2023 – Aug 2024',
      highlights: [
        'Completed 84-hour full-stack program.',
        'Built 15+ apps using React, JS, Tailwind.',
        'Covered REST APIs, JWT, Node, component design.',
      ],
    },
  ],
  experience: [
    {
      title: 'Software Engineer',
      subtitle: 'Freelance Developer',
      date: 'Jul 2023 – Jul 2024',
      highlights: [
        'Developed sites for restaurants and auto garages.',
        'Built CMS solutions for client content updates.',
        'Focused on SEO, accessibility, fast load performance.',
        'Handled full lifecycle — from wireframes to launch.',
      ],
    },
    {
      title: 'Software Engineer',
      subtitle: 'Hackathon Collaborator',
      date: 'May 2024 – Aug 2024',
      highlights: [
        'Developed “BattleCity” — classic tank game revival.',
        'Led frontend using reusable component libraries.',
        'Built ReadEase with inclusive UI and keyboard navigation.',
        'Collaborated with GitHub projects using sprint planning.',
      ],
    },
  ],
};

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const TimelineCard = ({ entry, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      variants={cardMotion}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      className="bg-white/5 backdrop-blur-md border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text">{entry.title}</h3>
          <p className="text-sm italic text-muted">{entry.subtitle}</p>
        </div>
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="text-primary hover:text-secondary focus:outline-none transition"
          aria-label="Toggle details"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-2">{entry.date}</p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4 space-y-2 pl-1"
          >
            {entry.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <FaCheckCircle className="mt-1 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  const [openIndexEdu, setOpenIndexEdu] = useState(null);
  const [openIndexExp, setOpenIndexExp] = useState(null);

  return (
    <section id="experience" className="bg-background py-24 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto space-y-20">


        {/* 🧠 Education & Experience Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary flex items-center justify-center gap-2">
            <span className="text-4xl">🧠</span>
            <span>Education & Experience</span>
          </h2>

          <p className="text-muted text-base mt-3 max-w-xl mx-auto">
            Where I’ve studied and built software that solves real-world problems — from formal training to hands-on development.
          </p>

          <div className="mt-4 w-16 h-1 bg-secondary mx-auto rounded" />
        </div>


        {/* Education Block */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary">🎓 Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.education.map((item, i) => (
              <TimelineCard
                key={i}
                entry={item}
                index={i}
                openIndex={openIndexEdu}
                setOpenIndex={setOpenIndexEdu}
              />
            ))}
          </div>
        </div>

        {/* Experience Block */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary">💼 Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.experience.map((item, i) => (
              <TimelineCard
                key={i}
                entry={item}
                index={i}
                openIndex={openIndexExp}
                setOpenIndex={setOpenIndexExp}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
