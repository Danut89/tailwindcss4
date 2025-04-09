import React from 'react';
import { motion } from 'framer-motion';
import project1Img from '../assets/project-images/project1.png';
import project2Img from '../assets/project-images/project2.png';
import project3Img from '../assets/project-images/project3.png';


const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern developer portfolio built with React and Tailwind CSS.',
    impact: 'Used by multiple devs as inspiration for their portfolios.',
    image: project1Img,
    tags: ['React', 'Tailwind', 'Vite'],
    demo: 'https://danut89.github.io/ProjectMilestone1-Vegan-Bliss/',
    code: 'https://github.com/Danut89/ProjectMilestone1-Vegan-Bliss',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard with chart visualizations and CRUD features.',
    impact: 'Helps businesses visualize sales and manage inventory.',
    image: project2Img,
    tags: ['React', 'Chart.js', 'MongoDB'],
    demo: 'https://battlecity-5c42a227b130.herokuapp.com/',
    code: 'https://github.com/Danut89/Project-Battle-City',
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blog app with markdown support and user auth.',
    impact: 'Built with full user authentication and markdown parsing.',
    image: project3Img,
    tags: ['Node.js', 'Express', 'MongoDB'],
    demo: 'https://danut89.github.io/Project-Milestone-2-Snake/',
    code: 'https://github.com/Danut89/Project-Milestone-2-Snake',
  },
];


const techColors = {
  React: 'bg-cyan-50 text-cyan-700',
  Tailwind: 'bg-teal-50 text-teal-700',
  Vite: 'bg-purple-50 text-purple-700',
  'Chart.js': 'bg-yellow-50 text-yellow-700',
  MongoDB: 'bg-green-50 text-green-700',
  'Node.js': 'bg-lime-50 text-lime-700',
  Express: 'bg-zinc-50 text-zinc-700',
};

const Projects = () => {
  return (
    <section id="projects" className="bg-background py-24 px-6 text-text font-body">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 backdrop-blur-md border border-border rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative p-4 pb-0">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted mb-2">{project.description}</p>
                <p className="text-xs text-muted italic mb-4">{project.impact}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xl shadow-sm ${techColors[tag] || 'bg-gray-100 text-gray-700'} transition`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.demo}
                    className="bg-primary text-white text-sm px-5 py-2 rounded-xl font-medium shadow-md hover:bg-primary/90 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.code}
                    className="border border-primary text-primary text-sm px-5 py-2 rounded-xl font-medium hover:bg-primary/10 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
