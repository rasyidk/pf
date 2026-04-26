'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { smoothScrollTo } from '@/lib/utils';
import TerminalPanel from './ui/TerminalPanel';
import { TerminalLine } from '@/lib/types';

interface HeroProps {
  name: string;
  roles: string[];
  bio: string;
  profileImage: string;
}

export default function Hero({ name, roles, bio, profileImage }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Cycle through roles every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  const terminalLines: TerminalLine[] = [
    { prefix: '[INIT]', text: 'Initializing portfolio system...', delay: 0 },
    { prefix: '[SCAN]', text: 'Scanning projects and experience...', delay: 500 },
    { prefix: '[DONE]', text: 'Ready to deploy. Status: Available', delay: 500 },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8" aria-label="About section">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="font-mono text-sm text-text-secondary tracking-wider">
              {'// SOFTWARE ENGINEER'}
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              {name}
            </h1>

            {/* Role Subtitle with Fade Animation */}
            <div className="h-8 sm:h-10 relative" role="status" aria-live="polite" aria-label="Current role">
              {roles.map((role, index) => (
                <div
                  key={role}
                  className={`absolute inset-0 text-xl sm:text-2xl text-accent-primary font-mono transition-opacity duration-500 ${
                    index === currentRoleIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={index !== currentRoleIndex}
                >
                  {role}
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-text-primary leading-relaxed max-w-xl">
              {bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => smoothScrollTo('projects')}
                className="px-6 py-3 bg-accent-primary text-background font-mono text-sm font-bold hover:bg-accent-secondary transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="View projects section"
              >
                [VIEW_PROJECTS]
              </button>
              <button
                onClick={() => smoothScrollTo('contact')}
                className="px-6 py-3 border border-accent-primary text-accent-primary font-mono text-sm font-bold hover:bg-accent-primary hover:text-background transition-colors focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Go to contact section"
              >
                [CONTACT_ME]
              </button>
            </div>
          </div>

          {/* Right Column - Profile Photo and Terminal */}
          <div className="space-y-6">
            {/* Profile Photo with HUD Corners */}
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Label Above Photo */}
              <div className="font-mono text-sm text-text-secondary mb-2">
                {'// PROFILE.JPG'}
              </div>

              {/* Photo Container with HUD Corners */}
              <div className="relative group">
                <div className="relative w-full aspect-square overflow-hidden glow-border">
                  {imageError ? (
                    <div className="w-full h-full bg-surface border border-border flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-text-muted font-mono text-sm">
                          [ERROR] Image not found
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={profileImage}
                      alt={`Profile photo of ${name}, software engineer`}
                      width={400}
                      height={400}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>

                {/* HUD Corner Brackets */}
                <div className="hud-corner hud-corner-tl" />
                <div className="hud-corner hud-corner-tr" />
                <div className="hud-corner hud-corner-bl" />
                <div className="hud-corner hud-corner-br" />
              </div>

              {/* Status Label Below Photo */}
              <div className="flex items-center gap-2 mt-2 font-mono text-sm text-text-secondary" role="status" aria-label="Availability status">
                <span>[STATUS]</span>
                <span>Available for work</span>
                <div className="relative" aria-hidden="true">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-accent-primary rounded-full animate-ping" />
                </div>
              </div>
            </div>

            {/* Terminal Panel - Desktop Only */}
            <div className="hidden lg:block">
              <TerminalPanel lines={terminalLines} speed={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
