/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      "claret": "#7b0828",
      "night": "#0f0e0e",
      "silver": "#bcb8b1",
      "navColor": "rgb(81 81 81)",
      "white": "#fff",
      "hover": "#E2E2E2",
      "red": "#FF0000",
      "green": "#008000",
      "tagColor": "rgb(100 114 136)",
    },
  },
  plugins: [],
}