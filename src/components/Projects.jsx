import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import project1Img from '../assets/project-images/project1.webp';
import project2Img from '../assets/project-images/project2.webp';
import project3Img from '../assets/project-images/project3.webp';

const projects = [
  {
    title: 'Vegan Bliss',
    description:
      'A full-stack responsive platform designed for health-conscious users to discover vegan recipes, explore blogs, and connect via a contact form.',
    details: [
      'Received distinction-level feedback from Code Institute for clean code, accessibility, and UX.',
      'Deployed on GitHub Pages with fully responsive layout.',
      'Includes blog posts, contact forms, and email integration.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Font Awesome'],
    image: project1Img,
    demo: 'https://danut89.github.io/ProjectMilestone1-Vegan-Bliss/',
    code: 'https://github.com/Danut89/ProjectMilestone1-Vegan-Bliss',
  },
  {
    title: 'ByteSnake',
    description:
      'A dynamic browser game reimagining the classic Snake. Players navigate using keyboard or swipe to collect food, grow, and avoid collisions.',
    details: [
      'Built with vanilla JavaScript, CSS animations, and touch support.',
      'Tracks score memory with smooth transitions.',
      'Earned distinction for game logic, responsiveness, and polish.',
    ],
    tags: ['HTML5 Canvas', 'CSS3', 'JavaScript', 'Hammer.js', 'Font Awesome'],
    image: project2Img,
    demo: 'https://danut89.github.io/Project-Milestone-2-Snake/',
    code: 'https://github.com/Danut89/Project-Milestone-2-Snake',
  },
  {
    title: 'DishCraft',
    description:
      'A full-stack social recipe sharing platform where users can register, interact, and manage recipes in a clean, modern UI with full markdown support.',
    details: [
      'Awarded distinction as a full-stack project.',
      'Includes user auth, markdown, admin dashboard.',
      'Built with scalable logic and responsive design.',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'Markdown'],
    image: project3Img,
    demo: 'https://project-online-cookbook.onrender.com/',
    code: 'https://github.com/Danut89/Project_Online_Cookbook',
  },
];

const techColors = {
  'HTML5': 'bg-orange-100 text-orange-800',
  'CSS3': 'bg-blue-100 text-blue-800',
  'JavaScript': 'bg-yellow-100 text-yellow-800',
  'Bootstrap': 'bg-indigo-100 text-indigo-800',
  'HTML5 Canvas': 'bg-rose-100 text-rose-800',
  'Hammer.js': 'bg-pink-100 text-pink-800',
  'Font Awesome': 'bg-zinc-100 text-zinc-800',
  'Node.js': 'bg-lime-100 text-lime-800',
  'Express': 'bg-slate-100 text-slate-800',
  'PostgreSQL': 'bg-green-100 text-green-800',
  'JWT Auth': 'bg-rose-100 text-rose-700',
  'Markdown': 'bg-blue-100 text-blue-700',
};

const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="bg-background py-24 px-6 text-text font-body">
  <div className="max-w-7xl mx-auto">
    
    {/* 🔸 Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary flex items-center justify-center gap-3">
        <span>📦</span>
        <span>Projects</span>
      </h2>
      <p className="text-muted text-base mt-4 max-w-2xl mx-auto">
        A collection of professional and personal projects crafted with care — built using modern tech stacks and a focus on elegant, user-centered experiences.
      </p>
    </div>

    {/* 🔸 Projects Grid */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.1, duration: 0.5 },
        },
      }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {projects.map((project, index) => {
        const isOpen = openProjects[index];

        return (
          <motion.div
            key={index}
            variants={cardVariant}
            className="card-glass rounded-3xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition duration-300 flex flex-col overflow-hidden"
          >
            {/* 🔹 Title (Top Centered) */}
            <h3 className="text-xl font-heading font-semibold text-primary text-center pt-5 px-4">
              {project.title}
            </h3>
            <div className="w-10 h-[2px] bg-secondary mx-auto mb-3 rounded-full" />

            {/* 🔹 Image */}
            <div className="relative px-4 pb-0">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* 🔹 Content */}
            <div className="p-6 pt-4 flex flex-col flex-grow">
              
              {/* 🔸 Tech Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4 text-[0.75rem]">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`px-3 py-1 text-xs font-medium rounded-full border border-border shadow-sm backdrop-blur-sm hover:scale-[1.03] transition ${techColors[tag] || 'bg-gray-100 text-gray-700'}`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* 🔹 Description */}
              <p className="text-sm text-muted mb-2">{project.description}</p>

              {/* 🔹 Details Toggle */}
              <div className="relative w-full">
                <button
                  onClick={() =>
                    setOpenProjects((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                  className="text-sm text-primary hover:text-secondary hover:underline underline-offset-4 transition duration-150 mb-2"
                >
                  {isOpen ? 'Hide Details ▲' : 'Show Details ▼'}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-2 text-sm text-muted mb-4 leading-relaxed"
                    >
                      {project.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 text-accent">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* 🔹 Action Buttons */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.demo}
                  className="btn btn-primary text-sm sm:text-base flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  🚀 Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.code}
                  className="btn btn-outline  text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-primary/10 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  🐙 GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

  );
};

export default Projects;
