/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./.eleventy.js"],
  theme: {
    extend: {
      colors: {
        theme: {
          base: "#1a1816",
          elevated: "#23201d",
          border: "#322d28",
          gold: "#d4af37",
          "gold-hover": "#f0c850",
          title: "#f3efe6",
          muted: "#b8ada1",
        },
      },
      fontFamily: {
        sans: ["'Metrophobic'", "sans-serif"],
        heading: ["'Exo 2'", "sans-serif"],
        josefin: ["'Josefin Sans'", "sans-serif"],
        jura: ["'Jura'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
