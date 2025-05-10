"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const realProjects = [
  {
    id: "real-1",
    title: "SRB Construction & Engineering Website",
    description:
      "A fully responsive business website built with Next.js and Tailwind CSS, showcasing SRB's services and portfolio.",
    image: "/images/srbce.png",
    demoUrl: "https://srbce.vercel.app/",
    githubUrl: "https://github.com/YanRho/srbce-landing-page",
    techStack: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "real-2",
    title: "DROCSID Communication Platform Web App",
    description:
      "A real-time communication platform MVP for Senior Project Class. It allows users to send and receive messages in real-time, similar to Discord.",
    image: "/images/drocsid.png",
    demoUrl: null,
    githubUrl: "https://github.com/YanRho/8-bitbois",
    techStack: ["Next.js", "Neon DB", "Tailwind"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900 px-6 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          My Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {realProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project.id)}
              className="relative cursor-pointer group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-60 group-hover:opacity-80 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Expanded View */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 max-w-5xl w-full flex flex-col md:flex-row items-center gap-6"
              >
                {(() => {
                  const project = realProjects.find((p) => p.id === selected);
                  if (!project) return null;

                  return (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                      <div className="text-black dark:text-white">
                        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-black text-white rounded-full text-xs dark:bg-white dark:text-black"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-700"
                            >
                              🎯 Live
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                          >
                            🔗 GitHub
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
