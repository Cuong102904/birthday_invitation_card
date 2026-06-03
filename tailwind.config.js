/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff1f6',
          100: '#ffe3ee',
          200: '#ffbfd4',
          300: '#ff91b6',
          400: '#ff6497',
          500: '#ff3f7f',
          600: '#ea2869',
          700: '#c21a55',
          800: '#9d1749',
          900: '#85143e',
          950: '#5f1234',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 63, 127, 0.35)',
      },
      backgroundImage: {
        'pink-radial':
          'radial-gradient(circle at top, rgba(255,255,255,0.55), transparent 35%), linear-gradient(135deg, #fff1f6 0%, #ffd6e6 40%, #ffb3cc 100%)',
      },
    },
  },
  plugins: [],
};
