import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        uba: {
          blue: "#00529B",       // Azul Ubá
          darkBlue: "#003A70",   // Azul escuro para hover/fundos
          red: "#D9381E",        // Vermelho/Laranja para CTAs
          darkRed: "#B92D18",    // Vermelho escuro para hover
          offWhite: "#F8FAFC",   // Fundo principal
          text: "#1E293B",       // Texto principal
        },
      },
    },
  },
  plugins: [],
};
export default config;