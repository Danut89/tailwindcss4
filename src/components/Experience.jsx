import React from 'react';

const experienceData = {
  education: [
    {
      title: 'Code Institute',
      role: 'Full-Stack Web Development Diploma',
      description: 'Currently pursuing an intensive full-stack program covering HTML, CSS, JavaScript, Python, Django, and SQL.',
      date: 'April 2024 – May 2025',
    },
    {
      title: 'Udemy',
      role: 'Self-Taught Web Development & Programming',
      description: 'Completed courses on HTML, CSS, JavaScript, and Python, strengthening my freelance work.',
      date: '2023 – August 2024',
    },
  ],
  experience: [
    {
      title: 'Software Engineer',
      role: 'Freelance Developer',
      description: 'Built and maintained custom web applications for private clients, tailoring solutions to their needs.',
      date: 'Jul 2023 – Jul 2024',
    },
    {
      title: 'Software Engineer',
      role: 'Hackathon Collaborator',
      description: 'Participated in multiple hackathons to build innovative apps in high-pressure, fast-paced environments.',
      date: 'May 2024 – Aug 2024',
    },
  ],
};

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-text font-body" id="experience">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    
    {/* Education */}
    <div>
      <h2 className="text-3xl font-heading text-primary font-bold mb-8">Education</h2>
      <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-primary/20">
        {[
          {
            title: 'Code Institute',
            subtitle: 'Full-Stack Web Development Diploma',
            description: 'Currently pursuing an intensive full-stack program covering HTML, CSS, JavaScript, Python, Django, and SQL.',
            date: 'Apr 2024 – May 2025'
          },
          {
            title: 'Udemy',
            subtitle: 'Self-Taught Web Development & Programming',
            description: 'Completed courses on HTML, CSS, JavaScript, and Python, strengthening my freelance work.',
            date: '2023 – August 2024'
          }
        ].map((item, i) => (
          <div key={i} className="pl-10 relative">
            <span className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full ring-2 ring-white shadow-md"></span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="italic text-sm text-gray-600 mb-1">{item.subtitle}</p>
            <p className="text-sm text-gray-700">{item.description}</p>
            <p className="text-xs text-gray-400 mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Experience */}
    <div>
      <h2 className="text-3xl font-heading text-primary font-bold mb-8">Experience</h2>
      <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-primary/20">
        {[
          {
            title: 'Software Engineer',
            subtitle: 'Freelance Developer',
            description: 'Built and maintained custom web applications for private clients, tailoring solutions to their needs.',
            date: 'Jul 2023 – Jul 2024'
          },
          {
            title: 'Software Engineer',
            subtitle: 'Hackathon Collaborator',
            description: 'Participated in multiple hackathons to build innovative apps in high-pressure, fast-paced environments.',
            date: 'May 2024 – Aug 2024'
          }
        ].map((item, i) => (
          <div key={i} className="pl-10 relative">
            <span className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full ring-2 ring-white shadow-md"></span>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="italic text-sm text-gray-600 mb-1">{item.subtitle}</p>
            <p className="text-sm text-gray-700">{item.description}</p>
            <p className="text-xs text-gray-400 mt-1">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Experience;
