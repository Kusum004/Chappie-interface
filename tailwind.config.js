/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chappie-blue': '#0055ff',   // The Police LED Blue
        'chappie-orange': '#ff6600', // The "Test" Arm Orange
        'chappie-bg': '#050505',     // Deep dark background
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'], // Cyberpunk font
      }
    },
  },
  plugins: [],
}