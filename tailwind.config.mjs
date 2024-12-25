/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", "sans-serif"],
        display: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
