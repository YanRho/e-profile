import Link from "next/link";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#resume", label: "RESUME" },
  { href: "https://www.linkedin.com/in/bryanbergenholtz/", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="w-full h-screen bg-black flex items-center justify-center">
      <nav>
        <ul className="flex justify-center space-x-16 m-0 p-0 text-center">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="py-3 relative">
              <Link
                href={href}
                className="text-white uppercase tracking-widest text-sm font-bold relative inline-block px-5 py-3 group"
              >
                {label}
                {/* Underline effect on hover */}
                <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-in-out group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
