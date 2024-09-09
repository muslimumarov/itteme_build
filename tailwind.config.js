/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'custom-padding': '0 25px', // `padding: ` qismini olib tashlang
      },
      colors: {
        customGray: '#2C3948',
        Custo: "#FFFFDB"
      },
      screens: {
        'mobil': '300px', // Ekran o'lchami uchun maxsus breakpoint qo'shish
      },
    },
    fontFamily: {
      'sans': ["YourCustomFont", "sans-serif"], // O'z font nomingizni kiriting
    },
  },
  plugins: [],
}
