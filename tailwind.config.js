/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import typography from "@tailwindcss/typography";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#5A3C2F",
        brand: "#857764",
        accent: "#8AC7CA",
        dark: "#32363C",
      },
    },
  },
  plugins: [typography],
});
