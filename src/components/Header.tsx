import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg border-b-2 border-primary-200 dark:border-primary-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-primary-500 to-whimsy-500 rounded-lg animate-float">
            <Code size={24} className="text-white animate-wiggle" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-whimsy-600 bg-clip-text text-transparent">
            Arnab's Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 font-medium hover:scale-105 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-whimsy-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 font-medium hover:scale-105 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-whimsy-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 font-medium hover:scale-105 relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-whimsy-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 font-medium hover:scale-105 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-whimsy-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 p-2 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="animate-wiggle" /> : <Menu size={24} className="animate-float" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white/95 dark:bg-dark-900/95 backdrop-blur-md z-40 md:hidden border-t-2 border-primary-200 dark:border-primary-800">
          <div className="flex flex-col p-8 space-y-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 py-2 text-left hover:scale-105 hover:translate-x-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 py-2 text-left hover:scale-105 hover:translate-x-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 py-2 text-left hover:scale-105 hover:translate-x-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-xl text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-whimsy-400 transition-all duration-300 py-2 text-left hover:scale-105 hover:translate-x-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;