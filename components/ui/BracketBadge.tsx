interface BracketBadgeProps {
  text: string;
  icon?: string; // optional devicon class
  hoverable?: boolean; // default: false
}

export default function BracketBadge({ text, icon, hoverable = false }: BracketBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-sm ${
        hoverable
          ? 'transition-colors duration-200 hover:bg-accent-primary hover:text-white px-3 py-2 cursor-pointer'
          : ''
      }`}
    >
      {icon && <i className={`${icon} text-base`} />}
      <span>[{text.toUpperCase()}]</span>
    </span>
  );
}
