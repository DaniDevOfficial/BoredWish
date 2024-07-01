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
          DEFAULT: 'var(--text)',
          50: '#87b51f',
          100: '#70971a',
          200: '#597815',
          300: '#435a0f',
          400: '#31410b',
          500: 'var(--text)',
          600: '#1a2306',
          700: '#030401',
          800: '#000000',
          900: '#000000',
        },
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          50: '#ecf7cd',
          100: '#e0f2af',
          200: '#d4ed90',
          300: '#c8e871',
          400: '#bfe459',
          500: 'var(--primary)',
          600: '#a4d322',
          700: '#799c19',
          800: '#617d14',
          900: '#495e0f',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: '#b3df39',
          100: '#a4d322',
          200: '#8cb41d',
          300: '#749518',
          400: '#617d14',
          500: 'var(--secondary)',
          600: '#313f0a',
          700: '#060801',
          800: '#000000',
          900: '#000000',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          50: '#ecfcf2',
          100: '#cdf7dc',
          200: '#aff1c7',
          300: '#90ecb2',
          400: '#78e8a1',
          500: 'var(--accent)',
          600: '#3ade77',
          700: '#1fb958',
          800: '#1a9a49',
          900: '#157c3b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
