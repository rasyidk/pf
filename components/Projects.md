# Projects Component

## Overview

The Projects component displays a paginated gallery of portfolio projects with a terminal-inspired aesthetic. It loads project data dynamically, displays them in a responsive grid, and provides intuitive pagination controls.

## Features

- **Dynamic Data Loading**: Fetches projects from `data/projects.json` using the `loadProjects` utility
- **Responsive Grid Layout**: 
  - 3 columns on desktop (lg breakpoint)
  - 2 columns on tablet (md breakpoint)
  - 1 column on mobile
- **Pagination**: Displays 3 projects per page with navigation controls
- **Smooth Transitions**: Uses Framer Motion for page transition animations
- **Auto-scroll**: Automatically scrolls to section top when changing pages
- **Loading States**: Shows loading indicator while fetching data
- **Empty State**: Displays message when no projects are found
- **Accessibility**: Includes proper ARIA labels and keyboard navigation

## Usage

```tsx
import Projects from '@/components/Projects';

export default function Page() {
  return (
    <main>
      <Projects />
    </main>
  );
}
```

## Component Structure

```
Projects (Client Component)
├── Section Header: "// PROJECTS"
├── Projects Grid (AnimatePresence)
│   └── ProjectCard × 3 (per page)
└── Pagination Controls
    ├── [← PREV] button
    ├── Page numbers [01] [02] ...
    └── [NEXT →] button
```

## Pagination Behavior

- **Items Per Page**: 3 projects
- **Page Numbers**: Zero-padded format (01, 02, etc.)
- **Navigation**: Previous/Next buttons and direct page selection
- **Disabled States**: 
  - PREV button disabled on first page
  - NEXT button disabled on last page
- **Active Page**: Highlighted with purple background
- **Scroll Behavior**: Smooth scroll to section top on page change

## Responsive Breakpoints

| Breakpoint | Columns | Description |
|------------|---------|-------------|
| Mobile (< 768px) | 1 | Single column stack |
| Tablet (768px - 1024px) | 2 | Two column grid |
| Desktop (> 1024px) | 3 | Three column grid |

## States

### Loading State
Displays while fetching project data:
```
// PROJECTS
[LOADING...]
```

### Empty State
Displays when no projects are found:
```
// PROJECTS
[NO PROJECTS FOUND]
```

### Loaded State
Displays projects with pagination controls when data is available.

## Animations

- **Page Transitions**: Fade and slide effect when changing pages
- **Duration**: 300ms transition
- **Mode**: Wait mode (exit completes before enter starts)

## Accessibility Features

- **Semantic HTML**: Uses `<section>` with proper heading hierarchy
- **ARIA Labels**: 
  - `aria-label` on navigation buttons
  - `aria-current="page"` on active page number
- **Keyboard Navigation**: All buttons are keyboard accessible
- **Disabled States**: Properly disabled buttons with visual feedback

## Styling

- **Section Header**: Monospace font, uppercase, letter-spacing
- **Grid Gap**: 8 spacing units (2rem)
- **Pagination Gap**: 4 spacing units (1rem)
- **Button Styles**: 
  - Border with accent color
  - Hover effect: purple background, black text
  - Disabled: muted colors, no pointer events

## Dependencies

- `react`: useState, useEffect hooks
- `framer-motion`: AnimatePresence, motion components
- `lucide-react`: ChevronLeft, ChevronRight icons
- `@/lib/utils`: loadProjects utility function
- `@/lib/types`: Project type definition
- `@/components/ui/ProjectCard`: Individual project display

## Data Requirements

Projects must be available in `data/projects.json` with the following structure:

```json
{
  "projects": [
    {
      "id": "01",
      "title": "Project Name",
      "description": "Project description",
      "image": "/projects/image.jpg",
      "codeSnippet": "code example",
      "tags": ["Tag1", "Tag2"],
      "github": "https://github.com/...",
      "demo": "https://demo.com"
    }
  ]
}
```

## Performance Considerations

- **Client Component**: Marked with `'use client'` for interactivity
- **Lazy Loading**: Only renders current page projects
- **Optimized Images**: Uses Next.js Image component in ProjectCard
- **Smooth Scrolling**: Native browser smooth scroll behavior

## Related Components

- **ProjectCard**: Displays individual project details
- **BracketBadge**: Used in ProjectCard for technology tags

## Requirements Validation

**Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.9**

- ✅ 7.1: Loads project data from data/projects.json
- ✅ 7.2: Displays projects in 3-column (desktop) / 2-column (tablet) / 1-column (mobile) grid
- ✅ 7.3: Displays projects in 2-column grid on tablet
- ✅ 7.4: Displays projects in 1-column grid on mobile
- ✅ 7.5: Displays 3 projects per page
- ✅ 7.6: Displays pagination controls with PREV, page numbers, and NEXT
- ✅ 7.9: Displays section header "// PROJECTS" in uppercase with letter-spacing

## Example Integration

```tsx
// app/page.tsx
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="bg-black">
      {/* Other sections */}
      <Projects />
      {/* Other sections */}
    </main>
  );
}
```

## Testing

The component includes comprehensive tests covering:
- Section header rendering
- Loading state display
- Pagination functionality
- Page navigation (next, previous, direct)
- Button disabled states
- Active page highlighting
- Empty state handling
- Responsive grid classes

Run tests with:
```bash
npm test -- Projects.test.tsx
```

## Browser Support

- Modern browsers with ES6+ support
- Requires JavaScript enabled for pagination
- Graceful degradation for older browsers
