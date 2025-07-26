import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
    title: 'Lead Training & Placement Coordinator',
    company: 'Parul University',
    location: 'Vadodara, Gujarat',
    period: '2022 - 2025',
    description: 'Managed placement activities, built strong industry connections, mentored students, and led training sessions focused on skill development and career growth.',
    technologies: ['Team Leadership', 'Communication', 'Industry Networking', 'Mentoring', 'Problem Solving']
  },
  {
    title: 'MERN Stack Intern',
    company: 'Parday Panda Studio',
    location: 'Vadodara, Gujarat',
    period: 'May 2024 - Aug 2024',
    description: 'Worked on real-world client projects, developing scalable web and mobile applications using the MERN stack and modern UI libraries.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Git']
  },
  {
    title: 'React Intern',
    company: 'Celebal Technologies',
    location: 'Remote',
    period: 'May 2025 - Jul 2025',
    description: 'Created responsive web applications with pixel-perfect designs. Collaborated with designers and senior developers to turn mockups into dynamic UIs.',
    technologies: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Sass', 'Bootstrap']
  },
  {
    title: 'Impact Training Program',
    company: 'I am Neo',
    location: 'Vadodara, Gujarat',
    period: 'Mar 2025 - May 2025',
    description: 'Kickstarted my software development journey by learning key programming concepts and working on hands-on coding challenges.',
    technologies: ['C++', 'Problem Solving', 'SQL']
  }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full z-10 shadow-lg shadow-green-500/50"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="text-green-400" size={20} />
                        <span className="text-green-400 font-semibold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-400">
                      <span className="font-semibold text-blue-400">
                        {exp.company}
                      </span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full border border-green-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;