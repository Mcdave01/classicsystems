/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d3b66',  // Dark blue color for the brand
        secondary: '#faa307',// Accent color for buttons, highlights
        textShadow: {
          'default': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Example shadow
          'md': '4px 4px 6px rgba(0, 0, 0, 0.3)',
          'xl': '6px 6px 8px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '6px 6px 8px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
