/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        tight: ["Inter Tight", "sans-serif"],
        display: ["Archivo Black", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#000000",
          secondary: "#888888",
          divider: "#E0E0E0",
          placeholder: "#C4C4C4",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2.5rem",
        },
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1024px",
        },
      },
    },
  },
  plugins: [],
};
