import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Cloud, Smartphone, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'javaScript', level:80 },
        { name: 'HTML5', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'Express.js', level: 90 },
       
      ]
    },
    // {
    //   icon: Cloud,
    //   title: 'Cloud & DevOps',
    //   skills: [
    //     { name: 'AWS', level: 82 },
    //     { name: 'Docker', level: 85 },
    //     { name: 'Kubernetes', level: 75 },
    //     { name: 'CI/CD', level: 88 },
    //     { name: 'Terraform', level: 70 }
    //   ]
    // },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 60 },
        { name: 'Flutter', level: 30 },
        { name: 'Android (java)', level: 50 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe XD', level: 82 },
        { name: 'UI Design', level: 90 }
      ]
    },
    {
      icon: Cog,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & Github', level: 90 },
        { name: 'VS Code', level: 85 },
        { name: 'Android Studio', level: 70 },
        { name: 'Testing', level: 85 },
        { name: 'Agile', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse opacity-75"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;