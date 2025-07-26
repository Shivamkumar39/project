import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-0"></div>
        <div className="relative z-10">
          <Navbar />
          <AnimatePresence mode="wait">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </AnimatePresence>
        </div>
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </Router>
  );
}

export default App;