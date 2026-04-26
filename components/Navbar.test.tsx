/**
 * Manual verification tests for Navbar component
 * 
 * To verify this component works correctly:
 * 1. Import Navbar in app/page.tsx
 * 2. Create sections with IDs: about, skills, projects, experience, contact
 * 3. Test the following behaviors:
 * 
 * Desktop view (> 768px):
 * - Logo "Rafi Ardian" should be visible on the left
 * - Navigation links should be visible: ABOUT · SKILLS · PROJECTS · EXPERIENCE · CONTACT
 * - Links should be separated by dots (·)
 * - Availability indicator with pulsing dot and "AVAILABLE" text should be on the right
 * - Clicking any link should smooth scroll to the corresponding section using smoothScrollTo utility
 * - Scrolling down should apply backdrop blur effect
 * - Initially navbar should be transparent
 * 
 * Mobile view (< 768px):
 * - Logo should be visible
 * - Hamburger menu icon should be visible
 * - Desktop navigation links should be hidden
 * - Clicking hamburger should open slide-down menu with smooth animation
 * - Mobile menu should animate with max-height and opacity transitions (300ms duration)
 * - Mobile menu should show all navigation links
 * - Mobile menu should show availability indicator at bottom
 * - Clicking a link should close menu and scroll to section using smoothScrollTo utility
 * - Clicking X icon should close menu with smooth animation
 * 
 * Hover effects:
 * - Logo should change to purple on hover
 * - Navigation links should change to purple on hover
 * 
 * Expected behavior:
 * - Fixed positioning at top of viewport
 * - z-index 50 to stay above other content
 * - Smooth scroll behavior when clicking links (via smoothScrollTo utility)
 * - Pulsing animation on availability dot
 * - Mobile menu slides down/up smoothly with overflow hidden
 */

import Navbar from './Navbar';

// Type-only import for verification
export type { };

// Example usage for manual testing:
export const NavbarExample = () => {
  return (
    <div>
      <Navbar />
      
      {/* Test sections */}
      <div id="about" className="h-screen flex items-center justify-center bg-surface">
        <h2 className="text-4xl text-white">About Section</h2>
      </div>
      
      <div id="skills" className="h-screen flex items-center justify-center bg-background">
        <h2 className="text-4xl text-white">Skills Section</h2>
      </div>
      
      <div id="projects" className="h-screen flex items-center justify-center bg-surface">
        <h2 className="text-4xl text-white">Projects Section</h2>
      </div>
      
      <div id="experience" className="h-screen flex items-center justify-center bg-background">
        <h2 className="text-4xl text-white">Experience Section</h2>
      </div>
      
      <div id="contact" className="h-screen flex items-center justify-center bg-surface">
        <h2 className="text-4xl text-white">Contact Section</h2>
      </div>
    </div>
  );
};
