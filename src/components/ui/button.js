/// src/components/ui/button.js

import './button.css';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`button ${className || ''}`.trim()}  // Dynamically add class names like 'correct' or 'incorrect'
      {...props}
    >
      {children}
    </button>
  );
}
