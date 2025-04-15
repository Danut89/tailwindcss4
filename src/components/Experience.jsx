import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, CheckCircle, ChevronDown } from 'lucide-react';

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

const Card = ({ entry, index, isOpen, toggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="education-card"
  >
    <div className="flex justify-between items-start gap-3">
      <div>
        <h3 className="education-title">{entry.title}</h3>
        <p className="education-subtitle">{entry.subtitle}</p>
      </div>
      <button
        onClick={toggle}
        className={`transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}
        aria-label="Toggle details"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
    <p className="education-date">{entry.date}</p>

    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-2"
        >
          {entry.highlights.map((item, i) => (
            <li key={i} className="education-detail">
              <CheckCircle className="w-4 h-4 mt-1 text-accent shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </motion.div>
);

const Experience = () => {
  const [openEdu, setOpenEdu] = useState(null);
  const [openExp, setOpenExp] = useState(null);

  return (
    <section id="experience" className="bg-background py-24 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* 🧠 Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient flex items-center justify-center gap-3">
            <GraduationCap className="w-7 h-7 text-accent" />
              My Journey

          </h2>
          <p className="text-muted text-base mt-3 max-w-xl mx-auto">
            Where I’ve studied and built software that solves real-world problems — from formal training to hands-on development.
          </p>
        </div>

        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-md" />

        {/* 🎓 Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.education.map((item, i) => (
              <Card
                key={i}
                entry={item}
                index={i}
                isOpen={openEdu === i}
                toggle={() => setOpenEdu(openEdu === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* 💼 Experience */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experienceData.experience.map((item, i) => (
              <Card
                key={i}
                entry={item}
                index={i}
                isOpen={openExp === i}
                toggle={() => setOpenExp(openExp === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
