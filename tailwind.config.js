// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#F68B1E', // Jumia's orange
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}