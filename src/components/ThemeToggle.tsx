import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-whimsy-200 transition-all duration-300 hover:bg-primary-200 dark:hover:bg-primary-800/50 hover:scale-110 border-2 border-primary-200 dark:border-primary-700 animate-float"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="transition-transform duration-300 hover:rotate-12 animate-wiggle" />
      ) : (
        <Sun size={20} className="transition-transform duration-300 hover:rotate-12 animate-wiggle" />
      )}
    </button>
  );
};

export default ThemeToggle;