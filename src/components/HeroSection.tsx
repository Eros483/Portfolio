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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 dark:bg-dark-gradient pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col justify-center items-center text-center relative z-10">
        <div className="mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full p-1">
            <div className="w-full h-full bg-white dark:bg-dark-900 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">A</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hello, I'm <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Arnab</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Computer Science Student & <span className="text-primary-600 dark:text-primary-400">AI/ML Developer</span>
        </h2>
        
        <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-10 opacity-0 animate-fadeIn leading-relaxed" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          I aim to build clean applications that are user friendly, and are built with the latest technologies, 
          to be directed to solving problems, efficiently and quickly.
        </p>
        
        <div className="flex space-x-4 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a 
            href="http://github.com/Eros483" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-4 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700 text-gray-800 dark:text-white rounded-full hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25"
            aria-label="GitHub"
          >
            <GitHub size={20} className="group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/arnabmandal2912" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-4 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700 text-gray-800 dark:text-white rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="group-hover:text-white transition-colors" />
          </a>
          <a 
            href="mailto:arnabmandal2912@gmail.com" 
            className="group p-4 bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700 text-gray-800 dark:text-white rounded-full hover:bg-accent-600 hover:border-accent-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
            aria-label="Email"
          >
            <Mail size={20} className="group-hover:text-white transition-colors" />
          </a>
        </div>
        
        {showScrollIndicator && (
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fadeIn group" 
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            onClick={scrollToAbout}
          >
            <div className="p-2 rounded-full bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-white/20 dark:border-dark-700 group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300">
              <ChevronDown size={24} className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative shape - bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 text-white dark:text-dark-950 transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="currentColor" d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,181.3C560,171,640,181,720,192C800,203,880,213,960,197.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;