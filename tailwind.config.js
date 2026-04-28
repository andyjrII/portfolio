/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'default': '#272829',
        'heading': '#050d18',
        // Navy accent scale. `accent` maps to a deep navy that still has presence
        // on dark backgrounds; lighter shades (300/400/500) are used for hover,
        // glows, gradients, and dark-mode highlights.
        'accent': {
          DEFAULT: '#1e40af',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        'surface': '#ffffff',
        'contrast': '#ffffff',
        'nav': '#a8a9b4',
        'nav-hover': '#ffffff',
        'nav-mobile-bg': '#040b14',
        'background': '#ffffff',
        'light-bg': '#f4f6fb',
        'dark-bg': '#040b14',
        'surface-dark': '#151f2b',
      },
      fontFamily: {
        'default': ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Raleway', 'sans-serif'],
        'nav': ['Poppins', 'sans-serif'],
      },
      // Custom type scale — keeps Tailwind defaults available while adding
      // semantic tokens used across the site for headings/body/captions.
      fontSize: {
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.6' }],
        'body': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4' }],
      },
      // Section spacing tokens — used for vertical rhythm between page sections.
      spacing: {
        'section': '4.5rem',
        'section-lg': '6rem',
      },
      maxWidth: {
        'content': '72rem',
      },
      backgroundColor: {
        'light': '#f4f6fb',
        'dark': '#040b14',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
