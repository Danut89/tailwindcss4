import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* About Text */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            I’m a software developer with a passion for building intuitive digital experiences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I help clients create scalable, maintainable frontends with clean code and thoughtful design.
          </p>
        </div>

        {/* Skills Component */}
        <div className="md:w-1/3">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;

