/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/bg.png')",
        'appointment': "url('/src/assets/images/appointment.png')",
        'footer': "url('/src/assets/images/footer.png)"
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
