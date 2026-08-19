/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uba: {
          blue: "#00529B",
          darkBlue: "#003A70",
          red: "#D9381E",
          darkRed: "#B92D18",
          offWhite: "#F8FAFC",
          text: "#1E293B",
        },
      },
    },
  },
  plugins: [],
};