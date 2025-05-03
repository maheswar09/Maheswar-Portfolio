/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          sans: [
            'Inter',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
        },
        spacing: {
          '128': '32rem',
        },
        animation: {
          'bounce-slow': 'bounce 2s infinite',
        },
        lineHeight: {
          'extra-loose': '2.5',
          '12': '3rem',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.line-clamp-2': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '2',
          },
          '.line-clamp-3': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '3',
          },
        };
        addUtilities(newUtilities);
      },
    ],
  };