"use client";

import Link from "next/link";
import { FileText, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "#resume", label: "RESUME", dropdown: true },
  { href: "https://www.linkedin.com/in/bryanbergenholtz/", label: "CONTACT" },
];

export default function NavigationBar() {
  return (
    <header className="w-full h-16 bg-white dark:bg-[#0c0a09] text-black dark:text-white flex items-center justify-between px-6 shadow-md">
      <nav className="flex-1">
        <ul className="flex justify-center space-x-16 text-center">
          {navLinks.map(({ href, label, dropdown }) =>
            dropdown ? (
              <li key={href} className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-black dark:text-white uppercase tracking-widest text-sm font-bold relative inline-block px-5 py-3 group focus:outline-none">
                    {label}
                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all group-hover:left-0"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-[#0c0a09] border border-gray-300 dark:border-gray-700 mt-2">
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resume"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:white"
                      >
                        <FileText size={16} /> View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="/bryan_resume.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-white"
                      >
                        <Download size={16} /> Download
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  className="text-black dark:text-white uppercase tracking-widest text-sm font-bold relative inline-block px-5 py-3 group"
                >
                  {label}
                  <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all group-hover:left-0"></span>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Dark Mode Toggle */}
      <ModeToggle />
    </header>
  );
}
