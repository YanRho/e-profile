"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => { setIsVisible(true); }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 text-center bg-[#09090b] text-white ">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } max-w-4xl mx-auto`}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] bg-clip-text text-transparent">
            Bryan Rhoelle
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
          {/* Save for role title*/}
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring code, design, and everything else.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button 
            size="lg" 
            className="bg-[#442450] text-white hover:bg-[#5b2f6f] transition-transform hover:scale-105"
            onClick={() => scrollToSection('projects')}
        >
            View My Work
        </Button>
        <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-900 transition-transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
        >
            Get In Touch
        </Button>
        </div>



        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
        <a
            href="https://github.com/Yanrho"
            className="text-white hover:text-[#442450] transition-transform hover:scale-110"
            target="_blank" rel="noopener noreferrer"
        >
            <Github size={24} />
        </a>
        <a
            href="https://linkedin.com/in/bryanbergenholtz"
            className="text-white hover:text-[#442450] transition-transform hover:scale-110"
            target="_blank" rel="noopener noreferrer"
        >
            <Linkedin size={24} />
        </a>
        <a
            href="mailto:brbergenholtz.19@gmail.com"
            className="text-white hover:text-[#442450] transition-transform hover:scale-110"
        >
            <Mail size={24} />
        </a>
        </div>



        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce smooth-transition hover:text-[#07a7a7]"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
