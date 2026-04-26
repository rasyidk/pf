# Skills Component

## Overview

The Skills component displays technical skills organized by category in a responsive grid layout. Each skill is rendered as a hoverable BracketBadge with a devicon.

## Usage

```tsx
import Skills from '@/components/Skills';
import { SkillCategory } from '@/lib/types';

const skillCategories: SkillCategory[] = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
    ],
  },
];

export default function Page() {
  return <Skills categories={skillCategories} />;
}
```

## Props

### SkillsProps

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| categories | SkillCategory[] | Yes | Array of skill categories to display |

### SkillCategory (from lib/types.ts)

| Property | Type | Description |
|----------|------|-------------|
| title | string | Category name (e.g., "FRONTEND", "BACKEND", "TOOLS") |
| skills | Skill[] | Array of skills in this category |

### Skill (from lib/types.ts)

| Property | Type | Description |
|----------|------|-------------|
| name | string | Skill name (e.g., "React", "Node.js") |
| icon | string | Devicon class name (e.g., "devicon-react-original") |

## Features

- **Responsive Grid**: Three columns on desktop (md+), single column on mobile
- **Category Organization**: Skills grouped by FRONTEND, BACKEND, TOOLS
- **Devicons**: Each skill displays with its technology icon
- **Hover Effects**: Skills have purple background on hover (via BracketBadge hoverable prop)
- **Section Navigation**: Includes id="skills" for smooth scrolling from navbar

## Styling

The component uses:
- Monospace font for section header and category titles
- Purple accent color (#a78bfa) for category titles
- Letter-spacing (0.2em) on section header
- Responsive padding and spacing
- Max-width container (7xl) for content

## Devicon Reference

Find devicon class names at: https://devicon.dev/

Common examples:
- React: `devicon-react-original`
- TypeScript: `devicon-typescript-plain`
- Node.js: `devicon-nodejs-plain`
- PostgreSQL: `devicon-postgresql-plain`
- Docker: `devicon-docker-plain`
- Git: `devicon-git-plain`

## Requirements Satisfied

- **6.1**: Section header "// SKILLS" in uppercase with letter-spacing
- **6.2**: Skills grouped into three categories
- **6.3**: Each skill displayed as BracketBadge with devicon
- **6.5**: Hover effect changes badge background to purple and text to black
