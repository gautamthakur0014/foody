/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], //can be used inside src folder on file ext -{ }
  theme: {
    extend: {
      screens: {
        sm: "500px", // custom value for md
        // md: "750px",
        // lg: "1024px",
        // xl: "1280px",
      },
    },
  },
  plugins: [],
};

