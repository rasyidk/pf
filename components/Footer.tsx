export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 glass-panel-light border-t border-glass-border" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-mono text-sm text-text-muted">
          © {currentYear} Rasyid Kusnady
        </p>
      </div>
    </footer>
  );
}
