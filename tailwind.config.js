/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        progress: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 6ss ease-in-out forwards',
        progress: 'progress 5s linear forwards',
      },
    },
  },
  plugins: [],
}
