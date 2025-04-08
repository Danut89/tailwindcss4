import React from 'react';

const skills = [
  { name: 'HTML', color: 'bg-orange-50 text-orange-700' },
  { name: 'CSS', color: 'bg-blue-50 text-blue-700' },
  { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-800' },
  { name: 'TypeScript', color: 'bg-sky-50 text-sky-700' },
  { name: 'React', color: 'bg-cyan-50 text-cyan-700' },
  { name: 'Tailwind CSS', color: 'bg-teal-50 text-teal-700' },
  { name: 'Node.js', color: 'bg-lime-50 text-lime-700' },
  { name: 'Express', color: 'bg-gray-50 text-gray-700' },
  { name: 'MongoDB', color: 'bg-green-50 text-green-700' },
  { name: 'Git', color: 'bg-pink-50 text-pink-700' },
  { name: 'Vite', color: 'bg-purple-50 text-purple-700' },
];

const Skills = () => {
  return (
    <div className="bg-background p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-heading font-semibold text-primary mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-body font-medium ${skill.color} shadow-sm`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;


