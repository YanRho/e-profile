"use client"; 

import Image from "next/image";

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900">
          
          {/* Main Content */}
          <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-7xl mx-auto">
              {/* Profile Image */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 aspect-square mx-auto md:mx-0 mb-6 md:mb-0 animate-float">
                <Image
                  src="/images/avatar.jpg"
                  alt="Bryan Bergenholtz"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 dark:border-neutral-800 shadow-lg"
                  width={400}
                  height={400}
                  priority
                />
              </div>
    
              {/* Intro Text */}
              <div className="text-center md:text-left max-w-2xl px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                  Hey, I&apos;m Bryan! 👋
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  I recently graduated from California State University - Long Beach with a B.S. in Computer Science. 
                  I&apos; m a passionate software engineer with a strong interest in full-stack web/app development — specializing in frontend,
                   while actively exploring backend development and data analytics. Nice to meet you
                </p>
                <a
                  href="/resumes/BergenholtzResume.pdf"
                  download
                  className="mt-6 inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition duration-300"
                >
                  📄 Download My Resume
                </a>
              </div>
            </div>
          </main>
    
          {/* Footer */}
          <footer className="w-full text-center text-xs text-gray-500 dark:text-gray-400 py-4">
            © {new Date().getFullYear()} Bryan Bergenholtz. All rights reserved.
          </footer>
        </div>
      );
}