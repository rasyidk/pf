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
        // Base layers
        background: {
          DEFAULT: '#0a0a0f',
          gradient: {
            from: '#0a0a0f',
            via: '#0f0a15',
            to: '#0a0f15',
          },
        },
        
        // Glass surfaces - ULTRA TRANSPARENT for maximum glass effect
        glass: {
          light: 'rgba(255, 255, 255, 0.002)',
          DEFAULT: 'rgba(255, 255, 255, 0.003)',
          medium: 'rgba(255, 255, 255, 0.005)',
          dark: 'rgba(0, 0, 0, 0.30)',
        },
        
        // Glass borders - HIGHLY VISIBLE to compensate for ultra transparency
        'glass-border': {
          light: 'rgba(255, 255, 255, 0.20)',
          DEFAULT: 'rgba(255, 255, 255, 0.25)',
          strong: 'rgba(255, 255, 255, 0.35)',
        },
        
        // Accent colors (orange/coral)
        accent: {
          primary: '#ff6b35',
          secondary: '#ff8c61',
          hover: '#ff5722',
          glow: 'rgba(255, 107, 53, 0.4)',
        },
        
        // Text colors optimized for glass
        text: {
          primary: '#ffffff',
          secondary: '#e5e7eb',
          muted: '#9ca3af',
          accent: '#ff6b35',
        },
        
        // Legacy colors for backward compatibility
        surface: '#0d0d0d',
        border: '#1a1a1a',
        'accent-primary': '#ff6b35',
        'accent-secondary': '#ff8c61',
        'text-primary': '#ffffff',
        'text-secondary': '#e5e7eb',
        'text-muted': '#9ca3af',
        'terminal-bg': '#0a0a0a',
        'terminal-text': '#ff6b35',
        'dot-grid': '#333333',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        DEFAULT: '12px',
        md: '16px',
        lg: '20px',
        xl: '32px',
      },
      boxShadow: {
        'glass-sm': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 24px rgba(0, 0, 0, 0.25)',
        'glass-lg': '0 12px 40px rgba(0, 0, 0, 0.35)',
        'glass-glow': '0 0 30px rgba(255, 107, 53, 0.4)',
        'glass-glow-lg': '0 0 50px rgba(255, 107, 53, 0.5)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        medium: '300ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
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
