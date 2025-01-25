import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl flex justify-between items-center p-4 bg-white/80 backdrop-blur-md rounded-lg shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-blue-600"></h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8 text-gray-700">
        </ul>
      </nav>
    </header>
  );
}
