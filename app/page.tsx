import Navbar from '@/components/Navbar';
import DotGrid from '@/components/ui/DotGrid';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  // Hero data
  const heroData = {
    name: 'Crafting Intelligent Systems',
    roles: ['AI/ML Engineer','Full Stack Developer'],
    bio: 'Passionate software engineer specializing in AI/ML and Software Development. I create innovative solutions that leverage cutting-edge technologies.',
    profileImage: '/profile.png',
  };

  // About stats data
  const aboutStats = [
    { value: '3.90', label: 'GPA' },
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '15+', label: 'PROJECTS' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  // Skills data
  const skillsData = [
    {
      title: 'AI/ML',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'TensorFlow', icon: 'devicon-tensorflow-original' },
        { name: 'PyTorch', icon: 'devicon-pytorch-original' },
        { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
        { name: 'Pandas', icon: 'devicon-pandas-original' },
      ],
    },
    {
      title: 'WEB DEV',
      skills: [
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Next.js', icon: 'devicon-nextjs-original' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
      ],
    },
    {
      title: 'TOOLS',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'VS Code', icon: 'devicon-vscode-plain' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      ],
    },
  ];

  // Contact data
  const contactData = {
    email: 'rasyid.kusnady@example.com',
    social: {
      github: 'https://github.com/rasyidkusnady',
      linkedin: 'https://linkedin.com/in/rasyidkusnady',
      twitter: 'https://twitter.com/rasyidkusnady',
    },
  };

  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Navbar />
      <DotGrid />
      <Hero
        name={heroData.name}
        roles={heroData.roles}
        bio={heroData.bio}
        profileImage={heroData.profileImage}
      />
      <About stats={aboutStats} />
      <Projects />
      <Experience />
      <Skills categories={skillsData} />
      <Contact email={contactData.email} social={contactData.social} />
      <Footer />
    </main>
  );
}
