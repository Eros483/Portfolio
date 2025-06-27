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
    <div className="font-sans antialiased bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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