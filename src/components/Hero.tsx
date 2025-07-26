import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronDown, Webhook } from 'lucide-react';
import profileimage from '../public/Passport_Photograph.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const skills = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Logo Designer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivamkumar39', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivam-kumar--/', label: 'LinkedIn' },
    { icon: Webhook, href: 'https://stech-services.vercel.app/', label: 'Website' },
    { icon: Mail, href: 'mailto:shivamkumar950835@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Shivam Kumar
            </span>
          </motion.h1>

          <div className="h-20 mb-8">
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.6 }}
              className="text-2xl lg:text-3xl text-gray-300 font-light"
            >
              I'm a{' '}
              <span className="text-green-400 font-semibold">
                {skills[currentText]}
              </span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl"
          >
            Passionate about creating innovative digital solutions that make a difference. 
            I love turning complex problems into simple, beautiful designs.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:from-green-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              <a href='#projects'>View My Work</a>
            </button>
            <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
             <a href='#contact'>Get In Touch</a>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              {/* 3D Frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full backdrop-blur-sm border border-green-500/30"></div>
              
              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-500">
                <img
                  src={profileimage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
              >
                {'</>'}
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
              >
                AI
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-green-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;