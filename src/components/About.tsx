import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'A passionate developer with 1+ years of experience(Internship + Collage Projects) creating digital solutions.'
    },
    {
      icon: Heart,
      title: 'What I Love',
      description: 'Building user-centric applications that solve real-world problems.'
    },
    {
      icon: Target,
      title: 'My Goal',
      description: 'To bridge the gap between design and technology through innovative solutions.'
    },
    {
      icon: Zap,
      title: 'My Approach',
      description: 'Clean code, modern practices, and continuous learning drive my work.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Shivam Kumar, a passionate final-year Computer Science student
               and full-stack developer. I specialize in building seamless digital 
               experiences with clean design and solid functionality.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech began 4 years ago in the first year of my college. 
              Since then, I’ve worked on impactful projects and collaborated with great 
              teams, constantly learning modern tools and frameworks.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I explore new tech trends, contribute to open-source, 
              or share insights through blogs, meetups, and tech communities 
              to help others grow.
            </p>


            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'Javascript', 'Node.js', 'c++', 'MongoDB', 'Git'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-green-400 border border-green-500/30 hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                    <item.icon className="text-green-400 group-hover:text-white transition-colors" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;