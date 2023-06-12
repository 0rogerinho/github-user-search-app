/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      // dark mode
      blue: '#0079ff',
      gray: '#141D2F',
      lightGray: '#1E2A47',
      // light mode
    },
  },
  plugins: [],
};
