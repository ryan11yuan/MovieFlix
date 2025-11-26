/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            primary: '#030014', // Very Dark Blue, almost Black
            secondary: '#151312', // Dark Blue
            light: {
                100: '#D6CC6FF', // Light Yellow
                200: '#A8B5DB', // Light Blue
                300: '9CA4AB', // Light Gray
            },
            dark: {
                100: '#221f3d', // Dark Gray
                200: '#0f0d23', // Darker Gray
            },
            accent: '#AB83FF', // Light Purple
        },
    },
  },
  plugins: [],
}