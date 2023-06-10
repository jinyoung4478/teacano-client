/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#57B3FE',
        back: '#F2F2F2',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
});
