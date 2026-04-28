'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel-light border-b border-glass-border' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('about')}
              className="text-xl font-bold text-text-primary hover:text-accent-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Go to about section"
            >
              Rasyid Kusnady
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 font-mono text-sm">
            {navLinks.map((link, index) => (
              <div key={link.id} className="flex items-center">
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`Navigate to ${link.label.toLowerCase()} section`}
                >
                  {link.label}
                </button>
                {index < navLinks.length - 1 && (
                  <span className="text-text-muted" aria-hidden="true">·</span>
                )}
              </div>
            ))}
          </div>

          {/* Availability Indicator */}
          <div className="hidden md:flex items-center gap-2 font-mono text-sm text-text-secondary" role="status" aria-label="Availability status">
            <div className="relative" aria-hidden="true">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-accent-primary rounded-full animate-ping" />
            </div>
            <span>AVAILABLE</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-accent-primary transition-colors p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden glass-panel border-t border-glass-border overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left font-mono text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface"
              aria-label={`Navigate to ${link.label.toLowerCase()} section`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 font-mono text-sm text-text-secondary pt-2 border-t border-glass-border" role="status" aria-label="Availability status">
            <div className="relative" aria-hidden="true">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-accent-primary rounded-full animate-ping" />
            </div>
            <span>AVAILABLE</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
