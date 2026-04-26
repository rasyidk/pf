import Projects from './Projects';

/**
 * Projects Component Demo
 * 
 * This demo showcases the Projects component with pagination functionality.
 * The component loads projects from data/projects.json and displays them
 * in a responsive grid with pagination controls.
 */
export default function ProjectsDemo() {
  return (
    <div className="min-h-screen bg-black">
      <Projects />
    </div>
  );
}
