import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-dark-950 via-primary-950 to-dark-950 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Arnab's Portfolio
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Arnab Mandal
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-primary-400 transition-colors hover:underline"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-primary-400 transition-colors hover:underline"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-primary-400 transition-colors hover:underline"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-primary-400 transition-colors hover:underline"
            >
              Contact
            </button>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-accent-500 animate-pulse" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;