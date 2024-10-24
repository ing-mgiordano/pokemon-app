'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}