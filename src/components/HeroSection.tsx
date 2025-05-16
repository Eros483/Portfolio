import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Hide scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 pt-16">
      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hello, I'm <span className="text-cyan-600 dark:text-cyan-400">Arnab</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Computer Science Student & Data science, Machine learning developer
        </h2>
        
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-10 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          I aim to build clean applications that are user friendly, and are built with the latest technologies, to be directed to solving problems, efficiently and quickly.
        </p>
        
        <div className="flex space-x-4 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a 
            href="http://github.com/Eros483" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-cyan-600 dark:hover:bg-cyan-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/arnabmandal2912" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:arnabmandal2912@gmail.com" 
            className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-red-600 dark:hover:bg-red-600 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        {showScrollIndicator && (
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fadeIn" 
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            onClick={scrollToAbout}
          >
            <ChevronDown size={36} className="text-gray-600 dark:text-gray-400" />
          </div>
        )}
      </div>
      
      {/* Decorative shape - bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 text-white dark:text-gray-900 transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="currentColor" d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,181.3C560,171,640,181,720,192C800,203,880,213,960,197.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;