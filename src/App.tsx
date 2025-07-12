import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

// Add these animations to the CSS
import './animations.css';

function App() {
  // Initialize theme on app load
  useTheme();

  return (
    <div className="font-sans antialiased bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Whimsical background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-whimsy-500/15 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent-500/8 rounded-full blur-3xl animate-squiggle"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-400/12 rounded-full blur-2xl animate-wiggle"></div>
        
        {/* Cute small shapes */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-whimsy-400/40 rounded-full animate-float"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-primary-400/50 animate-wiggle" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute top-48 left-1/4 w-4 h-4 bg-accent-400/35 rotate-45 animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-whimsy-500/45 animate-pulse-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-80 left-1/3 w-2 h-4 bg-primary-300/40 rounded-full animate-wiggle"></div>
        
        <div className="absolute top-1/4 right-20 w-3 h-3 bg-whimsy-400/40 animate-float" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        <div className="absolute top-1/3 left-20 w-4 h-2 bg-accent-400/45 rounded-full animate-squiggle"></div>
        <div className="absolute top-2/5 right-1/4 w-3 h-3 bg-primary-400/50 rounded-full animate-wiggle"></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-whimsy-500/40 rotate-45 animate-float"></div>
        <div className="absolute top-3/5 right-16 w-3 h-3 bg-accent-300/35 animate-pulse-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-primary-400/40 rotate-45 animate-wiggle"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-whimsy-400/45 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-16 w-2 h-4 bg-accent-400/35 rounded-full animate-squiggle"></div>
        <div className="absolute bottom-48 right-20 w-3 h-3 bg-primary-500/40 animate-pulse-slow" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-whimsy-300/50 rotate-45 animate-wiggle"></div>
      </div>
      
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;