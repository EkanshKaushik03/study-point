/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1E3A8A', 
          light: '#3B82F6',
        },
        trust: {
          green: '#10B981',
          light: '#D1FAE5'
        },
        clean: {
          white: '#FFFFFF',
          gray: '#F3F4F6'
        }
      }
    },
  },
  plugins: [],
}
