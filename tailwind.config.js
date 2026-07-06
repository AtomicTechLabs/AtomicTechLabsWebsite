/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#56a22e',
          dark:    '#3d7520',
          glow:    'rgba(86,162,46,0.20)',
          light:   '#7bc44f',
        },
        brand: {
          navy:   '#060d1f',
          dark:   '#0a1628',
          darker: '#0f1f3d',
          muted:  '#8A90A2',
          amber:  '#f5a623',
        },
        surface: {
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float':      'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease infinite',
        'rotate-slow':'rotateSlow 4s linear infinite',
        'scroll-left':'scrollLeft 30s linear infinite',
        'scroll-left-fast':'scrollLeft 18s linear infinite',
        'fade-up':    'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        float:      { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-12px)' } },
        glowPulse:  { '0%,100%': { opacity:'0.4' }, '50%': { opacity:'1' } },
        rotateSlow: { from: { transform:'rotate(0deg)' }, to: { transform:'rotate(360deg)' } },
        scrollLeft: { '0%': { transform:'translateX(0)' }, '100%': { transform:'translateX(-50%)' } },
        fadeUp:     { from: { opacity:'0', transform:'translateY(30px)' }, to: { opacity:'1', transform:'translateY(0)' } },
      },
      boxShadow: {
        'accent':    '0 0 30px rgba(86,162,46,0.25)',
        'accent-lg': '0 0 60px rgba(86,162,46,0.35)',
        'card':      '0 20px 60px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
