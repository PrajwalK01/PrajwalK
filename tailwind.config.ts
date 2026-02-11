import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: '#0B0F1A',
          blue: '#38bdf8',
          purple: '#a855f7',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(130px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(130px) rotate(-360deg)' },
        },
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        orbit: 'orbit 14s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
