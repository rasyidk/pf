// TypeScript interfaces for portfolio website

export interface Project {
  id: string;              // e.g., "01"
  title: string;           // e.g., "StoreKit"
  description: string;     // Brief project description
  image: string;           // Path relative to /public, e.g., "/projects/storekit.jpg"
  tags: string[];          // Technology tags, e.g., ["React", "TypeScript"]
  github: string;          // GitHub repository URL
  demo: string;            // Live demo URL
  category: string;        // Project category: "AI/ML", "Website", "Mobile App"
  contributions?: string[]; // Optional: Key contributions/achievements
}

export interface ProjectsData {
  projects: Project[];
}

export interface ExperienceEntry {
  company: string;         // e.g., "Ruangguru"
  role: string;            // e.g., "Frontend Developer"
  period: string;          // e.g., "2022 — PRESENT"
  responsibilities: string[]; // Bullet points
}

export interface Skill {
  name: string;            // e.g., "React"
  icon: string;            // devicon class, e.g., "devicon-react-original"
}

export interface SkillCategory {
  title: string;           // e.g., "FRONTEND"
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface TerminalLine {
  prefix: string;  // Status indicator like [INIT], [SCAN], [DONE]
  text: string;    // The text content to animate
  delay?: number;  // Optional delay in ms before starting this line
}
