/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#272829',
        'heading': '#050d18',
        'accent': '#149ddd',
        'surface': '#ffffff',
        'contrast': '#ffffff',
        'nav': '#a8a9b4',
        'nav-hover': '#ffffff',
        'nav-mobile-bg': '#040b14',
        'background': '#ffffff',
        'light-bg': '#f4fafd',
        'dark-bg': '#040b14',
        'surface-dark': '#151f2b',
      },
      fontFamily: {
        'default': ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Raleway', 'sans-serif'],
        'nav': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'light': '#f4fafd',
        'dark': '#040b14',
      }
    },
  },
  plugins: [],
}

