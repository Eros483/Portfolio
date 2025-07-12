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
    <div className="font-sans antialiased bg-gray-50 dark:bg-whimsy-gradient text-gray-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Whimsical background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-whimsy-500/15 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-accent-500/8 rounded-full blur-3xl animate-squiggle"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary-400/12 rounded-full blur-2xl animate-wiggle"></div>
        
        {/* Squiggly lines */}
        <svg className="absolute top-1/4 left-0 w-full h-20 opacity-20" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,10 600,50 T1200,50" stroke="white" strokeWidth="2" fill="none" className="animate-squiggle"/>
        </svg>
        <svg className="absolute bottom-1/4 right-0 w-full h-20 opacity-15" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,90 600,50 T1200,50" stroke="white" strokeWidth="3" fill="none" className="animate-float"/>
        </svg>
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