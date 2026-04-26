# ProjectCard Component

## Overview

The `ProjectCard` component is a server component that displays individual project information in a card format with a terminal/CLI-inspired aesthetic. It showcases project images, code snippets, technology tags, and action buttons for GitHub and live demos.

## Component Type

**Server Component** - No client-side interactivity required

## Props Interface

```typescript
interface ProjectCardProps {
  project: Project;
}

interface Project {
  id: string;              // e.g., "01"
  title: string;           // e.g., "StoreKit"
  description: string;     // Brief project description
  image: string;           // Path relative to /public, e.g., "/projects/storekit.jpg"
  codeSnippet: string;     // Code example to display
  tags: string[];          // Technology tags, e.g., ["React", "TypeScript"]
  github: string;          // GitHub repository URL
  demo: string;            // Live demo URL
}
```

## Features

### Visual Design
- **Surface Color**: `#0d0d0d` with `1px` border `#1a1a1a`
- **Glowing Border**: Purple glow effect on hover (`shadow-[0_0_20px_rgba(167,139,250,0.3)]`)
- **Image Zoom**: Subtle scale effect on hover
- **Rounded Corners**: 4px border radius (default)

### Content Sections
1. **Project Image**: Next.js Image component (600x400 dimensions)
2. **Project ID**: Monospace format (`// PROJECT_01`)
3. **Title**: Large bold heading
4. **Description**: Secondary text with proper line height
5. **Code Snippet**: Terminal-style code block with syntax highlighting colors
6. **Technology Tags**: BracketBadge components for each tag
7. **Action Buttons**: GitHub and Demo links with icons

### Interactions
- **Hover Effects**: 
  - Card glowing border
  - Image scale animation
  - Button color transitions
- **External Links**: Open in new tab with `noopener noreferrer`

## Usage Example

```tsx
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/types';

const project: Project = {
  id: '01',
  title: 'StoreKit',
  description: 'E-commerce platform with real-time inventory management',
  image: '/projects/storekit.jpg',
  codeSnippet: 'const cart = useCart();\ncart.addItem(product);',
  tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  github: 'https://github.com/username/storekit',
  demo: 'https://storekit-demo.vercel.app',
};

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard project={project} />
    </div>
  );
}
```

## Styling Classes

### Container
- `group` - Enables group hover effects
- `bg-surface` - Background color #0d0d0d
- `border border-border` - 1px border #1a1a1a
- `rounded` - 4px border radius
- `overflow-hidden` - Clips content to rounded corners
- `transition-all duration-300` - Smooth transitions
- `hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]` - Glowing border on hover

### Image Container
- `relative w-full h-[400px]` - Fixed height container
- `overflow-hidden` - Clips scaled image

### Image
- `object-cover w-full h-full` - Fills container
- `transition-transform duration-300` - Smooth scale
- `group-hover:scale-105` - Zoom on card hover

### Content
- `p-6 space-y-4` - Padding and vertical spacing

### Project ID
- `font-mono text-sm text-accent-primary` - Monospace purple text

### Title
- `text-2xl font-bold text-text-primary` - Large bold white text

### Description
- `text-text-secondary text-sm leading-relaxed` - Gray text with good line height

### Code Block
- `bg-terminal-bg` - Dark background #0a0a0a
- `border border-border` - 1px border
- `rounded p-4` - Rounded with padding
- `overflow-x-auto` - Horizontal scroll for long code
- `font-mono text-sm text-terminal-text` - Monospace purple text

### Tags Container
- `flex flex-wrap gap-2` - Flexible wrapping layout

### Buttons
- **GitHub Button**: Outlined style with hover fill
  - `border border-accent-primary text-accent-primary`
  - `hover:bg-accent-primary hover:text-black`
- **Demo Button**: Filled style with hover darken
  - `bg-accent-primary text-black`
  - `hover:bg-accent-secondary`

## Accessibility

- **Alt Text**: Image includes descriptive alt text from project title
- **External Links**: Include `rel="noopener noreferrer"` for security
- **Semantic HTML**: Uses proper heading hierarchy
- **Keyboard Navigation**: All interactive elements are keyboard accessible

## Requirements Validation

**Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10**

- ✓ 8.1: Displays project image using Next.js Image component
- ✓ 8.2: Displays project ID in monospace format
- ✓ 8.3: Displays project title
- ✓ 8.4: Displays project description
- ✓ 8.5: Displays code snippet with syntax highlighting colors
- ✓ 8.6: Displays technology tags as BracketBadge components
- ✓ 8.7: Displays GitHub button linking to repository
- ✓ 8.8: Displays Demo button linking to live demo
- ✓ 8.9: Implements glowing border on hover
- ✓ 8.10: Uses surface color #0d0d0d with 1px border #1a1a1a

## Dependencies

- `next/image` - Image optimization
- `@/lib/types` - TypeScript interfaces
- `./BracketBadge` - Technology tag component
- `lucide-react` - Icons (ExternalLink, Github)

## Related Components

- **BracketBadge**: Used for technology tags
- **Projects**: Parent component that uses ProjectCard
- **TerminalPanel**: Similar terminal aesthetic

## Notes

- Server component - no 'use client' directive needed
- Images should be placed in `/public/projects/` directory
- Code snippets support multi-line strings with `\n`
- All external links open in new tabs for better UX
