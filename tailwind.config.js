/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#F2AA4CFF',
      'white': '#FFFFFFFF',
      'grey': '#94A3B8',
      'blue': '#0284C7'
    }
  },
  plugins: [],
}