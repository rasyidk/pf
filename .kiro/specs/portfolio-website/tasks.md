# Implementation Plan: Portfolio Website

## Overview

This implementation plan breaks down the portfolio website into discrete coding tasks. The website is a Next.js 14+ single-page application with a terminal/CLI aesthetic, featuring animated components, responsive design, and Docker deployment. Each task builds incrementally, with testing integrated throughout to ensure quality and correctness.

## Tasks

- [x] 1. Initialize Next.js project with core dependencies and configuration
  - Create Next.js 14+ project with TypeScript and App Router
  - Install dependencies: Tailwind CSS, Framer Motion, Lucide React
  - Configure next.config.ts for image optimization
  - Set up Tailwind CSS with custom color palette (black backgrounds, purple accents)
  - Configure Space Grotesk font from Google Fonts using next/font
  - Add devicons CDN link to layout
  - Create app/globals.css with Tailwind imports and custom styles
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9_

- [x] 2. Create TypeScript types and utility functions
  - Create lib/types.ts with interfaces: Project, ProjectsData, ExperienceEntry, Skill, SkillCategory, ContactInfo
  - Create lib/utils.ts with utility functions: cn(), loadProjects(), smoothScrollTo(), copyToClipboard()
  - _Requirements: 16.4_

- [x] 3. Create root layout and global styles
  - Implement app/layout.tsx with Space Grotesk font configuration
  - Add metadata for SEO (title, description)
  - Configure viewport settings for responsive design
  - Add global styles for dot grid background pattern
  - _Requirements: 1.4, 2.11, 18.1_

- [ ] 4. Create reusable UI components
  - [x] 4.1 Implement DotGrid background component
    - Create components/ui/DotGrid.tsx as server component
    - Use fixed positioning with radial-gradient pattern
    - Set dots color to #1a1a1a with 20px spacing
    - _Requirements: 2.11_
  
  - [x] 4.2 Implement BracketBadge component
    - Create components/ui/BracketBadge.tsx as server component
    - Format text as [TEXT] in monospace uppercase
    - Add optional devicon support
    - Add optional hover effect (purple bg, black text)
    - _Requirements: 2.10, 6.2, 6.4_
  
  - [x] 4.3 Implement TypewriterText animation component
    - Create components/animations/TypewriterText.tsx as client component
    - Implement character-by-character animation with configurable speed
    - Add blinking cursor (▌) at end of current text
    - Use useState and useEffect for animation logic
    - _Requirements: 13.1, 13.2, 17.3, 17.4_
  
  - [x] 4.4 Implement TerminalPanel component
    - Create components/ui/TerminalPanel.tsx as client component
    - Accept array of TerminalLine objects with prefix, text, delay
    - Animate lines sequentially using TypewriterText
    - Display status prefixes: [INIT], [SCAN], [DONE]
    - Use monospace font with purple text on dark background
    - _Requirements: 13.1, 13.2, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6_

- [ ] 5. Implement Navbar component
  - [x] 5.1 Create Navbar structure and styling
    - Create components/Navbar.tsx as client component
    - Implement fixed positioning with transparent background
    - Add logo "Rafi Ardian" in Space Grotesk bold
    - Add navigation links in monospace uppercase: ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT
    - Add availability indicator with pulsing dot animation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 13.6_
  
  - [x] 5.2 Add scroll effects and mobile menu
    - Track scroll position with useState and useEffect
    - Apply backdrop-blur when scrolled
    - Implement smooth scroll navigation using smoothScrollTo utility
    - Add hamburger menu icon for mobile
    - Implement slide-down mobile menu with animation
    - _Requirements: 3.5, 3.6, 3.7, 3.8, 3.9_
  
  - [ ]* 5.3 Write unit tests for Navbar
    - Test navigation links render correctly
    - Test smooth scroll is triggered on link click
    - Test mobile menu opens/closes
    - Test backdrop blur applies when scrolled
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [ ] 6. Implement Hero section
  - [x] 6.1 Create Hero component structure
    - Create components/Hero.tsx as client component
    - Implement two-column layout (desktop) / stacked (mobile)
    - Add "// SOFTWARE ENGINEER" label in monospace
    - Add name heading "Rafi Ardian"
    - Add bio paragraph
    - Add CTA buttons [VIEW_PROJECTS] and [CONTACT_ME] with smooth scroll
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7, 4.8_
  
  - [x] 6.2 Add role cycling animation
    - Implement role subtitle cycling with useState
    - Cycle through roles every 2.5 seconds: "Full Stack Developer", "Frontend Engineer", "Problem Solver"
    - Add fade transition effects using Framer Motion
    - _Requirements: 4.5, 13.3_
  
  - [x] 6.3 Add profile photo with HUD corners
    - Use Next.js Image component with 400x400 dimensions
    - Set priority and blur placeholder
    - Add four HUD corner brackets (16x16px, 2px purple border) with absolute positioning
    - Add "// PROFILE.JPG" label above photo
    - Add "[STATUS] Available for work ●" label with pulsing dot below photo
    - Implement glowing border on hover
    - Add error handling for missing image with placeholder
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 13.7_
  
  - [x] 6.4 Add terminal panel to Hero (desktop only)
    - Display TerminalPanel below profile photo on desktop
    - Show build/deploy commands with typewriter animation
    - Hide on mobile screens
    - _Requirements: 5.8, 13.1, 17.1, 17.2, 17.6_
  
  - [ ]* 6.5 Write unit tests for Hero
    - Test profile information renders correctly
    - Test role cycling every 2.5 seconds
    - Test CTA buttons trigger smooth scroll
    - Test image fallback on load error
    - Test HUD corners are positioned correctly
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement Skills section
  - [x] 8.1 Create Skills component with category grid
    - Create components/Skills.tsx as client component
    - Add section header "// SKILLS" in uppercase with letter-spacing
    - Implement three-column grid (desktop) / single column (mobile)
    - Define skill categories: FRONTEND, BACKEND, TOOLS
    - Map skills to BracketBadge components with devicons
    - _Requirements: 6.1, 6.2, 6.3, 6.5_
  
  - [x] 8.2 Add scroll-triggered animations
    - Use Framer Motion for fade-in animations on scroll
    - Apply animations to skill categories
    - _Requirements: 13.5_
  
  - [ ]* 8.3 Write unit tests for Skills
    - Test all skill categories render
    - Test each skill displays correct icon and name
    - Test hover effect changes badge styling
    - Test skills are grouped correctly
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 9. Create project data structure
  - Create data/projects.json with 6 projects: StoreKit, Logify, Folio CMS, AuthKit, DevMetrics, QueueFlow
  - Include all required fields: id, title, description, image, codeSnippet, tags, github, demo
  - Add placeholder images to public/projects/ directory
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 10. Implement Projects section with pagination
  - [x] 10.1 Create ProjectCard component
    - Create components/ui/ProjectCard.tsx as server component
    - Display project image using Next.js Image (600x400)
    - Display project ID in monospace format
    - Display title, description
    - Display code snippet with syntax highlighting colors
    - Display technology tags as BracketBadge components
    - Add GitHub and Demo buttons with external links
    - Implement glowing border on hover
    - Use surface color #0d0d0d with 1px border #1a1a1a
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10_
  
  - [x] 10.2 Create Projects component with pagination
    - Create components/Projects.tsx as client component
    - Add section header "// PROJECTS" in uppercase with letter-spacing
    - Load projects from data/projects.json using loadProjects utility
    - Implement responsive grid: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
    - Display 3 projects per page
    - Implement pagination state with useState
    - Add pagination controls: [← PREV] [01] [02] [NEXT →]
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.9_
  
  - [x] 10.3 Add pagination animations
    - Use Framer Motion AnimatePresence for page transitions
    - Implement fade + slide animations
    - Scroll to Projects section top on page change
    - _Requirements: 7.7, 7.8, 13.4_
  
  - [ ]* 10.4 Write unit tests for Projects
    - Test projects load from JSON successfully
    - Test correct number of projects per page
    - Test pagination controls work correctly
    - Test page transitions animate properly
    - Test scrolls to top on page change
    - Test handles empty projects array gracefully
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8_
  
  - [ ]* 10.5 Write unit tests for ProjectCard
    - Test project information renders correctly
    - Test image loads with proper dimensions
    - Test code snippet displays correctly
    - Test technology tags render as badges
    - Test GitHub and Demo links are correct
    - Test placeholder shows when image fails
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 8.10_

- [ ] 11. Implement Experience section
  - [x] 11.1 Create Experience component with timeline
    - Create components/Experience.tsx as client component
    - Add section header "// EXPERIENCE" in uppercase with letter-spacing
    - Implement vertical timeline with purple line (border-l-2)
    - Add purple dots at each entry (absolute positioned)
    - Display "Frontend Developer at Ruangguru (2022 — PRESENT)" as first entry
    - Display "Web Dev Intern at Gojek (2021)" as second entry
    - Display job responsibilities as bullet points
    - Use alternating left/right layout (desktop) / single column (mobile)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_
  
  - [x] 11.2 Add scroll-triggered animations
    - Use Framer Motion for fade-in animations on scroll
    - Apply animations to experience entries
    - _Requirements: 13.5_
  
  - [ ]* 11.3 Write unit tests for Experience
    - Test all experience entries render
    - Test timeline displays correctly
    - Test responsibilities render as bullet points
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 12. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 13. Implement Contact section
  - [x] 13.1 Create Contact component structure
    - Create components/Contact.tsx as client component
    - Add section header "// CONTACT" in uppercase with letter-spacing
    - Display TerminalPanel showing availability status
    - Display email address
    - Display social media buttons for GitHub, LinkedIn, Twitter using Lucide icons
    - _Requirements: 10.1, 10.2, 10.5, 10.7_
  
  - [x] 13.2 Add copy-to-clipboard functionality
    - Implement email click handler using copyToClipboard utility
    - Add copied state with useState
    - Display visual confirmation toast when copied
    - Auto-hide confirmation after 3 seconds
    - Add error handling with fallback alert
    - _Requirements: 10.3, 10.4_
  
  - [x] 13.3 Add social media links
    - Link buttons to GitHub, LinkedIn, Twitter profiles
    - Open links in new tab (target="_blank")
    - _Requirements: 10.6_
  
  - [ ]* 13.4 Write unit tests for Contact
    - Test email displays correctly
    - Test copy to clipboard works
    - Test confirmation message shows after copy
    - Test social links open in new tab
    - Test handles clipboard API errors gracefully
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

- [x] 14. Implement Footer component
  - Create components/Footer.tsx as server component
  - Display copyright line with current year
  - Display "Rafi Ardian" as copyright holder
  - Use muted text color #333333
  - _Requirements: 11.1, 11.2, 11.3_

- [ ] 15. Create main page and wire components together
  - [x] 15.1 Implement app/page.tsx
    - Keep as server component (no 'use client')
    - Import and render all components in order: Navbar, DotGrid, Hero, Skills, Projects, Experience, Contact, Footer
    - Add section IDs for smooth scroll navigation: #about, #skills, #projects, #experience, #contact
    - Apply proper spacing between sections
    - _Requirements: 16.3_
  
  - [x] 15.2 Add error boundary
    - Create app/error.tsx as client component
    - Display terminal-style error message
    - Add retry button
    - _Requirements: 16.9_
  
  - [ ]* 15.3 Write integration tests
    - Test navigation flow through all sections
    - Test project browsing with pagination
    - Test contact interaction (copy email)
    - Test responsive behavior at different breakpoints
    - _Requirements: 3.6, 7.7, 10.3, 12.1, 12.2, 12.3, 12.4_

- [x] 16. Implement responsive design refinements
  - Review all components for mobile, tablet, desktop breakpoints
  - Ensure single-column layouts on mobile (< 768px)
  - Ensure appropriate multi-column layouts on tablet (768px - 1024px)
  - Ensure full multi-column layouts on desktop (> 1024px)
  - Verify touch-friendly interactive elements on mobile
  - Verify text readability at all screen sizes
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

- [x] 17. Add accessibility improvements
  - Add alt text to all images (profile photo, project images)
  - Verify color contrast meets WCAG AA standards
  - Add keyboard navigation support for all interactive elements
  - Add focus indicators for keyboard navigation
  - Verify semantic HTML usage
  - Add ARIA labels where needed
  - _Requirements: 18.1, 18.2, 18.3, 18.4_

- [x] 18. Optimize performance
  - Configure Next.js Image optimization for all images
  - Add priority loading for hero profile image
  - Lazy-load images below the fold
  - Preload critical fonts (Space Grotesk)
  - Verify Lighthouse performance score > 90
  - _Requirements: 18.5, 18.6, 18.7, 18.8_

- [x] 19. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 20. Create Docker deployment configuration
  - [x] 20.1 Create Dockerfile
    - Implement multi-stage Dockerfile with builder and runner stages
    - Install dependencies in builder stage
    - Build Next.js application
    - Copy build artifacts to runner stage
    - Optimize for minimal image size
    - Configure port exposure
    - _Requirements: 14.1, 14.4, 14.5, 14.6_
  
  - [x] 20.2 Create docker-compose.yml
    - Configure service for portfolio website
    - Map ports correctly
    - Add environment variables if needed
    - _Requirements: 14.2_
  
  - [x] 20.3 Create .dockerignore
    - Exclude node_modules, .next, .git
    - Exclude unnecessary files for smaller build context
    - _Requirements: 14.3_

- [x] 21. Create documentation
  - Create README.md with project overview, setup instructions, development commands, deployment instructions
  - Document environment variables if any
  - Add screenshots or demo link
  - _Requirements: 16.6_

- [x] 22. Final quality check
  - Verify zero TODO comments in codebase
  - Verify all components have correct 'use client' directives
  - Verify app/page.tsx is server component
  - Verify proper TypeScript types throughout
  - Run npm run dev and verify no errors
  - Test all features manually
  - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5, 16.7, 16.8_

- [x] 23. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- All components use TypeScript for type safety
- Server components are preferred unless interactivity requires client components
- Testing is integrated throughout to catch issues early
