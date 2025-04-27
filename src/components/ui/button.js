// src/components/ui/button.js
export function Button({ children, className, ...props }) {
    return (
      <button
        className={`py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  