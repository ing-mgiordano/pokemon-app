'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pokémon App</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}