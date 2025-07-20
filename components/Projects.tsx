"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SRB Construction & Engineering Services Website",
      description:
        "A fully responsive website for SRB Construction & Engineering Services, a construction company in the Philippines. The site showcases their services, projects, and company information. with the use of modern web technologies. It features a clean, professional design with smooth animations and transitions, ensuring an engaging user experience.",
      images: [
        "/images/srbce/image.png",
        "/images/srbce/image-1.png",
        "/images/srbce/image-2.png",
        "/images/srbce/image-3.png",
        "/images/srbce/image-4.png",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS"
      ],
      liveUrl: "https://srbce.vercel.app/",
      githubUrl: "https://github.com/YanRho/srbce-landing-page"
    },
    {
      title: "Capstone Project: RealTime Messaging & Collaboration Platform",
      description:
        "A full-stack application enabling real-time messaging, designed for seamless communication and collaboration. Built with modern technologies, and offers features like text, voice, and video channels, real-time message handling, and customization options, all wrapped in a responsive intuitive design.",
      images: [
        "/images/drocsid/RealTimeDirectMessaging.webp",
        "/images/drocsid/VideoAudioChat.webp",
        "/images/drocsid/Emojis.webp"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Socket.IO",
        "Tailwind CSS"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/YanRho/8-bitbois"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across the
            full development stack and various industry domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
              loop: true,
              slides: { perView: 1 }
            });

            const [currentSlide, setCurrentSlide] = useState(0);

            useEffect(() => {
              if (!slider.current) return;
              slider.current.on("slideChanged", () => {
                setCurrentSlide(slider.current?.track.details.rel ?? 0);
              });
            }, [slider]);

            return (
              <Card
                key={index}
                className="overflow-hidden bg-[#111] border border-[#222] hover:border-[#442450] transition duration-300 group"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Carousel with nav buttons */}
                  <div
                    className={`relative overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div ref={sliderRef} className="keen-slider h-64 lg:h-full">
                      {project.images.map((src, i) => (
                        <div key={i} className="keen-slider__slide">
                          <img
                            src={src}
                            alt={`${project.title} Slide ${i + 1}`}
                            className="object-contain h-full w-full mx-auto"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Nav buttons */}
                    <button
                      onClick={() => slider.current?.prev()}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#0b0b0bcc] text-white p-2 rounded-full hover:bg-[#07a7a7] transition z-10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => slider.current?.next()}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#0b0b0bcc] text-white p-2 rounded-full hover:bg-[#07a7a7] transition z-10"
                    >
                      <ChevronRight size={20} />
                    </button>

                    <div className="absolute inset-0 bg-gradient-to-r from-[#442450] to-[#07a7a7] opacity-0 group-hover:opacity-10 transition duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-[#07a7a71a] text-[#07a7a7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.liveUrl ? (
                        <Button
                          asChild
                          className="bg-gradient-to-r from-[#442450] to-[#07a7a7] text-white hover:opacity-90 transition"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button
                          disabled
                          className="bg-gray-700 text-white cursor-not-allowed opacity-60"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Unavailable
                        </Button>
                      )}

                      <Button
                        asChild
                        className="bg-black text-white hover:bg-[#1a1a1a] border border-[#333] transition"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
