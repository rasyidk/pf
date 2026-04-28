'use client';

import { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import TerminalPanel from './ui/TerminalPanel';
import { ContactInfo, TerminalLine } from '@/lib/types';
import { copyToClipboard } from '@/lib/utils';

interface ContactProps {
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export default function Contact({ email, social }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const terminalLines: TerminalLine[] = [
    { prefix: '[STATUS]', text: 'Available for new opportunities', delay: 0 },
    { prefix: '[LOCATION]', text: 'Remote / Jakarta, Indonesia', delay: 500 },
    { prefix: '[RESPONSE]', text: 'Usually replies within 24 hours', delay: 500 },
  ];

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy email:', error);
      alert(`Please copy manually: ${email}`);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Contact section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-text-secondary tracking-[0.2em] mb-12">
          {'// CONTACT'}
        </h2>

        <div className="max-w-2xl">
          {/* Terminal Panel - Availability Status */}
          <div className="mb-8">
            <TerminalPanel lines={terminalLines} speed={40} />
          </div>

          {/* Email Section */}
          <div className="mb-8">
            <h3 className="font-mono text-lg text-accent-primary font-bold mb-4">
              GET IN TOUCH
            </h3>
            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="text-lg sm:text-xl text-text-primary hover:text-accent-primary transition-colors font-mono group break-all focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`Copy email address ${email} to clipboard`}
              >
                {email}
                <span className="ml-2 text-xs sm:text-sm text-text-muted group-hover:text-accent-primary block sm:inline mt-1 sm:mt-0">
                  [CLICK_TO_COPY]
                </span>
              </button>
              
              {/* Copy Confirmation */}
              {copied && (
                <div className="absolute -top-10 left-0 bg-accent-primary text-background px-4 py-2 rounded font-mono text-sm animate-fade-in" role="status" aria-live="polite">
                  [COPIED] Email copied to clipboard!
                </div>
              )}
            </div>
          </div>

          {/* Social Media Buttons */}
          <div>
            <h3 className="font-mono text-lg text-accent-primary font-bold mb-4">
              CONNECT
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 glass-panel glass-hover hover:bg-accent-primary hover:text-white transition-colors font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={20} aria-hidden="true" />
                  <span>GITHUB</span>
                </a>
              )}
              
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 glass-panel glass-hover hover:bg-accent-primary hover:text-white transition-colors font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={20} aria-hidden="true" />
                  <span>LINKEDIN</span>
                </a>
              )}
              
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-3 glass-panel glass-hover hover:bg-accent-primary hover:text-white transition-colors font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Visit Twitter profile"
                >
                  <Twitter size={20} aria-hidden="true" />
                  <span>TWITTER</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
