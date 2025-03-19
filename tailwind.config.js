// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors if needed
        'primary': '#646cff',
        'secondary': '#ff4081',
      },
      spacing: {
        '24': '6rem', // Added spacing for translateZ-24
      },
      rotate: {
        '3d': 'rotateX(360deg) rotateY(360deg)', // Custom rotate class for 3D effect
      },
      transformOrigin: {
        'center': 'center', // for the 3d transformation center
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
