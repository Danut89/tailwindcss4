import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern developer portfolio built with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Tailwind', 'Vite'],
    demo: '#',
    code: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard with chart visualizations and CRUD features.',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Chart.js', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Full-stack blog app with markdown support and user auth.',
    image: 'https://via.placeholder.com/300x200',
    tags: ['Node.js', 'Express', 'MongoDB'],
    demo: '#',
    code: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.demo}
                    className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-sm text-indigo-600 border border-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-md"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
