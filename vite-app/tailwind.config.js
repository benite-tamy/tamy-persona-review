/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'tamy-purple': 'hsl(263 72% 60%)',
        'tamy-dark': 'hsl(270 65% 14%)',
        'tamy-primary': 'hsl(255 55% 52%)',
        pedro: { DEFAULT: '#2563EB', light: '#DBEAFE' },
        benites: { DEFAULT: '#7C3AED', light: '#EDE9FE' },
        shared: { DEFAULT: '#059669', light: '#D1FAE5' },
      },
      backgroundImage: {
        'tamy-gradient': 'linear-gradient(135deg, hsl(255 95% 67%), hsl(270 80% 65%))',
        'tamy-gradient-2': 'linear-gradient(135deg, hsl(255 55% 52%), hsl(270 65% 14%))',
        'hero-bg':
          'linear-gradient(135deg, hsl(270 65% 14%) 0%, hsl(255 55% 30%) 50%, hsl(270 65% 18%) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
