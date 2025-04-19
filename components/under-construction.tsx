import { Download } from "lucide-react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h1 className="text-4xl font-bold mb-4">🚧 Page Under Construction</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mb-6">
        The page is currently being built. Please check back later!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/BergenholtzResume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md font-semibold hover:opacity-90 transition"
        >
          <Download size={18} />
          Download Resume
        </a>

        <Link
          href="https://www.linkedin.com/in/bryanbergenholtz/"
          target="_blank"
          className="inline-flex px-5 py-3 border border-black dark:border-white rounded-md font-semibold hover:opacity-90 transition"
        >
          Visit LinkedIn
        </Link>
      </div>
    </div>
  );
}
