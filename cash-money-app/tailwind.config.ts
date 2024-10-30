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
        'v-gray': '#efefef',
        'v-white': '#ffffff',
        'v-black': '#11151c',
        'v-lilac': '#c1bddb',
        'v-bby-blue': '#a1c7e4',
        'v-dark-green': '#4b6858',
        'v-light-green': '#b8c480',
      },
    },
  },
  plugins: [],
};
export default config;
