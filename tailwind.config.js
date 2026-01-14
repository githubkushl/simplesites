/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // Gray 900
        secondary: "#4F46E5", // Indigo 600
        accent: "#F59E0B", // Amber 500
        "off-white": "#F9FAFB", // Gray 50
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
