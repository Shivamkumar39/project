// App.jsx
import React, { useState } from 'react';
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
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const createWhatsAppLink = () => {
    const phoneNumber = '919508353863';
    const text = `Hello Dear!%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };
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

        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.02 2.004c-5.52 0-10 4.484-10 10 0 1.77.465 3.48 1.34 4.98L2 22l5.158-1.34a9.934 9.934 0 004.86 1.24c5.518 0 10-4.482 10-10s-4.482-10-10-10zm.01 18c-1.56 0-3.11-.414-4.47-1.198l-.32-.185-3.07.794.82-3.07-.21-.33a8.01 8.01 0 01-1.27-4.316c0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8s-3.58 8-8 8zm4.45-5.735c-.245-.122-1.44-.71-1.665-.79-.225-.081-.39-.122-.555.122s-.64.79-.785.95c-.145.162-.29.183-.535.061-.245-.122-1.035-.382-1.97-1.22-.727-.648-1.215-1.448-1.36-1.692-.145-.244-.015-.377.108-.498.111-.11.245-.285.367-.428.122-.143.162-.245.245-.407.081-.162.041-.305-.02-.427-.061-.122-.555-1.336-.76-1.83-.2-.48-.4-.414-.555-.414l-.468-.008a.9.9 0 00-.653.306c-.224.244-.855.836-.855 2.037s.875 2.363 1 2.527c.122.162 1.72 2.627 4.17 3.684.583.251 1.036.401 1.39.513.585.186 1.117.16 1.538.097.47-.07 1.44-.587 1.644-1.15.204-.562.204-1.043.142-1.15-.061-.102-.224-.163-.47-.285z" />
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
