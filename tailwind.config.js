/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ─── SHOU Edition — Palette officielle ───────────────────
        shou: {
          950: '#020202',
          900: '#050505',
          800: '#0A0A0A',
          700: '#0F0F0F',
          600: '#161614',
          500: '#242420',
          400: '#3C3A36',
          300: '#5C5A54',
          200: '#8C8A84',
          100: '#C4C0B6',
          50:  '#DEDAD2',
        },
        // ─── Or SHOU ──────────────────────────────────────────────
        gold: {
          DEFAULT: '#D3B47F',
          light:   '#E8CFA0',
          dim:     '#9A8060',
          muted:   '#7A6848',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono:  ['Share Tech Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        editorial: '0.08em',
        wide:      '0.12em',
        widest:    '0.20em',
      },
    },
  },
  plugins: [],
}
