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
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-whimsy-500/15 rounded-full blur-3xl animate-wiggle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-squiggle" style={{ animationDelay: '2s' }}></div>
        
        {/* Cute small shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-whimsy-400/30 animate-wiggle" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-accent-400/40 rounded-full animate-float"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-primary-400/35 rotate-45 animate-squiggle"></div>
        <div className="absolute top-64 right-1/3 w-4 h-4 bg-whimsy-300/30 animate-pulse-slow" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        <div className="absolute top-80 left-1/3 w-2 h-5 bg-accent-300/40 rounded-full animate-wiggle"></div>
        
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-primary-400/35 animate-squiggle" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-whimsy-300/30 rotate-45 animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-48 right-1/3 w-2 h-4 bg-primary-300/35 rounded-full animate-wiggle"></div>
        <div className="absolute bottom-64 left-1/5 w-3 h-3 bg-whimsy-400/40 animate-squiggle" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col justify-center items-center text-center relative z-10">
        <div className="mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-whimsy-500 rounded-full p-1 animate-float">
            <div className="w-full h-full bg-white dark:bg-dark-900 rounded-full flex items-center justify-center border-2 border-white/20">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-whimsy-600 bg-clip-text text-transparent animate-wiggle">A</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-fadeIn relative" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hello, I'm <span className="bg-gradient-to-r from-primary-500 to-whimsy-500 bg-clip-text text-transparent animate-squiggle">Arnab</span>
          <span className="absolute -top-2 -right-4 text-2xl text-accent-400/60 animate-wiggle">✨</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Computer Science Student & <span className="text-primary-500 dark:text-whimsy-400 animate-pulse-slow">AI/ML Developer</span>
        </h2>
        
        <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-10 opacity-0 animate-fadeIn leading-relaxed" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          I aim to build clean applications that are user friendly, and are built with the latest technologies, 
          to be directed to solving problems, efficiently and quickly.
        </p>
        
        <div className="flex space-x-4 mb-12 opacity-0 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a 
            href="http://github.com/Eros483" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-gray-800 dark:text-white rounded-full hover:bg-primary-500 hover:border-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/30 animate-float"
            aria-label="GitHub"
          >
            <GitHub size={20} className="group-hover:text-white transition-colors group-hover:animate-wiggle" />
          </a>
          <a 
            href="https://www.linkedin.com/in/arnabmandal2912" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-gray-800 dark:text-white rounded-full hover:bg-whimsy-500 hover:border-whimsy-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-whimsy-500/30 animate-float"
            aria-label="LinkedIn"
            style={{ animationDelay: '0.5s' }}
          >
            <Linkedin size={20} className="group-hover:text-white transition-colors group-hover:animate-wiggle" />
          </a>
          <a 
            href="mailto:arnabmandal2912@gmail.com" 
            className="group p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 border-white/30 text-gray-800 dark:text-white rounded-full hover:bg-accent-500 hover:border-accent-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/30 animate-float"
            aria-label="Email"
            style={{ animationDelay: '1s' }}
          >
            <Mail size={20} className="group-hover:text-white transition-colors group-hover:animate-wiggle" />
          </a>
        </div>
        
        {showScrollIndicator && (
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce opacity-0 animate-fadeIn group" 
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            onClick={scrollToAbout}
          >
            <div className="p-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 border-white/30 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all duration-300 animate-wiggle">
              <ChevronDown size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative shape - bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 text-white dark:text-dark-900 transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="currentColor" d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,181.3C560,171,640,181,720,192C800,203,880,213,960,197.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;