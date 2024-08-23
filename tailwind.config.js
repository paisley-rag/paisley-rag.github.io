// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Arial", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        "3xl": "1620px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "2880px",
      },
      colors: {
        left: "#0FABFF",
        middle: "#4A4AED",
        // right: "#ad1acb",
        right: "#AE24E0",
        accent: "#D2EAFE",
        // paisleyPink: {
        //   100: "#f7d2ff",
        //   200: "#efa6ff",
        //   300: "#e879fe",
        //   400: "#e04dfe",
        //   500: "#d820fe",
        //   600: "#ad1acb",
        //   700: "#821398",
        //   800: "#560d66",
        //   900: "#2b0633",
        // },
        // paisleyPurple: {
        //   100: "#d1cddd",
        //   200: "#a49bbc",
        //   300: "#76699a",
        //   400: "#493779",
        //   500: "#1b0557",
        //   600: "#160446",
        //   700: "#100334",
        //   800: "#0b0223",
        //   900: "#050111",
        // },
        // paisleyLightBlue: {
        //   100: "#cff4ff",
        //   200: "#9fe9ff",
        //   300: "#70ddfe",
        //   400: "#40d2fe",
        //   500: "#10c7fe",
        //   600: "#0d9fcb",
        //   700: "#0a7798",
        //   800: "#065066",
        //   900: "#032833",
        // },
        // paisleyBlue: {
        //   100: "#d8edff",
        //   200: "#b0dbff",
        //   300: "#89c8fe",
        //   400: "#61b6fe",
        //   500: "#3aa4fe",
        //   600: "#2e83cb",
        //   700: "#236298",
        //   800: "#174266",
        //   900: "#0c2133",
        // },
        // paisleyViolet: {
        //   100: "#e4e3ff",
        //   200: "#c9c6ff",
        //   300: "#adaafe",
        //   400: "#928dfe",
        //   500: "#7771fe",
        //   600: "#5f5acb",
        //   700: "#474498",
        //   800: "#302d66",
        //   900: "#181733",
        // },
        palePurple: "#F1E4F3",
        componentDarkMode: "#282a2c",
      },
    },
  },
  plugins: [],
};
