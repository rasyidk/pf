'use client';

import TypewriterText from '@/components/animations/TypewriterText';

export default function TestTypewriterPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-accent-primary mb-8">
          TypewriterText Component Test
        </h1>

        <div className="space-y-6">
          {/* Test 1: Default speed */}
          <div className="bg-surface border border-border p-6 rounded">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 1: Default Speed (30 chars/sec)
            </h2>
            <div className="text-terminal-text text-lg">
              <TypewriterText text="Hello, I'm a software engineer building amazing things." />
            </div>
          </div>

          {/* Test 2: Fast speed */}
          <div className="bg-surface border border-border p-6 rounded">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 2: Fast Speed (60 chars/sec)
            </h2>
            <div className="text-terminal-text text-lg">
              <TypewriterText 
                text="This text types much faster!" 
                speed={60}
              />
            </div>
          </div>

          {/* Test 3: Slow speed */}
          <div className="bg-surface border border-border p-6 rounded">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 3: Slow Speed (15 chars/sec)
            </h2>
            <div className="text-terminal-text text-lg">
              <TypewriterText 
                text="This... types... slowly..." 
                speed={15}
              />
            </div>
          </div>

          {/* Test 4: Terminal style with callback */}
          <div className="bg-terminal-bg border border-border p-6 rounded">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 4: Terminal Style with Callback
            </h2>
            <div className="text-terminal-text text-lg">
              <TypewriterText 
                text="[INIT] Building portfolio website..." 
                speed={40}
                onComplete={() => console.log('✓ Animation complete!')}
              />
            </div>
          </div>

          {/* Test 5: Multiple lines */}
          <div className="bg-terminal-bg border border-border p-6 rounded space-y-2">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 5: Multiple TypewriterText Components
            </h2>
            <div className="text-terminal-text">
              <div><TypewriterText text="[SCAN] Analyzing codebase..." speed={50} /></div>
              <div><TypewriterText text="[BUILD] Compiling components..." speed={50} /></div>
              <div><TypewriterText text="[DONE] Ready to deploy ✓" speed={50} /></div>
            </div>
          </div>

          {/* Test 6: Blinking cursor visibility */}
          <div className="bg-surface border border-border p-6 rounded">
            <h2 className="text-text-primary font-mono text-sm mb-3">
              Test 6: Cursor Blinking (observe the ▌ cursor)
            </h2>
            <div className="text-terminal-text text-lg">
              <TypewriterText text="Watch the blinking cursor at the end" speed={25} />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-terminal-bg border border-accent-primary rounded">
          <p className="text-text-secondary text-sm font-mono">
            ℹ️ Open browser console to see onComplete callback logs
          </p>
        </div>
      </div>
    </main>
  );
}
