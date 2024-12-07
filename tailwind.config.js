module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a9d8f', // Teal color for the brand
        'secondary': '#e9c46a', // Yellow accent color
        'tertiary': '#264653', // Dark teal for contrast
        'background': '#f4f4f9', // Light background color
        'cta-hover': '#f4a261', // Hover effect for buttons
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
    },
  },
  plugins: [],
}
