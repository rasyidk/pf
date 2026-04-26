import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0d0d0d',
        border: '#1a1a1a',
        'accent-primary': '#a78bfa',
        'accent-secondary': '#8b5cf6',
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',  // Changed from #666666 to lighter gray
        'text-muted': '#9ca3af',      // Changed from #333333 to lighter gray
        'terminal-bg': '#0a0a0a',
        'terminal-text': '#a78bfa',
        'dot-grid': '#333333',        // Enhanced from #1a1a1a to more visible
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
