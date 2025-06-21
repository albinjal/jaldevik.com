/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'orange-web': '#fca311',
        'oxford-blue': '#14213d',
        platinum: '#e5e5e5',
      },
    },
  },
};
