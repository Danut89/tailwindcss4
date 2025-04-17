import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Github, Rocket } from 'lucide-react';
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
    title: 'hellloo',
    description:
      'A full-stack social recipe sharing platform where users can register, interact, and manage recipes in a clean, modern UI with full markdown support.',
    details: [
      'Awarded distinction as a full-stack project.',
      'Includes user auth, markdown, admin dashboard.',
      'Built with scalable logic and responsive design.',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'Markdown'],
    image: project3Img,
    demo: '#',
    code: 'https://github.com/Danut89/Project_Online_Cookbook',
  },
];

const ProjectCarousel = () => {
  return (
    <section className="py-24 px-6 text-text font-body">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-4">
            Projects
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            A clean carousel layout with a coverflow animation and crisp alignment for showcasing work.
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2.5, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 1.4 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Pagination, Navigation, EffectCoverflow]}
          className="pb-24"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!px-4">
              <div className="rounded-2xl shadow-xl ring-1 ring-white/5 bg-[var(--color-surface-alt)] p-6 max-w-md mx-auto min-h-[460px] flex flex-col justify-between">
                <div className="h-48 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain max-h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary flex items-center gap-2 text-sm"
                  >
                    <Rocket className="w-4 h-4" /> Live Demo
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectCarousel;

