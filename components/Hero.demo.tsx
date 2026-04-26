'use client';

import Hero from './Hero';

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        name="Rafi Ardian"
        roles={['Full Stack Developer', 'Frontend Engineer', 'Problem Solver']}
        bio="Passionate software engineer building modern web applications with clean code and great user experiences. Specialized in React, Next.js, and TypeScript."
        profileImage="/profile.jpg"
      />
    </div>
  );
}
