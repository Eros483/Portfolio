/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark purple-black theme
        primary: {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e4ddff',
          300: '#d1c2ff',
          400: '#b899ff',
          500: '#9d6bff',
          600: '#8b47ff',
          700: '#7c2dff',
          800: '#6b1fff',
          900: '#5a0fff',
          950: '#3d0099',
        },
        dark: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b9c1',
          400: '#92939f',
          500: '#747583',
          600: '#5e5f6b',
          700: '#4d4e57',
          800: '#42434a',
          900: '#1a1a1f',
          950: '#0f0f14',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(135deg, #0f0f14 0%, #1a1a1f 50%, #2d1b69 100%)',
        'purple-gradient': 'linear-gradient(135deg, #5a0fff 0%, #8b47ff  50%, #d946ef 100%)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #8b47ff, 0 0 10px #8b47ff, 0 0 15px #8b47ff' },
          '100%': { boxShadow: '0 0 10px #8b47ff, 0 0 20px #8b47ff, 0 0 30px #8b47ff' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};