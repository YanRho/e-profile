"use client";

import Header from "@/components/navbar";

export default function ResumePage() {
  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Navbar at the top */}
      <Header />
      {/* Resume Viewer Below */}
      <div className="flex items-center justify-center">
        <iframe
          src="/bryan_resume.pdf"
          className="w-full max-w-4xl h-[80vh] border-none"
        />
      </div>
    </div>
  );
}
