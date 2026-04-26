# Requirements Document

## Introduction

A single-page portfolio website built with Next.js 14+ App Router that showcases a software engineer's profile, skills, projects, experience, and contact information. The website replicates the blackbox.ai aesthetic with a terminal/CLI-inspired design featuring pure black backgrounds, purple accent colors, monospace typography, and animated terminal panels.

## Glossary

- **Portfolio_Website**: The complete single-page application built with Next.js
- **App_Router**: Next.js 14+ routing system using the app directory structure
- **Navbar**: Fixed navigation bar at the top of the page
- **Hero_Section**: Landing section displaying profile information and photo
- **Skills_Section**: Section displaying technical skills grouped by category
- **Projects_Section**: Section displaying portfolio projects with pagination
- **Experience_Section**: Section displaying work history in timeline format
- **Contact_Section**: Section displaying contact information and social links
- **Footer**: Bottom section with copyright information
- **Terminal_Panel**: Animated CLI-style panel with typewriter effect
- **Bracket_Badge**: Skill or tag displayed in [BRACKET] format with monospace font
- **Dot_Grid**: Background pattern of subtle dots across the page
- **Glowing_Border**: Card border effect that glows on hover
- **HUD_Corner**: Corner bracket decoration on profile photo
- **Project_Card**: Individual project display component with image and details
- **Timeline**: Vertical line with dots showing chronological experience
- **Smooth_Scroll**: Navigation behavior that scrolls smoothly to sections
- **Typewriter_Animation**: Text animation that types characters sequentially
- **Responsive_Layout**: Design that adapts to mobile, tablet, and desktop screens

## Requirements

### Requirement 1: Next.js Application Setup

**User Story:** As a developer, I want a properly configured Next.js application, so that I can build and deploy the portfolio website.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL use Next.js version 14 or higher with App_Router
2. THE Portfolio_Website SHALL use TypeScript for type safety
3. THE Portfolio_Website SHALL use Tailwind CSS for styling
4. THE Portfolio_Website SHALL use Space Grotesk font from next/font with Google Fonts
5. THE Portfolio_Website SHALL include Framer Motion for animations
6. THE Portfolio_Website SHALL include Lucide React for icons
7. THE Portfolio_Website SHALL load devicons via CDN for technology stack icons
8. THE Portfolio_Website SHALL include a valid next.config.ts configuration file
9. THE Portfolio_Website SHALL include a package.json with all required dependencies

### Requirement 2: Visual Design System

**User Story:** As a user, I want a visually consistent blackbox.ai-inspired design, so that the portfolio has a professional terminal aesthetic.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL use pure black (#000000) as the background color
2. THE Portfolio_Website SHALL use #0d0d0d with 1px border #1a1a1a for card surfaces
3. THE Portfolio_Website SHALL use #a78bfa as the primary accent color
4. THE Portfolio_Website SHALL use #8b5cf6 as the secondary accent color
5. THE Portfolio_Website SHALL use #ffffff for primary text color
6. THE Portfolio_Website SHALL use #666666 for secondary text color
7. THE Portfolio_Website SHALL use #333333 for muted text color
8. THE Portfolio_Website SHALL use #a78bfa on #0a0a0a for code and terminal text
9. THE Portfolio_Website SHALL use Space Grotesk font for UI text
10. THE Portfolio_Website SHALL use system monospace font for code, terminal, labels, and badges
11. THE Portfolio_Website SHALL display a Dot_Grid background pattern with dots colored #1a1a1a
12. THE Portfolio_Website SHALL use maximum 4px border-radius for sharp edges
13. THE Portfolio_Website SHALL avoid gradients and use only flat black surfaces

### Requirement 3: Navigation Bar

**User Story:** As a user, I want a fixed navigation bar, so that I can easily navigate between sections.

#### Acceptance Criteria

1. THE Navbar SHALL be fixed at the top of the viewport
2. THE Navbar SHALL display "Rafi Ardian" in Space Grotesk bold font on the left side
3. THE Navbar SHALL display navigation links in monospace uppercase: ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT
4. THE Navbar SHALL display a purple pulsing dot with "AVAILABLE" text in monospace on the far right
5. WHEN the page is scrolled, THE Navbar SHALL apply backdrop-blur effect
6. WHEN a navigation link is clicked, THE Portfolio_Website SHALL perform Smooth_Scroll to the target section
7. WHEN viewed on mobile devices, THE Navbar SHALL display a hamburger menu icon
8. WHEN the hamburger icon is clicked, THE Navbar SHALL display a slide-down menu with navigation links
9. THE Navbar SHALL be fully transparent initially

### Requirement 4: Hero Section Layout

**User Story:** As a user, I want an engaging hero section, so that I immediately understand who the portfolio belongs to.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a two-column layout on desktop screens
2. THE Hero_Section SHALL display a stacked layout on mobile screens
3. THE Hero_Section SHALL display "// SOFTWARE ENGINEER" label in monospace on the left column
4. THE Hero_Section SHALL display "Rafi Ardian" as a large heading on the left column
5. THE Hero_Section SHALL cycle through role subtitles every 2.5 seconds: "Full Stack Developer", "Frontend Engineer", "Problem Solver"
6. THE Hero_Section SHALL display a bio paragraph on the left column
7. THE Hero_Section SHALL display two CTA buttons labeled [VIEW_PROJECTS] and [CONTACT_ME] on the left column
8. WHEN a CTA button is clicked, THE Portfolio_Website SHALL perform Smooth_Scroll to the corresponding section

### Requirement 5: Profile Photo Display

**User Story:** As a user, I want to see a profile photo with visual effects, so that the portfolio feels personal and polished.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a profile photo using Next.js Image component with 400x400 dimensions
2. THE Hero_Section SHALL load the profile photo with priority and blur placeholder
3. THE Hero_Section SHALL display four HUD_Corner brackets (16x16px, 2px purple border) around the profile photo
4. THE Hero_Section SHALL display "// PROFILE.JPG" label above the profile photo
5. THE Hero_Section SHALL display "[STATUS] Available for work ●" label with pulsing dot below the profile photo
6. WHEN the profile photo is hovered, THE Hero_Section SHALL apply a Glowing_Border effect
7. IF profile.jpg is missing, THEN THE Hero_Section SHALL display a dark placeholder with an error message
8. WHEN viewed on desktop, THE Hero_Section SHALL display a Terminal_Panel below the profile photo with Typewriter_Animation showing build/deploy commands

### Requirement 6: Skills Section Display

**User Story:** As a user, I want to see technical skills organized by category, so that I can quickly assess technical expertise.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skills grouped into three categories: FRONTEND, BACKEND, TOOLS
2. THE Skills_Section SHALL display each skill as a Bracket_Badge in format [SKILL_NAME]
3. THE Skills_Section SHALL display a devicon from CDN for each skill
4. WHEN a Bracket_Badge is hovered, THE Skills_Section SHALL change the background to purple and text to black
5. THE Skills_Section SHALL display a section header "// SKILLS" in uppercase with letter-spacing

### Requirement 7: Projects Section with Pagination

**User Story:** As a user, I want to browse portfolio projects with pagination, so that I can explore work samples without overwhelming the page.

#### Acceptance Criteria

1. THE Projects_Section SHALL load project data from data/projects.json file
2. THE Projects_Section SHALL display projects in a 3-column grid on desktop screens
3. THE Projects_Section SHALL display projects in a 2-column grid on tablet screens
4. THE Projects_Section SHALL display projects in a 1-column grid on mobile screens
5. THE Projects_Section SHALL display 3 projects per page
6. THE Projects_Section SHALL display pagination controls: [← PREV] [01] [02] [NEXT →]
7. WHEN a pagination control is clicked, THE Projects_Section SHALL transition to the selected page using AnimatePresence
8. WHEN a pagination control is clicked, THE Portfolio_Website SHALL scroll back to the Projects_Section top
9. THE Projects_Section SHALL display a section header "// PROJECTS" in uppercase with letter-spacing

### Requirement 8: Project Card Display

**User Story:** As a user, I want detailed project cards, so that I can understand each project's purpose and technology.

#### Acceptance Criteria

1. THE Project_Card SHALL display a project image using Next.js Image component
2. THE Project_Card SHALL display a project ID in monospace format
3. THE Project_Card SHALL display a project title
4. THE Project_Card SHALL display a project description
5. THE Project_Card SHALL display a code snippet in monospace with syntax highlighting colors
6. THE Project_Card SHALL display technology tags as Bracket_Badge components
7. THE Project_Card SHALL display a GitHub button linking to the repository
8. THE Project_Card SHALL display a Demo button linking to the live demo
9. WHEN a Project_Card is hovered, THE Project_Card SHALL apply a Glowing_Border effect
10. THE Project_Card SHALL use surface color #0d0d0d with 1px border #1a1a1a

### Requirement 9: Experience Section Timeline

**User Story:** As a user, I want to see work experience in a timeline format, so that I can understand career progression.

#### Acceptance Criteria

1. THE Experience_Section SHALL display a vertical Timeline with a purple line
2. THE Experience_Section SHALL display purple dots on the Timeline for each experience entry
3. THE Experience_Section SHALL display "Frontend Developer at Ruangguru (2022 — PRESENT)" as the first entry
4. THE Experience_Section SHALL display "Web Dev Intern at Gojek (2021)" as the second entry
5. THE Experience_Section SHALL display job responsibilities as bullet points for each entry
6. THE Experience_Section SHALL display a section header "// EXPERIENCE" in uppercase with letter-spacing

### Requirement 10: Contact Section

**User Story:** As a user, I want to easily contact the portfolio owner, so that I can reach out for opportunities.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a Terminal_Panel showing availability status
2. THE Contact_Section SHALL display an email address
3. WHEN the email address is clicked, THE Contact_Section SHALL copy the email to clipboard
4. THE Contact_Section SHALL display a visual confirmation when email is copied
5. THE Contact_Section SHALL display social media buttons for GitHub, LinkedIn, and Twitter
6. WHEN a social media button is clicked, THE Portfolio_Website SHALL open the corresponding profile in a new tab
7. THE Contact_Section SHALL display a section header "// CONTACT" in uppercase with letter-spacing

### Requirement 11: Footer

**User Story:** As a user, I want to see copyright information, so that I know the content ownership.

#### Acceptance Criteria

1. THE Footer SHALL display a copyright line with the current year
2. THE Footer SHALL display "Rafi Ardian" as the copyright holder
3. THE Footer SHALL use muted text color #333333

### Requirement 12: Responsive Design

**User Story:** As a user, I want the website to work on all devices, so that I can view it on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL use mobile-first responsive design approach
2. WHEN viewed on mobile devices (< 768px), THE Portfolio_Website SHALL display single-column layouts
3. WHEN viewed on tablet devices (768px - 1024px), THE Portfolio_Website SHALL display appropriate multi-column layouts
4. WHEN viewed on desktop devices (> 1024px), THE Portfolio_Website SHALL display full multi-column layouts
5. THE Portfolio_Website SHALL ensure all interactive elements are touch-friendly on mobile devices
6. THE Portfolio_Website SHALL ensure text remains readable at all screen sizes

### Requirement 13: Animation Effects

**User Story:** As a user, I want smooth animations, so that the website feels polished and engaging.

#### Acceptance Criteria

1. THE Terminal_Panel SHALL display text with Typewriter_Animation effect
2. THE Terminal_Panel SHALL display a blinking cursor (▌) during Typewriter_Animation
3. THE Hero_Section SHALL animate role subtitle transitions with fade effects
4. THE Projects_Section SHALL use AnimatePresence for page transition animations
5. WHEN elements enter the viewport, THE Portfolio_Website SHALL apply fade-in animations using Framer Motion
6. THE Navbar SHALL animate the availability status dot with a pulsing effect
7. WHEN cards are hovered, THE Portfolio_Website SHALL apply smooth Glowing_Border transitions

### Requirement 14: Docker Deployment

**User Story:** As a developer, I want Docker configuration, so that I can easily deploy the portfolio website.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL include a multi-stage Dockerfile with builder and runner stages
2. THE Portfolio_Website SHALL include a docker-compose.yml file for easy deployment
3. THE Portfolio_Website SHALL include a .dockerignore file to exclude unnecessary files
4. WHEN the Docker container is built, THE Portfolio_Website SHALL install all dependencies
5. WHEN the Docker container is run, THE Portfolio_Website SHALL serve the application on the configured port
6. THE Dockerfile SHALL optimize for production builds with minimal image size

### Requirement 15: Project Data Structure

**User Story:** As a developer, I want structured project data, so that projects can be easily managed and displayed.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL store project data in data/projects.json file
2. THE projects.json file SHALL contain exactly 6 projects: StoreKit, Logify, Folio CMS, AuthKit, DevMetrics, QueueFlow
3. FOR ALL projects in projects.json, THE project data SHALL include: id, title, description, image path, code snippet, tags array, github URL, demo URL
4. THE Portfolio_Website SHALL validate that project images exist in public/projects/ directory
5. IF a project image is missing, THEN THE Project_Card SHALL display a placeholder image

### Requirement 16: Code Quality and Completeness

**User Story:** As a developer, I want production-ready code, so that the website can be deployed immediately.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL contain zero TODO comments in the codebase
2. THE Portfolio_Website SHALL correctly mark all interactive components with 'use client' directive
3. THE Portfolio_Website SHALL keep app/page.tsx as a server component
4. THE Portfolio_Website SHALL include proper TypeScript types for all components and data structures
5. THE Portfolio_Website SHALL be runnable with npm run dev without errors
6. THE Portfolio_Website SHALL include a README.md with setup and deployment instructions
7. THE Portfolio_Website SHALL follow Next.js 14+ best practices for App Router
8. THE Portfolio_Website SHALL optimize images with Next.js Image component
9. THE Portfolio_Website SHALL include proper error boundaries for graceful error handling

### Requirement 17: Terminal Panel Animation

**User Story:** As a user, I want to see realistic terminal animations, so that the CLI aesthetic feels authentic.

#### Acceptance Criteria

1. THE Terminal_Panel SHALL display lines prefixed with status indicators: [INIT], [SCAN], [DONE]
2. THE Terminal_Panel SHALL animate text line by line with Typewriter_Animation
3. THE Terminal_Panel SHALL display a blinking cursor (▌) at the end of the current line
4. THE Terminal_Panel SHALL use monospace font with purple text (#a78bfa) on dark background (#0a0a0a)
5. WHEN the Typewriter_Animation completes a line, THE Terminal_Panel SHALL move to the next line after a brief delay
6. THE Terminal_Panel SHALL display build and deploy commands as content

### Requirement 18: Accessibility and Performance

**User Story:** As a user, I want an accessible and fast website, so that everyone can use it effectively.

#### Acceptance Criteria

1. THE Portfolio_Website SHALL include proper semantic HTML elements
2. THE Portfolio_Website SHALL include alt text for all images
3. THE Portfolio_Website SHALL ensure sufficient color contrast for text readability
4. THE Portfolio_Website SHALL support keyboard navigation for all interactive elements
5. THE Portfolio_Website SHALL optimize images with appropriate formats and sizes
6. THE Portfolio_Website SHALL achieve a Lighthouse performance score above 90
7. THE Portfolio_Website SHALL lazy-load images below the fold
8. THE Portfolio_Website SHALL preload critical fonts and assets
