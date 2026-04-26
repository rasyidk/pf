# Design Document: Portfolio Website

## Overview

The portfolio website is a single-page Next.js 14+ application that showcases a software engineer's profile, skills, projects, and experience using a terminal/CLI-inspired aesthetic. The design replicates the blackbox.ai visual style with pure black backgrounds, purple accent colors (#a78bfa, #8b5cf6), monospace typography, and animated terminal panels.

### Key Design Goals

1. **Terminal Aesthetic**: Create an authentic CLI/terminal experience with monospace fonts, bracket-style badges, and typewriter animations
2. **Performance**: Leverage Next.js 14+ App Router for optimal performance with server components and image optimization
3. **Responsive Design**: Mobile-first approach ensuring seamless experience across all device sizes
4. **Smooth Interactions**: Polished animations using Framer Motion for page transitions, scroll effects, and hover states
5. **Production Ready**: Zero TODOs, proper TypeScript types, Docker deployment, and comprehensive error handling

### Technology Stack

- **Framework**: Next.js 14+ with App Router and TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for transitions and scroll animations
- **Icons**: Lucide React for UI icons, devicons CDN for technology logos
- **Fonts**: Space Grotesk (Google Fonts via next/font) for UI, system monospace for terminal/code
- **Deployment**: Docker with multi-stage builds

## Architecture

### Application Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page (server component)
│   └── globals.css         # Tailwind imports and custom styles
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar (client)
│   ├── Hero.tsx            # Hero section with profile (client)
│   ├── Skills.tsx          # Skills grid (client)
│   ├── Projects.tsx        # Projects with pagination (client)
│   ├── Experience.tsx      # Timeline experience (client)
│   ├── Contact.tsx         # Contact section (client)
│   ├── Footer.tsx          # Footer (server)
│   ├── ui/
│   │   ├── TerminalPanel.tsx    # Animated terminal (client)
│   │   ├── BracketBadge.tsx     # [BADGE] component (server)
│   │   ├── ProjectCard.tsx      # Project card (server)
│   │   └── DotGrid.tsx          # Background pattern (server)
│   └── animations/
│       └── TypewriterText.tsx   # Typewriter effect (client)
├── data/
│   └── projects.json       # Project data structure
├── public/
│   ├── profile.jpg         # Profile photo
│   └── projects/           # Project images
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Utility functions
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker compose configuration
└── next.config.ts          # Next.js configuration
```

### Component Hierarchy

```
page.tsx (Server Component)
├── Navbar (Client)
├── DotGrid (Server)
├── Hero (Client)
│   ├── TypewriterText (Client)
│   └── TerminalPanel (Client)
├── Skills (Client)
│   └── BracketBadge (Server) × N
├── Projects (Client)
│   └── ProjectCard (Server) × N
├── Experience (Client)
├── Contact (Client)
│   └── TerminalPanel (Client)
└── Footer (Server)
```

### Server vs Client Components

**Server Components** (default, no 'use client'):
- `app/page.tsx` - Main page orchestrator
- `Footer.tsx` - Static footer content
- `BracketBadge.tsx` - Static badge rendering
- `ProjectCard.tsx` - Static project display
- `DotGrid.tsx` - Static background pattern

**Client Components** (require 'use client'):
- `Navbar.tsx` - Scroll effects, mobile menu state
- `Hero.tsx` - Role cycling animation, button interactions
- `Skills.tsx` - Hover effects on badges
- `Projects.tsx` - Pagination state and transitions
- `Experience.tsx` - Scroll-triggered animations
- `Contact.tsx` - Copy-to-clipboard functionality
- `TerminalPanel.tsx` - Typewriter animation state
- `TypewriterText.tsx` - Character-by-character animation

## Components and Interfaces

### Core Components

#### 1. Navbar Component

**Purpose**: Fixed navigation bar with smooth scrolling and mobile menu

**Props Interface**:
```typescript
// No props - self-contained component
```

**State**:
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

**Behavior**:
- Fixed positioning with `fixed top-0 w-full z-50`
- Backdrop blur effect when `isScrolled` is true
- Desktop: Horizontal nav links with dot separators
- Mobile: Hamburger menu with slide-down animation
- Smooth scroll to sections using `scrollIntoView({ behavior: 'smooth' })`
- Pulsing availability indicator with CSS animation

#### 2. Hero Component

**Purpose**: Landing section with profile photo, bio, and terminal animation

**Props Interface**:
```typescript
interface HeroProps {
  name: string;
  roles: string[];
  bio: string;
  profileImage: string;
}
```

**State**:
```typescript
const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
```

**Behavior**:
- Two-column layout (desktop) / stacked (mobile)
- Role cycling every 2.5 seconds with fade transitions
- Profile photo with HUD corner brackets (absolute positioned divs)
- Glowing border on hover using `group-hover:shadow-[0_0_20px_rgba(167,139,250,0.5)]`
- CTA buttons with smooth scroll navigation
- Terminal panel with typewriter animation

#### 3. Skills Component

**Purpose**: Display technical skills grouped by category

**Props Interface**:
```typescript
interface Skill {
  name: string;
  icon: string; // devicon class name
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillsProps {
  categories: SkillCategory[];
}
```

**Behavior**:
- Three-column grid (desktop) / single column (mobile)
- Each skill rendered as BracketBadge with devicon
- Hover effect: purple background, black text
- Scroll-triggered fade-in animation using Framer Motion

#### 4. Projects Component

**Purpose**: Paginated project gallery with animations

**Props Interface**:
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  codeSnippet: string;
  tags: string[];
  github: string;
  demo: string;
}

interface ProjectsProps {
  projects: Project[];
  itemsPerPage?: number; // default: 3
}
```

**State**:
```typescript
const [currentPage, setCurrentPage] = useState(1);
```

**Behavior**:
- Load projects from `data/projects.json`
- Display 3 projects per page in responsive grid
- Pagination controls with page numbers
- AnimatePresence for page transitions (fade + slide)
- Scroll to section top on page change
- ProjectCard components with hover effects

#### 5. ProjectCard Component

**Purpose**: Individual project display with image, code, and links

**Props Interface**:
```typescript
interface ProjectCardProps {
  project: Project;
}
```

**Behavior**:
- Next.js Image with 600x400 dimensions
- Code snippet with syntax highlighting colors
- Technology tags as BracketBadge components
- GitHub and Demo buttons with external links
- Glowing border on hover
- Surface color #0d0d0d with 1px border #1a1a1a

#### 6. Experience Component

**Purpose**: Timeline display of work history

**Props Interface**:
```typescript
interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceProps {
  entries: ExperienceEntry[];
}
```

**Behavior**:
- Vertical timeline with purple line (border-l-2)
- Purple dots at each entry (absolute positioned)
- Alternating left/right layout (desktop) / single column (mobile)
- Scroll-triggered fade-in animations
- Bullet points for responsibilities

#### 7. Contact Component

**Purpose**: Contact information with copy-to-clipboard and social links

**Props Interface**:
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

**State**:
```typescript
const [copied, setCopied] = useState(false);
```

**Behavior**:
- Terminal panel showing availability status
- Email with copy-to-clipboard functionality
- Visual confirmation toast when copied (3 second timeout)
- Social media buttons with external links (target="_blank")
- Icons from Lucide React

#### 8. TerminalPanel Component

**Purpose**: Animated CLI-style panel with typewriter effect

**Props Interface**:
```typescript
interface TerminalLine {
  prefix: string; // [INIT], [SCAN], [DONE]
  text: string;
  delay?: number; // ms delay before starting this line
}

interface TerminalPanelProps {
  lines: TerminalLine[];
  speed?: number; // characters per second, default: 30
}
```

**State**:
```typescript
const [currentLineIndex, setCurrentLineIndex] = useState(0);
const [currentText, setCurrentText] = useState('');
const [isComplete, setIsComplete] = useState(false);
```

**Behavior**:
- Monospace font with purple text on dark background
- Animate text character by character
- Blinking cursor (▌) at end of current line
- Move to next line after completion + delay
- Status prefixes with different colors

#### 9. BracketBadge Component

**Purpose**: Reusable [BADGE] component for skills and tags

**Props Interface**:
```typescript
interface BracketBadgeProps {
  text: string;
  icon?: string; // optional devicon class
  hoverable?: boolean; // default: false
}
```

**Behavior**:
- Format: `[TEXT]` in monospace uppercase
- Optional devicon before text
- Hover effect if hoverable: purple bg, black text
- Transition duration: 200ms

#### 10. DotGrid Component

**Purpose**: Background pattern of subtle dots

**Props Interface**:
```typescript
// No props - self-contained component
```

**Behavior**:
- Fixed positioning covering viewport
- CSS background pattern: `radial-gradient(circle, #1a1a1a 1px, transparent 1px)`
- Background size: 20px 20px
- z-index: -1 to stay behind content

### Utility Functions

```typescript
// lib/utils.ts

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export async function loadProjects(): Promise<Project[]> {
  const response = await fetch('/data/projects.json');
  if (!response.ok) throw new Error('Failed to load projects');
  return response.json();
}

export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
```

## Data Models

### Project Data Structure

```typescript
// lib/types.ts

export interface Project {
  id: string;              // e.g., "01"
  title: string;           // e.g., "StoreKit"
  description: string;     // Brief project description
  image: string;           // Path relative to /public, e.g., "/projects/storekit.jpg"
  codeSnippet: string;     // Code example to display
  tags: string[];          // Technology tags, e.g., ["React", "TypeScript"]
  github: string;          // GitHub repository URL
  demo: string;            // Live demo URL
}

export interface ProjectsData {
  projects: Project[];
}
```

### Projects JSON Schema

```json
{
  "projects": [
    {
      "id": "01",
      "title": "StoreKit",
      "description": "E-commerce platform with real-time inventory",
      "image": "/projects/storekit.jpg",
      "codeSnippet": "const cart = useCart();\ncart.addItem(product);",
      "tags": ["Next.js", "Stripe", "PostgreSQL"],
      "github": "https://github.com/username/storekit",
      "demo": "https://storekit-demo.vercel.app"
    }
  ]
}
```

### Experience Data Structure

```typescript
export interface ExperienceEntry {
  company: string;         // e.g., "Ruangguru"
  role: string;            // e.g., "Frontend Developer"
  period: string;          // e.g., "2022 — PRESENT"
  responsibilities: string[]; // Bullet points
}
```

### Skill Data Structure

```typescript
export interface Skill {
  name: string;            // e.g., "React"
  icon: string;            // devicon class, e.g., "devicon-react-original"
}

export interface SkillCategory {
  title: string;           // e.g., "FRONTEND"
  skills: Skill[];
}
```

### Contact Data Structure

```typescript
export interface ContactInfo {
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}
```

## Error Handling

### Image Loading Errors

**Strategy**: Graceful degradation with placeholder images

```typescript
// In ProjectCard and Hero components
const [imageError, setImageError] = useState(false);

<Image
  src={imageError ? '/placeholder.jpg' : project.image}
  onError={() => setImageError(true)}
  alt={project.title}
/>
```

**Fallback Behavior**:
- Display dark gray placeholder with icon
- Log error to console for debugging
- Show error message in development mode only

### Data Loading Errors

**Strategy**: Error boundaries and fallback UI

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-400">
          [ERROR] Something went wrong
        </h2>
        <p className="text-gray-400 mt-4">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 px-6 py-2 bg-purple-500 text-black font-mono"
        >
          [RETRY]
        </button>
      </div>
    </div>
  );
}
```

### Missing Projects Data

**Strategy**: Validate data structure and provide defaults

```typescript
export async function loadProjects(): Promise<Project[]> {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error('Failed to load projects');
    }
    const data: ProjectsData = await response.json();
    
    // Validate structure
    if (!data.projects || !Array.isArray(data.projects)) {
      throw new Error('Invalid projects data structure');
    }
    
    return data.projects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return []; // Return empty array as fallback
  }
}
```

### Navigation Errors

**Strategy**: Defensive checks before scrolling

```typescript
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
```

### Clipboard API Errors

**Strategy**: Fallback to manual copy instruction

```typescript
async function handleCopyEmail() {
  try {
    await copyToClipboard(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  } catch (error) {
    console.error('Failed to copy:', error);
    // Show fallback message
    alert(`Please copy manually: ${email}`);
  }
}
```

## Testing Strategy

### Why Property-Based Testing Does NOT Apply

This portfolio website is primarily a **UI/frontend application** with the following characteristics:

1. **UI Rendering and Layout**: Most components are presentational (Hero, Skills, Projects, Experience, Contact, Footer)
2. **Visual Effects**: Animations, hover states, transitions, and styling
3. **Configuration**: Setup and deployment configuration
4. **Limited Business Logic**: No complex data transformations or algorithms

**Property-based testing is NOT appropriate** for this feature because:
- Testing UI rendering is better suited for **snapshot tests** and **visual regression tests**
- Interactive behaviors are better tested with **example-based unit tests** and **integration tests**
- There are no universal properties that hold across a wide input space
- The focus is on specific visual outcomes rather than general correctness properties

### Testing Approach

#### 1. Unit Tests (Jest + React Testing Library)

**Focus**: Component behavior, user interactions, and edge cases

**Test Coverage**:

**Navbar Component**:
- Renders all navigation links correctly
- Smooth scroll is triggered when link is clicked
- Mobile menu opens/closes on hamburger click
- Backdrop blur applies when scrolled
- Availability indicator is visible

**Hero Component**:
- Renders profile information correctly
- Role subtitle cycles every 2.5 seconds
- CTA buttons trigger smooth scroll
- Profile image loads with proper dimensions
- Fallback displays when image fails to load
- HUD corners are positioned correctly

**Skills Component**:
- Renders all skill categories
- Each skill displays correct icon and name
- Hover effect changes badge styling
- Skills are grouped correctly by category

**Projects Component**:
- Loads projects from JSON successfully
- Displays correct number of projects per page
- Pagination controls work correctly
- Page transitions animate properly
- Scrolls to top on page change
- Handles empty projects array gracefully

**ProjectCard Component**:
- Renders project information correctly
- Image loads with proper dimensions
- Code snippet displays with correct styling
- Technology tags render as badges
- GitHub and Demo links are correct
- Hover effect applies glowing border
- Placeholder shows when image fails

**Experience Component**:
- Renders all experience entries
- Timeline displays correctly
- Responsibilities render as bullet points
- Animations trigger on scroll

**Contact Component**:
- Email displays correctly
- Copy to clipboard works
- Confirmation message shows after copy
- Social links open in new tab
- Handles clipboard API errors gracefully

**TerminalPanel Component**:
- Renders all lines sequentially
- Typewriter animation works correctly
- Cursor blinks at end of current line
- Respects line delays
- Completes animation properly

**BracketBadge Component**:
- Renders text in bracket format
- Icon displays when provided
- Hover effect works when hoverable
- Text is uppercase

**Example Test**:
```typescript
describe('Projects Component', () => {
  it('should display 3 projects per page', () => {
    const projects = mockProjects(6);
    render(<Projects projects={projects} itemsPerPage={3} />);
    
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(3);
  });
  
  it('should navigate to next page when NEXT button is clicked', () => {
    const projects = mockProjects(6);
    render(<Projects projects={projects} itemsPerPage={3} />);
    
    const nextButton = screen.getByText('[NEXT →]');
    fireEvent.click(nextButton);
    
    // Verify page 2 projects are displayed
    expect(screen.getByText('Project 4')).toBeInTheDocument();
  });
  
  it('should handle empty projects array', () => {
    render(<Projects projects={[]} />);
    expect(screen.getByText('No projects found')).toBeInTheDocument();
  });
});
```

#### 2. Integration Tests (Playwright)

**Focus**: End-to-end user flows and cross-component interactions

**Test Scenarios**:

1. **Navigation Flow**:
   - Click navbar link → smooth scroll to section → section is visible
   - Mobile menu opens → click link → menu closes and scrolls

2. **Project Browsing**:
   - Load page → projects display → click pagination → new projects load → scroll to top

3. **Contact Interaction**:
   - Click email → clipboard contains email → confirmation shows → confirmation disappears after 3s

4. **Responsive Behavior**:
   - Resize to mobile → hamburger menu appears → desktop nav hidden
   - Resize to desktop → desktop nav appears → hamburger hidden

**Example Test**:
```typescript
test('should navigate through all sections smoothly', async ({ page }) => {
  await page.goto('/');
  
  // Click Skills link
  await page.click('text=SKILLS');
  await expect(page.locator('#skills')).toBeInViewport();
  
  // Click Projects link
  await page.click('text=PROJECTS');
  await expect(page.locator('#projects')).toBeInViewport();
  
  // Click Experience link
  await page.click('text=EXPERIENCE');
  await expect(page.locator('#experience')).toBeInViewport();
  
  // Click Contact link
  await page.click('text=CONTACT');
  await expect(page.locator('#contact')).toBeInViewport();
});
```

#### 3. Snapshot Tests

**Focus**: Visual regression and component structure

**Test Coverage**:
- Navbar in default and scrolled states
- Hero section with all elements
- Skills section with all categories
- ProjectCard with all props
- Experience timeline
- Contact section
- Footer
- TerminalPanel at different animation stages

**Example Test**:
```typescript
describe('Component Snapshots', () => {
  it('should match ProjectCard snapshot', () => {
    const project = mockProject();
    const { container } = render(<ProjectCard project={project} />);
    expect(container).toMatchSnapshot();
  });
});
```

#### 4. Accessibility Tests (jest-axe)

**Focus**: WCAG compliance and keyboard navigation

**Test Coverage**:
- All images have alt text
- Color contrast meets WCAG AA standards
- Keyboard navigation works for all interactive elements
- Focus indicators are visible
- Semantic HTML is used correctly
- ARIA labels are present where needed

**Example Test**:
```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should have no accessibility violations', async () => {
  const { container } = render(<Navbar />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

#### 5. Performance Tests

**Focus**: Lighthouse scores and Core Web Vitals

**Metrics to Monitor**:
- Performance score > 90
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- Time to Interactive < 3.5s

**Tools**:
- Lighthouse CI in GitHub Actions
- Next.js built-in performance monitoring
- Chrome DevTools Performance panel

#### 6. Visual Regression Tests (Percy or Chromatic)

**Focus**: Detect unintended visual changes

**Test Coverage**:
- Full page screenshots at mobile, tablet, desktop
- Component screenshots in different states (hover, active, error)
- Animation keyframes
- Dark theme consistency

### Test Configuration

**Jest Configuration** (`jest.config.js`):
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    '!**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

**Playwright Configuration** (`playwright.config.ts`):
```typescript
export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
    { name: 'Tablet', use: { ...devices['iPad Pro'] } },
  ],
});
```

### Testing Best Practices

1. **Test User Behavior, Not Implementation**: Focus on what users see and do, not internal state
2. **Use Data-Testid Sparingly**: Prefer accessible queries (getByRole, getByLabelText)
3. **Mock External Dependencies**: Mock fetch calls, clipboard API, window.scrollTo
4. **Test Responsive Behavior**: Use viewport sizes in tests
5. **Avoid Testing Third-Party Libraries**: Trust Framer Motion, Next.js Image, etc.
6. **Keep Tests Fast**: Use shallow rendering where possible, avoid unnecessary waits
7. **Test Error States**: Verify error boundaries and fallback UI
8. **Maintain Test Data**: Keep mock data in separate files for reusability

### Continuous Integration

**GitHub Actions Workflow**:
```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:unit
      - run: npm run test:e2e
      - run: npm run lighthouse
```

---

## Summary

This design document provides a comprehensive blueprint for building a production-ready Next.js portfolio website with a terminal aesthetic. The architecture leverages Next.js 14+ App Router best practices with a clear separation between server and client components. The component structure is modular and reusable, with well-defined interfaces and data models.

The testing strategy focuses on **unit tests, integration tests, snapshot tests, and accessibility tests** rather than property-based testing, as this is primarily a UI/frontend application where PBT does not provide value. The combination of Jest, React Testing Library, Playwright, and Lighthouse ensures comprehensive coverage of functionality, user experience, accessibility, and performance.

All requirements are addressed through the component design, with specific attention to responsive behavior, animations, error handling, and Docker deployment. The codebase will be production-ready with zero TODOs, proper TypeScript types, and optimized performance.
