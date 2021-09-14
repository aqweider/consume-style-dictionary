const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        lowlight: 'var(--color-lowlight)',
        header: 'var(--color-header)',
        highlight: 'var(--color-highlight)',
        'facebook': 'var(--color-facebook)',
        'product': 'var(--color-product)',
        'tile': 'var(--color-tile)',
        'primary--on-dark': 'var(--color-primary--on-dark)',
        'primary--on-light': 'var(--color-primary--on-light)',
        'secondary--on-dark': 'var(--color-secondary--on-dark)',
        'secondary--on-light': 'var(--color-secondary--on-light)',
        'tertiary--on-dark': 'var(--color-tertiary--on-dark)',
        'tertiary--on-light': 'var(--color-tertiary--on-light)',
        tint: {
          72: 'var(--color-tint-72)',
          48: 'var(--color-tint-48)',
          24: 'var(--color-tint-24)',
          12: 'var(--color-tint-12)'
        },
        grey: {
          base: '#0F0F0F',
          off: '#0F0F0F',
          charcoal: '#3F3F3F',
          soot: '#2B2B2B',
          dove: '#6F6F6F',
          star: '#9F9F9F',
          light: '#CFCFCF',
          bright: '#F0F0F0',
          warm: '#FAF9F8',
          'near-white': '#FBFBFB',
          white: '#FBFBFB'
        }
      },
      opacity: {
        '0': '0',
        '80': '0.8',
        '72': '0.72',
        '50': '0.5',
        '48': '0.48',
        '24': '0.24',
        '12': '0.12',
        '100': '1',
      },
      padding: {
        '5px': '5px'
      },
      width: {
        '4.5': '1.125rem',
        '27': '6.625',
        '34': '8.5rem',
        '50': '12.5rem',
        '58': '14.5rem', // Social button width
        '97': '24.57rem', // 393px - Search bar width
        '133.5': '33.125rem' // 530px
      },
      borderWidth: {
        3: '3px'
      },
      dropShadow: {
        'btn-primary-roll': 'var(--btn-primary-roll)',
      },
      boxShadow:{
        'elevation': 'var(--shadow-elevation)',
        'light': 'var(--shadow-light)',
        'sBase': 'var(--shadow-base)',
        'sHover': 'var(--shadow-hover)',
        'sActive': 'var(--shadow-active)',
        'border': 'var(--shadow-border)',
        'input': 'var(--shadow-input)',
        'mega-menu': 'var(--shadow-mega-menu)',
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      },
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    fontSize: {
      // Headings
      'hs-0': '18px',
      'hs-1': '21px',
      'hs-2': '24px',
      'hs-3': '30px',
      'hs-4': '36px',
      'hs-5': '42px',
      'hs-6': '60px',
      'hs-7': '72px',
      'hs-8': '96px',
      'hs-9': '120px',
      // Sub-Headings
      'ss-0': '13px',
      'ss-1': '15px',
      'ss-2': '17px',
      'ss-3': '19px',
      'ss-4': '21px',
      // Body
      'bs-0': '10px',
      'bs-1': '11px',
      'bs-2': '12px',
      'bs-3': '13px',
      'bs-4': '14px',
      'bs-5': '15px',
      'bs-6': '16px',
      'bs-7': '17px',
      'bs-8': '20px',
      //system
      'ps-lg': '20px',
      'ps-sm': '15px',
      'bds': '17px',
      'prs-rg': '15px',
      'prs-sm': '12px',
      'cta-0': '14px',
      'ctas-lg': '15px',
      'ctas-md': '14px',
      'ctas-rg': '14px',
      'navs': '14px',
      'ins': '14px',
      'bcs': '12px',
      'incs': '11px',
      'lbs-lg': '11px',
      'lbs-sm': '10px',
      'ins-title': '10px',
      'ras': '10px',
      'badge': '8px',
      'navigation': '14px',

    },
    fontFamily: {
      faro: ['Faro', 'sans-serif'],
      'atlas-l': ['Atlas Grotesk Light', 'sans-serif'],
      'atlas-r': ['Atlas Grotesk Regular', 'sans-serif'],
      'atlas-m': ['Atlas Grotesk Medium', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),

    typography: (theme) => ( {})
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
};
