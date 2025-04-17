// ProjectsCarousel.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Rocket, CheckCircle } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  HTML5: 'bg-orange-100 text-orange-800',
  CSS3: 'bg-blue-100 text-blue-800',
  JavaScript: 'bg-yellow-100 text-yellow-800',
  Bootstrap: 'bg-indigo-100 text-indigo-800',
  'HTML5 Canvas': 'bg-rose-100 text-rose-800',
  'Hammer.js': 'bg-pink-100 text-pink-800',
  'Font Awesome': 'bg-zinc-100 text-zinc-800',
  'Node.js': 'bg-lime-100 text-lime-800',
  Express: 'bg-slate-100 text-slate-800',
  PostgreSQL: 'bg-green-100 text-green-800',
  'JWT Auth': 'bg-rose-100 text-rose-700',
  Markdown: 'bg-blue-100 text-blue-700',
};

const ProjectsCarousel = () => {
  const [open, setOpen] = useState({});

  return (
    <section id="projects" className="py-24 px-6 text-text font-body">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient text-center mb-10">
          Projects
        </h2>

        <Swiper
        spaceBetween={40}
        slidesPerView={1} // default
        breakpoints={{
            768: { slidesPerView: 1.5 }, // slight peek of the next card
            1024: { slidesPerView: 2 },
        }}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        >

          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[var(--color-surface-alt)] rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/5 transition duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-scale-down bg-surface-alt"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-[5px] text-xs font-medium rounded-full border border-border backdrop-blur-sm ${techColors[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setOpen((prev) => ({ ...prev, [index]: !prev[index] }))
                    }
                    className="text-sm text-primary hover:text-accent transition mb-3"
                  >
                    {open[index] ? 'Hide Details ▲' : 'Show Details ▼'}
                  </button>

                  <AnimatePresence>
                    {open[index] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 text-sm text-muted mb-4"
                      >
                        {project.details.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <CheckCircle className="w-4 h-4 text-accent mt-1" />
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary flex items-center gap-2 text-sm"
                    >
                      <Rocket className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline text-sm"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
