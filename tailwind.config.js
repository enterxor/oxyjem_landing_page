/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
            colors: {
                linkgreen: '#00bc7d',
                lingbggreen: '#00bc7d33',
                textcolor: 'var(--color-text)',
                bgcolor: 'var(--color-background)',
                heading: 'var(--color-heading)'
            },
              backgroundImage: {
                'rocket': "url('@/assets/bg1.svg')",
              }
    },
  },
  plugins: [],
}
