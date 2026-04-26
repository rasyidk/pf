# BracketBadge Component

## Overview
A reusable server component that displays text in a terminal-style bracket format `[TEXT]` with optional devicon support and hover effects.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | The text to display inside brackets (will be converted to uppercase) |
| `icon` | `string` | `undefined` | Optional devicon class name (e.g., "devicon-react-original") |
| `hoverable` | `boolean` | `false` | Enable hover effect (purple background, black text) |

## Usage Examples

### Basic Badge
```tsx
<BracketBadge text="react" />
// Renders: [REACT]
```

### Badge with Icon
```tsx
<BracketBadge text="typescript" icon="devicon-typescript-plain" />
// Renders: 🔷 [TYPESCRIPT]
```

### Hoverable Badge
```tsx
<BracketBadge text="nextjs" hoverable />
// Renders: [NEXTJS] with hover effect
```

### Hoverable Badge with Icon
```tsx
<BracketBadge text="tailwind" icon="devicon-tailwindcss-plain" hoverable />
// Renders: 🎨 [TAILWIND] with hover effect
```

## Features

- **Server Component**: No client-side JavaScript required
- **Monospace Font**: Uses system monospace font for authentic terminal aesthetic
- **Uppercase Formatting**: Automatically converts text to uppercase
- **Devicon Support**: Displays technology icons from devicons CDN
- **Optional Hover Effect**: Purple background (#a78bfa) with black text on hover
- **Smooth Transitions**: 200ms transition duration for hover effects

## Design System Compliance

- Uses `font-mono` from Tailwind config (Requirement 2.10)
- Uses `accent-primary` color (#a78bfa) for hover background (Requirement 2.3)
- Displays format `[SKILL_NAME]` (Requirement 6.2)
- Hover effect changes to purple bg and black text (Requirement 6.4)

## Requirements Satisfied

- ✅ Requirement 2.10: System monospace font for badges
- ✅ Requirement 6.2: Bracket format [SKILL_NAME]
- ✅ Requirement 6.4: Hover effect with purple bg and black text

## Notes

- This is a server component (no 'use client' directive)
- Devicons must be loaded via CDN in the layout or page
- The component is lightweight and optimized for performance
