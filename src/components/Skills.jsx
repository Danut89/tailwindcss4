import React from 'react';

const skills = [
  { name: 'HTML', color: 'bg-orange-100 text-orange-600' },
  { name: 'CSS', color: 'bg-blue-100 text-blue-600' },
  { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'TypeScript', color: 'bg-blue-50 text-blue-700' },
  { name: 'React', color: 'bg-cyan-100 text-cyan-700' },
  { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700' },
  { name: 'Node.js', color: 'bg-lime-100 text-lime-700' },
  { name: 'Express', color: 'bg-gray-100 text-gray-700' },
  { name: 'MongoDB', color: 'bg-green-100 text-green-700' },
  { name: 'Git', color: 'bg-pink-100 text-pink-700' },
  { name: 'Vite', color: 'bg-purple-100 text-purple-700' },
];

const Skills = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`${skill.color} px-3 py-1 rounded-full text-sm font-medium shadow-sm`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

