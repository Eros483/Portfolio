import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:scale-110 border border-gray-200 dark:border-dark-700"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun size={20} className="transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;