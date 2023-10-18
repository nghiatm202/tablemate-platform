import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ED5700",
        neutral_50: "#FBFBFB",
        neutral_75: "#F9F9F9",
        neutral_200: "#F8F8F8",
        neutral_300: "#F2F2F2",
        neutral_400: "#E6E6E6",
        neutral_500: "#D4D4D4",
        neutral_600: "#ADADAD",
        neutral_700: "#848484",
        neutral_800: "#545151",
        neutral_900: "#2E2E2E",
        violet_100: "#E7E4F9",
        blue_50: "#F3F6FF",
        blue_200: "#D6E0FF",
        blue_400: "#3366FF",
        blue_500: "#2952CC",
        red_50: "#FDF4F4",
      },
    },
  },
  plugins: [],
};
export default config;
