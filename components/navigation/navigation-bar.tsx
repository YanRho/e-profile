"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "https://www.linkedin.com/in/bryanbergenholtz/", label: "CONTACT" },
];

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-16 bg-white dark:bg-[#0c0a09] text-black dark:text-white flex items-center justify-between px-4 sm:px-6 md:px-12 shadow-md z-50">
      
      {/* Left side: Burger on mobile */}
      <div className="flex items-center sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Center Nav links for medium+ */}
      <nav
        className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        aria-label="Main Navigation"
      >
        <ul className="flex gap-6 md:gap-12 text-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-black dark:text-white uppercase tracking-widest text-xs sm:text-sm font-bold relative inline-block px-2 sm:px-4 py-2 group transition-colors duration-200"
              >
                {label}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right side: Dark mode toggle */}
      <div className="ml-auto flex items-center">
        <ModeToggle />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-[#0c0a09]/80 border-t border-gray-200 dark:border-gray-700 shadow-md overflow-hidden transform transition-all duration-300 ease-in-out origin-top ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } sm:hidden`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-black dark:text-white uppercase tracking-widest text-base font-bold relative group transition-all duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 px-6 py-2 rounded-md w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300 group-hover:left-0"></span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
