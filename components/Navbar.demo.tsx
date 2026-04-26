import Navbar from './Navbar';

/**
 * Demo page for Navbar component
 * 
 * This demo shows the Navbar component with test sections to demonstrate:
 * - Fixed positioning
 * - Smooth scrolling navigation
 * - Backdrop blur on scroll
 * - Responsive mobile menu
 * - Availability indicator with pulsing animation
 * 
 * To view this demo:
 * 1. Create a new page in app/test-navbar/page.tsx
 * 2. Import and render NavbarDemo
 * 3. Navigate to /test-navbar
 * 4. Test scrolling and clicking navigation links
 * 5. Resize browser to test mobile menu
 */

export default function NavbarDemo() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* About Section */}
      <section 
        id="about" 
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">About Section</h2>
          <p className="text-text-secondary font-mono">Scroll down to see backdrop blur effect</p>
        </div>
      </section>
      
      {/* Skills Section */}
      <section 
        id="skills" 
        className="min-h-screen flex items-center justify-center bg-surface"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Skills Section</h2>
          <p className="text-text-secondary font-mono">Click navbar links to navigate</p>
        </div>
      </section>
      
      {/* Projects Section */}
      <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects Section</h2>
          <p className="text-text-secondary font-mono">Smooth scroll behavior</p>
        </div>
      </section>
      
      {/* Experience Section */}
      <section 
        id="experience" 
        className="min-h-screen flex items-center justify-center bg-surface"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Experience Section</h2>
          <p className="text-text-secondary font-mono">Resize to test mobile menu</p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Contact Section</h2>
          <p className="text-text-secondary font-mono">Last section</p>
        </div>
      </section>
    </div>
  );
}
