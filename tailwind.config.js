/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'class',
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        foreground: 'var(--foreground)',
        input: 'var(--input)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        'orange-web': '#fca311',
        'oxford-blue': '#0d1117',
        platinum: '#e5e5e5',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        ring: 'var(--ring)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
      },
    },
  },
};
