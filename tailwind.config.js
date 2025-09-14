
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "322px",  // твой кастомный
        xs: "480px",    // ещё один пример
        "3xl": "1920px" // можно добавить под большие экраны
      },
    },
  },
  plugins: [],
};
