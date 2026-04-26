# Contact Component

## Overview

The Contact component displays contact information with a terminal-style availability status panel, email address with copy-to-clipboard functionality, and social media links.

## Features

- **Section Header**: Displays "// CONTACT" in uppercase with letter-spacing
- **Terminal Panel**: Shows availability status with typewriter animation
- **Email Display**: Clickable email with copy-to-clipboard functionality
- **Copy Confirmation**: Visual feedback when email is copied
- **Social Media Links**: Buttons for GitHub, LinkedIn, and Twitter with Lucide icons
- **External Links**: All social links open in new tabs with proper security attributes

## Props

```typescript
interface ContactProps {
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
```

### Prop Details

- **email** (string, required): Email address to display and copy
- **social** (object, required): Social media profile URLs
  - **github** (string): GitHub profile URL
  - **linkedin** (string): LinkedIn profile URL
  - **twitter** (string): Twitter profile URL

## Usage

```tsx
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <Contact
      email="rafi@example.com"
      social={{
        github: 'https://github.com/rafiardian',
        linkedin: 'https://linkedin.com/in/rafiardian',
        twitter: 'https://twitter.com/rafiardian'
      }}
    />
  );
}
```

## Behavior

### Copy to Clipboard

1. User clicks on the email address
2. Email is copied to clipboard using the Clipboard API
3. Success confirmation message appears for 3 seconds
4. If clipboard API fails, shows alert with manual copy instruction

### Terminal Panel

Displays three lines with typewriter animation:
- `[STATUS] Available for new opportunities`
- `[LOCATION] Remote / Jakarta, Indonesia`
- `[RESPONSE] Usually replies within 24 hours`

### Social Media Buttons

- Each button displays an icon and label
- Hover effect changes border and background to purple
- Opens link in new tab with `rel="noopener noreferrer"` for security
- Includes proper ARIA labels for accessibility

## Styling

- Uses monospace font for section header and terminal text
- Purple accent color (#a78bfa) for headings and hover states
- Responsive layout with max-width constraint
- Smooth transitions on hover effects
- Fade-in animation for copy confirmation

## Accessibility

- Semantic HTML with proper section and heading structure
- ARIA labels on social media links
- Keyboard accessible buttons and links
- Sufficient color contrast for text readability
- Focus indicators on interactive elements

## Error Handling

- Gracefully handles clipboard API failures
- Shows fallback alert with manual copy instruction
- Logs errors to console for debugging

## Requirements Satisfied

- **10.1**: Displays Terminal_Panel showing availability status
- **10.2**: Displays email address
- **10.5**: Displays social media buttons for GitHub, LinkedIn, Twitter using Lucide icons
- **10.7**: Displays section header "// CONTACT" in uppercase with letter-spacing

## Related Components

- `TerminalPanel`: Animated terminal display
- `TypewriterText`: Character-by-character text animation

## Dependencies

- `lucide-react`: Icons for social media buttons
- `@/lib/utils`: `copyToClipboard` utility function
- `@/lib/types`: TypeScript interfaces
