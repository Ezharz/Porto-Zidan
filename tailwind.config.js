/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
      },
      screens: {
        'max420': {'max': '425px'}, // breakpoint maksimal 420px
      },
    },
  },
  plugins: [],
};
