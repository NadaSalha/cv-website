/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      
      colors:{
        primary:'var(--primary-color,#00a3e1)',
        blue:'#00a3e1',
      },
      fontFamily: {
        'Roboto': ['Roboto','sans-serif'],
      },
      keyframes:{
        'open_menu':{
        '0%':{transform:'translateX(0)'},
        '80%':{transform:'translateX(1.2)'},
        '100%':{transform:'translateX(1)'},
        },
      },
       animation:{
          'open_menu':'open_menu 0.5s ease-in-out forwords',
        },
    },
  },
  plugins: [],
}

