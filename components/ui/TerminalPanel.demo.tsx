'use client';

import TerminalPanel from './TerminalPanel';

export default function TerminalPanelDemo() {
  const buildLines = [
    { prefix: '[INIT]', text: 'npm run build', delay: 0 },
    { prefix: '[SCAN]', text: 'Compiling TypeScript...', delay: 300 },
    { prefix: '[SCAN]', text: 'Optimizing bundle...', delay: 500 },
    { prefix: '[DONE]', text: 'Build successful ✓', delay: 400 }
  ];

  const deployLines = [
    { prefix: '[INIT]', text: 'docker build -t portfolio:latest .', delay: 0 },
    { prefix: '[SCAN]', text: 'Building image layers...', delay: 400 },
    { prefix: '[SCAN]', text: 'Pushing to registry...', delay: 600 },
    { prefix: '[DONE]', text: 'Deployed to production ✓', delay: 500 }
  ];

  const statusLines = [
    { prefix: '[STATUS]', text: 'Available for work', delay: 0 },
    { prefix: '[LOCATION]', text: 'Remote / Jakarta, ID', delay: 300 },
    { prefix: '[RESPONSE]', text: 'Usually replies within 24h', delay: 300 }
  ];

  return (
    <div className="min-h-screen bg-black p-8 space-y-8">
      <div>
        <h2 className="text-white text-xl font-bold mb-4">Build Process</h2>
        <TerminalPanel lines={buildLines} speed={40} />
      </div>

      <div>
        <h2 className="text-white text-xl font-bold mb-4">Deploy Process</h2>
        <TerminalPanel lines={deployLines} speed={35} />
      </div>

      <div>
        <h2 className="text-white text-xl font-bold mb-4">Status Information</h2>
        <TerminalPanel lines={statusLines} speed={30} />
      </div>

      <div>
        <h2 className="text-white text-xl font-bold mb-4">Fast Animation</h2>
        <TerminalPanel 
          lines={[
            { prefix: '[TEST]', text: 'This is a fast animation example' },
            { prefix: '[INFO]', text: 'Speed set to 60 characters per second' }
          ]} 
          speed={60} 
        />
      </div>

      <div>
        <h2 className="text-white text-xl font-bold mb-4">Slow Animation</h2>
        <TerminalPanel 
          lines={[
            { prefix: '[TEST]', text: 'This is a slow animation example' },
            { prefix: '[INFO]', text: 'Speed set to 15 characters per second' }
          ]} 
          speed={15} 
        />
      </div>
    </div>
  );
}
