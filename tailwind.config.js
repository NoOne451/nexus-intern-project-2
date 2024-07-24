/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-primary': 'var(--custom-primary)',
        'custom-dark': 'var(--custom-dark)',
        'custom-light': 'var(--custom-light)',
        'custom-white': 'var(--custom-primary)',
      },
    },
  },
  plugins: [],
};
