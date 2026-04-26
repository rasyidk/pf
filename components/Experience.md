# Experience Component

## Overview

The Experience component displays work history in a vertical timeline format with a terminal/CLI-inspired aesthetic. It features a purple timeline line with dots marking each experience entry, alternating left/right layout on desktop, and responsive single-column layout on mobile.

## Features

- **Vertical Timeline**: Purple line with dots marking each experience entry
- **Alternating Layout**: Desktop displays entries alternating left/right for visual interest
- **Responsive Design**: Single column with left-aligned timeline on mobile
- **Scroll Animations**: Fade-in animations triggered when entries enter viewport
- **Surface Cards**: Responsibilities displayed in styled surface containers
- **Monospace Typography**: Period and company names use monospace font for CLI aesthetic

## Props

```typescript
interface ExperienceProps {
  entries: ExperienceEntry[];
}

interface ExperienceEntry {
  company: string;         // e.g., "Ruangguru"
  role: string;            // e.g., "Frontend Developer"
  period: string;          // e.g., "2022 — PRESENT"
  responsibilities: string[]; // Bullet points
}
```

## Usage

```tsx
import Experience from '@/components/Experience';
import { ExperienceEntry } from '@/lib/types';

const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Ruangguru',
    role: 'Frontend Developer',
    period: '2022 — PRESENT',
    responsibilities: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with design team to implement UI/UX improvements',
      'Optimized application performance and reduced load times by 40%',
    ],
  },
  {
    company: 'Gojek',
    role: 'Web Dev Intern',
    period: '2021',
    responsibilities: [
      'Built reusable React components for internal tools',
      'Participated in code reviews and agile development processes',
    ],
  },
];

export default function Page() {
  return <Experience entries={experienceEntries} />;
}
```

## Styling

The component uses the following design tokens:

- **Timeline Line**: `bg-accent-primary` (purple)
- **Timeline Dots**: `bg-accent-primary rounded-full` with `border-background`
- **Section Header**: Monospace font with letter-spacing `tracking-[0.2em]`
- **Surface Cards**: `bg-surface border border-border` for responsibility containers
- **Text Colors**: 
  - Primary text: `text-text-primary`
  - Company names: `text-accent-primary`
  - Period: `text-text-secondary`
  - Responsibilities: `text-text-secondary`

## Layout Behavior

### Desktop (lg breakpoint and above)
- Timeline line centered vertically
- Entries alternate left/right
- Even-indexed entries (0, 2, 4...): content on left, spacer on right
- Odd-indexed entries (1, 3, 5...): content on right, spacer on left
- Text alignment follows content position

### Mobile (below lg breakpoint)
- Timeline line on left edge
- All entries in single column
- Content left-aligned with left padding
- Timeline dots positioned on left edge

## Animations

Uses Framer Motion for scroll-triggered animations:

```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

- Entries fade in and slide up when entering viewport
- Staggered animation with 0.1s delay between entries
- Animation triggers once when 100px from viewport

## Accessibility

- Semantic HTML with `<section>` and proper heading hierarchy
- Section ID `#experience` for navigation
- Bullet points use semantic `<ul>` and `<li>` elements
- Sufficient color contrast for text readability
- Responsive touch targets for mobile devices

## Requirements Validation

**Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5, 9.6**

- ✅ 9.1: Vertical timeline with purple line (`border-l-2 bg-accent-primary`)
- ✅ 9.2: Purple dots on timeline for each entry
- ✅ 9.3: First entry displays "Frontend Developer at Ruangguru (2022 — PRESENT)"
- ✅ 9.4: Second entry displays "Web Dev Intern at Gojek (2021)"
- ✅ 9.5: Job responsibilities displayed as bullet points
- ✅ 9.6: Section header "// EXPERIENCE" in uppercase with letter-spacing

## Component Structure

```
<section id="experience">
  <h2>// EXPERIENCE</h2>
  <div> {/* Timeline Container */}
    <div /> {/* Vertical Timeline Line */}
    <div> {/* Experience Entries */}
      {entries.map((entry) => (
        <motion.div> {/* Entry Container */}
          <div /> {/* Timeline Dot */}
          <div> {/* Content Container */}
            <div> {/* Company and Role */}
              <h3>{role}</h3>
              <div>{company}</div>
              <div>{period}</div>
            </div>
            <div> {/* Responsibilities Card */}
              <ul>
                {responsibilities.map((item) => (
                  <li>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div /> {/* Spacer */}
        </motion.div>
      ))}
    </div>
  </div>
</section>
```

## Testing

See `Experience.test.tsx` for unit tests covering:
- Section header rendering
- All experience entries display correctly
- Responsibilities render as bullet points
- Timeline dots render for each entry
- Empty entries array handling
- Surface container styling

## Demo

See `Experience.demo.tsx` for a standalone demo with sample data.
