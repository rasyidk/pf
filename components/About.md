# About Component

## Overview
The About component displays key statistics and achievements in a grid layout. It showcases important metrics like GPA, years of experience, number of projects, and client satisfaction.

## Features
- **Responsive Grid Layout**: 1 column on mobile, 2 on tablet, 4 on desktop
- **Animated Stats**: Each stat card animates into view with staggered delays
- **Hover Effects**: Cards scale and border color changes on hover
- **Terminal Aesthetic**: Consistent with the portfolio's CLI/terminal theme
- **Accessibility**: Proper ARIA labels and semantic HTML

## Props

### `AboutProps`
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `stats` | `StatItem[]` | Yes | Array of statistics to display |

### `StatItem`
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | `string` | Yes | The statistic value (e.g., "3.90", "4+", "15+") |
| `label` | `string` | Yes | The label for the statistic (e.g., "GPA", "YEARS EXPERIENCE") |

## Usage Example

```tsx
import About from '@/components/About';

export default function Page() {
  const aboutStats = [
    { value: '3.90', label: 'GPA' },
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '15+', label: 'PROJECTS' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  return <About stats={aboutStats} />;
}
```

## Styling
- **Section Header**: Large, bold, monospace font with letter spacing
- **Stat Cards**: Bordered boxes with hover effects
- **Values**: Large (4xl-5xl), bold, accent color (#a78bfa)
- **Labels**: Small, uppercase, monospace with brackets

## Animations
- **Initial State**: Opacity 0, translated down 20px
- **Animated State**: Opacity 1, translated to original position
- **Stagger**: Each card animates with 0.1s delay after the previous
- **Hover**: Scale up to 110% on value

## Accessibility
- Section has `aria-label="About section"`
- Semantic HTML structure
- Keyboard accessible
- Screen reader friendly

## Responsive Behavior
- **Mobile (< 640px)**: 1 column grid
- **Tablet (640px - 1024px)**: 2 column grid
- **Desktop (> 1024px)**: 4 column grid

## Design Tokens Used
- `text-text-secondary`: Section header and labels
- `text-accent-primary`: Stat values
- `border-border`: Card borders
- `border-accent-primary`: Hover state borders

## Testing
The component includes comprehensive tests covering:
- Section header rendering
- All stat items rendering
- Correct number of cards
- Accessibility attributes
- Empty stats array handling
- Responsive grid classes
