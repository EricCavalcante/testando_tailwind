/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Courier:['Courier Prime', 'monospace'],
        Bebas:['Bebas Neue', 'sans-serif'],
      },
      colors:{
        azulFundo: '#28425F',
        corFundo: '#173251',
        verdeFonte: '#36E56D',
        roxoFonte: '#F977C5',
        corLinkedIn: '#0077b5',
        corWhatsapp: '#25D366',
      }
    },
  },
  plugins: [],
}

