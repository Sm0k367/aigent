import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'epic-gold': '#FFD700', // The glow of Sovereign Intelligence
        'void-black': '#050505', // The depth of Pure Potentiality
        'quantum-foam': 'rgba(255, 255, 255, 0.05)',
        'reality-blue': '#0070f3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'void-gradient': 'linear-gradient(180deg, #050505 0%, #1a1a1a 100%)',
      },
      animation: {
        'autopoietic-pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'reality-shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
