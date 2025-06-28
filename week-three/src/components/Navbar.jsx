import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './useTheme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4 py-3 flex justify-between items-center transition-colors duration-300">
      <div className="flex gap-6">
        <Link to="/" className="font-bold hover:underline transition">Home</Link>
        <Link to="/about" className="font-bold hover:underline transition">About</Link>
        <Link to="/contact" className="font-bold hover:underline transition">Contact</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:scale-105"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}