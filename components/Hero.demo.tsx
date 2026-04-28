'use client';

import Hero from './Hero';

export default function HeroDemo() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        name="Rafi Ardian"
        roles={['Full Stack Developer', 'Frontend Engineer', 'Problem Solver']}
        profileImage="/profile.jpg"
      />
    </div>
  );
}
