# Hero Component

## Overview

The Hero component is the landing section of the portfolio website, displaying profile information, a photo with HUD-style corners, role cycling animation, and an animated terminal panel. It follows the blackbox.ai terminal aesthetic with purple accents and monospace typography.

## Features

- **Two-column responsive layout**: Desktop shows side-by-side content and photo; mobile stacks vertically
- **Role cycling animation**: Automatically cycles through role titles every 2.5 seconds with fade transitions
- **Profile photo with HUD corners**: Displays profile image with decorative corner brackets and glow effect on hover
- **CTA buttons**: Smooth scroll navigation to Projects and Contact sections
- **Terminal panel**: Animated CLI-style panel showing build/deploy status (desktop only)
- **Error handling**: Graceful fallback when profile image fails to load

## Props

```typescript
interface HeroProps {
  name: string;           // Full name to display
  roles: string[];        // Array of role titles to cycle through
  bio: string;            // Biography paragraph
  profileImage: string;   // Path to profile image (relative to /public)
}
```

## Usage

```tsx
import Hero from '@/components/Hero';

export default function Page() {
  return (
    <Hero
      name="Rafi Ardian"
      roles={['Full Stack Developer', 'Frontend Engineer', 'Problem Solver']}
      bio="Passionate software engineer building modern web applications with clean code and great user experiences."
      profileImage="/profile.jpg"
    />
  );
}
```

## Requirements Satisfied

This component satisfies the following requirements from the spec:

- **4.1**: Two-column layout on desktop, stacked on mobile
- **4.2**: Stacked layout on mobile screens
- **4.3**: "// SOFTWARE ENGINEER" label in monospace
- **4.4**: "Rafi Ardian" as large heading
- **4.6**: Bio paragraph display
- **4.7**: Two CTA buttons [VIEW_PROJECTS] and [CONTACT_ME]
- **4.8**: Smooth scroll when CTA buttons are clicked

## Styling

The component uses the portfolio's design system:

- **Background**: Pure black (#000000)
- **Text colors**: White primary, gray secondary, purple accent
- **Typography**: Space Grotesk for headings, monospace for labels
- **Animations**: Fade transitions for role cycling, pulse/ping for status indicator
- **Effects**: Glow border on hover, HUD corner brackets

## Responsive Behavior

- **Mobile (< 1024px)**: Single column, terminal panel hidden
- **Desktop (≥ 1024px)**: Two columns, terminal panel visible

## Accessibility

- Semantic HTML with proper heading hierarchy
- Alt text for profile image
- Keyboard-accessible buttons
- Sufficient color contrast for text

## Dependencies

- `next/image`: Optimized image loading
- `@/lib/utils`: Smooth scroll utility
- `@/components/ui/TerminalPanel`: Animated terminal display
- `@/lib/types`: TypeScript interfaces

## Notes

- Profile image is loaded with priority and blur placeholder for optimal performance
- Role cycling uses CSS transitions for smooth fade effects
- Terminal panel only displays on desktop to avoid cluttering mobile view
- HUD corners are positioned using absolute positioning with custom CSS classes
