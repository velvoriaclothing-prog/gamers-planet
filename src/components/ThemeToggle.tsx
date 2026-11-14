import React from 'react';

interface ThemeToggleProps {
  variant?: 'navbar' | 'compact' | 'footer';
}

// Color/theme option removed from top so users cannot change it
export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  return null;
};
