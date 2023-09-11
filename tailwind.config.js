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
              },
              screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '768px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1216px',
                // => @media (min-width: 1280px) { ... }
          
                '2xl': '1216px',
                // => @media (min-width: 1536px) { ... }
              }
          
    },
  },
  plugins: [],
}
