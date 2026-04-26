# Footer Component

## Overview

The Footer component is a simple server component that displays copyright information at the bottom of the portfolio website. It follows the terminal aesthetic with monospace typography and muted text color.

## Component Type

**Server Component** - This component does not require client-side interactivity and can be rendered on the server for optimal performance.

## Props

This component does not accept any props. It is self-contained and automatically displays the current year.

## Features

- **Dynamic Year**: Automatically displays the current year using `new Date().getFullYear()`
- **Copyright Holder**: Displays "Rafi Ardian" as the copyright holder
- **Muted Styling**: Uses `text-text-muted` (#333333) for subtle appearance
- **Monospace Font**: Uses `font-mono` for consistency with terminal aesthetic
- **Centered Layout**: Copyright text is centered horizontally
- **Border Top**: Includes a subtle top border to separate from content above

## Styling

- **Background**: Inherits from parent (typically black #000000)
- **Text Color**: `text-text-muted` (#333333)
- **Font**: Monospace (`font-mono`)
- **Padding**: `py-8` vertical, `px-4 sm:px-6 lg:px-8` horizontal (responsive)
- **Border**: `border-t border-border` (top border with #1a1a1a color)
- **Max Width**: `max-w-7xl` with auto margins for centering

## Usage

```tsx
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div>
      {/* Page content */}
      <Footer />
    </div>
  );
}
```

## Requirements Satisfied

- **Requirement 11.1**: Displays copyright line with current year
- **Requirement 11.2**: Displays "Rafi Ardian" as copyright holder
- **Requirement 11.3**: Uses muted text color #333333

## Accessibility

- Uses semantic `<footer>` HTML element
- Text is readable with sufficient contrast against black background
- Responsive padding ensures proper spacing on all screen sizes

## Example Output

```
© 2024 Rafi Ardian
```

The year updates automatically based on the current date.
