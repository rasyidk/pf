import Contact from './Contact';

/**
 * Demo page for Contact component
 * 
 * This demonstrates the Contact component with sample data.
 * Navigate to /test-contact to view this demo.
 */
export default function ContactDemo() {
  const demoProps = {
    email: 'rafi.ardian@example.com',
    social: {
      github: 'https://github.com/rafiardian',
      linkedin: 'https://linkedin.com/in/rafiardian',
      twitter: 'https://twitter.com/rafiardian',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8 font-mono">
          Contact Component Demo
        </h1>
        
        <div className="mb-8 p-4 bg-surface border border-border rounded">
          <h2 className="text-xl font-bold text-accent-primary mb-4 font-mono">
            Features:
          </h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>Section header with &quot;// CONTACT&quot; label</li>
            <li>Terminal panel showing availability status</li>
            <li>Email address with copy-to-clipboard functionality</li>
            <li>Visual confirmation when email is copied</li>
            <li>Social media buttons with hover effects</li>
            <li>External links open in new tabs</li>
          </ul>
        </div>

        <Contact {...demoProps} />
      </div>
    </div>
  );
}
