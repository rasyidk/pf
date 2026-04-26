# TypewriterText Component

A React client component that animates text character-by-character with a blinking cursor, creating a realistic typewriter effect for terminal-style interfaces.

## Features

- ✅ Character-by-character animation
- ✅ Configurable typing speed
- ✅ Blinking cursor (▌) during animation
- ✅ Optional completion callback
- ✅ Monospace font styling
- ✅ Lightweight with no external dependencies

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | *required* | The text to animate |
| `speed` | `number` | `30` | Characters per second (higher = faster) |
| `onComplete` | `() => void` | `undefined` | Callback function called when animation completes |

## Usage

### Basic Usage

```tsx
import TypewriterText from '@/components/animations/TypewriterText';

export default function MyComponent() {
  return (
    <div className="text-terminal-text">
      <TypewriterText text="Hello, World!" />
    </div>
  );
}
```

### Custom Speed

```tsx
// Slow typing (15 characters per second)
<TypewriterText text="Typing slowly..." speed={15} />

// Fast typing (60 characters per second)
<TypewriterText text="Typing quickly!" speed={60} />
```

### With Completion Callback

```tsx
<TypewriterText 
  text="Loading complete!" 
  onComplete={() => {
    console.log('Animation finished!');
    // Trigger next action
  }}
/>
```

### Terminal Panel Example

```tsx
'use client';

import TypewriterText from '@/components/animations/TypewriterText';

export default function TerminalPanel() {
  return (
    <div className="bg-terminal-bg p-4 rounded border border-border">
      <div className="text-terminal-text font-mono space-y-2">
        <div>
          <TypewriterText text="[INIT] Initializing system..." speed={40} />
        </div>
        <div>
          <TypewriterText text="[SCAN] Analyzing codebase..." speed={40} />
        </div>
        <div>
          <TypewriterText text="[DONE] Ready ✓" speed={40} />
        </div>
      </div>
    </div>
  );
}
```

### Multiple Sequential Animations

```tsx
'use client';

import { useState } from 'react';
import TypewriterText from '@/components/animations/TypewriterText';

export default function SequentialAnimation() {
  const [step, setStep] = useState(0);
  
  const lines = [
    "[INIT] Starting build...",
    "[BUILD] Compiling components...",
    "[DONE] Build successful ✓"
  ];

  return (
    <div className="text-terminal-text space-y-1">
      {lines.map((line, index) => (
        index <= step && (
          <div key={index}>
            <TypewriterText 
              text={line}
              speed={50}
              onComplete={() => {
                if (index < lines.length - 1) {
                  setTimeout(() => setStep(index + 1), 500);
                }
              }}
            />
          </div>
        )
      ))}
    </div>
  );
}
```

## Implementation Details

### Animation Logic

The component uses two `useEffect` hooks:

1. **Typewriter Effect**: Adds one character at a time based on the speed prop
   - Calculates delay as `1000 / speed` milliseconds per character
   - Updates displayed text incrementally
   - Calls `onComplete` when all characters are displayed

2. **Cursor Blink**: Toggles cursor visibility every 530ms (standard blink rate)
   - Cursor only shows during animation
   - Automatically hides when animation completes

### Performance Considerations

- Uses `setTimeout` for character animation (more precise than `setInterval`)
- Cleans up timers on unmount to prevent memory leaks
- Minimal re-renders with optimized state updates

## Styling

The component applies `font-mono` class by default. Wrap it in a container with appropriate text color:

```tsx
// Purple terminal text
<div className="text-terminal-text">
  <TypewriterText text="Terminal output" />
</div>

// White text
<div className="text-text-primary">
  <TypewriterText text="Regular text" />
</div>

// Accent color
<div className="text-accent-primary">
  <TypewriterText text="Highlighted text" />
</div>
```

## Requirements Validation

**Validates: Requirements 13.1, 13.2, 17.3, 17.4**

- ✅ 13.1: Terminal_Panel displays text with Typewriter_Animation effect
- ✅ 13.2: Terminal_Panel displays a blinking cursor (▌) during Typewriter_Animation
- ✅ 17.3: Terminal_Panel displays a blinking cursor (▌) at the end of the current line
- ✅ 17.4: Terminal_Panel uses monospace font with purple text (#a78bfa) on dark background (#0a0a0a)

## Testing

To test the component, visit `/test-typewriter` in development mode:

```bash
npm run dev
# Navigate to http://localhost:3000/test-typewriter
```

The test page includes:
- Default speed demonstration
- Fast and slow speed comparisons
- Terminal-style examples
- Multiple component instances
- Callback functionality verification

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Notes

- Component must be used in a client component (`'use client'` directive)
- Cursor character is `▌` (U+258C, Left Half Block)
- Animation starts immediately on mount
- Text cannot be changed after mount (remount component for new text)
