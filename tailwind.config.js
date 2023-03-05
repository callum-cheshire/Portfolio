/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "background-grey": "#3F3F3F",
      "text-white": "#DADADA",
      "tech-blue": "#38B6FF",
    },
    extend: {
      fontFamily: {
        lekton: ["'Lekton', sans-serif"],
        gowun: ["'Gowun Batang', serif"],
      },
    },
    plugins: [],
  },
};
