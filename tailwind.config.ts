import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      "green":"#051A16",
      "orange":"#ac0727",
      "black":"#000000",
      "white":"#ffffff",
      "fadedWhite":"#E8E8E8",
      "lightWhite":"#B9B9B9",
      "lightBlack":"#3A3A3A",
      "fadedBlack":"#9c9c9c",
      "blue": "#0068E1",
      "grey": "#949494",
      "special": "#9E9CFF",

    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
