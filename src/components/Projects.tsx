import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Event Handling System',
      description: 'A full-stack event management platform where admins can post college events, and users can view, register, and receive event-related notifications. Includes secure login, admin dashboard, and event certificate generation.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'JWT'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Shivamkumar39/Event-Mangment-App',
      featured: true
    },
    {
      title: 'Room Booking System',
      description: 'A web-based hotel booking platform that allows users to search, book, and manage hotel stays. Includes real-time room availability, user authentication, and admin panel for hotel management.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      liveUrl: 'https://hotel-management-ashen.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumar39',
      featured: true
    },
    {
      title: 'Blogging Platform',
      description: 'A full-stack blogging platform where admins can post blogs, manage content, and users can view posts with a responsive UI and secure login.',
      image: 'https://images.pexels.com/photos/5717986/pexels-photo-5717986.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://shivam-blogging-app.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumar39/Bloging',
      featured: false
    },
    {
      title: 'Medical Online Shopping',
      description: 'An e-commerce web application for medical products with features like category-wise product listing, add to cart, user login, and admin product management.',
      image: 'https://images.pexels.com/photos/13119976/pexels-photo-13119976.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'Tailwind CSS'],
      liveUrl: 'https://accuratedistributer.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumar39/Accurate_Distribtutor',
      featured: false
    },
    {
      title: 'Programming Media',
      description: 'A React Native-based mobile application where users can post, like, and comment on tech-related content. Features real-time updates, authentication, and media upload.',
      image: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Tailwind CSS'],
      liveUrl: 'https://github.com/Shivamkumar39/',
      githubUrl: 'https://github.com/Shivamkumar39/Programmer_media',
      featured: false
    },
    {
      title: 'STech - Company Website',
      description: 'A modern static website for a startup company with responsive design, smooth animations, and optimized performance using Next.js.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://stech-weld.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumar39/STech-Project',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
              >
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-green-400 hover:text-green-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;