import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00D4FF',
        secondary: '#1C2541',
        cyberBg: '#0B132B',
        accent: '#22C55E',
        urgency: '#F43F5E',
      },
    },
  },
  plugins: [],
} satisfies Config;
