import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'HTML', color: 'bg-orange-50 text-orange-700' },
    { name: 'CSS', color: 'bg-blue-50 text-blue-700' },
    { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-800' },
    { name: 'TypeScript', color: 'bg-sky-50 text-sky-700' },
    { name: 'React', color: 'bg-cyan-50 text-cyan-700' },
    { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-700' },
  ],
  backend: [
    { name: 'Node.js', color: 'bg-lime-50 text-lime-700' },
    { name: 'Express', color: 'bg-zinc-50 text-zinc-700' },
    { name: 'MongoDB', color: 'bg-green-50 text-green-700' },
  ],
  tools: [
    { name: 'Git', color: 'bg-pink-50 text-pink-700' },
    { name: 'Vite', color: 'bg-purple-50 text-purple-700' },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="card-glass rounded-2xl p-6 border border-secondary/20 backdrop-blur-md  shadow-lg w-full max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-heading font-semibold text-secondary mb-4">
        Tech Stack
      </h3>

      <div className="space-y-6">
        {Object.entries(skills).map(([group, tags]) => (
          <div key={group}>
            <p className="text-sm font-bold text-muted uppercase mb-2 tracking-wide">{group}</p>
            <div className="flex flex-wrap gap-3">
              {tags.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 text-sm rounded-xl font-medium font-body transition-all duration-200 ${skill.color} hover:scale-105 hover:shadow-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;



