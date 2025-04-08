import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about" className="bg-white py-24 px-6 text-text font-body">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 items-start">
    
    {/* Left: Text Content */}
    <div className="md:col-span-2">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
        Who I Am & What I Do
      </h2>
      <p className="text-lg leading-relaxed mb-4 text-gray-700">
        I’m a <span className="font-semibold text-accent">dedicated full-stack developer</span> with a passion for creating seamless and engaging user experiences. I work with tools like <strong>HTML, CSS, JavaScript</strong>, and <strong>React</strong> on the frontend, and <strong>Python, Django, Node.js</strong> on the backend.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-700">
        My journey began with a curiosity about how websites work — now I craft efficient, scalable, and delightful interfaces that solve real problems.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Whether I’m collaborating with clients or coding late into the night, I aim to build <span className="text-primary font-medium">clean, accessible, and high-performing solutions</span>.
      </p>
    </div>

    {/* Right: Skills Card */}
    <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-heading text-primary mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-3">
        {[
          { name: 'HTML', color: 'bg-orange-100 text-orange-700' },
          { name: 'CSS', color: 'bg-blue-100 text-blue-700' },
          { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700' },
          { name: 'TypeScript', color: 'bg-sky-100 text-sky-700' },
          { name: 'React', color: 'bg-cyan-100 text-cyan-700' },
          { name: 'Tailwind CSS', color: 'bg-teal-100 text-teal-700' },
          { name: 'Node.js', color: 'bg-lime-100 text-lime-700' },
          { name: 'Django', color: 'bg-green-100 text-green-700' },
          { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-700' },
          { name: 'Git', color: 'bg-pink-100 text-pink-700' },
          { name: 'Vite', color: 'bg-purple-100 text-purple-700' },
        ].map((skill, index) => (
          <span
            key={index}
            className={`${skill.color} px-3 py-1 text-sm rounded-full font-medium shadow-sm`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>


  );
};

export default About;

 