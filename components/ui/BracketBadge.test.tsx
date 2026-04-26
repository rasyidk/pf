/**
 * Manual verification tests for BracketBadge component
 * 
 * To verify this component works correctly:
 * 1. Import BracketBadge in a page component
 * 2. Test with different props:
 *    - <BracketBadge text="react" />
 *    - <BracketBadge text="typescript" icon="devicon-typescript-plain" />
 *    - <BracketBadge text="nextjs" hoverable />
 *    - <BracketBadge text="tailwind" icon="devicon-tailwindcss-plain" hoverable />
 * 
 * Expected behavior:
 * - Text should be uppercase and wrapped in brackets: [REACT]
 * - Icon should appear before text when provided
 * - Hoverable badges should change to purple bg and black text on hover
 * - Non-hoverable badges should not have hover effects
 */

import BracketBadge from './BracketBadge';

// Type-only import for verification
export type { };

// Example usage for manual testing:
export const BracketBadgeExamples = () => {
  return (
    <div className="space-y-4 p-8">
      <div>
        <h3 className="text-white mb-2">Basic Badge:</h3>
        <BracketBadge text="react" />
      </div>
      
      <div>
        <h3 className="text-white mb-2">Badge with Icon:</h3>
        <BracketBadge text="typescript" icon="devicon-typescript-plain" />
      </div>
      
      <div>
        <h3 className="text-white mb-2">Hoverable Badge:</h3>
        <BracketBadge text="nextjs" hoverable />
      </div>
      
      <div>
        <h3 className="text-white mb-2">Hoverable Badge with Icon:</h3>
        <BracketBadge text="tailwind" icon="devicon-tailwindcss-plain" hoverable />
      </div>
    </div>
  );
};
