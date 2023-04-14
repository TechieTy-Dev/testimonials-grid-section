/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      violet: 'hsl(263, 55%, 52%)',
      white: 'hsl(0, 0%, 100%)',
      danielring: 'hsl(263,55%, 67%)',
      bg: 'hsl(0, 0%, 81%)',
      grayblue: 'hsl(217, 19%, 35%)',
      grayblueborder: 'hsla(217, 19%, 35%, 0.7)',
      darkblue: 'hsl(219, 29%, 14%)',
      lightgray:'hsl(210, 46%, 95%)',
      subtext: 'hsla(210, 46%, 95%, 0.5)',
      reviewtext: 'hsla(210, 46%, 95%, 0.7)',
    },
  },
  plugins: [],
}

