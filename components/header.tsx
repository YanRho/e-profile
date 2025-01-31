"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FileText, Download } from "lucide-react";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#resume", label: "RESUME", dropdown: true }, // Marking it for a dropdown
  { href: "https://www.linkedin.com/in/bryanbergenholtz/", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="w-full h-screen bg-black flex items-center justify-center">
      <nav>
        <ul className="flex justify-center space-x-16 m-0 p-0 text-center">
          {navLinks.map(({ href, label, dropdown }) =>
            dropdown ? (
              <li key={href} className="py-3 relative">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-white uppercase tracking-widest text-sm font-bold relative inline-block px-5 py-3 group">
                    {label}
                    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out group-hover:left-0"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black border border-gray-700 text-white mt-2">
                    <DropdownMenuItem asChild>
                      <Link
                        href="/resume"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800"
                      >
                        <FileText size={16} /> View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a
                        href="/bryan_resume.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800"
                      >
                        <Download size={16} /> Download
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ) : (
              <li key={href} className="py-3 relative">
                <Link
                  href={href}
                  className="text-white uppercase tracking-widest text-sm font-bold relative inline-block px-5 py-3 group"
                >
                  {label}
                  <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out group-hover:left-0"></span>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
