/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1075bc',
          secondary: '#5cf996',
          accent: '#f5ccff',
          neutral: '#e0f2fe',
          'base-100': '#f3f4f6',
          info: '#a7d6f1',
          success: '#2bcaad',
          warning: '#f4a82f',
          error: '#e44121',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
