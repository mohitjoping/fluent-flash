import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        bounce05: {
          '85%, 92%, 100%': { transform: 'translateY(0)' },
          '89%': { transform: 'translateY(-4px)' },
          '95%': { transform: 'translateY(2px)' },
        },
        slide05: {
          '5%': { transform: 'translateX(14px)' },
          '15%, 30%': { transform: 'translateX(6px)' },
          '40%, 55%': { transform: 'translateX(0)' },
          '65%, 70%': { transform: 'translateX(-4px)' },
          '80%, 89%': { transform: 'translateX(-12px)' },
          '100%': { transform: 'translateX(14px)' },
        },
        paper05: {
          '5%': { transform: 'translateY(46px)' },
          '20%, 30%': { transform: 'translateY(34px)' },
          '40%, 55%': { transform: 'translateY(22px)' },
          '65%, 70%': { transform: 'translateY(10px)' },
          '80%, 85%': { transform: 'translateY(0)' },
          '92%, 100%': { transform: 'translateY(46px)' },
        },
keyboard05: {
  '5%, 12%, 21%, 30%, 39%, 48%, 57%, 66%, 75%, 84%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '9%': {
    boxShadow: '15px 2px 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '18%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 2px 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '27%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 12px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '36%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 12px 0 #fff, 60px 12px 0 #fff, 68px 12px 0 #fff, 83px 10px 0 #fff',
  },
  '45%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 2px 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '54%': {
    boxShadow: '15px 0 0 #fff, 30px 2px 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '63%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 12px 0 #fff',
  },
  '72%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 2px 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 10px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
  '81%': {
    boxShadow: '15px 0 0 #fff, 30px 0 0 #fff, 45px 0 0 #fff, 60px 0 0 #fff, 75px 0 0 #fff, 90px 0 0 #fff, 22px 10px 0 #fff, 37px 12px 0 #fff, 52px 10px 0 #fff, 60px 10px 0 #fff, 68px 10px 0 #fff, 83px 10px 0 #fff',
  },
},

      },
      perspective: {
        '1000px': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      boxShadow: {
        'flip-card': '0 8px 14px 0 rgba(0,0,0,0.2)',
      },
  
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce05": 'bounce05 var(--duration, 3s) linear infinite',
        "slide05": 'slide05 var(--duration, 3s) ease infinite',
        "paper05": 'paper05 var(--duration, 3s) linear infinite',
        "keyboard05": 'keyboard05 var(--duration, 3s) linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config