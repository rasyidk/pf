import Experience from './Experience';

export default function ExperienceDemo() {
  // Experience component now loads data from JSON, no props needed
  return (
    <div className="min-h-screen bg-background">
      <Experience />
    </div>
  );
}
