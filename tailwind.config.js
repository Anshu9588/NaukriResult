/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        custum: "linear-gradient(151deg, rgba(0,255,0,1) 0%, rgba(42,40,171,1) 50%, rgba(255,0,211,1) 100%)",
      },
      colors: {
        red: "#b30000",
        golden: "#FFDD5E",
        black: "#000000",
        green:"#005C00",
        blue:"#0000E6",
        lightBlue:"#005C8A",
        pink:"#9E009E"
      },
      minHeight: {
        'custum-80rem': '5rem',
      }
    },
  },
  plugins: [],
};
