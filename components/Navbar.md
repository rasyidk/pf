# Navbar Component

## Overview

The Navbar component is a fixed navigation bar that provides smooth scrolling navigation to different sections of the portfolio website. It features a terminal-inspired design with a responsive layout that adapts to mobile and desktop screens.

## Features

- **Fixed Positioning**: Stays at the top of the viewport while scrolling
- **Transparent Background**: Initially transparent, applies backdrop blur when scrolled
- **Smooth Scrolling**: Navigates to sections with smooth scroll behavior
- **Responsive Design**: Desktop horizontal menu, mobile hamburger menu
- **Availability Indicator**: Pulsing dot animation showing availability status
- **Terminal Aesthetic**: Monospace font for navigation links, uppercase styling

## Props

This component does not accept any props. It is self-contained with internal state management.

## Usage

```tsx
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <div>
      <Navbar />
      
      {/* Your page sections with IDs */}
      <section id="about">About content</section>
      <section id="skills">Skills content</section>
      <section id="projects">Projects content</section>
      <section id="experience">Experience content</section>
      <section id="contact">Contact content</section>
    </div>
  );
}
```

## Requirements Satisfied

This component satisfies the following requirements from the portfolio-website spec:

- **3.1**: Fixed positioning at the top of the viewport
- **3.2**: Logo "Rafi Ardian" in Space Grotesk bold font on the left side
- **3.3**: Navigation links in monospace uppercase: ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT
- **3.4**: Purple pulsing dot with "AVAILABLE" text in monospace on the far right
- **13.6**: Pulsing animation on availability status dot

## Behavior

### Desktop View (≥ 768px)

- Logo on the left
- Horizontal navigation links in the center with dot separators
- Availability indicator on the right
- Hover effects on logo and links (purple color)

### Mobile View (< 768px)

- Logo on the left
- Hamburger menu icon on the right
- Clicking hamburger opens slide-down menu
- Mobile menu shows all navigation links vertically
- Availability indicator at the bottom of mobile menu
- Clicking a link closes the menu and scrolls to section

### Scroll Behavior

- Initially transparent background
- When scrolled, applies `backdrop-blur-md` and semi-transparent background
- Smooth transition between states

### Navigation

- Clicking any link triggers smooth scroll to the corresponding section
- Sections must have matching IDs: `about`, `skills`, `projects`, `experience`, `contact`
- Mobile menu automatically closes after navigation

## Styling

- **Background**: Transparent initially, `bg-background/80` with backdrop blur when scrolled
- **Logo**: Space Grotesk bold, text-xl
- **Navigation Links**: Monospace font, uppercase, text-sm
- **Availability Dot**: 2px circle with `animate-pulse` and `animate-ping` effects
- **Mobile Menu**: Surface background with border-top
- **Z-Index**: 50 to stay above other content

## State Management

- `isMenuOpen`: Controls mobile menu visibility
- `isScrolled`: Tracks scroll position to apply backdrop blur

## Accessibility

- Hamburger button has `aria-label="Toggle menu"` for screen readers
- All interactive elements are keyboard accessible
- Semantic HTML with `<nav>` element
- Clear visual focus states with hover effects

## Dependencies

- `react`: useState, useEffect hooks
- `lucide-react`: Menu and X icons for mobile menu
- Tailwind CSS for styling
- Custom color tokens from tailwind.config.ts

## Notes

- The component uses the 'use client' directive as it requires client-side interactivity
- Scroll event listener is properly cleaned up in useEffect
- The pulsing dot uses both `animate-pulse` and `animate-ping` for a layered effect
- Navigation links are separated by middle dots (·) in desktop view
