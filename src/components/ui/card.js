// src/components/ui/card.js
import './card.css';

export function Card({ children, className }) {
    return (
      <div className={`bg-white shadow-md rounded-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return (
      <div className={`p-4 ${className}`}>
        {children}
      </div>
    );
  }
  