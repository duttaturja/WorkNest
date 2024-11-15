/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#0d1b2a",
        "primary-100": "#778da9",
        "mid-mid": "#415a77",
        "secondary-200": "#1b263b",
        "secondary-100": "#e0e1dd",
      },
    },
  },
};
