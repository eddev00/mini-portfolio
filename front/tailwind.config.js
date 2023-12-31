/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
      },
      screens: {
        breakpoint: { min: "768px" },
      },
      colors: {
        secondary: "#6AFF79",
      },
    },
  },
  plugins: [],
};
