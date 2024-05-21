/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding for all screen sizes
        sm: '2rem', // Padding for small screens
        lg: '4rem', // Padding for large screens
        xl: '5rem', // Padding for extra-large screens
        '2xl': '6rem', // Padding for 2x extra-large screens
      },
      screens: {
        sm: '640px', // Container width for small screens
        md: '768px', // Container width for medium screens
        lg: '1024px', // Container width for large screens
        xl: '1280px', // Container width for extra-large screens
        '2xl': '1536px', // Container width for 2x extra-large screens
      },
      
    },

    content: [
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/js/**/*.js"
    ],
  

    fontFamily:{
      alkatip_t:"'ALKATIP_Tor', 'serif'",
      alkatip_tt:"'ALKATIP_Tor_Tom', 'serif'",
      alkatip_Ui:"'ALKATIP_Ui', 'serif'",
      Ukijtitle:"'Ukijtitle', 'serif'",
      Ukijtztr:"'Ukijtztr', 'serif'",
    },
    'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]

  },
  fontSize: {
    sm: '0.8rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },
  plugins: [],



}
