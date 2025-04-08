import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdfaf6] px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Avatar placeholder */}
        <img src="/src/assets/profile.jpg" alt="Your portrait" className="w-64 h-64 rounded-full object-cover mx-auto" />


        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Hi, I’m <span className="text-indigo-700">John Doe</span></h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            I’m a <span className="text-indigo-500">Frontend Developer</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            I build accessible, user-friendly interfaces that balance performance and aesthetics.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
              View Projects
            </a>
            <a href="#contact" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
