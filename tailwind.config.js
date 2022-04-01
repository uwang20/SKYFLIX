module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-color-1' : 'rgba(67, 179, 227, 0.1)',
        'secondary-color-1.5' : 'rgba(67, 179, 227, 0.15)',
        'blurred-white': 'rgba(255,255,255,0.4)',
        'skyflix-label-color': '#43B3E3'
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
