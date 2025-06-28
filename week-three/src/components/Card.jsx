import React from 'react';

export default function Card({ title, content, className = "" }) {
  return (
    <div className={`w-full max-w-lg mx-auto p-4 md:p-8 rounded shadow bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      <div>{content}</div>
    </div>
  );
}
