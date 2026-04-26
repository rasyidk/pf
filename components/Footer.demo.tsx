import Footer from './Footer';

export default function FooterDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Spacer to push footer to bottom */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent-primary mb-4">
            Footer Component Demo
          </h1>
          <p className="text-text-secondary font-mono">
            Scroll down to see the footer
          </p>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
