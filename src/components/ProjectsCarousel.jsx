
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Rocket, Boxes, CheckCircle } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

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
  {
    title: 'vddg',
    description:
      'A full-stack responsive platform designed for health-conscious users to discover vegan recipes, explore blogs, and connect via a contact form.',
    details: [
      'Received distinction-level feedback from Code Institute for clean code, accessibility, and UX.',
      'Deployed on GitHub Pages with fully responsive layout.',
      'Includes blog posts, contact forms, and email integration.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Font Awesome'],
    image: project1Img,
    demo: '#',
    code: '#',
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

const Projects = () => {
  const [openProjects, setOpenProjects] = useState({});

  return (
    <section id="projects" className="bg-background py-16 md:py-20 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient flex items-center justify-center gap-3">
            <Boxes className="w-7 h-7 text-accent" />
            Projects
          </h2>
          <p className="text-muted text-base mt-4 max-w-2xl mx-auto">
            A collection of professional and personal projects crafted with care — built using modern tech stacks and a focus on elegant, user-centered experiences.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 160, modifier: 2.5, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 1.4 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Pagination, Navigation, EffectCoverflow]}
          className="pb-24"
        >
          {projects.map((project, index) => {
            const isOpen = openProjects[index];
            return (
              <SwiperSlide key={index} className="!px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl shadow-xl ring-1 ring-white/5 bg-[var(--color-surface-alt)] p-6 max-w-md mx-auto min-h-[460px] flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-scale-down bg-surface-alt"
                    />
                  </div>

                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-muted mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-[5px] text-xs font-medium rounded-full border border-border backdrop-blur-sm ${techColors[tag] || 'bg-gray-100 text-gray-700'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        setOpenProjects((prev) => ({
                          ...prev,
                          [index]: !prev[index],
                        }))
                      }
                      className="text-sm text-primary mt-3 hover:text-accent transition mb-3"
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
                          className="space-y-2 text-sm text-muted mb-4"
                        >
                          {project.details.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-accent mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-col sm:flex-row gap-3">
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
                        className="btn btn-outline text-sm ring-glow"
                      >
                        <span className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
