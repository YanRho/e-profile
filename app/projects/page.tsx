"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Project Data
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
  {
    id: "real-3",
    title: "Lung Cancer Prediction Data Analysis",
    description:
      "A data analysis project using Python and Pandas to predict lung cancer risk based on various health metrics. Lung Cancer Dataset from Kaggle.",
    image: "/images/lungcancerbar.png",
    demoUrl: null,
    githubUrl: "https://github.com/YanRho/hw1-lung-cancer-prediction",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
];

// Random color pool
const bubbleColors = [
  "#60A5FA", // blue
  "#F472B6", // pink
  "#34D399", // green
  "#FBBF24", // yellow
  "#A78BFA", // purple
  "#F87171", // red
  "#4ADE80", // emerald
];

export default function Projects() {
  const [selected, setSelected] = useState<string | null>(null);

  const getRandomMotion = () => {
    const xMovement = Math.random() * 30 - 15;
    const yMovement = Math.random() * 30 - 15;
    const rotateAmount = Math.random() * 20 - 10;
    const scaleAmount = 1 + Math.random() * 0.05;
    const duration = 5 + Math.random() * 3;

    return {
      animate: {
        x: [0, xMovement, 0],
        y: [0, yMovement, 0],
        rotate: [0, rotateAmount, 0],
        scale: [1, scaleAmount, 1],
      },
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration,
        ease: "easeInOut",
      },
    };
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900 px-6 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          My Projects
        </h1>

        <div className="relative mx-auto max-w-5xl">
          {/* Expanded View */}
          <AnimatePresence>
            {selected && (
              <>
                {/* Background Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/30 backdrop-blur-md z-[40]"
                  onClick={() => setSelected(null)}
                />

                {/* Project Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 z-[50]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const project = realProjects.find((p) => p.id === selected);
                    if (!project) return null;

                    return (
                      <>
                        {/* Image and Close Button */}
                        <div className="flex items-start justify-center gap-6 mb-8 flex-wrap">
                          <Image
                            src={project.image}
                            alt={project.title}
                            className="rounded-lg object-contain"
                            width={500}
                            height={500}
                          />

                          {/* Close Button */}
                          <button
                            onClick={() => setSelected(null)}
                            className="text-4xl font-bold text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
                          >
                            ×
                          </button>
                        </div>

                        {/* Project Title */}
                        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                          {project.title}
                        </h2>

                        {/* Project Description */}
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-2xl">
                          {project.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-black text-white rounded-full text-xs dark:bg-white dark:text-black"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-700"
                            >
                              🎯 Live
                            </a>
                          )}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-300"
                          >
                            🔗 GitHub
                          </a>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Bubble List */}
          <motion.div
            layout
            className="flex flex-wrap justify-center gap-6 relative z-[30]"
          >
            {realProjects.map((project, index) => {
              const motionSettings = getRandomMotion();
              const color = bubbleColors[index % bubbleColors.length];

              return (
                <motion.div
                  key={project.id}
                  onClick={() => setSelected(project.id)}
                  className="w-36 h-36 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out"
                  style={{ backgroundColor: color }}
                  animate={motionSettings.animate}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Optional: Could add initials here */}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
