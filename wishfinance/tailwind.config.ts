import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '5vh': '5vh',
        '10vh': '10vh',
      },
      colors: {
        text: {
          DEFAULT: '#EDE7EF',
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#EDE7EF',
          600: '#ede7ef',
          700: '#c0abc7',
          800: '#b096b9',
          900: '#a080aa',
        },
        background: '#0f0911',
        primary: {
          DEFAULT: '#C697D6',
          50: '#ffffff',
          100: '#fbf8fc',
          200: '#eddff2',
          300: '#dfc5e8',
          400: '#d4b1e0',
          500: '#C697D6',
          600: '#b87dcc',
          700: '#9f4fba',
          800: '#8b41a4',
          900: '#75378b',
        },
        secondary: {
          DEFAULT: '#66247b',
          50: '#bf74d6',
          100: '#b258ce',
          200: '#a53dc6',
          300: '#8f33ad',
          400: '#7d2c97',
          500: '#66247b',
          600: '#4f1c5f',
          700: '#260d2e',
          800: '#0f0512',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#b138d8',
          50: '#e9c7f4',
          100: '#dda9ee',
          200: '#d28ce8',
          300: '#c66ee3',
          400: '#bd56de',
          500: '#b138d8',
          600: '#9f27c6',
          700: '#741c90',
          800: '#5c1672',
          900: '#441054',
        },
      },
    },
  },
  plugins: [],
};
export default config;
