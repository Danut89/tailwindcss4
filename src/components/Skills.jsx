import React from 'react';
import { motion } from 'framer-motion';

const groupedSkills = {
  Frontend: [
    { name: 'HTML', color: 'bg-orange-50 text-orange-700' },
    { name: 'CSS', color: 'bg-blue-50 text-blue-700' },
    { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-800' },
    { name: 'TypeScript', color: 'bg-sky-50 text-sky-700' },
    { name: 'React', color: 'bg-cyan-50 text-cyan-700' },
    { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-700' },
  ],
  Backend: [
    { name: 'Node.js', color: 'bg-lime-50 text-lime-700' },
    { name: 'Express', color: 'bg-zinc-50 text-zinc-700' },
    { name: 'MongoDB', color: 'bg-green-50 text-green-700' },
  ],
  Tools: [
    { name: 'Git', color: 'bg-pink-50 text-pink-700' },
    { name: 'Vite', color: 'bg-purple-50 text-purple-700' },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md border border-secondary/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full"
    >
      <h3 className="text-lg font-heading font-semibold text-secondary mb-6 pt-1">
        Tech Stack
      </h3>

      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([group, skills]) => (
          <div key={group}>
            <h4 className="text-sm font-semibold uppercase text-muted mb-2">
              {group}
            </h4>
            <div className="flex flex-wrap gap-2 justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-sm rounded-full font-medium font-body transition-all duration-200 ${skill.color} hover:scale-105 hover:shadow-md`}
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


