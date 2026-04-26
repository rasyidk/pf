'use client';

import TypewriterText from './TypewriterText';

/**
 * Demo component to showcase TypewriterText functionality
 * This can be imported into a page to test the component
 */
export default function TypewriterTextDemo() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-text-primary text-xl font-bold">TypewriterText Demo</h2>
        
        <div className="bg-surface border border-border p-4 rounded">
          <p className="text-text-secondary text-sm mb-2">Default speed (30 chars/sec):</p>
          <div className="text-terminal-text">
            <TypewriterText text="Hello, I'm a software engineer building amazing things." />
          </div>
        </div>

        <div className="bg-surface border border-border p-4 rounded">
          <p className="text-text-secondary text-sm mb-2">Fast speed (60 chars/sec):</p>
          <div className="text-terminal-text">
            <TypewriterText 
              text="This text types faster!" 
              speed={60}
            />
          </div>
        </div>

        <div className="bg-surface border border-border p-4 rounded">
          <p className="text-text-secondary text-sm mb-2">Slow speed (15 chars/sec):</p>
          <div className="text-terminal-text">
            <TypewriterText 
              text="This... types... slowly..." 
              speed={15}
            />
          </div>
        </div>

        <div className="bg-terminal-bg border border-border p-4 rounded">
          <p className="text-text-secondary text-sm mb-2">Terminal style with callback:</p>
          <div className="text-terminal-text">
            <TypewriterText 
              text="[INIT] Building portfolio website..." 
              speed={40}
              onComplete={() => console.log('Animation complete!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
