import React from 'react';

// Define a TypeScript interface for the component props
interface CheckMarkProps {
  size?: string;  // Allows passing a single size prop to control both width and height
}

const CheckMark: React.FC<CheckMarkProps> = ({ size = '50px' }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25L20 40L45 5" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

export default CheckMark;
