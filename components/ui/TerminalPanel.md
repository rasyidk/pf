# TerminalPanel Component

A client-side component that displays animated CLI-style terminal output with typewriter effects.

## Features

- Sequential line-by-line animation
- Customizable status prefixes ([INIT], [SCAN], [DONE], etc.)
- Configurable animation speed
- Optional delays between lines
- Blinking cursor during animation
- Monospace font with purple text on dark background

## Props

```typescript
interface TerminalLine {
  prefix: string;  // Status indicator like [INIT], [SCAN], [DONE]
  text: string;    // The text content to animate
  delay?: number;  // Optional delay in ms before starting this line
}

interface TerminalPanelProps {
  lines: TerminalLine[];  // Array of lines to display
  speed?: number;         // Characters per second (default: 30)
}
```

## Usage

### Basic Example

```tsx
import TerminalPanel from '@/components/ui/TerminalPanel';

export default function Example() {
  const lines = [
    { prefix: '[INIT]', text: 'Initializing build process...' },
    { prefix: '[SCAN]', text: 'Scanning dependencies...' },
    { prefix: '[DONE]', text: 'Build complete!' }
  ];

  return <TerminalPanel lines={lines} />;
}
```

### With Custom Speed

```tsx
<TerminalPanel 
  lines={lines} 
  speed={50}  // 50 characters per second (faster)
/>
```

### With Line Delays

```tsx
const lines = [
  { prefix: '[INIT]', text: 'Starting...', delay: 0 },
  { prefix: '[SCAN]', text: 'Processing...', delay: 500 },  // 500ms delay
  { prefix: '[DONE]', text: 'Complete!', delay: 1000 }      // 1000ms delay
];

<TerminalPanel lines={lines} />
```

### Hero Section Example

```tsx
const buildLines = [
  { prefix: '[INIT]', text: 'npm run build' },
  { prefix: '[SCAN]', text: 'Compiling TypeScript...' },
  { prefix: '[DONE]', text: 'Build successful ✓' }
];

<TerminalPanel lines={buildLines} speed={40} />
```

### Contact Section Example

```tsx
const statusLines = [
  { prefix: '[STATUS]', text: 'Available for work' },
  { prefix: '[LOCATION]', text: 'Remote / Jakarta, ID' },
  { prefix: '[RESPONSE]', text: 'Usually replies within 24h' }
];

<TerminalPanel lines={statusLines} />
```

## Styling

The component uses the following styles:
- Background: `#0a0a0a` (dark terminal background)
- Border: `#1a1a1a` (subtle border)
- Text color: `#a78bfa` (purple)
- Prefix color: `text-purple-400`
- Font: Monospace
- Padding: 4 (1rem)
- Border radius: Rounded

## Animation Behavior

1. Lines animate sequentially, one at a time
2. Each line displays its prefix immediately
3. Text animates character by character using TypewriterText
4. A blinking cursor (▌) appears at the end of the current line
5. After a line completes, the next line starts after its delay
6. Completed lines remain visible without animation

## Requirements Validated

- **13.1**: Terminal_Panel displays text with Typewriter_Animation effect ✓
- **13.2**: Terminal_Panel displays a blinking cursor (▌) during animation ✓
- **17.1**: Displays lines prefixed with status indicators [INIT], [SCAN], [DONE] ✓
- **17.2**: Animates text line by line with Typewriter_Animation ✓
- **17.3**: Displays blinking cursor at end of current line ✓
- **17.4**: Uses monospace font with purple text on dark background ✓
- **17.5**: Moves to next line after completion with delay ✓
- **17.6**: Displays build and deploy commands as content ✓

## Notes

- This is a client component (uses 'use client' directive)
- Depends on TypewriterText component for character animation
- Uses React hooks (useState, useEffect) for animation state
- Automatically handles timing and sequencing of lines
