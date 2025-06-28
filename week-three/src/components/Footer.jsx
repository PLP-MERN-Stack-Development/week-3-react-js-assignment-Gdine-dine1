import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-4 px-2 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300 transition-colors duration-300 mt-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <Link to='/' className="hover:underline transition">Home</Link>
        <Link to='/about' className="hover:underline transition">About</Link>
        <Link to='/contact' className="hover:underline transition">Contact</Link>
      </div>
      <div className="mt-2 text-xs">&copy; {new Date().getFullYear()} Your App Name. All rights reserved.</div>
    </footer>
  );
}
