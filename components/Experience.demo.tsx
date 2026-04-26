import Experience from './Experience';
import { ExperienceEntry } from '@/lib/types';

export default function ExperienceDemo() {
  const experienceEntries: ExperienceEntry[] = [
    {
      company: 'Ruangguru',
      role: 'Frontend Developer',
      period: '2022 — PRESENT',
      responsibilities: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design team to implement UI/UX improvements',
        'Optimized application performance and reduced load times by 40%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      company: 'Gojek',
      role: 'Web Dev Intern',
      period: '2021',
      responsibilities: [
        'Built reusable React components for internal tools',
        'Participated in code reviews and agile development processes',
        'Implemented responsive designs using Tailwind CSS',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Experience entries={experienceEntries} />
    </div>
  );
}
