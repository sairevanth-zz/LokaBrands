/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        base: '#FAFAF9', 
        primary: '#1C1917', 
        accent: '#A16207', 
        surface: 'rgba(28, 25, 23, 0.03)', 
        secondaryDark: '#E8ECF0', 
        secondaryLight: '#64748B', 
      },
      transitionTimingFunction: {
        'emil': 'cubic-bezier(0.22, 1, 0.36, 1)', 
      },
    }
  },
  plugins: [],
}
