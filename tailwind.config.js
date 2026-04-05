/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: {
          bg: '#0B0F19',
          card: '#111827',
          elevated: '#1F2937',
          text: '#E5E7EB',
          muted: '#9CA3AF',
          faint: '#6B7280',
        },
        aurora: {
          violet: '#7C3AED',
          cyan: '#06B6D4',
        },
        page: 'var(--color-page-bg)',
        surface: 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        muted: 'var(--color-muted)',
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          fg: 'var(--color-brand-fg)',
          muted: 'var(--color-brand-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          fg: 'var(--color-accent-fg)',
          muted: 'var(--color-accent-muted)',
        },
        ink: 'var(--color-ink)',
        subtle: 'var(--color-subtle)',
        line: 'var(--color-border)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        hero: 'var(--shadow-hero)',
        nav: 'var(--shadow-nav)',
        glow: '0 0 40px -8px rgb(124 58 237 / 0.45)',
        'glow-cyan': '0 0 36px -8px rgb(6 182 212 / 0.35)',
      },
      backgroundImage: {
        'page-gradient': 'var(--bg-mesh-layer)',
        'aurora-bar': 'linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)',
        'aurora-soft': 'linear-gradient(135deg, rgb(124 58 237 / 0.14) 0%, rgb(6 182 212 / 0.1) 100%)',
      },
    },
  },
  plugins: [],
};
