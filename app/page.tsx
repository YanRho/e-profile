"use client";
import Image from "next/image";
import Typical from "react-typical";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 aspect-square mx-auto md:mx-0 mb-6 md:mb-0 animate-float">
          <Image
            src="/images/avatar.jpg"
            alt="Bryan Bergenholtz"
            className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"
            width={400}
            height={400}
          />
        </div>

        {/* Intro Text */}
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl font-bold text-black dark:text-white leading-tight">
            Hey, I'm Bryan! 👋
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I am graduating from California State University - Long Beach with a
            degree in Computer Science. I am a passionate software engineer with
            a strong interest in web and app development, data science, and
            analytics.
          </p>
          <a
            href="/BergenholtzResume.pdf"
            className="mt-6 inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-200 transition duration-300"
          >
            📄 Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
