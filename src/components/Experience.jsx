import React from 'react';

const experiences = [
  {
    role: 'Front-End Developer',
    company: 'TechCo Inc.',
    period: '2022 – Present',
    description: [
      'Developed responsive React interfaces with Tailwind CSS.',
      'Collaborated with UX team to improve usability.',
      'Built reusable component libraries.'
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'StartupX',
    period: '2021 – 2022',
    description: [
      'Created landing pages and dashboards with HTML/CSS/JS.',
      'Worked closely with backend developers on API integration.'
    ],
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-700">
                  {exp.role} <span className="text-indigo-600">@ {exp.company}</span>
                </h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>

              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 pl-4">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
