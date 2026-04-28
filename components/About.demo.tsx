import About from './About';

export default function AboutDemo() {
  const demoBio = 'Passionate software engineer specializing in AI/ML and Software Development. I create innovative solutions that leverage cutting-edge technologies.';
  
  const demoStats = [
    { value: '3.90', label: 'GPA' },
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '15+', label: 'PROJECTS' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            About Component Demo
          </h1>
          <p className="text-text-secondary mb-4">
            This component displays key statistics and achievements in a responsive grid layout.
          </p>
          
          <div className="bg-surface border border-border p-6 rounded">
            <h2 className="text-xl font-bold text-text-primary mb-4">Features:</h2>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Section header with &quot;// ABOUT&quot; label</li>
              <li>Bio text paragraph with clean typography</li>
              <li>Responsive grid: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)</li>
              <li>Animated stat cards with staggered entrance</li>
              <li>Hover effects: border color change and value scale</li>
              <li>Large, bold values in accent color</li>
              <li>Uppercase labels with brackets</li>
              <li>Terminal/CLI aesthetic</li>
            </ul>
          </div>
        </div>

        {/* Demo Component */}
        <div className="border-t border-border pt-12">
          <About bio={demoBio} stats={demoStats} />
        </div>

        {/* Variations */}
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Variation: Different Stats
            </h2>
            <About
              bio="Experienced developer with a passion for creating elegant solutions to complex problems."
              stats={[
                { value: '3.73', label: 'GPA' },
                { value: '5+', label: 'YEARS EXPERIENCE' },
                { value: '6000%+', label: 'EFFICIENCY GAIN' },
                { value: '20+', label: 'PROJECTS' },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Variation: Fewer Stats (3 items)
            </h2>
            <About
              bio="Full-stack developer specializing in modern web technologies and cloud infrastructure."
              stats={[
                { value: '4.0', label: 'GPA' },
                { value: '3+', label: 'YEARS EXPERIENCE' },
                { value: '10+', label: 'PROJECTS' },
              ]}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Variation: More Stats (5 items)
            </h2>
            <About
              bio="Software engineer with expertise in AI/ML, web development, and DevOps practices."
              stats={[
                { value: '3.85', label: 'GPA' },
                { value: '6+', label: 'YEARS EXPERIENCE' },
                { value: '25+', label: 'PROJECTS' },
                { value: '98%', label: 'CLIENT SATISFACTION' },
                { value: '50+', label: 'TECHNOLOGIES' },
              ]}
            />
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Usage Example
          </h2>
          <pre className="bg-surface border border-border p-6 rounded overflow-x-auto">
            <code className="text-sm text-text-secondary font-mono">
{`import About from '@/components/About';

export default function Page() {
  const aboutData = {
    bio: 'Passionate software engineer specializing in AI/ML and Software Development.',
    stats: [
      { value: '3.90', label: 'GPA' },
      { value: '4+', label: 'YEARS EXPERIENCE' },
      { value: '15+', label: 'PROJECTS' },
      { value: '100%', label: 'CLIENT SATISFACTION' },
    ],
  };

  return <About bio={aboutData.bio} stats={aboutData.stats} />;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
